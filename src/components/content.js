import React, {Component} from "react";
class Content extends Component {
  constructor(){
    super();
  }
  render(){
    console.log(Object.values(this.props.data));
    return(
      <div className="card-content">
        <p>
          {Object.values(this.props.data).map((out, index) => {
            return((index < Object.values(this.props.data).length - 1) ? <span key={index}>{` ${index+1}. `}Hello world and some more text before this {out}.</span> : <span key={index}></span>);
          })}
        </p>
      </div>
    );
  }
}
export default Content;
