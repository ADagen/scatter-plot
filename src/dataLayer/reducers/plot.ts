import { DataState } from 'core/DataState';
import { actionTypes, plotActions, PlotAction } from '../actions';
import { RootState } from '../RootState';

export const initialState: RootState = {
    dataState: DataState.UNKNOWN,
};

/**
 * Стейт слишком маленький, привычные combine reducers не нужны
 */
export const rootReducer = (state: RootState = initialState, action: PlotAction) => plotActions.match(action, {

    [actionTypes.PLOT_LOAD_START]: () => ({
        plotData: null,
        dataState: DataState.LOADING,
    }),

    [actionTypes.PLOT_LOAD_SUCCESS]: payload => ({
        plotData: payload,
        dataState: DataState.READY,
    }),

    [actionTypes.PLOT_LOAD_ERROR]: () => ({
        plotData: null,
        dataState: DataState.ERROR,
    }),

    default: () => state,

});