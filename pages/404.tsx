import ErrorSection from '../components/ErrorSection';

export default function PageNotFound() {
	return (
		<>
			<ErrorSection
				status={404}
				message="Page not found."
				description="Sorry, we couldn’t find the page you’re looking for."
			/>
		</>
	);
}
