interface GridSectionProps {
	children: React.ReactNode;
}

export default function GridSection({ children }: GridSectionProps) {
	return (
		<div className="relative py-16 px-4 sm:px-6 lg:px-8">
			<div className="relative max-w-7xl mx-auto">{children}</div>
		</div>
	);
}
