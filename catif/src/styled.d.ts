import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            accent: string;
            background: string;
            surface: string;
            text: string;
            textSecondary: string;
            border: string;
            navBg: string;
            navBg2: string;
        };
        fonts: {
            main: string;
            heading: string;
        };
    }
}
