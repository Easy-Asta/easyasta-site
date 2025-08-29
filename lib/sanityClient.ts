import { createClient } from '@sanity/client';

/**
 * Sanity client configuration. Set your project ID and dataset via environment variables.
 * The token is optional for read operations but required for mutations (not used here).
 */
export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-08-20',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});