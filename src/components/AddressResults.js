import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const AddressResults = props => {
  return (
    <div id='addressSearchContainer' className='searchContainer'>
      {
        // Object.keys(reps).map((repName, i) => {
        //     if(typeof props.searchAddy !== 'undefined' || typeof props.searchAddy !== 'undefined'){
        //         if(repName.toLowerCase().includes(props.searchAddy.toLowerCase())){
        //             return(
        //                     <div key={i} value={reps[repName]} className="searchResult" onClick={() => {props.onRepClick(reps[repName], repName)}}>
        //                         {repName}
        //                     </div>
        //             );
        //         }
        //     }
        //     return false;
        // })
      }
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
    addresses: state.addresses,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressResults);
