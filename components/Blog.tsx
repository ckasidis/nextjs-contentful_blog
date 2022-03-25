import Image from 'next/image';
import { Asset } from 'contentful';
import { IMember } from '../@types/generated/contentful';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AuthorBox from './AuthorBox';
import Link from 'next/link';

interface BlogProps {
	category: string;
	title: string;
	image: Asset;
	description?: string;
	content: Document | undefined;
	author: IMember | undefined;
	dateTimeStr: string;
}

export default function Blog({
	category,
	title,
	image,
	description,
	content,
	author,
	dateTimeStr,
}: BlogProps) {
	const dateTime = new Date(dateTimeStr);
	return (
		<div className="relative py-16 bg-white overflow-hidden">
			{blogDecoration}
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="text-lg max-w-prose mx-auto">
					<h1>
						<span className="block text-base text-center text-secondary-700 font-semibold tracking-wide uppercase">
							<Link href={`/${category}`}>{category}</Link>
						</span>
						<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{title}
						</span>
					</h1>
					<time dateTime={dateTime.toISOString()}>
						<span className="mt-2 block text-sm text-center leading-8 text-gray-500">
							last updated: {dateTime.toISOString().substring(0, 10)}
						</span>
					</time>
					<figure className="my-6">
						<Image
							className="object-cover rounded-lg"
							src={'http:' + image.fields.file.url}
							width={1280}
							height={720}
							alt={image.fields.title}
						/>
						{/* <figcaption>{image.fields.description}</figcaption> */}
					</figure>
					{description && (
						<p className="mt-8 text-xl text-gray-500 leading-8">
							{description}
						</p>
					)}
				</div>
				<div className="mt-6 prose prose-primary prose-lg text-gray-500 mx-auto">
					{content && <>{documentToReactComponents(content)}</>}
				</div>
				<div className="text-lg max-w-prose mt-12 mx-auto">
					{/* <h3 className="mb-6 font-semibold">Author</h3> */}
					{author && <AuthorBox author={author} />}
				</div>
			</div>
		</div>
	);
}

const blogDecoration = (
	<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
		<div
			className="relative h-full text-lg max-w-prose mx-auto"
			aria-hidden="true"
		>
			<svg
				className="absolute top-12 left-full transform translate-x-32"
				width={404}
				height={384}
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x={0}
							y={0}
							width={4}
							height={4}
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width={404}
					height={384}
					fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
				/>
			</svg>
			<svg
				className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
				width={404}
				height={384}
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x={0}
							y={0}
							width={4}
							height={4}
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width={404}
					height={384}
					fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
				/>
			</svg>
			<svg
				className="absolute bottom-12 left-full transform translate-x-32"
				width={404}
				height={384}
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="d3eb07ae-5182-43e6-857d-35c643af9034"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x={0}
							y={0}
							width={4}
							height={4}
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width={404}
					height={384}
					fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
				/>
			</svg>
		</div>
	</div>
);
