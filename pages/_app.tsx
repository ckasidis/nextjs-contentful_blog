import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/NTUTH.ico" />
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
