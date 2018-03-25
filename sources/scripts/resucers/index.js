import {
    createStore,
    combineReducers,
} from 'redux';
import footer from './footer';
import about from './about';
import header from './header';

let reducers = combineReducers({
    about,
    footer,
    header
});
let store = createStore(reducers);

export default store;