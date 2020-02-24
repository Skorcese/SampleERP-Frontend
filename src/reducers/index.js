import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import matReducer from './matReducer'
import matUnitReducer from './matUnitReducer'
import matTypeReducer from './matTypeReducer'
import buReducer from './buReducer'

export default combineReducers({
    form: formReducer,
    materials: matReducer,
    materials_unit: matUnitReducer,
    materials_type: matTypeReducer,
    businessUnits: buReducer
})