import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Aj', age: 20 },
      { name: 'Ian', age: 24 },
      { name: 'Joanna', age: 24 },
    ],
    otherState: 'Some other state'
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Jude';
    this.setState({
      persons: [
        { name: 'Jude', age: 20 },
        { name: 'Ian', age: 24 },
        { name: newName, age: 23 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jude', age: 20 },
        { name: event.target.value, age: 24 },
        { name: 'Joanna', age: 23 },
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px ',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working well!!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Joanna gerl')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Joanna!')}
          changed={this.nameChangedHandler}>My hobbies: Cinematography</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `This works`));
  }
}

export default App;
