import React, { Component } from 'react'; // imported from node_modules
import moment from 'moment'; // imported from node_modules
import ExampleComponent from './ExampleComponent' // imported from current directory
import TestComponent from './TestComponent' // imported from current directory

// Add your own code within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
      { /* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
        Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of of JSX.
        </p>
        <ExampleComponent /> { /* executes the code in this component */}
        <TestComponent /> { /* executes the code in this component */}
      </div>
    );
  }
}

export default App; // allow other files to import this file
