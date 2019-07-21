import React, { Component } from 'react';
import moment from 'moment';
import Person from './ExampleComponent';
import CatGIF from './CatGIF';

// Add your code own within the return statement
class App extends Component {
  render() {

    return (
        <div className="App">
          <header className="App-header">
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </header>
          <div>
          <Person name="Crusoe" age="32"/>
          <Person name="Tom" age="26" hometown="Bronx"/>
          <Person name="Ella" age="25" hometown="Minneapolis"/>
          <Person name="Leia" age="23" hometown="Savannah"/>
          <CatGIF />
          </div>

        </div>
    );
  }
}

export default App;
