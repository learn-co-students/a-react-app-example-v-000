import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class Person extends Component {
  render() {
    return (
         <p>Hi, my name is {this.props.name}. I am {this.props.age} years old and from .</p>
    );
  }
}

Person.defaultProps = {
  hometown: 'XYZ'
}
export default Person;
