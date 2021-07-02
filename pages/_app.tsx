import 'styles/globals.css';
import { AppProps } from 'next/app';
import 'misc/fontawesome-init';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;

}

export default App;
