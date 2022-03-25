import Image from 'next/image';
import { IMember } from '../@types/generated/contentful';

interface AuthorBox {
	author: IMember;
}

export default function AuthorBox({ author }: AuthorBox) {
	const { fullname, nickname, image } = author.fields;
	return (
		<div className="mt-6 flex items-center">
			<div className="flex-shrink-0">
				<span className="sr-only">{fullname}</span>
				<Image
					className="object-cover rounded-full"
					src={'http:' + image.fields.file.url}
					width={40}
					height={40}
					alt={image.fields.title}
				/>
			</div>
			<div className="ml-3">
				<p className="text-base font-medium text-gray-900">{nickname}</p>
				<div className="flex space-x-1 text-base text-gray-500">{fullname}</div>
			</div>
		</div>
	);
}
