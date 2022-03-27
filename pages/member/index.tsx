import { IMember } from '../../@types/generated/contentful';
import Grid from '../../components/Grid';
import GridSection from '../../components/GridSection';
import MemberCard from '../../components/MemberCard';
import SectionTitle from '../../components/SectionTitle';
import ctfClient from '../../lib/contentful';

export async function getServerSideProps() {
	const res = await ctfClient.getEntries({
		content_type: 'member',
	});

	return {
		props: {
			members: res.items,
		},
	};
}

interface MemberArchiveProps {
	members: IMember[];
}

export default function MemberArchive({ members }: MemberArchiveProps) {
	return (
		<GridSection>
			<SectionTitle
				title="Members"
				description="Current NTU students and Alumni"
			/>
			<Grid>
				{members.map((member) => (
					<MemberCard key={member.fields.fullname} member={member} />
				))}
			</Grid>
		</GridSection>
	);
}
