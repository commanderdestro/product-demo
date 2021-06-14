import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import '../style.css';

const AddressResults = props => {
  return (
    <div id='addressSearchContainer' className='searchContainer'>
      {console.log(props.addyResults)}
      {props.addyResults !== null &&
        props.addyResults.map((addy, i) => {
          if (addy.addressLn1.toLowerCase().includes(props.searchAddy.toLowerCase())) {
            return (
              <div
                key={i}
                className='searchResult'
                onClick={() => {
                  props.onAddyClick(i);
                }}
              >
                {addy.addressLn1}
              </div>
            );
          }
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddyClick: addy => dispatch(actions.set_addy(addy)),
    onAddyInput: search => dispatch(actions.search_addy(search)),
  };
};

const mapStateToProps = state => {
  return {
    addyResults: state.addyResults,
    searchAddy: state.searchAddy,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressResults);
