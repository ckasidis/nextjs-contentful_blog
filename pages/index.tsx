import { GetServerSideProps } from 'next';
import ctfClient from '../lib/contentful';
import { IEvent, IGuide } from '../@types/generated/contentful';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import HeaderSection from '../components/HeaderSection';

export const getServerSideProps: GetServerSideProps = async () => {
	const guideRes = await ctfClient.getEntries({
		content_type: 'guide',
		order: '-sys.createdAt',
		limit: 3,
	});

	const eventRes = await ctfClient.getEntries({
		content_type: 'event',
		order: '-sys.createdAt',
		limit: 3,
	});

	return {
		props: {
			guides: guideRes.items,
			events: eventRes.items,
		},
	};
};

interface HomePageProps {
	guides: IGuide[];
	events: IEvent[];
}

export default function HomePage({ guides, events }: HomePageProps) {
	return (
		<>
			<HeaderSection
				title="Welcome to NTU Thai Society"
				description="Nanyang Technology University, Singapore"
			/>
			<div className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
							Guides
						</h2>
						<p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
							Find useful guides about NTU and Singapore
						</p>
					</div>
					<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
						{guides.map((guide) => (
							<Link
								key={guide.fields.title}
								href={`/guide/${guide.fields.slug}`}
								passHref
							>
								<a>
									<BlogCard
										image={guide.fields.featuredImage}
										category="guide"
										title={guide.fields.title}
										description={guide.fields.shortDescription}
										author={guide.fields.author}
									/>
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className="relative max-w-7xl mt-20 mx-auto">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
							Events
						</h2>
						<p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
							Join events hosted by our society
						</p>
					</div>
					<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
						{events.map((event) => (
							<Link
								key={event.fields.title}
								href={`/event/${event.fields.slug}`}
								passHref
							>
								<a>
									<BlogCard
										image={event.fields.featuredImage}
										category="event"
										title={event.fields.title}
										description={event.fields.shortDescription}
										author={event.fields.author}
									/>
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
