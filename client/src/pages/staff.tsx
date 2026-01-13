import { VideoBackground } from "@/components/VideoBackground";
import { Navigation } from "@/components/Navigation";
import { GlassContainer } from "@/components/GlassContainer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { staffMembers, type StaffMember } from "@/lib/mockData";

const roleColors: Record<string, string> = {
  "Coach": "bg-[hsl(185_100%_50%/0.2)] text-[hsl(185_100%_70%)] border-[hsl(185_100%_50%/0.3)]",
  "Pro Player": "bg-[hsl(270_70%_60%/0.2)] text-[hsl(270_70%_80%)] border-[hsl(270_70%_60%/0.3)]",
  "Tweaker": "bg-[hsl(320_80%_55%/0.2)] text-[hsl(320_80%_75%)] border-[hsl(320_80%_55%/0.3)]",
  "Community Manager": "bg-[hsl(45_100%_50%/0.2)] text-[hsl(45_100%_70%)] border-[hsl(45_100%_50%/0.3)]",
  "Admin": "bg-[hsl(0_70%_50%/0.2)] text-[hsl(0_70%_75%)] border-[hsl(0_70%_50%/0.3)]",
  "VOD Analyst": "bg-[hsl(140_60%_50%/0.2)] text-[hsl(140_60%_70%)] border-[hsl(140_60%_50%/0.3)]",
};

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <GlassContainer className="p-6 flex flex-col items-center text-center group" data-testid={`staff-card-${member.id}`}>
      <Avatar className="w-16 h-16 mb-4 border-2 border-white/20 group-hover:border-[hsl(185_100%_50%/0.4)] group-hover:shadow-[0_0_20px_hsl(185_100%_50%/0.2)] transition-all duration-300">
        <AvatarFallback className="bg-gradient-to-br from-[hsl(185_100%_50%/0.2)] to-[hsl(270_70%_60%/0.2)] text-white text-lg font-bold">
          {member.avatar}
        </AvatarFallback>
      </Avatar>
      
      <h3 className="text-lg font-bold text-white mb-3">{member.name}</h3>
      
      <div className="flex flex-wrap justify-center gap-2">
        {member.roles.map((role) => (
          <Badge
            key={role}
            variant="outline"
            className={`text-xs ${roleColors[role] || "bg-white/10 text-white/70 border-white/20"}`}
          >
            {role}
          </Badge>
        ))}
      </div>
    </GlassContainer>
  );
}

export default function StaffPage() {
  return (
    <div className="min-h-screen relative" data-testid="staff-page">
      <VideoBackground />
      <Navigation />

      <div className="relative z-10 min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Staff
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Meet the talented team behind KOCLUK. From professional players to dedicated community managers, 
              we're here to help you improve.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {staffMembers.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <GlassContainer className="inline-block p-8 max-w-xl">
              <h2 className="text-2xl font-bold text-white mb-3">
                Join Our Team
              </h2>
              <p className="text-white/60 mb-4">
                Are you a skilled player or coach? We're always looking for talented individuals to join our growing team.
              </p>
              <a 
                href="https://discord.gg/kocluk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[hsl(185_100%_70%)] hover:text-[hsl(185_100%_80%)] transition-colors"
                data-testid="join-discord-link"
              >
                Contact us on Discord
              </a>
            </GlassContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
