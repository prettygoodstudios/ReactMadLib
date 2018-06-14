import React, {Component} from 'react';
const Imput = ({title,color,name},change,key) => {
  return(
    <div className="input" key={key}>
      {title}
      <input value={color} onChange={change} name={name}/>
    </div>
  );
}
export default Imput;
