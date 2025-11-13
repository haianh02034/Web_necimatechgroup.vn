import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BlogHeroProps {
  categoryName: string;
  description?: string;
  backgroundImage?: string;
}

export function BlogHero({
  categoryName,
  description = "Khám phá những bài viết mới nhất về công nghệ, lập trình và chuyển đổi số",
  backgroundImage = "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyOTU1MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
}: BlogHeroProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt="Blog hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-2 bg-[#FF7A00] rounded-full mb-4">
          <span className="text-white text-sm">{categoryName}</span>
        </div>
        <h1 className="text-white mb-4">
          Blog {categoryName}
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
