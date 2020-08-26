import "styled-componets";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        icon: string;
        nextTheme: string;

        paths: {
            social: {
                github: string;
                linkedin: string;
                facebook: string;
                discord: string;
            }
        }

        colors: {
            background: string;
            text: string;
            initialDegrade: string;
            finalDegrade: string;
        };
    }
}
