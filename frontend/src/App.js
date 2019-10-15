import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends  Component {

  state = {};
  componentDidMount() {
    setInterval(this.message, 250);
  }
  message = () => {
    fetch('/api/message')
        .then(response => response.text())
        .then(meessage => {
          this.setState(({meessage:meessage}));
        });
  };

  render() {
    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.state.meessage}</h1>
          </header>
            <p className="App--intro">
              To get Started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>

    )
  }

}


/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/



export default App;
