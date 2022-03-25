import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { IMember } from '../@types/generated/contentful';
import AuthorBox from './AuthorBox';

interface BlogCardProps {
	image: Asset;
	category: string;
	title: string;
	description: string;
	author: IMember;
}

export default function BlogCard({
	image,
	category,
	title,
	description,
	author,
}: BlogCardProps) {
	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
			<div className="flex-shrink-0">
				<Image
					className="object-cover"
					src={'http:' + image.fields.file.url}
					alt=""
					width={640}
					height={360}
				/>
			</div>
			<div className="flex-1 bg-white p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium text-indigo-600">
						<Link href={`/${category}`}>{category.toUpperCase()}</Link>
					</p>
					<div className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">{title}</p>
						<p className="mt-3 text-base text-gray-500">{description}</p>
					</div>
				</div>
				<AuthorBox author={author} />
			</div>
		</div>
	);
}
