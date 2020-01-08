import React from 'react';

declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
}

declare module "*.svg" {
    const content: React.ComponentType<{ className?: string }>;
    export default content;
}

declare module "*.md" {
    const content: string;
    export default content;
}

declare type Point = {
    x: number;
    y: number;
}

declare type APIResponse = {
    points: Array<Point>;
    title: string;
    xTitle?: string;
    yTitle?: string;
}
