import React from 'react';
import './Button.css';

const Buuton = (props) => (
  <button
      className="button"
      onClick={ () => props.onClick(props.input.current.value) }
    >
    SEARCH
  </button>
)

export default Buuton;
