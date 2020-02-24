import {
    // BU_CREATE,
    // BU_DELETE,
    // BU_EDIT,
    // BU_FETCH,
    BU_FETCH_ALL
} from '../actions/types'

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BU_FETCH_ALL:
            return action.payload;

        default:
            return state;
    }
}