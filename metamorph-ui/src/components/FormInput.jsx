import React from 'react';
import '../CSS/inputbox.css';

const FormInput = (props) => {

//   const {onchange, id, ...inputProps}
    
  return (
    <div className='input-box'>
      <label className="details">{props.input_name}</label>
      <input name={props.name} type={props.input_type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

export default FormInput
