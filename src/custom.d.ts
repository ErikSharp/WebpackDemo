// This prevents the non-code assets that are imported in index.ts from giving errors

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.xml" {
    const content: any;
    export default content;
}

declare module "*.csv" {
    const content: any;
    export default content;
}

declare module "*.json" {
    const content: any;
    export default content;
}
