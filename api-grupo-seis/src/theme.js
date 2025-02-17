import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/playfair-display";
import "@fontsource/roboto";

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

const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
  '3xl': '122em' // ~1952px
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: "600",
      textTransform: "capitalize",
      borderRadius: 8,
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
        },
      },
      brandSecondary: {
        background: "brand.lightBeige",
        color: "brand.darkBrown",
      },
      brandThird: {
        background: "brand.darkBrown",
        color: "brand.cream",
        _hover: {
          background: "#fff5e0",
          color: "brand.darkBrown",
          borderColor: "brand.darkBrown",
          borderWidth: "0.1em",
          boxShadow: "0 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.25)",
        },
        _active: {
          background: "#fff5e0",
          color: "brand.darkBrown",
          borderColor: "brand.darkBrown",
          borderWidth: "0.1em",
        },
      },
      brandFourth: {
        background: "transparent",
        color: "brand.darkGreen",
        opacity: "0.8",
        _active: {
          fontSize: "md",
        },
      },
      brandFifth: {
        background: "brand.darkBrown",
        color: "brand.cream",
      },
    },
  },

  Heading: {
    baseStyle: {
      color: "brand.darkGreen",
    },
    variants: {
      mainTitle: {
        fontWeight: "900",
      },
      subTitle: {
        fontWeight: "700",
      },
      sectionTitle: {
        fontWeight: "600",
        fontSize: "1.3em",
      },
    },
  },

  FormLabel: {
    baseStyle: {
      color: "brand.darkGreen",
      fontWeight: "600",
    },
  },

  Select: {
    baseStyle: {
      field: {
        background: "brand.darkBrown",
        color: "brand.cream",
        fontWeight: "600",
      },
      icon: {
        color: "brand.cream",
      },
    },
    variants: {
      brandSecondary: {
        field: {
          background: "brand.lightBeige",
          color: "brand.darkGreen",
          borderColor: "brand.darkBrown",
          borderWidth: "0.1em",
        },
        icon: {
          color: "brand.darkBrown",
        },
      },
    },
  },

  Text: {
    baseStyle: {
      color: "brand.darkGreen",
      fontWeight: "500",
    },
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
    variants: {
      brandSecondary: {
        field: {
          borderColor: "brand.darkBrown",
          borderWidth: "0.1em",
          borderRadius: 5,
          textColor: "brand.darkGreen",
          _focus: {
            borderWidth: "0.15em",
            borderColor: "brand.darkGreen",
          },
        },
        addon: {
          background: "brand.darkBrown",
          color: "brand.cream",
          borderRadius: 5,
        },
      },
    },
  },
  NumberInput: {
    baseStyle: {
      field: {
        background: "brand.lightBeige",
        borderRadius: 5,
        _placeholder: {
          color: "brand.darkBeige",
        },
      },
    },
    variants: {
      brandSecondary: {
        field: {
          borderColor: "brand.darkBrown",
          borderWidth: "0.1em",
          borderRadius: 5,
          textColor: "brand.darkGreen",
          _focus: {
            borderWidth: "0.15em",
            borderColor: "brand.darkGreen",
          },
        },
        addon: {
          background: "brand.darkBrown",
          color: "brand.cream",
          borderRadius: 5,
        },
      },
    },
  },
  Table: {
    baseStyle: {
      color: "brand.darkGreen",
      fontWeight: "550",
    },
    variants: {
      totalizer: {
        td: {
          height: "0",
          opacity: "0.8",
          paddingInlineStart: "0 !important",
          paddingInlineEnd: "0 !important",
        },
        th: {
          paddingInlineStart: "0 !important",
          paddingInlineEnd: "0 !important",
        },
        tr: {
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "brand.darkGreen",
          fontWeight: "550",
        },
      },
    },
  },
};

const styles = {
  global: {
    body: {
      background: "brand.cream",
    },
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
  breakpoints
});

export default theme;
