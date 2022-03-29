import { GetServerSideProps } from 'next';
import ctfClient from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import BlogCard from '../../components/BlogCard';
import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle';
import Grid from '../../components/Grid';
import GridSection from '../../components/GridSection';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async () => {
	const guideRes = await ctfClient.getEntries({
		content_type: 'guide',
		order: '-sys.createdAt',
	});

	return {
		props: {
			guides: guideRes.items,
		},
	};
};

interface GuideArchiveProps {
	guides: IGuide[];
}

export default function GuideArchive({ guides }: GuideArchiveProps) {
	return (
		<>
			<Head>
				<title>Guides</title>
			</Head>
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
		</>
	);
}
