/// <reference types="react" />
declare const ArwesThemeProvider: import("react").MemoExoticComponent<{
    (props: import("./ArwesThemeProvider.component").ArwesThemeProviderProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        themeSettings: import("prop-types").Requireable<object>;
        children: import("prop-types").Requireable<any>;
    };
}>;
export * from './ArwesThemeProvider.component';
export { ArwesThemeProvider };
