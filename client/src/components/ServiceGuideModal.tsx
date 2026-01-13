import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Monitor, Video, Users, Settings, X } from "lucide-react";
import type { ServiceGuide } from "@/lib/mockData";

interface ServiceGuideModalProps {
  guide: ServiceGuide | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
};

export function ServiceGuideModal({ guide, open, onOpenChange }: ServiceGuideModalProps) {
  if (!guide) return null;

  const formatContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold text-[hsl(185_100%_70%)] mb-4 mt-2">
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-lg font-semibold text-[hsl(270_70%_75%)] mb-3 mt-6 border-b border-white/10 pb-2">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-base font-medium text-foreground mb-2 mt-4">
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-sm text-muted-foreground ml-4 mb-1.5 list-disc list-inside">
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === "") {
        return <div key={index} className="h-2" />;
      }
      return (
        <p key={index} className="text-sm text-foreground/80 mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl max-h-[85vh] bg-[hsl(220_25%_10%/0.95)] backdrop-blur-xl border-[hsl(185_100%_50%/0.25)] shadow-[0_0_40px_hsl(185_100%_50%/0.15)]"
        data-testid="guide-modal"
      >
        <DialogHeader className="border-b border-white/10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-[hsl(185_100%_50%/0.15)] flex items-center justify-center border border-[hsl(185_100%_50%/0.3)] text-[hsl(185_100%_70%)]">
                {iconMap[guide.icon]}
              </div>
              <DialogTitle className="text-xl font-semibold text-foreground">
                {guide.title}
              </DialogTitle>
            </div>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                data-testid="close-guide-modal"
              >
                <X className="w-5 h-5" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="py-4">
            {formatContent(guide.content)}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
