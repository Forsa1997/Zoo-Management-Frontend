import { applyMiddleware, combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import messageReducer from './reducers/messageReducer';
import enclosureReducer from './reducers/enclosureReducer';
import animalReducer from './reducers/animalReducer';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import staffReducer from './reducers/staffReducer';

const rootReducer = combineReducers({
    enclosureReducer,
    animalReducer,
    messageReducer,
    staffReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));


export default store;
