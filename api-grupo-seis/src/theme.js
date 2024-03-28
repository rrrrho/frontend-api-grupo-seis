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

const components = {

  Button: {
    baseStyle: {
      fontWeight: "600",
      textTransform: "capitalize",
      borderRadius: 8,
      transition: "all .2s ease-in-out",
    },
    variants: {
      brandPrimary: {
        background: "brand.darkBrown",
        color: "brand.cream",
        _hover: {
          background: "brand.cream",
          color: "brand.darkBrown",
          fontSize: "lg",
        },
        _active: {
          fontSize: "md",
        },
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

    },
    variants: {
      mainTitle: {
        fontWeight: "900",
      },
      subTitle: {
        fontWeight: "700",
      }
    }
  },

  Input: {
    baseStyle: {
      field: {
        background: "brand.cream",
        borderRadius: 5,
        _focus: {
          borderWidth: "0.1rem",
          borderColor: "brand.darkBeige !important",
        },
        _placeholder: {
          color: "brand.darkBeige",
        },
      },
    },
  },
};

const fonts = {
  heading: `'Playfair Display', serif`,
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({
  colors,
  fonts,
  components,
});

export default theme;
