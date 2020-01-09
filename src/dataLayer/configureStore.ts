import { createStore, applyMiddleware, Store, Action } from 'redux';
import createSagaMiddleware, { END, Task } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './RootState';
import { rootSaga } from './sagas';
import { rootReducer, initialState } from './reducers';
import { AllAction } from './actions';

export type SagaStore<S, A extends Action> = Store<S, A> & {
    rootTask: Task | null;
    runSaga: () => Task;
    stopSaga: () => END;
};

/**
 * Создаёт инстанс стора, конфигурирует
 * и добавляет необходимые миддлварки.
 */
export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    let enhancer;

    if (IS_DEV_ENV) {
        enhancer = composeWithDevTools(
            applyMiddleware(...middleware),
        );
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    // https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState, enhancer);

    const enchantedStore: SagaStore<RootState, AllAction> = {
        ...store,
        rootTask: null,
        // https://github.com/redux-saga/redux-saga/issues/255
        runSaga: () => enchantedStore.rootTask = sagaMiddleware.run(rootSaga),
        stopSaga: () => enchantedStore.dispatch(END),
    };

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (IS_DEV_ENV && module.hot) {
        module.hot.accept('./reducers', () =>
            // eslint-disable-next-line global-require
            enchantedStore.replaceReducer(require('./reducers/index').default),
        );
    }

    return enchantedStore;
}
