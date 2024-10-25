import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ResonanceCrossChannelClient } from 'resonance-client'
import SimpleModal from '@/components/SimpleModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResonanceCrossChannelClient
      externalUserId={'123'} // Doesn't matter what you put here for now.
      apiKey={'insert-your-api-key'}
      eventContext={{}}
      userAttributes={{}}
      apiUrl={'https://app.medaltv.useresonance.com'}
    >
      <SimpleModal />
      <Component {...pageProps} />
    </ResonanceCrossChannelClient>
  )
}
