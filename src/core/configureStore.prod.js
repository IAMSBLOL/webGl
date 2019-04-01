// import { createStore, applyMiddleware } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, thunk, routerMiddleware(history)];
const configureStore = (preloadedState = {}) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
                middleware,
            ),
        ),
    )
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore();
