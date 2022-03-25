/* This example requires Tailwind CSS v2.0+ */
interface HeaderSectionProps {
	category?: string;
	title: string;
	description?: string;
}

export default function HeaderSection({
	category,
	title,
	description,
}: HeaderSectionProps) {
	return (
		<div className="bg-[url('/marina-bay.jpeg')] bg-center bg-cover bg-black/60 bg-blend-darken">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					{category && (
						<h2 className="text-base font-semibold text-white tracking-wide uppercase">
							{category}
						</h2>
					)}
					<p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
						{title}
					</p>
					{description && (
						<p className="max-w-xl mt-5 mx-auto text-xl text-white font-bold">
							{description}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
