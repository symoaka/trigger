import { Link, useLocation } from "wouter";
import { Home, Users, UserCircle, ListMusic, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/3dgifmaker07425_1768162203346.gif";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Coaching", href: "/coaching", icon: Users },
  { label: "Our Staff", href: "/staff", icon: UserCircle },
  { label: "Playlists", href: "https://evxl.app/", icon: ListMusic, external: true },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="logo-link">
          <img 
            src={logoImage} 
            alt="KOCLUK Logo" 
            className="w-10 h-10 object-contain"
            data-testid="logo-image"
          />
          <span className="text-white font-bold text-lg hidden sm:inline tracking-wider">KOCLUK</span>
        </Link>

        <nav 
          className="px-2 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_hsl(185_100%_50%/0.1)]"
          data-testid="main-navigation"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = !item.external && location === item.href;
              const Icon = item.icon;

              if (item.external) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10"
                      data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-[hsl(185_100%_50%/0.2)] to-[hsl(270_70%_60%/0.2)] text-white border border-[hsl(185_100%_50%/0.3)] shadow-[0_0_15px_hsl(185_100%_50%/0.2)]"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
              data-testid="button-login"
            >
              <LogIn className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[hsl(185_100%_45%)] to-[hsl(270_70%_55%)] hover:from-[hsl(185_100%_50%)] hover:to-[hsl(270_70%_60%)] text-white shadow-[0_0_20px_hsl(185_100%_50%/0.2)]"
              data-testid="button-signup"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
