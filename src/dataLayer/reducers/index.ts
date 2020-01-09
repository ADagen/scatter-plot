import { actionTypes, plotActions, PlotAction } from '../actions';
import { RootState } from '../RootState';

export const initialState: RootState = {
    ready: false,
    loading: false,
    error: false,
};

/**
 * Стейт слишком маленький, привычные combine reducers не нужны
 */
export const rootReducer = (state: RootState = initialState, action: PlotAction) =>

    plotActions.match(action, {

        [actionTypes.PLOT_LOAD_START]: () => ({
            plotData: null,
            ready: false,
            loading: true,
            error: false,
        }),

        [actionTypes.PLOT_LOAD_SUCCESS]: payload => ({
            plotData: payload,
            ready: true,
            loading: false,
            error: false,
        }),

        [actionTypes.PLOT_LOAD_ERROR]: () => ({
            plotData: null,
            ready: false,
            loading: false,
            error: true,
        }),

        default: () => state,

    });
