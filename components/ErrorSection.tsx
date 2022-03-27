import Link from 'next/link';

interface ErrorSectionProps {
	status: number;
	message: string;
	description: string;
}

export default function ErrorSection({
	status,
	message,
	description,
}: ErrorSectionProps) {
	return (
		<div className="min-h-full pt-16 pb-12 flex flex-col">
			<main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-16">
					<div className="text-center">
						<p className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">
							{status} error
						</p>
						<h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
							{message}
						</h1>
						<p className="mt-2 text-base text-gray-500">{description}</p>
						<div className="mt-6">
							<Link href="/">
								<a className="text-base font-medium text-secondary-600 hover:text-secondary-500">
									Go back home<span aria-hidden="true"> &rarr;</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
