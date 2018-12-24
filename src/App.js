import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person/Person";


class App extends Component {
  state = {
    people: [
      {name:'Dmitriy', age:29, hobby:'Hobby : Video games' },
      {name:'John', age:30, hobby:'Likes drinks alone'}
    ]
  };

  changeName = ()=> {
      const peopleCopy = [...this.state.people];
      const personCopy = {...this.state.people[1]}

      personCopy.name = 'John Doe';

      peopleCopy[1] = personCopy;

      this.setState({people: peopleCopy});
    };

  increaseAge = ()=> {
    const people = this.state.people.map(person => ({
        ...person,
        age: person.age +1
    }));
    this.setState( {people});
  };

  render() {
    return (
      <div className="App">
        <Person
            name ={this.state.people[0].name}
            age={this.state.people[0].age}
        >
          <i>{this.state.people[0].hobby}</i>
        </Person>
        <Person
            name ={this.state.people[1].name}
            age={this.state.people[1].age}
        >
          <i>{this.state.people[1].hobby}</i>
        </Person>
        <button onClick={this.changeName}>Change name</button>
        <button onClick={this.increaseAge}>IncreaseAge</button>
      </div>
    );
  }
}

export default App;
