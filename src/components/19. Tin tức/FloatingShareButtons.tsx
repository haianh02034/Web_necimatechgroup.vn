import React from 'react';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface FloatingShareButtonsProps {
  title: string;
  url: string;
}

export function FloatingShareButtons({ title, url }: FloatingShareButtonsProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;

  const handleShare = (platform: string) => {
    let shareLink = '';
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast.success('Đã sao chép liên kết!');
        return;
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="hidden lg:flex flex-col gap-3 sticky top-32">
      <div className="flex flex-col gap-2 p-3 bg-white border border-border rounded-xl shadow-sm">
        <span className="text-xs text-muted-foreground text-center mb-1">Chia sẻ</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-[#1877F2] hover:text-white transition-colors"
          onClick={() => handleShare('facebook')}
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-[#1DA1F2] hover:text-white transition-colors"
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-[#0A66C2] hover:text-white transition-colors"
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Button>
        <div className="h-px bg-border my-1" />
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-muted transition-colors"
          onClick={() => handleShare('copy')}
          aria-label="Copy link"
        >
          <Link2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
