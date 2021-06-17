import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import '../style.css';

const AddressResults = props => {
  return (
    <div id='addressSearchContainer' className='searchContainer'>
      {console.log(props.addyResults)}
      {props.addyResults !== [] && !props.addyResults.error &&
        props.addyResults.map((premise, i) => {
          if (premise.addressLn1.toLowerCase().includes(props.searchAddy.toLowerCase())) {
            return (
              <div
                key={i}
                className='searchResult'
                onClick={() => {
                  props.onAddyClick(premise);
                }}
              >
                {premise.addressLn1}, {premise.city}, {premise.zipcode}
              </div>
            );
          }
          return false;
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddyInput: search => dispatch(actions.search_addy(search)),
  };
};

const mapStateToProps = state => {
  return {
    addyResults: state.addyResults,
    searchAddy: state.searchAddy,
    premise: state.premise,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressResults);
