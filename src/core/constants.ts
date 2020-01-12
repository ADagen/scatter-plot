import { Point } from '../dataLayer/Geometry';

/**
 * Линейные размеры графика (не включая поля с подписями) в экранных координатах.
 * Экранными координатами тут и далее именуются не координаты страницы, а координаты относительно svg.
 */
export const plotViewSize = 1000;

/**
 * Отступы от графика в экранных координатах
 */
export const plotLegendPaddingSize = 100;

/**
 * Полный размер диаграммы с легендой и подписями, в экранных координатах
 */
export const screenViewSize = plotViewSize + plotLegendPaddingSize * 2;

/**
 * Точка начала графика в экранных координатах
 */
export const startPoint: Readonly<Point> = {
    x: plotLegendPaddingSize,
    y: screenViewSize - plotLegendPaddingSize,
};

/**
 * Количество делений (тиков) на осях
 */
export const ticksCountX = 10;
export const ticksCountY = 10;

/**
 * Отступы между рисками графика в экранных координатах.
 */
export const tickOffsetX = plotViewSize / ticksCountX;
export const tickOffsetY = plotViewSize / ticksCountY;

/**
 * Готовые массивы с отступами для итерации в компонентах,
 * позволит не пересоздавать массив при перерендерах (и визуально упростить компонент).
 * Магическая +1 для учёта стартового деления.
 */
export const ticksOffsetsX = new Array(ticksCountX + 1)
    .fill(true)
    .map((_, index) => index * tickOffsetX);

export const ticksOffsetsY = new Array(ticksCountY + 1)
    .fill(true)
    .map((_, index) => index * tickOffsetY);

/**
 * Размер точек диаграммы
 */
export const valuePointSize = 20;
