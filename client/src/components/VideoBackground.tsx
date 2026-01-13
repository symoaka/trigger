import videoSrc from "@assets/website_gif_1766566931608.mp4";

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0" data-testid="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        data-testid="background-video"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    </div>
  );
}
