import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },

  variants: {
    outline: {
      border: '1px solid black',
      color: 'black',
      borderRadius: '0',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
    link: {
      color: 'black',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
