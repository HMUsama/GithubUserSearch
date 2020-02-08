import { combineReducers } from 'redux'
import fetchDataReduces from './fetchDataReducer'

const rootReducers  = combineReducers({

    fetchDataReduces :      fetchDataReduces,
});

export default rootReducers;

