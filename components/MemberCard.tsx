import Image from 'next/image';
import { IMember } from '../@types/generated/contentful';

interface MemberCardProps {
	member: IMember;
}
// More people...
export default function MemberCard({ member }: MemberCardProps) {
	const { image, fullname, nickname, programme, status } = member.fields;
	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
			<div className="flex-shrink-0 mx-auto mt-8">
				<Image
					className="object-cover rounded-full"
					src={'http:' + image.fields.file.url}
					alt={image.fields.title}
					width={200}
					height={200}
				/>
			</div>
			<div className="flex-1 p-6 flex flex-col justify-between text-center">
				<div className="flex-1">
					<p className="text-sm font-medium text-secondary-700">
						{status.toUpperCase()}
					</p>
					<div className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">{`${fullname} (${nickname})`}</p>
						<p className="mt-3 text-base text-gray-500">{programme}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
