export type Point = {
    x: number;
    y: number;
}

export type Line = [Point, Point];

/**
 * Параметры a и b для линейной функции y = ax + b
 */
export type LinearFunction = {
    a: number;
    b: number;
}
