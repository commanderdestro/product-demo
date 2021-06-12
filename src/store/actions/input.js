import * as actionTypes from './actionTypes';
import axios from '../../axios-proxy';

export const acnt_fetch = accountName => {
    return dispatch => {
        dispatch(acnt_start());
        axios.get('get-characters?accountName='+accountName)
            .then(res => {
                dispatch(
                    acnt_success({...res.data}, accountName)
                );
            })
            .catch(err => {
                dispatch(acnt_fail(err));
            });
    }
};