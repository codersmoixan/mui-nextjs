import theme from "./theme";
import { createTheme } from "@mui/material/styles";
import type { CustomThemeOptions } from "@/src/theme/types";

interface ColorPaletteOptions extends Required<typeof colorPalette> {}

interface DefaultThemeOptions extends CustomThemeOptions {
  colorPalette: ColorPaletteOptions;
}

declare module '@mui/material/styles' {
  interface Theme extends DefaultThemeOptions {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends DefaultThemeOptions {}
}

const colorPalette = {
  primary: {
    main: '#fda92d',
    default: '#FFFFFF',
    secondary: 'rgba(229 230, 232, 1)',
    colorSecondary: '#d8dee3',
    transparent: 'transparent',
    dark: '#131313',
    sullenGrey: '#33323e',
    lightGrey: '#6c6b7b',
    lightPurple: '#853bce',
    error: '#d32f2f',
    placeholder: '#c1c5cd',
    disabled: '#86909c',
    darkPeach: '#f8f6f1',
  },
  background: {
    main: 'rgb(252, 252, 252)',
    default: '#FFFFFF',
    primary: 'rgb(252, 252, 252)',
    secondary: 'rgba(145, 158, 171, 0.08)'
  },
  text: {
    main: '#fda92d',
    default: '#131313',
    textSecondary: '#6c6b7b',
    disabled: '#86909c',
    dark: '#131313',
    secondary: '#86909c',
  },
  button: {
    main: '#fda92d',
    default: '#FFFFFF',
    background: '#fda92d',
    hover: 'rgba(253, 169, 45, .8)'
  },
  setting: {
    one: '#00AB55',
    two: '#078DEE',
    three: '#7635dc',
    four: '#2065D1',
    five: '#fda92d',
    six: '#FF3030',
    colorSecondary: 'rgba(99, 115, 129)',
    bgSecondary: 'rgba(229 230, 232, .1)',
    bgActive: 'rgba(245, 239, 253, 1)',
  },
  gradient: {
    propagate: '-webkit-linear-gradient(300deg, rgb(253, 169, 45) 0%, rgb(255, 171, 0) 25%, rgb(118, 53, 220) 50%, rgb(255, 171, 0) 75%, rgb(253, 169, 45) 100%) 0% 0% / 400%',
    button: 'linear-gradient(76.35deg, rgb(253, 169, 45) 15.89%, rgb(118, 53, 220) 89.75%)',
  }
}

const orangeTheme = createTheme({
  ...theme,
  colorPalette,
  palette: {
    primary: {
      main: '#fda92d',
    },
    background: {
      default: 'rgb(252, 252, 252)',
    },
    text: {
      primary: '#181622',
      secondary: '#86909c',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: '#fda92d'
      }
    }
  }
})

export default orangeTheme