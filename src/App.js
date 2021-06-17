import React, { Component } from 'react';
import Input from './containers/Input';
import Plans from './containers/Plans';
import Shape from './containers/Shape';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {false ? <Input /> : <Shape />}
      </div>
    );
  }
}

export default App;
