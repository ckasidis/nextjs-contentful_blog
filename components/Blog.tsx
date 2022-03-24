import Image from 'next/image';
import { Asset } from 'contentful';
import { IMember } from '../@types/generated/contentful';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AuthorList from './AuthorList';

interface BlogProps {
	title: string;
	author: IMember[];
	image: Asset;
	description?: string;
	content: Document | undefined;
	category: string;
}

export default function Blog({
	title,
	author,
	image,
	description,
	content,
	category,
}: BlogProps) {
	return (
		<div className="relative py-16 bg-white overflow-hidden">
			{blogDecoration}
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="text-lg max-w-prose mx-auto">
					<h1>
						<span className="block text-base text-center text-primary-600 font-semibold tracking-wide uppercase">
							{category}
						</span>
						<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{title}
						</span>
					</h1>
					<figure className="my-6">
						<Image
							className="bg-cover rounded-xl"
							src={'http:' + image.fields.file.url}
							width={1080}
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
				<div className="text-lg max-w-prose mx-auto">
					{description && (
						<p className="mt-8 text-xl text-gray-500 leading-8">
							{description}
						</p>
					)}
					<AuthorList author={author} />
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
