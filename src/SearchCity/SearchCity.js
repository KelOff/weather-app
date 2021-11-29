import React from 'react';
import Buuton from './Button/Button.js';
import './SearchCity.css';

const SearchCity = (props) => {
  const inputValue = React.createRef();
  return (
    <div>
      <div>
        <div className="title">
          <h1>Weather in your city</h1>
        </div>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Type the city"
          ref={ inputValue }
          onKeyPress={ props.handleKeyPress }
        />
        <Buuton onClick={ props.onClick } input={ inputValue }>
          Search
        </Buuton>
      </div>
    </div>
  );
};

export default SearchCity;
