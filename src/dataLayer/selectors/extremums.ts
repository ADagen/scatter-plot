import { createSelector, createStructuredSelector } from 'reselect';
import { plotViewSize } from '../../core/constants';
import { RootState, PlotPoints } from '../RootState';
import { selectPointsX, selectPointsY } from './points';

export type Extremums = {
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
}

/**
 * Отношение экранных координат к мировым по осям
 */
export type Scales = {
    scaleX: number,
    scaleY: number,
}

// Math.min & Math.max будут болеть при большом количестве точек;
// в таком случае в функциях getMinOf и getMaxOf надо будет перейти на `Array.prototype.reduce`.
const getMinOf = (points: Array<number>): number => Math.min(...points);
const getMaxOf = (points: Array<number>): number => Math.max(...points);

// Такие селекторы не годятся для SSR с несколькими инстансами стора в рамках одного приложения,
// (как и не подходят для поддержки нескольких компонентов в рамках одного инстанса стора в браузере)
// так как глубина мемоизации - всего лишь единица. Для обхода этого надо использовать `createSelectorCreator`
// с передачей внешней функции мемоизации, например `lodash.memoize`.
export const selectMinimaX = createSelector(selectPointsX, getMinOf);
export const selectMaximaX = createSelector(selectPointsX, getMaxOf);
export const selectMinimaY = createSelector(selectPointsY, getMinOf);
export const selectMaximaY = createSelector(selectPointsY, getMaxOf);

export const selectExtremums = createStructuredSelector<RootState, Extremums>({
    minX: selectMinimaX,
    maxX: selectMaximaX,
    minY: selectMinimaY,
    maxY: selectMaximaY,
});

export const selectScales = createSelector<RootState, Extremums, Scales>(
    selectExtremums,
    ({ minX, maxX, minY, maxY }) => ({
        scaleX: plotViewSize / (maxX - minX),
        scaleY: plotViewSize / (maxY - minY),
    }),
);
