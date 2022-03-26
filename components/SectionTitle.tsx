interface SectionTitleProps {
	title: string;
	description: string;
}

export default function SectionTitle({
	title,
	description,
}: SectionTitleProps) {
	return (
		<div className="text-center">
			<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
				{title}
			</h2>
			<p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
				{description}
			</p>
		</div>
	);
}
