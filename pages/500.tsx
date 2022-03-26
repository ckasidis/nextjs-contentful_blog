import ErrorSection from '../components/ErrorSection';

export default function ServerError() {
	return (
		<>
			<ErrorSection
				status={500}
				message="Internal Server Error."
				description="Please contact us to fix the problem"
			/>
		</>
	);
}
