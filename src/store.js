import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './components/Auth/redux/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
});

// REDUX DEVTOOLS
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
// REDUX DEVTOOLS END

export const store = createStore(rootReducer, enhancer);