import { GetServerSideProps } from 'next';
import ctfClient from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import BlogCard from '../../components/BlogCard';
import Link from 'next/link';

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
		</div>
	);
}
