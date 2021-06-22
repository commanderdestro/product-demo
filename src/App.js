import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './containers/Input';
import Plans from './containers/Plans';
import ShapeBuilder from './containers/ShapeBuilder';
import './style/style.css';

class App extends Component {
  pageSelect(page) {
    switch (page) {
      case 'input':
        return <Input />;
      case 'plans':
        return <Plans />;
      case 'shapeBuilder':
        return <ShapeBuilder />;
      default:
        return <Input />;
    }
  }

  render() {
    return <div className='app'>{this.pageSelect(this.props.page)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    page: state.page,
  };
};

export default connect(mapStateToProps)(App);
