import "styled-componets";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        icon: string;
        nextTheme: string;

        colors: {
            background: string;
            text: string;
            initialDegrade: string;
            finalDegrade: string;
        };
    }
}
