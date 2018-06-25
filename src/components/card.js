import React, {Component} from 'react';
import Input from './input';
import Content from './content';
const InitialState = {
  color: "",
  pluralNoun: "",
  adjective1: "",
  celeb1: "",
  adjective2: "",
  noun1: "",
  number1: "",
  number2: "",
  noun2: "",
  adjective3: "",
  celeb2: "",
  celeb3: "",
  adjective4: "",
  noun3: "",
  celeb4: "",
  adjective5: "",
  contentVisible: false
}
class Card extends Component {
  constructor(){
    super();
    this.state = InitialState;
  }
  handleInputChange = (event) => {
    let target = event.target;
    console.log(target.name);
    this.setState({
      [target.name]: target.value
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    if(!this.state.contentVisible){
      this.setState({contentVisible: true})
    } else {
      this.setState(InitialState);
    }
  }
  render(){
    const inputData = [
      {title: 'Color', color: this.state.color, name: 'color'},
      {title: 'PluralNoun', color: this.state.pluralNoun, name: 'pluralNoun'},
      {title: 'Adjective 1', color: this.state.adjective1, name: 'adjective1'},
      {title: 'Celebrity 1', color: this.state.celeb1, name: 'celeb1'},

      {title: 'Adjective 2', color: this.state.adjective2, name: 'adjective2'},
      {title: 'Noun 1', color: this.state.noun1, name: 'noun1'},
      {title: 'Number 1', color: this.state.number1, name: 'number1'},
      {title: 'Number 2', color: this.state.number2, name: 'number2'},

      {title: 'Noun 2', color: this.state.noun2, name: 'noun2'},
      {title: 'Adjective 3', color: this.state.adjective3, name: 'adjective3'},
      {title: 'Celebrity 2', color: this.state.celeb2, name: 'celeb2'},
      {title: 'Celebrity 3', color: this.state.celeb3, name: 'celeb3'},

      {title: 'Adjective 4', color: this.state.adjective4, name: 'adjective4'},
      {title: 'Noun 3', color: this.state.noun3, name: 'noun3'},
      {title: 'Celebrity 4', color: this.state.celeb4, name: 'celeb4'},
      {title: 'Adjective 5', color: this.state.adjective5, name: 'adjective5'}
    ];
    return(
      <form onSubmit={this.handleFormSubmit} className="card">
        <div className="card-inputs">
          { inputData.map((data,index) => Input(data,this.handleInputChange,index))}
        </div>
        <center><button type="submit" className={`card-${!this.state.contentVisible ? 'generate' : 'clear'}`}>{!this.state.contentVisible ? 'Generate Madlibs' : 'Clear Madlibs'}</button></center>
        { this.state.contentVisible ? <Content data={this.state}/> : <div className="card-content"><p styles={{textAlign: 'center'}}>Click the button to generate a mad lib.</p></div>}
      </form>
    );
  }
}
export default Card;
