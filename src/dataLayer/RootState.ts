import { Point } from './Point';

export type PlotData = {
    readonly points: ReadonlyArray<Point>;
    readonly title: string;
    readonly xTitle?: string;
    readonly yTitle?: string;
}

export type RootState = {
    readonly plotData?: PlotData | null;
    readonly ready: boolean;
    readonly loading: boolean;
    readonly error: boolean;
}