import '../styles/globals.css'
import { StoreProvider } from '../utils/store'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
export default MyApp;