import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { IGuide } from '../../@types/generated/contentful';
import PageNotFound from '../404';
import Blog from '../../components/Blog';
import ctfClient from '../../lib/contentful';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await ctfClient.getEntries({
		content_type: 'guide',
		'fields.slug': params!.id,
	});

	return {
		props: {
			guide: res.items.length ? res.items[0] : null,
		},
	};
};

interface Props {
	guide: IGuide | null;
}

const GuideSingle: NextPage<Props> = ({ guide }) => {
	if (!guide) return <PageNotFound />;

	const { title, featuredImage, mainContent, author } = guide.fields;

	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>
			<Blog
				title={title}
				author={author}
				image={featuredImage}
				content={mainContent}
				category="guide"
			/>
		</main>
	);
};

export default GuideSingle;
