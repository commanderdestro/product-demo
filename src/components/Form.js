import React from 'react';
import { connect } from 'react-redux';
import '../style/style.css';
import SearchResult from './SearchResult';
import AddressResults from './AddressResults';

const Form = props => {
  return (
    <div>
      <div className='form'>
        <div className='title'>Howdy</div>
           <div className='subtitle'>Let's find the plan for you!</div>
        <div className='input-container ic1'>
          <input
            id='serviceAddress'
            className='input'
            type='text'
            placeholder=' '
            onChange={event => {
              const { value: addySearch } = event.target;
              props.onAddressChange(addySearch);
            }}
          />
          <div className='cut'></div>
          <label htmlFor='serviceAddress' className='placeholder'>
            Service Address
          </label>
          <AddressResults id='addressResults' className='searchResult' onAddyClick={props.onAddyClick}/>
        </div>
        <div className='input-container ic2'>
          <input
            id='rep'
            className='input'
            type='text'
            placeholder=' '
            onChange={event => {
              const { value: search } = event.target;
              props.onChange(search);
            }}
          />
          <div className='cut cut-short'></div>
          <label htmlFor='rep' className='placeholder'>
            Your Current Electricity Provider
          </label>
          <SearchResult
            id='searchResult'
            className='searchResult'
            onRepClick={props.onRepClick}
            search={props.searchRep}
          />
        </div>
        <div className='input-container ic2'>
          <input
            id='meter'
            className='input'
            type='text'
            placeholder=' '
          />
          <div className='cut cut-short'></div>
          <label htmlFor='meter' className='placeholder'>
            Service Address Meter Number
          </label>
        </div>
        <div className='legal'>
          <input type='checkbox' className='checkbox' />I agree to some super-thorough legal
          agreement.
        </div>
        <button type='text' className='submit' onClick={() => props.onSubmit()}>
          submit
        </button>
      </div>
      <div className='subtitle'>63057849</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchRep: state.searchRep,
    searchAddy: state.searchAddy,
    PUCTRORNumber: state.PUCTRORNumber,
    repName: state.repName,
    esiid: state.esiid,
  };
};

export default connect(mapStateToProps)(Form);
