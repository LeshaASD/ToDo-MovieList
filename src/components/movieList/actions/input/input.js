import React from 'react';
import './input.css';

const Input = props => {
   return (
       <input type="email" text="form-control" className='input'
       placeholder="Enter your favorite movie" onChange={props.text}/>
   )
};

export default Input;