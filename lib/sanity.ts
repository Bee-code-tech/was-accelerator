import { createClient } from '@sanity/client';

export const client = createClient({
  dataset: 'production',
    projectId: '5ahtvdeq',
  apiVersion: '3.87.0',
  useCdn: false,
});
