// import _ from 'lodash'
import { MAT_TYPE_FETCH_ALL } from '../actions/types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MAT_TYPE_FETCH_ALL:
            return action.payload

        default:
            return state
    }
}