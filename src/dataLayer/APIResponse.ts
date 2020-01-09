import { Point } from './Point';

export type APIResponse = {
    points: Array<Point>;
    title: string;
    xTitle?: string;
    yTitle?: string;
}