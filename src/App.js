import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent"
import CharComponent from "./CharComponent/CharComponent"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      enteredTextLength: 0,
      char: ""
    }
  }

  onChangeText(text) {
    this.setState({
      enteredTextLength: text.length,
      char: text
    })
  }

  handleCharClick(id) {
    const char = this.state.char.split("");
    char.splice(id, 1);
    const updatedText = char.join("");
    this.setState({ char: updatedText })
  }

  render() {
    const charComponents = this.state.char.split("").map((char, key) => {
      return (
        <CharComponent char={char} key={key} onClick={() => this.handleCharClick(key)}/>
      )
    })
    
    return (
      <div className="App">
        <input onChange={(event) => this.onChangeText(event.target.value)} value={this.state.char}/>
        <ValidationComponent length={this.state.char.length} />
        <p>{this.state.enteredTextLength}</p>
        {charComponents}
      </div>
    );
  }
}

export default App;
