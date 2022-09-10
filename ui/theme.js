import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const Divider = {
  baseStyle: {
    borderColor: 'black',
  },
}
const Heading = {
  sizes: {
    xxlarge: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      fontSize: { base: '3rem', lg: '5rem' },
      lineHeight: { base: 'normal', lg: '5rem' },
      letterSpacing: 0.2,
    },
    xlarge: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      fontSize: { base: '3xl', lg: '7xl' },
      lineHeight: { base: 'normal', lg: '5rem' },
      letterSpacing: 0.2,
    },
    large: {
      fontFamily: 'Bely Display',
      fontWeight: 400,
      fontSize: { base: '1.563rem', lg: '4rem' },
      lineHeight: { base: '1.625rem', lg: '4.063rem' },
      letterSpacing: 0.2,
    },
    medium: {
      fontFamily: 'Bely Display',
      fontWeight: 400,
      fontSize: { base: '2xl', lg: '4xl' },
      lineHeight: { base: '2.5rem', lg: '3rem' },
      letterSpacing: 0.2,
    },
    small: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      fontSize: { base: 'lg', lg: 'xl' },
      lineHeight: { base: 5, lg: 6 },
      letterSpacing: 0.1,
    },
  },
}
const Text = {
  variants: {
    title: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      fontSize: { base: 'md', lg: 'lg' },
      letterSpacing: 0.1,
    },
    subtitle: {
      fontFamily: 'Ubuntu',
      fontWeight: 600,
      fontSize: { base: 'sm', lg: 'md' },
      lineHeight: 'short',
      letterSpacing: 0.3,
    },
    subtitleBold: {
      fontFamily: 'Ubuntu',
      fontWeight: 800,
      fontSize: { base: 'sm', lg: 'md' },
      lineHeight: 'short',
      letterSpacing: 0.3,
    },
    body: {
      fontFamily: 'Mulish',
      fontWeight: 400,
      fontSize: { base: 'sm', lg: 'md' },
      lineHeight: 'short',
      letterSpacing: 0.3,
    },
    bodyBold: {
      fontFamily: 'Mulish',
      fontWeight: 900,
      fontSize: { base: 'sm', lg: 'md' },
      lineHeight: 'short',
      letterSpacing: 0.3,
    },
    bodySecondary: {
      fontFamily: 'Mulish',
      fontWeight: 400,
      fontSize: { base: 'sm' },
      lineHeight: 5,
      letterSpacing: 0.2,
    },
    description: {
      fontFamily: 'Ubuntu',
      fontWeight: 400,
      fontSize: { base: 'sm' },
      lineHeight: { base: 'shorter' },
      letterSpacing: 0.2,
    },
    link: {
      fontFamily: 'Ubuntu',
      fontWeight: 600,
      fontSize: { base: 'sm' },
      color: 'text',
    },
    footer: {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
      fontSize: { base: 'xs' },
      letterSpacing: 0.2,
      color: 'white',
    },
    footerBold: {
      fontFamily: 'Ubuntu',
      fontWeight: 700,
      fontSize: { base: 'xs' },
      letterSpacing: 0.2,
      color: 'white',
    },
    price: {
      fontFamily: 'Ubuntu',
      fontWeight: 800,
      fontSize: { base: '1.5rem', lg: '2.5rem' },
      lineHeight: { lg: '3rem' },
      letterSpacing: 0.2,
    },
  },
}
const Button = {
  baseStyle: {
    fontFamily: 'Ubuntu',
    borderRadius: 0,
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    md: {
      h: { base: 10, lg: 12 },
      fontSize: { base: 'sm' },
      px: '18px',
    },
    iconLg: {
      h: { base: 12, lg: 20 },
      w: { base: 12, lg: 20 },
    },
  },
  variants: {
    primary: {
      textColor: 'white',
      bg: 'black',
    },
    primaryWhite: {
      textColor: '#005A92',
      bg: 'white',
    },
    secondary: {
      textColor: 'white',
      bg: '#FF804D',
      borderRadius: '40px',
    },
    icon: {
      bg: 'transparent',
    },
    outline: {
      borderColor: 'black',
      fontWeight: 700,
      lineHeight: '1.125rem',
    },
  },
}
const Link = {
  baseStyle: {
    color: 'text',
    fontFamily: 'Ubuntu',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: { base: '14px' },
      fontWeight: { base: 600 },
    },
  },
  defaultProps: {
    textDecoration: 'none',
  },
}
const Input = {
  baseStyle: {
    field: {
      borderWidth: 2,
      borderColor: 'black',
      fontFamily: 'Mulish',
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 0,
      },
    },
  },
  defaultProps: {
    variant: null,
  },
}
const theme = extendTheme({
  config,
  semanticTokens: {
    // @dev: used on according to figma. TODO: recheck this colors with designer
    colors: {
      text: {
        default: '#000',
      },
      radialGradientGreen: {
        default:
          'radial-gradient(88% 108.8% at 76.56% 127.67%, #DEF8CB 0%, rgba(222, 248, 203, 0) 100%)',
      },
      linearGradientBlack: {
        default:
          'linear-gradient(358.38deg, rgba(0, 0, 0, 0.4) 14.72%, rgba(0, 0, 0, 0) 99.38%)',
      },
      homeHero: {
        default: '#DEF8CB',
      },
      homeContent: {
        default: '#FF9DD9',
      },
      dark: {
        100: '#1B3E62',
      },
      green: {
        10: '#DEF8CB',
      },
    },
  },
  components: {
    Button,
    Link,
    Heading,
    Text,
    Input,
    Divider,
  },
})

export default theme
