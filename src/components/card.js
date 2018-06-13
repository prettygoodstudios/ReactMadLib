import React, {Component} from 'react';
import Input from './input';
class Card extends Component {
  constructor(){
    super();
    this.state = {
      color: "",
      pluralNoun: ""
    };
  }
  handleInputChange = (event) => {
    let target = event.target;
    console.log(target.name);
    this.setState({
      [target.name]: target.value
    })
  }
  render(){
    return(
      <div className="card">
        <h1>Color: {this.state.color}</h1>
        <h1>PluralNoun: {this.state.pluralNoun}</h1>
        {Input('Color', this.state.color, this.handleInputChange, 'color')}
        {Input('PluralNoun', this.state.pluralNoun, this.handInputChange, 'pluralNoun')}
      </div>
    );
  }
}
export default Card;
