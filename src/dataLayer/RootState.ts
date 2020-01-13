import { Point } from 'core/Geometry';
import { DataState } from 'core/DataState';

export type Dataset = ReadonlyArray<Point>;

export type PlotData = {
    readonly points: Dataset;
    readonly title: string;
    readonly xTitle?: string;
    readonly yTitle?: string;
}

export type RootState = {
    readonly plotData?: PlotData | null;
    readonly dataState: DataState;
}