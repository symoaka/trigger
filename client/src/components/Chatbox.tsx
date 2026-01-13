import { useState, useRef, useEffect } from "react";
import { GlassContainer } from "./GlassContainer";
import { ChatMessage } from "./ChatMessage";
import { FileUploadPreview, type UploadedFile } from "./FileUploadPreview";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip, MessageCircle } from "lucide-react";
import { mockChatMessages, type ChatMessage as ChatMessageType } from "@/lib/mockData";

interface ChatboxProps {
  coachName?: string;
}

export function Chatbox({ coachName }: ChatboxProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>(mockChatMessages);
  const [inputValue, setInputValue] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      
      if (!isImage && !isVideo) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const preview = event.target?.result as string;
        setUploadedFiles((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${file.name}`,
            file,
            preview,
            type: isImage ? "image" : "video",
          },
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleSend = () => {
    if (!inputValue.trim() && uploadedFiles.length === 0) return;

    const timestamp = new Date().toLocaleString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(",", "");

    if (uploadedFiles.length > 0) {
      uploadedFiles.forEach((file, index) => {
        const msgWithAttachment: ChatMessageType = {
          id: `msg-${Date.now()}-${index}`,
          sender: "buyer",
          senderName: "Ali",
          content: index === 0 ? inputValue.trim() : "",
          timestamp,
          attachment: {
            type: file.type,
            url: file.preview,
            name: file.file.name,
          },
        };
        setMessages((prev) => [...prev, msgWithAttachment]);
      });
    } else {
      const newMessage: ChatMessageType = {
        id: `msg-${Date.now()}`,
        sender: "buyer",
        senderName: "Ali",
        content: inputValue.trim(),
        timestamp,
      };
      setMessages((prev) => [...prev, newMessage]);
    }
    setInputValue("");
    setUploadedFiles([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <GlassContainer 
      className="flex flex-col h-full" 
      neonBorder="cyan"
    >
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-[hsl(185_100%_50%/0.15)] flex items-center justify-center border border-[hsl(185_100%_50%/0.3)]">
          <MessageCircle className="w-5 h-5 text-[hsl(185_100%_70%)]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground tracking-wide">
            Chatbox
          </h2>
          <p className="text-xs text-muted-foreground">
            Kocinizle iletisime gecin
          </p>
        </div>
      </div>

      <ScrollArea 
        className="flex-1 px-6 py-4" 
        ref={scrollAreaRef}
        data-testid="chat-messages-area"
      >
        <div className="space-y-1">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      <div className="border-t border-white/10">
        <FileUploadPreview 
          files={uploadedFiles} 
          onRemove={handleRemoveFile} 
        />
        
        <div className="p-4 flex gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/png,image/jpg,image/jpeg,video/mp4"
            multiple
            className="hidden"
            data-testid="file-input"
          />
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            className="shrink-0 border-[hsl(270_70%_60%/0.3)] bg-[hsl(270_70%_60%/0.1)] hover:bg-[hsl(270_70%_60%/0.2)] text-[hsl(270_70%_75%)]"
            data-testid="file-upload-button"
          >
            <Paperclip className="w-5 h-5" />
          </Button>

          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Mesajinizi yazin..."
            className="min-h-[44px] max-h-[120px] resize-none bg-white/5 border-white/10 focus:border-[hsl(185_100%_50%/0.5)] focus:ring-[hsl(185_100%_50%/0.2)] placeholder:text-muted-foreground"
            data-testid="chat-input"
          />

          <Button
            onClick={handleSend}
            disabled={!inputValue.trim() && uploadedFiles.length === 0}
            className="shrink-0 bg-[hsl(185_100%_50%)] hover:bg-[hsl(185_100%_55%)] text-[hsl(220_30%_8%)] font-semibold"
            data-testid="send-button"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </GlassContainer>
  );
}
