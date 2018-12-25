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

  changeName = (event, index)=> {
      console.log('here', event.target.value, index)
      const peopleCopy = [...this.state.people];
      const personCopy = {...this.state.people[index]}

      personCopy.name = event.target.value;

      peopleCopy[index] = personCopy;

      this.setState({people: peopleCopy});
    };

  increaseAge = index => {
      const peopleCopy = [...this.state.people];
      const personCopy = {...this.state.people[index]}

      personCopy.age++;

      peopleCopy[index] = personCopy;

      this.setState({people: peopleCopy});
  };

  render() {
    return (
      <div className="App">
        <Person
            name ={this.state.people[0].name}
            age={this.state.people[0].age}
            onClick = { () => this.increaseAge(0)}
            onChange={event=>this.changeName(event,0)}
        >
          <i>{this.state.people[0].hobby}</i>
        </Person>
        <Person
            name ={this.state.people[1].name}
            age={this.state.people[1].age}
            onClick = { ()=> this.increaseAge(1)}
            onChange={event => this.changeName(event,1)}
        >
          <i>{this.state.people[1].hobby}</i>
        </Person>
        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default App;
