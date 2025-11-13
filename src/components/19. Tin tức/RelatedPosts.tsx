import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";
import { PostDto } from "../../types";
import { Calendar } from "lucide-react";

interface RelatedPostsProps {
  posts: PostDto[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="mb-8">Bài viết liên quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <a key={post._id} href={`/tin-tuc/${post.category?.slug || 'uncategorized'}/${post.slug}`} className="group">
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
              <div className="relative w-full h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.seo?.ogImageUrl || ''}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 mb-2 group-hover:text-[#FF7A00] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("vi-VN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
