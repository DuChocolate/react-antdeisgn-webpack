import * as actionTypes from '../constants/myCount';

export const addCount = name => {
    return {
        type: actionTypes.ADD,
        name
    };
};
export const desCount = name => {
    return {
        type: actionTypes.DES,
        name
    };
};