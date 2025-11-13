import { Header } from "../../components/Header";
import { BlogHero } from "../../components/19. Tin tức/BlogHero";
import BlogPostsSection from "../../components/19. Tin tức/BlogPostsSection";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { useState } from "react";
import "../../news.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data cho blog posts
  const mockPosts = [
    {
      id: "1",
      slug: "ai-revolution-in-2025",
      title: "AI Revolution in 2025",
      summary:
        "Khám phá cách trí tuệ nhân tạo đang thay đổi ngành công nghiệp và định hình lại tương lai của công nghệ với những đổi mới đột phá.",
      coverImageUrl:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI5MjIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      publishedAt: "2025-11-10T10:00:00Z",
      author: {
        name: "Sarah Johnson",
      },
      category: {
        name: "Technology",
      },
    },
    {
      id: "2",
      slug: "building-scalable-cms-react-nestjs",
      title: "Xây dựng CMS mở rộng với React + NestJS",
      summary:
        "Học cách tạo hệ thống quản lý nội dung mạnh mẽ sử dụng React cho frontend và NestJS cho backend với các phương pháp hay nhất.",
      coverImageUrl:
        "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI5MzU3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      publishedAt: "2025-11-08T14:30:00Z",
      author: {
        name: "Michael Chen",
      },
      category: {
        name: "Technology",
      },
    },
    {
      id: "3",
      slug: "optimizing-seo-modern-web-apps",
      title: "Tối ưu SEO cho ứng dụng Web hiện đại",
      summary:
        "Nắm vững các chiến lược và kỹ thuật SEO thiết yếu để cải thiện khả năng hiển thị của ứng dụng web của bạn trên các công cụ tìm kiếm.",
      coverImageUrl:
        "https://images.unsplash.com/photo-1709281847981-73a69aa6f770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjMwMDkxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      publishedAt: "2025-11-05T09:15:00Z",
      author: {
        name: "Emma Rodriguez",
      },
      category: {
        name: "Technology",
      },
    },
  ];

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <SeoHelmet
        title="Blog Technology - Necimatech Group - Bài viết về công nghệ"
        description="Khám phá những bài viết mới nhất về công nghệ, AI, phát triển web và chuyển đổi số từ các chuyên gia tại Necimatech Group."
        url="https://necimatech.com/blog/technology"
        image="https://necimatech.com/blog-og-image.jpg"
        keywords="blog công nghệ, AI, phát triển web, React, NestJS, SEO, chuyển đổi số"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <BlogHero
            categoryName="Technology"
            description="Khám phá những bài viết mới nhất về công nghệ, lập trình và chuyển đổi số từ các chuyên gia hàng đầu"
          />
          <BlogPostsSection
            posts={mockPosts}
            categoryName="Technology"
            currentPage={currentPage}
            totalPages={3}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
