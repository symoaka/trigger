import { useState } from "react";
import { GlassContainer } from "./GlassContainer";
import { ServiceGuideModal } from "./ServiceGuideModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  User, 
  Target, 
  ExternalLink,
  Monitor,
  Video,
  Users,
  Settings,
  ShoppingCart,
  Sparkles,
  Twitter,
  MessageCircle,
  Instagram
} from "lucide-react";
import { 
  mockOrderDetails, 
  serviceGuides, 
  SHOPIER_PAYMENT_URL,
  type ServiceGuide 
} from "@/lib/mockData";

const guideIcons: Record<string, React.ReactNode> = {
  "Monitor": <Monitor className="w-4 h-4" />,
  "Video": <Video className="w-4 h-4" />,
  "Users": <Users className="w-4 h-4" />,
  "Settings": <Settings className="w-4 h-4" />,
};

interface SidebarProps {
  coachName?: string;
}

export function Sidebar({ coachName }: SidebarProps) {
  const [selectedGuide, setSelectedGuide] = useState<ServiceGuide | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [goal, setGoal] = useState(mockOrderDetails.goal);

  const handleGuideClick = (guide: ServiceGuide) => {
    setSelectedGuide(guide);
    setModalOpen(true);
  };

  const handlePaymentClick = () => {
    window.open(SHOPIER_PAYMENT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <GlassContainer 
        className="h-full flex flex-col" 
        neonBorder="purple"
      >
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[hsl(270_70%_60%/0.15)] flex items-center justify-center border border-[hsl(270_70%_60%/0.3)]">
              <Sparkles className="w-5 h-5 text-[hsl(270_70%_75%)]" />
            </div>
            <h2 className="text-xl font-bold tracking-wider text-foreground uppercase">
              KOCLUK
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Kocluk alim tarihi</span>
            </div>
            <p className="text-sm text-foreground font-medium pl-5" data-testid="purchase-date">
              {mockOrderDetails.purchaseDate}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
              <User className="w-3.5 h-3.5" />
              <span>Ilgilenen staff ismi</span>
            </div>
            <div className="flex items-center gap-2 pl-5">
              <Badge 
                variant="secondary" 
                className="bg-[hsl(185_100%_50%/0.15)] text-[hsl(185_100%_70%)] border border-[hsl(185_100%_50%/0.3)]"
              >
                {coachName || mockOrderDetails.staffName}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                <Target className="w-3.5 h-3.5" />
                <span>Hedef</span>
              </div>
              <span className="text-[10px] text-muted-foreground">
                {goal.length}/200
              </span>
            </div>
            <Textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value.slice(0, 200))}
              placeholder="Kocluk alinirken neyi hedefliyorsunuz?"
              className="min-h-[80px] resize-none bg-white/5 border-white/10 focus:border-[hsl(270_70%_60%/0.5)] focus:ring-[hsl(270_70%_60%/0.2)] text-sm"
              maxLength={200}
              data-testid="goal-textarea"
            />
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Servis Rehberleri
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceGuides.map((guide) => (
                <Button
                  key={guide.id}
                  variant="outline"
                  size="sm"
                  onClick={() => handleGuideClick(guide)}
                  className="justify-start gap-2 bg-white/5 border-white/10 hover:bg-[hsl(185_100%_50%/0.1)] hover:border-[hsl(185_100%_50%/0.3)] text-foreground/90 text-xs"
                  data-testid={`guide-trigger-${guide.id}`}
                >
                  <span className="text-[hsl(185_100%_70%)]">
                    {guideIcons[guide.icon]}
                  </span>
                  <span className="truncate">{guide.title}</span>
                </Button>
              ))}
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Sosyal Medya
            </h3>
            <div className="flex gap-3 justify-center">
              <a
                href={mockOrderDetails.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 hover:shadow-[0_0_15px_#1DA1F2/30] transition-all duration-300"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={mockOrderDetails.socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:shadow-[0_0_15px_#5865F2/30] transition-all duration-300"
                data-testid="social-discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={mockOrderDetails.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_#E4405F/30] transition-all duration-300"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-white/10">
          <Button
            onClick={handlePaymentClick}
            className="w-full bg-gradient-to-r from-[hsl(185_100%_45%)] to-[hsl(270_70%_55%)] hover:from-[hsl(185_100%_50%)] hover:to-[hsl(270_70%_60%)] text-white font-semibold py-5 shadow-[0_0_25px_hsl(185_100%_50%/0.3)] hover:shadow-[0_0_35px_hsl(185_100%_50%/0.4)] transition-all duration-300"
            data-testid="payment-button"
            data-payment-url={SHOPIER_PAYMENT_URL}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Satin Al
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </GlassContainer>

      <ServiceGuideModal
        guide={selectedGuide}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
