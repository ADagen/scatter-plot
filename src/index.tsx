import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { configureStore } from './dataLayer/configureStore';
import { plotActions } from './dataLayer/actions';
import './index.css';

const store = configureStore();
store.runSaga();

const root = (
    <Provider store={store}>
        <App />
    </Provider>
);

/**
 * Точка входа в приложение, запускает рендер компонентов
 * и стартует первую сагу (которая загружает дефолтный сет точек).
 * В приложении с роутером вместо саги будет стартовать роутер.
 */
function main(): void {
    ReactDOM.render(root, document.getElementsByClassName('root')[0]);
    // start first saga here
    store.dispatch(plotActions.PLOT_LOAD_START());
}

const readyStates = ['complete', 'loaded', 'interactive'];
if (readyStates.includes(document.readyState) && document.body) {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main, false);
}