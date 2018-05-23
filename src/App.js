import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// class Text extends React.Component {
//   render() {
//     return <h1>Hello, <span style={props.color}>{props.value}</span>, my dude</h1>;
//   }
// }
function Text(props) {
  let textStyle = {
    color: props.color,
  }
  return <h1>Hello,<span style={textStyle}> {props.value}</span> my dude</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <Text color="blue" value ="AJ"/>
      </div>
    );
  }
}

export default App;
