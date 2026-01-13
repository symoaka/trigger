import { useState } from "react";
import { VideoBackground } from "@/components/VideoBackground";
import { Navigation } from "@/components/Navigation";
import { GlassContainer } from "@/components/GlassContainer";
import { Chatbox } from "@/components/Chatbox";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { coaches, type Coach } from "@/lib/mockData";
import { MessageCircle, ArrowLeft } from "lucide-react";

function CoachCard({ coach, onContact }: { coach: Coach; onContact: () => void }) {
  return (
    <GlassContainer className="p-6 flex flex-col items-center text-center group" data-testid={`coach-card-${coach.id}`}>
      <Avatar className="w-20 h-20 mb-4 border-2 border-[hsl(185_100%_50%/0.3)] group-hover:border-[hsl(185_100%_50%/0.6)] group-hover:shadow-[0_0_25px_hsl(185_100%_50%/0.3)] transition-all duration-300">
        <AvatarFallback className="bg-gradient-to-br from-[hsl(185_100%_50%/0.3)] to-[hsl(270_70%_60%/0.3)] text-white text-2xl font-bold">
          {coach.avatar}
        </AvatarFallback>
      </Avatar>
      
      <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
      <p className="text-[hsl(185_100%_70%)] text-sm font-medium mb-2">{coach.specialization}</p>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">{coach.tagline}</p>
      
      <Button
        onClick={onContact}
        className="w-full bg-gradient-to-r from-[hsl(185_100%_45%)] to-[hsl(270_70%_55%)] hover:from-[hsl(185_100%_50%)] hover:to-[hsl(270_70%_60%)] text-white shadow-[0_0_20px_hsl(185_100%_50%/0.2)] hover:shadow-[0_0_30px_hsl(185_100%_50%/0.3)] transition-all duration-300"
        data-testid={`contact-coach-${coach.id}`}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Contact
      </Button>
    </GlassContainer>
  );
}

export default function CoachingPage() {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  if (selectedCoach) {
    return (
      <div className="min-h-screen relative" data-testid="coaching-chat-view">
        <VideoBackground />
        <Navigation />
        
        <div className="relative z-10 min-h-screen pt-20 pb-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setSelectedCoach(null)}
                className="text-white/70 hover:text-white hover:bg-white/10"
                data-testid="back-to-coaches"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Coaches
              </Button>
              <span className="text-white/50">|</span>
              <span className="text-white font-medium">Chatting with {selectedCoach.name}</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 h-[calc(100vh-140px)]">
              <Chatbox coachName={selectedCoach.name} />
              <div className="hidden lg:block">
                <Sidebar coachName={selectedCoach.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative" data-testid="coaching-page">
      <VideoBackground />
      <Navigation />

      <div className="relative z-10 min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Coaches
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose your coach and start your journey to becoming a better player. 
              Each coach specializes in different aspects of aim training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onContact={() => setSelectedCoach(coach)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
