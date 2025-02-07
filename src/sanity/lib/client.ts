import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Use the environment variable for projectId
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,  // Use the environment variable for dataset
  useCdn: false,  // Whether to use the CDN (set to false for fresh data on every request)
  token: process.env.SANITY_API_TOKEN,  // Use the environment variable for the API token
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-08-31',  // Default to '2021-08-31' if not set
})
