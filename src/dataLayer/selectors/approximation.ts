import { createSelector } from 'reselect';
import { RootState, PlotPoints } from '../RootState';
import { LinearFunction } from '../Geometry';
import { selectPoints } from './points';

/**
 * Получение коэффициентов функции линейной регрессии методом наименьших квадратов
 */
export const selectParameterValues = createSelector<RootState, PlotPoints, LinearFunction>(
    selectPoints,
    points => {

        const length = points.length;
        let sumX = 0;
        let sumY = 0;

        // Сумма произведений
        let theSumOfMulti = 0;

        // Сумма квадратов
        let theSumOfSquares = 0;

        for (let i = 0; i < length; i++) {
            const { x, y } = points[i];
            sumX += x;
            sumY += y;
            theSumOfMulti += x * y;
            theSumOfSquares += x * x;
        }

        const a = (length * theSumOfMulti - sumX * sumY) / (length * theSumOfSquares - sumX * sumX);
        const b = (sumY - a * sumX) / length;

        return { a, b }
    },
);