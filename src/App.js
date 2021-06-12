import React, { Component } from "react";
import Input from "./containers/Input";
import Plans from "./containers/Plans";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        {true ? <Input /> : <Plans />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onPageLoad: () => dispatch(actions.page_load())
  };
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.account.loggedIn
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);