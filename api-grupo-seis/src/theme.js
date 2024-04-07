import { extendTheme} from "@chakra-ui/react";
import '@fontsource-variable/playfair-display';

const colors = {
  brand: {
    lightMustard: "#E8C07D",
    darkMustard: "#FAC265",
    lightBeige: "#FFF6EA",
    cream: "#ECE3D0",
    darkBeige: "#B8AC9D",
    lightGreen: "#4E6E52",
    darkGreen: "#394C38",
    lightBrown: "#967E76",
    darkBrown: "#7D5A50",
  },
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "600",
      textTransform: "capitalize",
      borderRadius: 8,
      margin: "0.4rem",
      padding: "1.5rem",
      fontSize: "1.5rem",
      transition: "all .2s ease-in-out",
    },
    variants: {
      brandPrimary: {
        background: "brand.darkBrown",
        color: "brand.lightBeige",
        paddingLeft: "1.2rem",
        paddingRight: "1.2rem",
        _hover: {
          background: "brand.lightBeige",
          color: "brand.darkBrown",
          transform: "scale(1.1)",
        }
      },
      brandSecondary: {
        background: "brand.cream",
        color: "brand.darkBrown",
      },
    },
  },

  Heading: {
    baseStyle: {
      color: "brand.darkGreen"
    }
  },

  Text: {
    baseStyle: {
      color: "brand.darkGreen"
    }
  },

  Input: {
    baseStyle: {
      field: {
        background: "brand.lightBeige",
        borderRadius: 5,
        _placeholder: {
          color: "brand.darkBeige",
        },
      },
    },
  },
};

const styles = {
  global: {
    body: {
      background: "brand.cream"
    }
  },
};

const fonts = {
  heading: `'Playfair Display Variable', serif`,
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  components,
});

export default theme;