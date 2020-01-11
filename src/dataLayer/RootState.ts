import { Point } from './Geometry';
import { DataState } from './DataState';

export type PlotPoints = ReadonlyArray<Point>;

export type PlotData = {
    readonly points: PlotPoints;
    readonly title: string;
    readonly xTitle?: string;
    readonly yTitle?: string;
}

export type RootState = {
    readonly plotData?: PlotData | null;
    readonly dataState: DataState;
}