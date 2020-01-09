import { unionize, ofType, UnionOf } from 'unionize';
import { actionTypes } from './actionTypes';
import { APIResponse } from '../APIResponse';

export const plotActions = unionize({
    [actionTypes.PLOT_LOAD_START]: {},
    [actionTypes.PLOT_LOAD_SUCCESS]: ofType<APIResponse | null>(),
    [actionTypes.PLOT_LOAD_ERROR]: {},
}, {
    tag: 'type',
    value: 'payload',
});

export type PlotAction = UnionOf<typeof plotActions>;
