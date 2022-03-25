import Link from 'next/link';

export default function ServerError() {
	return (
		<>
			<div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
				<main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-16">
						<div className="text-center">
							<p className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">
								500 error
							</p>
							<h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
								Internal Server Error.
							</h1>
							<p className="mt-2 text-base text-gray-500">
								Please contact us to fix the problem
							</p>
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
		</>
	);
}
