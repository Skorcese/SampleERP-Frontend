// import _ from 'lodash'
import {
    MAT_FETCH_ALL,
    MAT_FETCH,
    // MAT_CREATE,
    // MAT_DELETE,
    // MAT_EDIT,
} from '../actions/types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MAT_FETCH_ALL:
            return action.payload
        
        case MAT_FETCH:
            return [...state, action.payload]

        // case MAT_CREATE:
        //     return { ...state, [action.payload.id]: action.payload }

        // case MAT_DELETE:
        //     return _.omit(state, action.payload)

        // case MAT_EDIT:
        //     return { ...state, [action.payload.id]: action.payload }

        default:
            return state
    }
}