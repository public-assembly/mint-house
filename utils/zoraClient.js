import { createClient } from 'urql';

export const urqlClientZora = createClient({
  url: 'https://api.zora.co/graphql',
});
