import "styled-componets";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        icon: string;
        nextTheme: string;

        colors: {
            background: string;
            primary: string;
            initialDegrade: string;
            finalDegrade: string;
        };
    }
}
