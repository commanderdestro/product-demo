import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as actions from '../store/actions/index';

import './plans.css';

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleMinimize = () => {
    $('.console').toggleClass('minimize');
  };

  render() {
    return (
      <div>
        <div id='console' className='console transform'>
          <div className='minToggle' onClick={() => this.handleMinimize()}>
            -
          </div>
          <div className='consoleTitle'>Console</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRepInput: search => dispatch(actions.search_rep(search)),
    onRepClick: (rorNum, repName) => dispatch(actions.set_rorNum(rorNum, repName)),
  };
};

const mapStateToProps = state => {
  return {
    searchRep: state.searchRep,
    PUCTRORNumber: state.PUCTRORNumber,
    repName: state.repName,
    esiid: state.esiid,
    searchAddy: state.searchAddy,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
