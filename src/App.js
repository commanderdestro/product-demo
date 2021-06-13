import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./containers/Input";
import Plans from "./containers/Plans";
import logo from './images/forge.png';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        {false ? <Input /> : <Plans />}
        <img src={logo} className="logo" alt="Energy Forge Logo"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
  };
}

const mapStateToProps = (state) => {
  return {
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);