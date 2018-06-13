import React, {Component} from 'react';
import Input from './input';
class Card extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="card">
        {Input('Hello World')}
        {Input('Hey There')}
      </div>
    );
  }
}
export default Card;
