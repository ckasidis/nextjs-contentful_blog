import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
		>
			<div className="flex-shrink-0">
				<Image
					className="object-cover"
					src={'http:' + image.fields.file.url}
					alt={image.fields.title}
					width={640}
					height={360}
				/>
			</div>
			<div className="flex-1 p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium text-secondary-700">
						<Link href={`/${category}`}>{category.toUpperCase()}</Link>
					</p>
					<div className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">{title}</p>
						<p className="mt-3 text-base text-gray-500">{description}</p>
					</div>
				</div>
				<AuthorBox author={author} />
			</div>
		</motion.div>
	);
}
