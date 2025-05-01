import { createClient } from '@sanity/client';

export const client = createClient({
  dataset: 'production',
  projectId: '5ahtvdeq',
  useCdn: false,
});
