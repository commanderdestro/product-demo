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
};

const search_rep = (state, action) => {
    return updateObject(state, {
        search: action.search
    });
}

const set_rorNum = (state, action) => {
    return updateObject(state, {
        PUCTRORNumber: action.PUCTRORNumber,
        repName: action.repName
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_REP: return search_rep(state, action);
        case actionTypes.SET_RORNUM: return set_rorNum(state, action);
        default: return state;
    }
};

export default reducer;