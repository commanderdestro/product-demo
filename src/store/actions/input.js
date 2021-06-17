import * as actionTypes from './actionTypes';

export const search_rep = search => {
    return{
        type: actionTypes.SEARCH_REP,
        searchRep: search
    }
};

export const search_addy = (results, search) => {
    return{
        type: actionTypes.SEARCH_ADDY,
        searchAddy: search,
        addyResults: results
    }
};

export const set_addy = premise => {
    return{
        type: actionTypes.SET_ADDY,
        premise: premise,
    }
};

export const set_rorNum = (rorNum, repName) => {
    return{
        type: actionTypes.SET_RORNUM,
        PUCTRORNumber: rorNum,
        repName: repName
    }
};