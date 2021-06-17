import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/util';

const initialState = {
    loading: false,
    PUCTRORNumber: null,
    address: null,
    email: "garrett.hester@gmail.com",
    meter: 63057849,
    smartMeterConsent: "Y",
    repName: null,
    searchAddy: null,
    addyResults: [],
    premise: {},
};

const search_rep = (state, action) => {
    return updateObject(state, {
        searchRep: action.searchRep
    });
}

const set_rorNum = (state, action) => {
    return updateObject(state, {
        PUCTRORNumber: action.PUCTRORNumber,
        repName: action.repName
    });
};

const set_addy = (state, action) => {
    return updateObject(state, {
        premise: state.premise,
    });
};

const search_addy = (state, action) => {
    return updateObject(state, {
        searchAddy: action.searchAddy,
        addyResults: action.addyResults
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_REP: return search_rep(state, action);
        case actionTypes.SET_RORNUM: return set_rorNum(state, action);
        case actionTypes.SEARCH_ADDY: return search_addy(state, action);
        case actionTypes.SET_ADDY: return set_addy(state, action);
        default: return state;
    }
};

export default reducer;