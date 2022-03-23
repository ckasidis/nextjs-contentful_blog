import { createElement } from 'react';
import { IconType } from 'react-icons';

interface SocialIconProps {
	url: string;
	icon: IconType;
}

export default function SocialIcon({ url, icon }: SocialIconProps) {
	return (
		<a
			href={url}
			className="inline-block bg-primary-500 p-2 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
		>
			{createElement(icon)}
		</a>
	);
}
