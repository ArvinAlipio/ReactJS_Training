import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'123', name: 'Aj', age: 20 },
      { id:'124', name: 'Ian', age: 24 },
      { id:'125', name: 'Joanna', age: 24 },
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex]; should not mutate directly
    // const person = Object.assign({}, this.state.persons[personIndex]); another possible approach
    //better approach:
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); //gets merged with the outer state, the old state is not touched
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px ',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                    name={person.name} 
                    age={person.age}
                    key={person.id} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working well!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        
        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `This works`));
  }
}

export default App;
