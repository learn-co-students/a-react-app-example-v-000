// App.js is pulling in specific content from these two packages! 
// They are being imported from the node_modules folder.
import React, { Component } from 'react';
import moment from 'moment';
// App.js is importing files in the same directory
// // // This is the syntax to import something that is the default export of another file:
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement
// all of the visible content of our app is contained within this App class.
class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
          {/*{moment().format('MMMM Do YYYY, hh:mm:ss a')}*/}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}
// allowing other files to import things from the App.js file
// denotes that our App class is the main thing we want to export from our App.js file.
export default App;
