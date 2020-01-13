import { createSelector } from 'reselect';
import { RootState } from '../RootState';

export const selectPoints = createSelector(
    (state: RootState) => state.plotData,
    plotData => plotData?.points || [],
);

export const selectPointsX = createSelector(
    selectPoints,
    points => points.map(({ x }) => x),
);

export const selectPointsY = createSelector(
    selectPoints,
    points => points.map(({ y }) => y),
);
