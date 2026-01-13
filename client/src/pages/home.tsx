import { VideoBackground } from "@/components/VideoBackground";
import { Chatbox } from "@/components/Chatbox";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full" data-testid="home-page">
      <VideoBackground />
      
      <div className="relative z-10 min-h-screen w-full p-4 lg:p-6">
        <div className="h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-[1600px] mx-auto">
          <div className="flex-1 lg:flex-[7] min-h-[50vh] lg:min-h-0">
            <Chatbox />
          </div>
          
          <div className="lg:flex-[3] min-h-[50vh] lg:min-h-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
