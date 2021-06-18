import React, { Component } from 'react';
import Input from './containers/Input';
import Plans from './containers/Plans';
import ShapeBuilder from './containers/ShapeBuilder';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {false ? <Input /> : <ShapeBuilder />}
      </div>
    );
  }
}

export default App;
