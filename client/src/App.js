import React, { Component } from 'react';

import './App.css';

import Players from './component/Players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    console.log('Component Mounted!');

    fetch('http://localhost:5000/api/players')
       .then(results => results.json())
       .then(data => {
         console.log('players: ', data);
         this.setState({ players: data });
       })
       .then(err => { console.log('Error: ', err) });
  }

  render() {
    return (
       <div className='App'>
         <Players players={this.state.players} />
       </div>
    );
  }


}

export default App;
