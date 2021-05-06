import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/accounts')
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
