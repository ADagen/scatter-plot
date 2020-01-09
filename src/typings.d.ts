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

declare const IS_DEV_ENV: boolean;
