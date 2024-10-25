import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ResonanceCrossChannelClient } from 'resonance-client'
import SimpleModal from '@/components/SimpleModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResonanceCrossChannelClient
      externalUserId={'123'}
      apiKey={
        'a5e16b66cef5a5586da1b434f66ec217ffab665bd8bff3a01fff0d23f4fe420e5bec55dd53b50ede8c5a5c22369b2510'
      }
      eventContext={{}}
      userAttributes={{}}
      apiUrl={'https://app.medaltv.useresonance.com'}
    >
      <SimpleModal />
      <Component {...pageProps} />
    </ResonanceCrossChannelClient>
  )
}
