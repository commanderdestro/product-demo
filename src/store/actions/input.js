import * as actionTypes from './actionTypes';

export const search_rep = search => {
    return{
        type: actionTypes.SEARCH_REP,
        search: search
    }
};

export const set_rorNum = (rorNum, repName) => {
    return{
        type: actionTypes.SET_RORNUM,
        PUCTRORNumber: rorNum,
        repName: repName
    }
};