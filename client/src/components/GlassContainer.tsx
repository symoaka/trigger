import { cn } from "@/lib/utils";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  neonBorder?: "cyan" | "purple" | "pink" | "none";
}

export function GlassContainer({ 
  children, 
  className,
  neonBorder = "cyan"
}: GlassContainerProps) {
  const borderClasses = {
    cyan: "border-[hsl(185_100%_50%/0.3)] shadow-[0_0_20px_hsl(185_100%_50%/0.15)]",
    purple: "border-[hsl(270_70%_60%/0.3)] shadow-[0_0_20px_hsl(270_70%_60%/0.15)]",
    pink: "border-[hsl(320_80%_55%/0.3)] shadow-[0_0_20px_hsl(320_80%_55%/0.15)]",
    none: "border-white/10"
  };

  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/5 border rounded-md",
        borderClasses[neonBorder],
        className
      )}
    >
      {children}
    </div>
  );
}
