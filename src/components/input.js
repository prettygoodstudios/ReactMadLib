import React, {Component} from 'react';
const Imput = ({title,color,name},change,key) => {
  return(
    <div className="input" key={key}>
      <label className="input-number">{`${key+1}`}</label>
      <input value={color} onChange={change} name={name}/>
      <label className="input-title">{title}</label>
    </div>
  );
}
export default Imput;
