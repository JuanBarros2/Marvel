declare module "model" {
    export interface Hero {
        id: number;
        name: string;
        thumbnail: {
            path: string;
            extension: string;
        };
        events: Iterable;
        series: Iterable;
        description: string;
    }
    export interface Iterable {
        items: {
            name: string;
        }[]
    }
    export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl'
}
