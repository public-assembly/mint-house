import { extendTheme } from '@chakra-ui/react';

import Card from './components/Card';
import Heading from './components/Heading';
import Text from './components/Text';

const theme = extendTheme({
  components: {
    Card,
    Heading,
    Text,
    Button: {
      baseStyle: {
        fontFamily: 'IBM Plex Mono',
        fontWeight: 600,
      },
    },
  },
  fonts: {
    body: `'IBM Plex Mondo', sans-serif`,
  },
});

export default theme;
