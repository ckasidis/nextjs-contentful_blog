import Image from 'next/image';
import { IMember } from '../@types/generated/contentful';

interface AuthorListProps {
	author: IMember[];
}

export default function AuthorList({ author }: AuthorListProps) {
	return (
		<>
			<h3 className="mt-12 mb-6 font-semibold">Author</h3>
			<ul role="list" className="grid gap-y-8 justify-between">
				{author.map((member) => (
					<li key={member.fields.fullname}>
						<div className="flex items-center gap-x-4">
							<Image
								className="bg-cover rounded-full"
								width={60}
								height={60}
								src={'http:' + member.fields.image.fields.file.url}
								alt={member.fields.image.fields.title}
							/>
							<div className="leading-6">
								<p className="text-lg">{member.fields.nickname}</p>
								<p className="text-sm">{member.fields.fullname}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
