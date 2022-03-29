import Head from 'next/head';
import ErrorSection from '../components/ErrorSection';

export default function ServerError() {
	return (
		<>
			<Head>
				<title>Server Error</title>
			</Head>
			<ErrorSection
				status={500}
				message="Internal Server Error."
				description="Please contact us to fix the problem"
			/>
		</>
	);
}
