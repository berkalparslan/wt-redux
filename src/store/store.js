import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index.js';

export const myStore = createStore(reducer, composeWithDevTools());
