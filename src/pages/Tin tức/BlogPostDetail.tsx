import React, { useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { BlogSidebar } from "../../components/19. Tin tức/BlogSidebar";
import { RelatedPosts } from "../../components/19. Tin tức/RelatedPosts";
import { ReadingProgress } from "../../components/19. Tin tức/ReadingProgress";
import { FloatingShareButtons } from "../../components/19. Tin tức/FloatingShareButtons";
import { TableOfContents } from "../../components/19. Tin tức/TableOfContents";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";

import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Toaster } from "../../components/ui/sonner";
import { toast } from "sonner";

import {
  Calendar,
  Clock,
  Home,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  BookOpen,
  Eye,
  TrendingUp,
  Sparkles,
  Share2,
} from "lucide-react";

import { usePostBySlug } from "../../hooks/usePostBySlug";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";

import "../../news.css";

/* -------------------------------------------------
 * Utils
 * ------------------------------------------------- */

const calculateReadingTime = (content: string): number => {
  if (!content) return 1;
  const text = content.replace(/<[^>]*>/g, "");
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
};

const formatReadingTime = (minutes: number): string => {
  if (minutes < 1) return "Ít hơn 1 phút đọc";
  if (minutes === 1) return "1 phút đọc";
  return `${minutes} phút đọc`;
};

/* -------------------------------------------------
 * Page
 * ------------------------------------------------- */

export default function BlogPostDetail() {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  const { post, loading, error } = usePostBySlug(slug || "");
  const { categories } = useCategories();

  const categoryObj = useMemo(
    () => categories.find((cat) => cat.slug === category),
    [categories, category]
  );
  const categoryId = categoryObj?._id;

  const { posts: allPosts } = usePosts(
    categoryId ? { categoryId } : undefined
  );

  const readingTime = useMemo(() => {
    if (!post?.contentHtml) return 1;
    return calculateReadingTime(post.contentHtml);
  }, [post?.contentHtml]);

  const relatedPosts = useMemo(
    () =>
      allPosts.filter(
        (p) => p.category?.slug === post?.category?.slug && p._id !== post?._id
      ),
    [allPosts, post?.category?.slug, post?._id]
  );

  const featuredPosts = useMemo(
    () => allPosts.filter((p: any) => p.status === "published"),
    [allPosts]
  );

  const shareUrl = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.location.href
        : `https://necimatech.com/tin-tuc/${category}/${slug}`,
    [category, slug]
  );

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  const handleShare = useCallback(
    (platform: string) => {
      let shareLink = "";

      switch (platform) {
        case "facebook":
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`;
          break;
        case "twitter":
          shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(post?.title || "")}`;
          break;
        case "linkedin":
          shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`;
          break;
        case "copy":
          navigator.clipboard.writeText(shareUrl);
          toast.success("Đã sao chép liên kết!", {
            description: "Link đã được lưu vào clipboard",
            duration: 3000,
          });
          return;
      }

      if (shareLink) {
        window.open(shareLink, "_blank", "width=600,height=400");
      }
    },
    [shareUrl, post?.title]
  );

  const structuredData = useMemo(() => {
    if (!post) return null;
    const plainText = post.contentHtml
      ? post.contentHtml.replace(/<[^>]*>/g, "")
      : "";
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      image: post.seo?.ogImageUrl || "",
      author: {
        "@type": "Person",
        name: post.author || "Necimatech Group",
      },
      publisher: {
        "@type": "Organization",
        name: "Necimatech Group",
        logo: {
          "@type": "ImageObject",
          url: "https://necimatech.com/logo.png",
        },
      },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://necimatech.com/tin-tuc/${category}/${slug}`,
      },
      articleSection: post.category?.name || "Tin tức",
      keywords: Array.isArray(post.tags)
        ? post.tags.join(", ")
        : post.tags || "",
      wordCount: plainText ? plainText.split(/\s+/).length : 0,
      timeRequired: `PT${readingTime}M`,
      url: `https://necimatech.com/tin-tuc/${category}/${slug}`,
    };
  }, [post, category, slug, readingTime]);

  /* -------------------------------------------------
   * Loading / Error / Not found
   * ------------------------------------------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent" />
            <div className="absolute inset-0 h-16 w-16 animate-ping rounded-full border-4 border-orange-300 opacity-20" />
          </div>
          <p className="mt-6 text-lg font-medium text-slate-600">Đang tải bài viết...</p>
          <p className="mt-2 text-sm text-slate-400">Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-slate-50 to-red-50">
        <div className="text-center max-w-md px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <span className="text-4xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Có lỗi xảy ra</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700"
          >
            Thử lại
          </Button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="text-center max-w-md px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
            <span className="text-4xl">📄</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Không tìm thấy bài viết</h2>
          <p className="text-slate-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Button
            onClick={() => window.location.href = "/tin-tuc"}
            className="bg-orange-600 hover:bg-orange-700"
          >
            Về trang tin tức
          </Button>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------
   * Render
   * ------------------------------------------------- */

  return (
    <>
      <SeoHelmet
        title={`${post.title} - Necimatech Group`}
        description={post.summary}
        url={`https://necimatech.com/tin-tuc/${category}/${slug}`}
        image={post.seo?.ogImageUrl || ""}
        keywords={`${post.category?.name || ""}, ${post.title}`}
      />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      <Toaster position="top-center" richColors />
      <ReadingProgress />

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pb-16">
          {/* Breadcrumb */}
          <section className="w-full border-b border-slate-200 bg-white py-4">
            <div className="">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a
                        href="/"
                        className="flex items-center gap-1.5 hover:text-orange-600 transition-colors text-slate-600"
                      >
                        <Home className="w-3.5 h-3.5" />
                        <span className="text-sm">Trang chủ</span>
                      </a>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-slate-400" />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a
                        href="/tin-tuc"
                        className="hover:text-orange-600 transition-colors text-slate-600 text-sm"
                      >
                        Tin tức
                      </a>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-slate-400" />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a
                        href={`/tin-tuc/${post.category?.slug}`}
                        className="hover:text-orange-600 transition-colors text-slate-600 text-sm"
                      >
                        {post.category?.name}
                      </a>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-slate-400" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1 max-w-[200px] md:max-w-md text-slate-900 text-sm font-medium">
                      {post.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* 3-Column Layout: LEFT (Share) | CENTER (Content) | RIGHT (Sidebar) */}
<section className="w-full py-8 md:py-12">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {/* GRID LAYOUT: 
        - base: 1 cột
        - lg: 2 cột (Share + Content)
        - xl: 3 cột (Share + Content + Sidebar) 
    */}
    <div
      className="
        grid gap-6 lg:gap-8
        grid-cols-1
        lg:grid-cols-[auto,minmax(0,1fr)]
        xl:grid-cols-[auto,minmax(0,1.3fr),20rem]
      "
    >
      {/* LEFT COLUMN: Social Share - Fixed */}
      <aside className="hidden lg:block w-16 flex-shrink-0">
        <div className="sticky top-24">
          <div className="flex flex-col gap-3">
            <div className="text-center mb-2">
              <p className="text-xs font-semibold text-slate-500 mb-3">Chia sẻ</p>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-sm"
              onClick={() => handleShare("facebook")}
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shadow-sm"
              onClick={() => handleShare("twitter")}
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm"
              onClick={() => handleShare("linkedin")}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all shadow-sm"
              onClick={() => handleShare("copy")}
              aria-label="Copy link"
            >
              <Link2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* CENTER COLUMN: Main Content */}
      <main className="flex-1 min-w-0 max-w-3xl mx-auto lg:mx-0">
        <article>
          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <ImageWithFallback
              src={post.seo?.ogImageUrl || ""}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-slate-200">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-full">
              {post.category?.name}
            </Badge>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="w-4 h-4" />
              <span>{formatReadingTime(readingTime)}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Eye className="w-4 h-4" />
              <span>1.2K lượt xem</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
            <Avatar className="h-14 w-14 ring-2 ring-orange-500/20">
              <AvatarImage src="" alt={post.author || "Unknown"} />
              <AvatarFallback className="bg-orange-600 text-white font-bold">
                {(post.author || "U").charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-slate-900">
                {post.author || "Unknown Author"}
              </p>
              <p className="text-sm text-slate-600">
                Chuyên gia tại Necimatech Group
              </p>
            </div>
          </div>

          {/* Mobile Share */}
          <section className="lg:hidden mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Chia sẻ:
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 hover:bg-orange-600 hover:text-white transition-all"
                  onClick={() => handleShare("copy")}
                >
                  <Link2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Summary */}
          {post.summary && (
            <section className="bg-slate-50 border-l-4 border-orange-600 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                {post.summary}
              </p>
            </section>
          )}

          {/* Article Content */}
          <section
            className="article-content prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-slate-900
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-800
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 
              prose-blockquote:bg-orange-50/50 prose-blockquote:py-3 prose-blockquote:px-5 
              prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1.5 
              prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-900 prose-pre:shadow-lg
              prose-ul:my-4 prose-ol:my-4
              prose-li:text-slate-700 prose-li:my-1"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml || "",
            }}
          />

          {/* Tags */}
          {((Array.isArray(post.tags) && post.tags.length > 0) ||
            (typeof post.tags === "string" && post.tags.trim())) && (
            <section className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-slate-700">Tags:</span>

                {Array.isArray(post.tags) &&
                  post.tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-slate-100 hover:bg-orange-600 hover:text-white transition-all cursor-pointer"
                    >
                      #{tag}
                    </Badge>
                  ))}

                {!Array.isArray(post.tags) &&
                  typeof post.tags === "string" &&
                  post.tags.trim() && (
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 hover:bg-orange-600 hover:text-white transition-all cursor-pointer"
                    >
                      #{post.tags.trim()}
                    </Badge>
                  )}
              </div>
            </section>
          )}

          {/* Author Bio */}
          <section className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-orange-500/20 flex-shrink-0">
                <AvatarImage src="" alt={post.author || "Unknown"} />
                <AvatarFallback className="bg-orange-600 text-white text-xl font-bold">
                  {(post.author || "U").charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-bold text-slate-900">
                  Về tác giả: {post.author || "Unknown Author"}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Chuyên gia tại Necimatech Group, đam mê chia sẻ kiến
                  thức và kinh nghiệm về công nghệ và kinh doanh.
                </p>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Bài viết liên quan
            </h3>
            <RelatedPosts posts={relatedPosts} />
          </section>
        </article>
      </main>

      {/* RIGHT COLUMN: Sidebar */}
      <aside
        className="hidden xl:block w-80 flex-shrink-0"
        role="complementary"
        aria-label="Sidebar"
      >
        <div className="sticky top-24 space-y-6">
          {/* Table of Contents */}
          <nav
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
            aria-label="Mục lục bài viết"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <h3 className="text-base font-bold text-slate-900">
                Nội dung bài viết
              </h3>
            </div>
            <TableOfContents />
          </nav>

          {/* Categories & Featured */}
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <BlogSidebar
              categories={categories}
              featuredPosts={featuredPosts}
              activeCategory={post.category?.slug}
            />
          </section>

          {/* Newsletter */}
          <section className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Đăng ký nhận tin
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Cập nhật tin tức mới nhất
              </p>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500 focus:outline-none mb-3 text-sm"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Đăng ký
              </Button>
            </div>
          </section>
        </div>
      </aside>
    </div>

    {/* Mobile Sidebar */}
    <div className="xl:hidden mt-12 pt-8 border-t border-slate-200 space-y-6">
      <section className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
          <BookOpen className="w-5 h-5 text-orange-600" />
          <h3 className="text-base font-bold text-slate-900">
            Nội dung bài viết
          </h3>
        </div>
        <TableOfContents />
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-5">
        <BlogSidebar
          categories={categories}
          featuredPosts={featuredPosts}
          activeCategory={post.category?.slug}
        />
      </section>
    </div>
  </div>
</section>

        </main>

        <Footer />
      </div>
    </>
  );
}