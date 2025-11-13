import React, { useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Calendar, User, ArrowRight } from "lucide-react";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import "../../news.css";

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { categories } = useCategories();

  // Find the category ID from the selected slug
  const selectedCategory = categories.find(cat => cat.slug === activeCategory);
  const categoryId = selectedCategory?._id;

  const { posts, loading, error } = usePosts(activeCategory === "all" ? undefined : { categoryId });

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  // Transform PostDto to Post format with proper category resolution
  const transformedPosts = posts.map(post => {
    // Try to find the category from the categories list using categoryId
    const postCategory = categories.find(cat => cat._id === post.categoryId) || post.category;

    return {
      id: post._id,
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      coverImageUrl: post.seo?.ogImageUrl || '',
      publishedAt: post.publishedAt,
      author: {
        name: post.author,
      },
      category: {
        name: postCategory?.name || 'Uncategorized',
        slug: postCategory?.slug || 'uncategorized',
      },
    };
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Create categories array for filter
  const filterCategories = [
    { id: "all", name: "Tất cả", slug: "all" },
    ...categories.map(cat => ({ id: cat._id, name: cat.name, slug: cat.slug }))
  ];

  return (
    <>
      <SeoHelmet
        title="Tin tức & Bài viết nổi bật - Necimatech Group"
        description="Khám phá những bài viết mới nhất về công nghệ, marketing, kinh doanh và phát triển phần mềm từ các chuyên gia tại Necimatech Group."
        url="https://necimatech.com/tin-tuc"
        image="https://necimatech.com/tin-tuc-og-image.jpg"
        keywords="tin tức công nghệ, blog marketing, kinh doanh, phát triển phần mềm"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-b from-[#F8F9FA] to-background py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="max-w-3xl">
                <h1 className="mb-4">
                  Tin tức & Bài viết nổi bật
                </h1>
                <p className="text-muted-foreground">
                  Khám phá những bài viết mới nhất về công nghệ, marketing,
                  kinh doanh và phát triển phần mềm từ các chuyên gia hàng đầu.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="w-full border-b border-border bg-background sticky top-16 z-40 py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="w-full overflow-x-auto pb-2">
                <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                  <TabsList className="inline-flex h-auto p-1 bg-muted rounded-lg">
                    {filterCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.slug}
                        className="px-4 py-2 data-[state=active]:bg-[#FF7A00] data-[state=active]:text-white rounded-md transition-all"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {transformedPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <ImageWithFallback
                        src={post.coverImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-3">
                      {/* Category */}
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-[#FF7A00]/10 text-[#FF7A00] hover:bg-[#FF7A00]/20"
                        >
                          {post.category.name}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="line-clamp-2 min-h-[3.5rem] group-hover:text-[#FF7A00] transition-colors">
                        {post.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground line-clamp-3 min-h-[4.5rem]">
                        {post.summary}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <a
                        href={`/tin-tuc/${post.category.slug}/${post.slug}`}
                        className="mt-2 inline-flex items-center gap-2 text-sm text-[#FF7A00] hover:gap-3 transition-all"
                      >
                        Đọc thêm
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              {transformedPosts.length > 6 && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
                  >
                    Xem thêm bài viết
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
