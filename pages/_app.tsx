import { AppProps } from 'next/app';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'viem/chains';
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OnchainKitProvider apiKey="flL3QotH1sLE9bqIv58RRgE2MePLXICG" chain={base}>
      <Component {...pageProps} />
    </OnchainKitProvider>
  );
}

export default MyApp;
