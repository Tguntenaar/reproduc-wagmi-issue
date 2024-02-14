import { MoralisNextApi } from '@moralisweb3/next'

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY || 'no-api-key',
  authentication: {
    domain: process.env.APP_DOMAIN || 'fullforce.io',
    uri: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    timeout: 120,
  },
})
