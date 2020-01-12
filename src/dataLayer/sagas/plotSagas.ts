import { call, put } from 'redux-saga/effects';
import { takeRestartable } from './takeRestartable';
import { actionTypes, plotActions, DatasetQueryPayload } from '../actions';
import { dataset1 } from '../../core/predefinedDatasets';
import { loadPlotData } from '../api';

/**
 * Сценарий загрузки данных при старте приложения.
 */
function* handlePlotLoadStart({ payload }: { payload: DatasetQueryPayload }) {
    const url = payload.url || dataset1;
    try {
        const plotData = yield call(loadPlotData, url);
        yield put(plotActions.PLOT_LOAD_SUCCESS(plotData));
    } catch {
        yield put(plotActions.PLOT_LOAD_ERROR());
    }
}

export const startSaga = takeRestartable(actionTypes.PLOT_LOAD_START, handlePlotLoadStart);
