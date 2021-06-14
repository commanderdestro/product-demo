import * as actionTypes from './actionTypes';

export const search_rep = search => {
    return{
        type: actionTypes.SEARCH_REP,
        searchRep: search
    }
};

export const search_addy = (search, results) => {
    return{
        type: actionTypes.SEARCH_ADDY,
        searchAddy: search,
        addyResults: results
    }
};

export const set_addy = (addy, esiid) => {
    return{
        type: actionTypes.SET_ADDY,
        address: addy,
        esiid: esiid
    }
};

export const set_rorNum = (rorNum, repName) => {
    return{
        type: actionTypes.SET_RORNUM,
        PUCTRORNumber: rorNum,
        repName: repName
    }
};