import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import '../style.css';
import Form from '../components/Form';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = formData => {};

  handleRepInput = search => {
    document.getElementById('repSearchContainer').style.visibility = 'visible';
    if (search.length > 2) {
      this.props.onRepInput(search);
    } else {
      this.props.onRepInput('asdf');
    }
  };

  handleRepClick = (rorNum, repName) => {
    document.getElementById('rep').value = repName;
    document.getElementById('repSearchContainer').style.visibility = 'hidden';
    this.props.onRepClick(rorNum, repName);
  };

  handleAddressInput = async search => {
    document.getElementById('addressSearchContainer').style.visibility = 'visible';
    if (search !== null && search.length > 2) {
      const { data } = await axios({
        method: 'post',
        url: 'https://t27pk2iw56.execute-api.us-west-2.amazonaws.com/test/getaddressinfo',
        data: {
          addressStart: search,
          zipCode: '77042',
          reqKey: 'DunbarRocks',
        },
      });
      const addressjson = JSON.parse(data.body.replace('\\', ''));
      this.props.onAddyInput(addressjson, search);
    }
  };

  handleAddressClick = (addy, esiid) => {
    document.getElementById('addy').value = addy;
    document.getElementById('addressSearchContainer').style.visibility = 'hidden';
    this.props.onAddyClick(addy, esiid);
  };

  render() {
    return (
      <div>
        <Form
          onClick={formData => this.handleSubmit(formData)}
          onChange={search => this.handleRepInput(search)}
          onAddressChange={search => this.handleAddressInput(search)}
          onRepClick={(rorNum, repName) => this.handleRepClick(rorNum, repName)}
          onAddyClick={(addy, esiid) => this.handleAddressClick(addy, esiid)}
          searchRep={this.props.searchRep}
          repName={this.props.repName}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRepInput: search => dispatch(actions.search_rep(search)),
    onRepClick: (rorNum, repName) => dispatch(actions.set_rorNum(rorNum, repName)),
    onAddyInput: (addyResults, searchAddy) =>
      dispatch(actions.search_addy(addyResults, searchAddy)),
    onAddyClick: (addy, esiid) => dispatch(actions.set_addy(addy, esiid)),
  };
};

const mapStateToProps = state => {
  return {
    searchRep: state.searchRep,
    PUCTRORNumber: state.PUCTRORNumber,
    repName: state.repName,
    esiid: state.esiid,
    searchAddy: state.searchAddy,
    addyResults: state.addyResults,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
