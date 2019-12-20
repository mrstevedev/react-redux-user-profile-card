import React, { Component } from "react";
import CardPhoto from './components/CardPhoto';
import CardAboutTop from './components/CardAboutTop';
import CardAboutBottom from './components/CardAboutBottom';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount Ran');
  }
  render() {
    return (
      <div className="container">
          <CardPhoto />
          <CardAboutTop />
          <CardAboutBottom />
      </div>
    );
  }
}

export default App;
