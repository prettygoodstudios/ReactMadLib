import React, {Component} from "react";
class Content extends Component {
  constructor(){
    super();
  }
  render(){
    console.log(Object.values(this.props.data));
    return(
      <div>
        <p>
          {Object.values(this.props.data).map((out, index) => {
            return((index < Object.values(this.props.data).length - 1) ? <span key={index}>Hello world and some more text before this {out}.</span> : <span></span>);
          })}
        </p>
      </div>
    );
  }
}
export default Content;
