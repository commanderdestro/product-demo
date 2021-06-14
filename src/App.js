import React, { Component } from 'react';
import Input from './containers/Input';
import Plans from './containers/Plans';
import logo from './images/forge.png';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {true ? <Input /> : <Plans />}
        <img src={logo} className='logo' alt='Energy Forge Logo' />
      </div>
    );
  }
}

export default App;
