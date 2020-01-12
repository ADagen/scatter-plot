import { all } from 'redux-saga/effects';
import * as plot from './plotSagas';

export const rootSaga = function* root() {
    yield all([
        plot.startSaga,
    ]);
};