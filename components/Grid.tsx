interface GridProps {
	children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
	return (
		<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:max-w-none lg:grid-cols-3">
			{children}
		</div>
	);
}
