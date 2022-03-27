import { GetServerSideProps } from 'next';
import ctfClient from '../lib/contentful';
import { IEvent, IGuide } from '../@types/generated/contentful';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import HeaderSection from '../components/HeaderSection';
import SectionTitle from '../components/SectionTitle';
import Grid from '../components/Grid';
import GridSection from '../components/GridSection';

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
			<GridSection>
				<SectionTitle
					title="Guides"
					description="Find useful guides about NTU and Singapore"
				/>
				<Grid>
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
				</Grid>
			</GridSection>
			<GridSection>
				<SectionTitle
					title="Events"
					description="Join events hosted by our society"
				/>
				<Grid>
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
				</Grid>
			</GridSection>
		</>
	);
}
