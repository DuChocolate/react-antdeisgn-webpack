import * as actionTypes from '../constants/myCount';
const initialState = {
    num: 0,
    name: ''
};
export default function MyCount(state = initialState, action){
    switch (action.type){
        case actionTypes.ADD:
            return {
                ...state,
                name: action.name,
                num: state.num + 1
            };
        case actionTypes.DES:
            return {
                ...state,
                name: action.name,
                num: state.num - 1
            };
        default:
            return state;
    }
}