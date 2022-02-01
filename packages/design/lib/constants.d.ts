export declare const THEME_BREAKPOINTS_KEYS: readonly string[];
export declare const THEME_BREAKPOINTS_DEFAULT: Readonly<{
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}>;
export declare const THEME_PALETTE_TONAL_OFFSET_DEFAULT = 0.1;
export declare const THEME_PALETTE_ELEVATION_OFFSET_DEFAULT = 0.025;
export declare const THEME_FONT_SCALE_DEFAULT = 1;
export declare const THEME_SPACE_DEFAULT = 5;
export declare const THEME_OUTLINE_DEFAULT = 1;
export declare const THEME_SHADOW_BLUR_DEFAULT = 1;
export declare const THEME_SHADOW_SPREAD_DEFAULT = 1;
export declare const THEME_TRANSITION_DURATION_DEFAULT = 100;
export declare const THEME_FACTOR_MULTIPLIERS_NAMES: readonly string[];
export declare type ThemeSettingsBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type ThemeSettingsBreakpointAny = ThemeSettingsBreakpoint | number;
export interface ThemeSettingsBreakpoints {
    values?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
}
export declare type ThemeSettingsPaletteBasic = Partial<ThemePaletteBasic>;
export interface ThemeSettingsPaletteElevation {
    main?: string;
}
export interface ThemeSettingsPalette {
    tonalOffset?: number;
    elevationOffset?: number;
    primary?: ThemeSettingsPaletteBasic;
    secondary?: ThemeSettingsPaletteBasic;
    success?: ThemeSettingsPaletteBasic;
    error?: ThemeSettingsPaletteBasic;
    text?: ThemeSettingsPaletteBasic;
    neutral?: ThemeSettingsPaletteElevation;
    [prop: string]: any;
}
export interface ThemeSettings {
    breakpoints?: ThemeSettingsBreakpoints;
    palette?: ThemeSettingsPalette;
    fontScale?: number;
    space?: number;
    outline?: number;
    shadowBlur?: number;
    shadowSpread?: number;
    transitionDuration?: number;
    [prop: string]: any;
}
export interface ThemeSetupBreakpoints {
    values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
}
export interface ThemeSetupPalette extends ThemeSettingsPalette {
    tonalOffset: number;
    elevationOffset: number;
}
export interface ThemeSetup {
    breakpoints: ThemeSetupBreakpoints;
    palette: ThemeSetupPalette;
    fontScale: number;
    space: number;
    outline: number;
    shadowBlur: number;
    shadowSpread: number;
    transitionDuration: number;
    [prop: string]: any;
}
export interface ThemeBreakpoints {
    keys: readonly string[];
    values: ThemeSetupBreakpoints['values'];
    up: (key: ThemeSettingsBreakpointAny) => string;
    down: (key: ThemeSettingsBreakpointAny) => string;
    only: (key: ThemeSettingsBreakpoint) => string;
    between: (start: ThemeSettingsBreakpointAny, end: ThemeSettingsBreakpointAny) => string;
}
export interface ThemePaletteBasic {
    main: string;
    dark1: string;
    dark2: string;
    dark3: string;
    dark4: string;
    light1: string;
    light2: string;
    light3: string;
    light4: string;
}
export interface ThemePaletteElevation {
    main: string;
    elevate: (level: number) => string;
}
export interface ThemePalette {
    tonalOffset: number;
    elevationOffset: number;
    primary: ThemePaletteBasic;
    secondary: ThemePaletteBasic;
    success: ThemePaletteBasic;
    error: ThemePaletteBasic;
    text: ThemePaletteBasic;
    neutral: ThemePaletteElevation;
    [prop: string]: any;
}
export declare type ThemeFactorMultiplier = (multiplier?: number) => number;
export interface Theme {
    breakpoints: ThemeBreakpoints;
    palette: ThemePalette;
    fontScale: ThemeFactorMultiplier;
    space: ThemeFactorMultiplier;
    outline: ThemeFactorMultiplier;
    shadowBlur: ThemeFactorMultiplier;
    shadowSpread: ThemeFactorMultiplier;
    transitionDuration: ThemeFactorMultiplier;
    [prop: string]: any;
}
