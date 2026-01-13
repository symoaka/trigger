import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/lib/mockData";
import { User, Headphones, Play, X } from "lucide-react";
import { useState } from "react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isSeller = message.sender === "seller";
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex gap-3 mb-4",
          isSeller ? "flex-row" : "flex-row-reverse"
        )}
        data-testid={`chat-message-${message.id}`}
      >
        <Avatar className={cn(
          "w-10 h-10 border-2",
          isSeller 
            ? "border-[hsl(185_100%_50%/0.5)]" 
            : "border-[hsl(270_70%_60%/0.5)]"
        )}>
          <AvatarFallback className={cn(
            "text-white",
            isSeller 
              ? "bg-[hsl(185_100%_50%/0.2)]" 
              : "bg-[hsl(270_70%_60%/0.2)]"
          )}>
            {isSeller ? <Headphones className="w-5 h-5" /> : <User className="w-5 h-5" />}
          </AvatarFallback>
        </Avatar>

        <div className={cn(
          "flex flex-col max-w-[70%]",
          isSeller ? "items-start" : "items-end"
        )}>
          <div className="flex items-center gap-2 mb-1">
            <span className={cn(
              "text-xs font-medium",
              isSeller ? "text-[hsl(185_100%_70%)]" : "text-[hsl(270_70%_75%)]"
            )}>
              {message.senderName}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {message.timestamp}
            </span>
          </div>

          <div className={cn(
            "rounded-md px-4 py-2.5 backdrop-blur-md",
            isSeller 
              ? "bg-[hsl(185_100%_50%/0.1)] border border-[hsl(185_100%_50%/0.2)]" 
              : "bg-[hsl(270_70%_60%/0.1)] border border-[hsl(270_70%_60%/0.2)]"
          )}>
            <p className="text-sm text-foreground leading-relaxed">
              {message.content}
            </p>
          </div>

          {message.attachment && (
            <div 
              className={cn(
                "mt-2 rounded-md overflow-hidden cursor-pointer transition-all duration-200",
                "border border-white/10"
              )}
              onClick={() => setShowMediaModal(true)}
              data-testid={`attachment-${message.id}`}
            >
              {message.attachment.type === "image" ? (
                <img 
                  src={message.attachment.url} 
                  alt={message.attachment.name}
                  className="max-w-[200px] max-h-[150px] object-cover"
                />
              ) : (
                <div className="relative w-[200px] h-[120px] bg-black/50 flex items-center justify-center">
                  <video 
                    src={message.attachment.url}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-[hsl(185_100%_50%/0.3)] flex items-center justify-center border border-[hsl(185_100%_50%/0.5)]">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showMediaModal && message.attachment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowMediaModal(false)}
        >
          <button
            onClick={() => setShowMediaModal(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            data-testid="close-media-modal"
          >
            <X className="w-8 h-8" />
          </button>
          {message.attachment.type === "image" ? (
            <img 
              src={message.attachment.url} 
              alt={message.attachment.name}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video 
              src={message.attachment.url}
              controls
              autoPlay
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
