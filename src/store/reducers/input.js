import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    acnt: null,
    acntSel: false,
    acntLoad: false,

    char: null,
    charSel: false,
    charLoad: false,
    allChars: null,

    bandit: null, 
    banditSel: false,

    error: null, 

    loggedIn: false
};

const acnt_start = (state) => {
    return updateObject(state, {
        acntSel: true,
        error: null
    });
};

export default reducer;