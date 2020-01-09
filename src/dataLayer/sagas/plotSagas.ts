import { call, put } from 'redux-saga/effects';
import { takeRestartable } from './takeRestartable';
import { actionTypes, plotActions } from '../actions';
import { loadPlotData } from '../api';

function* handlePlotLoadStart() {
    const plotData = yield call(loadPlotData);
    yield put(plotActions.PLOT_LOAD_SUCCESS(plotData));
}

export const rootPlotSaga = takeRestartable(actionTypes.PLOT_LOAD_START, handlePlotLoadStart);
