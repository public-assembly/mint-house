const Heading = {
  sizes: {
    '5xl': {
      fontSize: '96px',
      // fontWeight: 'bold',
      lineHeight: '100px',
    },
    '6xl': {
      fontSize: '128px',
      lineHeight: '140px',
    },
  },
  variants: {
    serif: {
      fontFamily: 'ITC Lubalin Graph, serif',
      letterSpacing: '-0.1rem',
    },
    'sans-serif': {
      fontFamily: 'ITC Avant Garde Gothic, sans-serif',
      letterSpacing: '-0.1rem',
    },
  },
  defaultProps: {
    variant: 'sans-serif',
  },
};

export default Heading;
