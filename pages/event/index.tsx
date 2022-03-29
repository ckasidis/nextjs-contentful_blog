import { GetServerSideProps } from 'next';
import ctfClient from '../../lib/contentful';
import { IEvent, IGuide } from '../../@types/generated/contentful';
import BlogCard from '../../components/BlogCard';
import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle';
import Grid from '../../components/Grid';
import GridSection from '../../components/GridSection';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async () => {
	const eventRes = await ctfClient.getEntries({
		content_type: 'event',
		order: '-sys.createdAt',
	});

	return {
		props: {
			events: eventRes.items,
		},
	};
};

interface EventArchiveProps {
	events: IEvent[];
}

export default function EventArchive({ events }: EventArchiveProps) {
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>
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
