import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { IEvent } from '../../@types/generated/contentful';
import PageNotFound from '../404';
import Blog from '../../components/Blog';
import ctfClient from '../../lib/contentful';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await ctfClient.getEntries({
		content_type: 'event',
		'fields.slug': params!.id,
	});

	return {
		props: {
			event: res.items.length ? res.items[0] : null,
		},
	};
};

interface EventSingleProps {
	event: IEvent | null;
}

export default function EventSingle({ event }: EventSingleProps) {
	if (!event) return <PageNotFound />;

	const { title, featuredImage, mainContent, author } = event.fields;

	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>
			<Blog
				category="event"
				title={title}
				image={featuredImage}
				content={mainContent}
				author={author}
				dateTimeStr={event.sys.updatedAt}
			/>
		</main>
	);
}
