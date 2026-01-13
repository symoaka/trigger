import { X, Play, Image as ImageIcon, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: "image" | "video";
}

interface FileUploadPreviewProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
}

export function FileUploadPreview({ files, onRemove }: FileUploadPreviewProps) {
  if (files.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 p-3 border-t border-white/10">
      {files.map((file) => (
        <div 
          key={file.id}
          className="relative group"
          data-testid={`file-preview-${file.id}`}
        >
          <div className={cn(
            "w-20 h-20 rounded-md overflow-hidden border-2",
            file.type === "image" 
              ? "border-[hsl(270_70%_60%/0.4)]" 
              : "border-[hsl(185_100%_50%/0.4)]"
          )}>
            {file.type === "image" ? (
              <img 
                src={file.preview} 
                alt={file.file.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-black/60 flex items-center justify-center relative">
                <video 
                  src={file.preview}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-6 h-6 text-[hsl(185_100%_70%)]" />
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => onRemove(file.id)}
            className={cn(
              "absolute -top-2 -right-2 w-5 h-5 rounded-full",
              "bg-destructive text-destructive-foreground",
              "flex items-center justify-center",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            )}
            data-testid={`remove-file-${file.id}`}
          >
            <X className="w-3 h-3" />
          </button>

          <div className="absolute bottom-1 left-1">
            {file.type === "image" ? (
              <ImageIcon className="w-3 h-3 text-[hsl(270_70%_70%)]" />
            ) : (
              <Video className="w-3 h-3 text-[hsl(185_100%_70%)]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
