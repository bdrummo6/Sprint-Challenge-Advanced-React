import React, { Component } from 'react';

import './styles.scss';

import Players from './component/Players';
import Header from './component/Header';

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
    const appStyles = {
       width: '100%',
       display: 'flex',
       flexDirection: 'column',
       textAlign: 'center'
    };

    return (
       <div className='App' style={appStyles}>
          <Header />
          <Players players={this.state.players} />
       </div>
    );
  }

}

export default App;
