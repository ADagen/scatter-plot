import { all } from 'redux-saga/effects';
import { rootPlotSaga } from './plotSagas';

export const rootSaga = function* root() {
    yield all([
        rootPlotSaga,
    ]);
};