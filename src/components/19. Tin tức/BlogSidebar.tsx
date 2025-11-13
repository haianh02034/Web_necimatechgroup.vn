import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CategoryDto, PostDto } from "../../types";
import { ChevronRight } from "lucide-react";

interface BlogSidebarProps {
  categories: CategoryDto[];
  featuredPosts: PostDto[];
  activeCategory?: string;
}

export function BlogSidebar({
  categories,
  featuredPosts,
  activeCategory,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <Card className="p-6">
        <h3 className="mb-4">Chuyên mục</h3>
        <ul className="space-y-3">
          {categories
            .filter((cat) => cat.slug !== "all")
            .map((category) => (
              <li key={category._id}>
                <a
                  href={`/tin-tuc/${category.slug}`}
                  className={`flex items-center justify-between text-sm transition-colors hover:text-[#FF7A00] ${
                    activeCategory === category.slug
                      ? "text-[#FF7A00]"
                      : "text-foreground"
                  }`}
                >
                  <span>{category.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </li>
            ))}
        </ul>
      </Card>

      {/* Featured Posts */}
      <Card className="p-6">
        <h3 className="mb-4">Bài viết nổi bật</h3>
        <div className="space-y-4">
          {featuredPosts.slice(0, 4).map((post) => (
            <a
              key={post._id}
              href={`/tin-tuc/${post.category?.slug || 'uncategorized'}/${post.slug}`}
              className="flex gap-3 group"
            >
              <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={post.seo?.ogImageUrl || ''}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm line-clamp-2 mb-1 group-hover:text-[#FF7A00] transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("vi-VN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Card>

      {/* Newsletter Signup */}
      <Card className="p-6 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5">
        <h3 className="mb-2">Đăng ký nhận tin</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Nhận bài viết mới nhất qua email mỗi tuần
        </p>
        <input
          type="email"
          placeholder="Email của bạn"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background mb-3 text-sm"
        />
        <button className="w-full px-4 py-2 bg-[#FF7A00] hover:bg-[#E56D00] text-white rounded-lg transition-colors text-sm">
          Đăng ký ngay
        </button>
      </Card>
    </aside>
  );
}
