//保证 ts 也能识别出 svg
declare module '*.svg' {
    const content: any;
    export default content;
}


declare module '*.png' {
    const content: number;
    export default content
}