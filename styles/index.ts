import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/Button';

const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    body: `'IBM Plex Mondo', mono`,
  },
});

export default theme;
