import React, { Component } from 'react'
import './App.css'
import SearchCity from './SearchCity/SearchCity.js'
import WeatherInMyCity from './OutputWeather/WeatherInMyCity/WeatherInMyCity'
import SearchedWeather from './OutputWeather/SearchedWeather/SearchedWeather'

class App extends Component {
  state = {
    myLocation: {},
    myLocationWeather: {},
    searchingCity: '',
    searchedWoeid: '',
    weatherByName: [],
    loaded: false,
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude.toFixed(2)
      const lng = position.coords.longitude.toFixed(2)
      const link = `https://meta-weather.vercel.app/api/location/search/?lattlong=${ lat },${ lng }`
      fetch(link)
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            myLocation: result[ 0 ],
          })
          const locationLink = `https://meta-weather.vercel.app/api/location/${ this.state.myLocation.woeid }/`
          fetch(locationLink)
            .then((response) => response.json())
            .then((result) => {
              this.setState({
                myLocationWeather: result,
                loaded: true,
              })
            })
        })
    })
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchCityHandler(event.target.value)
    }
  }
  searchCityHandler = (text) => {
    this.setState({
      searchingCity: text,
    })
    fetch(`https://meta-weather.vercel.app/api/location/search/?query=${ text }`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          searchedWoeid: result,
          weatherByName: '',
        })
        this.state.searchedWoeid.forEach((item) => {
          fetch(`https://meta-weather.vercel.app/api/location/${ item.woeid }/`)
            .then((response) => response.json())
            .then((result) => {
              this.setState({
                weatherByName: [ ...this.state.weatherByName, { result } ],
                loaded: true,
              })
            })
        })
      })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">Weather App</header>

        <SearchCity
          handleKeyPress={ this.handleKeyPress }
          onClick={ this.searchCityHandler }
          state={ this.state }
        />
        <>
          {this.state.weatherByName.length === 0 &&
          this.state.myLocationWeather.title ? (
            <WeatherInMyCity data={ this.state.myLocationWeather } />
          ) : null }
          {this.state.weatherByName.length  ? (
            <SearchedWeather data={ this.state.weatherByName } />
          ) : null }
        </>
       
      </div>
    )
  }
}

export default App
