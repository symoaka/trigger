import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/VideoBackground";
import { Navigation } from "@/components/Navigation";
import { Target, Crosshair, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Training",
    description: "Master your aim with personalized drills designed for your skill level",
  },
  {
    icon: Crosshair,
    title: "Expert Coaches",
    description: "Learn from professional players with years of competitive experience",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your improvement with detailed analytics and VOD reviews",
  },
  {
    icon: Zap,
    title: "PC Optimization",
    description: "Get the best performance with our expert tweaking services",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen relative" data-testid="landing-page">
      <VideoBackground />
      <Navigation />

      <div className="relative z-10 min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(185_100%_50%/0.1)] border border-[hsl(185_100%_50%/0.3)] text-[hsl(185_100%_70%)] text-sm">
              <Crosshair className="w-4 h-4" />
              Professional Aim Coaching
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="bg-gradient-to-r from-[hsl(185_100%_50%)] to-[hsl(270_70%_60%)] bg-clip-text text-transparent">
                Aim Game
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your gameplay with professional coaching, VOD analysis, and PC optimization. 
              Join thousands of players who have improved their aim with our expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coaching">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg bg-gradient-to-r from-[hsl(185_100%_45%)] to-[hsl(270_70%_55%)] hover:from-[hsl(185_100%_50%)] hover:to-[hsl(270_70%_60%)] text-white shadow-[0_0_30px_hsl(185_100%_50%/0.3)] hover:shadow-[0_0_40px_hsl(185_100%_50%/0.4)] transition-all duration-300"
                  data-testid="cta-start-coaching"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/staff">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                  data-testid="cta-meet-team"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[hsl(185_100%_50%/0.3)] transition-all duration-300 group"
                    data-testid={`feature-card-${index}`}
                  >
                    <div className="w-12 h-12 rounded-md bg-[hsl(185_100%_50%/0.15)] flex items-center justify-center border border-[hsl(185_100%_50%/0.3)] text-[hsl(185_100%_70%)] mb-4 group-hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="px-4 py-6 border-t border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto text-center text-white/50 text-sm">
            KOCLUK Aim Coaching Platform
          </div>
        </footer>
      </div>
    </div>
  );
}
