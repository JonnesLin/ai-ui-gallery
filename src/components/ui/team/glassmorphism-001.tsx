import { TeamSection, TeamMember, TeamGrid } from './index';
import type { TeamMemberData } from './types';

export default function GlassmorphismTeam() {
  const team: TeamMemberData[] = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "15 years of experience in scaling tech companies",
      avatar: "",
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" }
      ]
    },
    {
      name: "Marcus Williams",
      role: "Chief Technology Officer",
      bio: "Former principal engineer at major tech firms",
      avatar: "",
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" }
      ]
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      bio: "Award-winning product designer and design systems expert",
      avatar: "",
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" }
      ]
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Built and led distributed teams across 3 continents",
      avatar: "",
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" }
      ]
    }
  ];

  return (
    <TeamSection
      title="Meet Our Team"
      description="Innovators shaping the future"
      theme="glassmorphism"
    >
      <TeamGrid columns={4} gap="lg">
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            avatar={member.avatar}
            socials={member.socials}
            theme="glassmorphism"
          />
        ))}
      </TeamGrid>
    </TeamSection>
  );
}
