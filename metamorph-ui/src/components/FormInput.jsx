import React from 'react';
import { useState } from 'react';
import '../CSS/inputbox.css';

const FormInput = (props) => {

//   const {onchange, id, ...inputProps}
const [focused, setFocused] = useState(false);

const handleFocus = (e) =>{
  setFocused(true)
}
    
  return (
    <div className='input-box'>
      <label className="details">{props.input_name}</label>
      <input name={props.name} type={props.input_type} placeholder={props.placeholder} onChange={props.onChange} /*focused={focused.toString()}*//>
      {/* <span className='error-message-span'>{props.errorMessage}</span> */}
    </div>
  )
}

export default FormInput
