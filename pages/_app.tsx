import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Head from 'next/head';

export default function MyApp({ Component, pageProps, router }: AppProps) {
	const pageTransition = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
	};
	return (
		<>
			<Head>
				<link rel="icon" href="/NTUTH.ico" />
			</Head>
			<Header />
			<motion.div
				className="app-container"
				key={router.route}
				variants={pageTransition}
				initial="hidden"
				animate="visible"
			>
				<Component {...pageProps} />
			</motion.div>
		</>
	);
}
