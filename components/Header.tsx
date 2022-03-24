import Link from 'next/link';
import { FaInstagram, FaTelegram, FaDiscord } from 'react-icons/fa';
import SocialIcon from './SocialIcon';

const navigation = [
	{ name: 'Events', href: '/event' },
	{ name: 'Guides', href: '/guide' },
	{ name: 'Members', href: '/member' },
	{ name: 'About', href: '/about' },
];

const socialLinks = [
	{ icon: FaInstagram, url: '#' },
	{ icon: FaTelegram, url: '#' },
	{ icon: FaDiscord, url: '#' },
];

export default function Header() {
	return (
		<header className="bg-primary-600">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-primary-500 lg:border-none">
					<div className="flex items-center">
						<Link href="/" passHref>
							<a>
								<span className="sr-only">Workflow</span>
								<h1 className="text-white text-2xl">(Logo)</h1>
							</a>
						</Link>
						<div className="hidden ml-10 space-x-6 lg:block">
							{navigation.map((link) => (
								<Link key={link.name} href={link.href}>
									<a className="text-base font-medium text-white hover:text-primary-50">
										{link.name}
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="flex items-center ml-10 space-x-4">
						{socialLinks.map((socialLink, index) => (
							<SocialIcon
								key={index}
								icon={socialLink.icon}
								url={socialLink.url}
							/>
						))}
					</div>
				</div>
				<div className="py-4 flex flex-wrap justify-center space-x-4 lg:hidden">
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-base font-medium text-white hover:text-primary-50"
						>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
