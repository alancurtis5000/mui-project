// palette match ! keyword to find all palettes //

import { colors } from "@material-ui/core";

export const palette = {
  type: "dark",
  primary: {
    main: colors.purple[700],
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    main: colors.green[600],
  },
  error: {
    main: colors.red[700],
  },
  warning: {
    main: colors.amber[600],
  },
  success: {
    main: colors.lightGreen[500],
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,

  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    disabled: colors.grey[600],
  },
};
