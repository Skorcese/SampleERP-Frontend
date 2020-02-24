import api from '../apis/api'
import history from '../history'
import {
    MAT_FETCH_ALL,
    MAT_FETCH,
    MAT_CREATE,
    MAT_DELETE,
    MAT_EDIT,
    MAT_UNIT_FETCH_ALL,
    MAT_TYPE_FETCH_ALL,
    BU_FETCH_ALL,
    BU_FETCH,
    BU_CREATE,
    BU_DELETE,
    BU_EDIT
} from './types'

// ------- MAT -------

export const matFetchAll = () => async dispatch => {
    const response = await api.get('/api/material')

    dispatch({
        type: MAT_FETCH_ALL,
        payload: response.data
    })
}

export const matFetch = (id) => async dispatch => {
    const response = await api.get(`/api/material/${id}`)

    dispatch({
        type: MAT_FETCH,
        payload: response.data
    })
}

export const matCreate = (formValues) => async dispatch => {
    // TODO userauth
    const response = await api.post('/api/material', { ...formValues })

    dispatch({
        type: MAT_CREATE,
        payload: response.data
    })

    history.push('/twr')
}

export const matDelete = (id) => async dispatch => {
    await api.delete(`/api/material/${id}`)

    dispatch({
        type: MAT_DELETE,
        payload: id
    })
}

export const matEdit = (id, formValues) => async dispatch => {
    const response = await api.patch(`/api/material/${id}`, formValues)

    dispatch({
        type: MAT_EDIT,
        payload: response.data
    })
}

// ------- MAT_UNIT -------

export const matUnitFetchAll = () => async dispatch => {
    const response = await api.get('/api/material/unit')

    dispatch({
        type: MAT_UNIT_FETCH_ALL,
        payload: response.data
    })
}

// ------- MAT_TYPE -------

export const matTypeFetchAll = () => async dispatch => {
    const response = await api.get('/api/material/type')

    dispatch({
        type: MAT_TYPE_FETCH_ALL,
        payload: response.data
    })
}

// ------- BU -------

export const buFetchAll = () => async dispatch => {
    const response = await api.get('/api/businessunit')

    dispatch({
        type: BU_FETCH_ALL,
        payload: response.data
    })
}

export const buFetch = (id) => async dispatch => {
    const response = await api.get(`/api/businessunit/${id}`)

    dispatch({
        type: BU_FETCH,
        payload: response.data
    })
}

export const buCreate = (formValues) => async dispatch => {
    // TODO userauth
    const response = await api.post('/api/businessunit', { ...formValues })

    dispatch({
        type: BU_CREATE,
        payload: response.data
    })

    history.push('/knt')
}

export const buDelete = (id) => async dispatch => {
    await api.delete(`/api/businessunit/${id}`)

    dispatch({
        type: BU_DELETE,
        payload: id
    })
}

export const buEdit = (id, formValues) => async dispatch => {
    const response = await api.patch(`/api/businessunit/${id}`, formValues)

    dispatch({
        type: BU_EDIT,
        payload: response.data
    })
}