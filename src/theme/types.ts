import type { CSSProperties } from "@mui/styles";
import type { EmptyObject } from "@/src/tb.types"
import type { Breakpoints } from "@mui/system";
import type { ThemeOptions as MuiThemeOptions } from "@mui/material";

export interface ConfigOptions {
  backdropHeight: number;
  navWidth: number;
  contentWidth: number;
  navHeight: number;
  transition: (t?: number) => string;
  transitionTime: string;
}

export interface CustomThemeOptions {
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  },
  componentStyleOverrides: ComponentStyleOverrides;
}

export interface ColorPaletteOptions {
  primary: {
    main: string;
    default: string;
    secondary: string;
    colorSecondary: string;
    transparent: string;
    dark: string;
    sullenGrey: string;
    lightGrey: string;
    lightPurple: string;
    error: string;
    placeholder: string;
    disabled: string;
    darkPeach: string;
  };
  background: {
    main: string;
    default: string;
    primary: string;
    secondary: string;
  };
  text: {
    main: string;
    default: string;
    textSecondary: string;
    disabled: string;
    dark: string;
    secondary: string;
  };
  button: {
    main: string;
    default: string;
    background: string;
    hover: string;
  };
  setting: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    colorSecondary: string;
    bgSecondary: string;
    bgActive: string;
  },
  gradient: {
    propagate: string;
    button: string;
  }
}

export interface CustomThemeOptions {
  colorPalette: ColorPaletteOptions;
}

declare module '@mui/material/styles' {
  interface Theme extends CustomThemeOptions {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomThemeOptions {}
}

export interface ComponentStyleOverrides {
  Home?: EmptyObject;
}

export type ComponentStyleOverridesKey = keyof ComponentStyleOverrides

export interface DefaultThemeOptions extends Pick<MuiThemeOptions, 'config' | 'typography'> {
  breakpoints: Breakpoints;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  };
  componentStyleOverrides: ComponentStyleOverrides;
}

export interface ThemeOptions extends MuiThemeOptions, CustomThemeOptions {}
