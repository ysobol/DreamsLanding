import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import footer from './footer';
import about from './about';
import header from './header';

const delayMiddleware = store => next => action => {
    next(action);
}

let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);

let reducers = combineReducers({
    about,
    footer,
    header
});
let store = createStoreWithMiddleware(reducers);

export default store;