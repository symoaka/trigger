import { useState } from "react";
import { Link } from "wouter";
import { VideoBackground } from "@/components/VideoBackground";
import { Navigation } from "@/components/Navigation";
import { GlassContainer } from "@/components/GlassContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality will be connected by backend team");
    }, 1000);
  };

  return (
    <div className="min-h-screen relative" data-testid="login-page">
      <VideoBackground />
      <Navigation />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <GlassContainer className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(185_100%_50%/0.2)] to-[hsl(270_70%_60%/0.2)] flex items-center justify-center border border-[hsl(185_100%_50%/0.3)]">
              <LogIn className="w-8 h-8 text-[hsl(185_100%_70%)]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[hsl(185_100%_50%/0.5)]"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[hsl(185_100%_50%/0.5)]"
                  data-testid="input-password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a 
                href="#" 
                className="text-sm text-[hsl(185_100%_70%)] hover:text-[hsl(185_100%_80%)] transition-colors"
                data-testid="link-forgot-password"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-gradient-to-r from-[hsl(185_100%_45%)] to-[hsl(270_70%_55%)] hover:from-[hsl(185_100%_50%)] hover:to-[hsl(270_70%_60%)] text-white shadow-[0_0_25px_hsl(185_100%_50%/0.3)]"
              data-testid="button-submit-login"
            >
              {isLoading ? "Signing in..." : "Sign In"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <Link 
                href="/signup" 
                className="text-[hsl(185_100%_70%)] hover:text-[hsl(185_100%_80%)] transition-colors font-medium"
                data-testid="link-signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
}
