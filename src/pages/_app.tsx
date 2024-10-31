import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ResonanceCrossChannelClient,
  ResonanceMicrocopyProvider,
} from 'resonance-client'
import SimpleModal from '@/components/SimpleModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResonanceMicrocopyProvider
      externalUserId={'123123'}
      apiKey={'insert-your-api-key'}
      eventContext={{}}
      userAttributes={{}}
      apiUrl={'your-api-url'}
    >
      <ResonanceCrossChannelClient
        externalUserId={'123123'} // Doesn't matter what you put here for now.
        apiKey={'insert-your-api-key'}
        eventContext={{}}
        userAttributes={{}}
        apiUrl={'your-api-url'}
      >
        <SimpleModal />
        <Component {...pageProps} />
      </ResonanceCrossChannelClient>
    </ResonanceMicrocopyProvider>
  )
}
