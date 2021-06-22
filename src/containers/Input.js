import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import '../style/style.css';
import Form from '../components/Form';
import axios from 'axios';
import logo from '../images/forge.png';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = async () => {
    this.props.toggleLoading();
    const { data } = await axios({
      method: 'post',
      url: 'https://t27pk2iw56.execute-api.us-west-2.amazonaws.com/test/getsmartmeterdata',
      data: {
        esiid: this.props.esiid,
        email: 'garrett.hester@gmail.com',
        meterNo: document.getElementById('meter').value,
        currentRepPuctNo: this.props.PUCTRORNumber,
        reqKey: 'DunbarRocks',
      },
    });
    this.props.setSMT(data.body.replace('\\', ''));
    this.props.toggleLoading();
    this.props.changePage('plans');
  };

  handleRepInput = search => {
    document.getElementById('repSearchContainer').style.visibility = 'visible';
    if (search.length > 1) {
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
      if (addressjson.error) {
        this.props.onAddyInput([], search);
      } else {
        this.props.onAddyInput(addressjson, search);
      }
    }
  };

  handleAddressClick = premise => {
    document.getElementById(
      'serviceAddress'
    ).value = `${premise.addressLn1}, ${premise.city}, ${premise.state} ${premise.zipCode}`;
    document.getElementById('addressSearchContainer').style.visibility = 'hidden';
    this.props.onAddyClick(premise);
  };

  render() {
    return this.props.loading ? (
      <div className='container'>
        <div className='spinner-grow text-primary' role='status'/>
        <div className='spinner-grow text-primary' role='status'/>
        <div className='spinner-grow text-primary' role='status'/>
      </div>
    ) : (
      <div className='container'>
        <Form
          onClick={formData => this.handleSubmit(formData)}
          onChange={search => this.handleRepInput(search)}
          onAddressChange={search => this.handleAddressInput(search)}
          onAddyClick={(addy, esiid) => this.handleAddressClick(addy, esiid)}
          searchRep={this.props.searchRep}
          onRepClick={(rorNum, repName) => this.handleRepClick(rorNum, repName)}
          repName={this.props.repName}
          onSubmit={() => this.handleSubmit()}
        />
        <img src={logo} className='logo' alt='Energy Forge Logo' />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRepInput: search => dispatch(actions.search_rep(search)),
    onRepClick: (rorNum, repName) => dispatch(actions.set_rorNum(rorNum, repName)),
    onAddyInput: (premise, search) => dispatch(actions.search_addy(premise, search)),
    onAddyClick: premise => dispatch(actions.set_addy(premise)),
    toggleLoading: () => dispatch(actions.toggle_loading()),
    changePage: page => dispatch(actions.change_page(page)),
    setSMT: smt => dispatch(actions.set_smt(smt)),
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
