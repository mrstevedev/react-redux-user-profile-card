import React, { Component } from "react";
import CardPhoto from './components/CardPhoto';
import CardAboutTop from './components/CardAboutTop';
import CardAboutBottom from './components/CardAboutBottom';
import { store } from './store';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount Ran');
  }
  componentDidCatch() {
      console.log('error');
  }
  render() {
    return (
      <div className="container">
          <CardPhoto />
          <CardAboutTop 
            aboutOne={ store.getState().aboutOne } 
            aboutTwo={ store.getState().aboutTwo } 
         />
          <CardAboutBottom
            name={ store.getState().name }
            location={ store.getState().location }
          />
      </div>
    );
  }
}

export default App;
