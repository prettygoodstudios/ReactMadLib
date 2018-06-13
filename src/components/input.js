import React, {Component} from 'react';
const Imput = (label,value,change,name) => {
  return(
    <div className="input">
      {label}
      <input value={value} onChange={change} name={name}/>
    </div>
  );
}
export default Imput;
