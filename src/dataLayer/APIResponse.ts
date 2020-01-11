import { Point } from './Geometry';

export type APIResponse = {
    points: Array<Point>;
    title: string;
    xTitle?: string;
    yTitle?: string;
}