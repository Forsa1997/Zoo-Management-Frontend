import { applyMiddleware, combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import messageReducer from './reducers/messageReducer';
import enclosureReducer from './reducers/enclosureReducer';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    enclosureReducer,
    messageReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));


export default store;
