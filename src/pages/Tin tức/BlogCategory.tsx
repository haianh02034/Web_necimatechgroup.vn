import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Calendar, User, ArrowRight, Home } from "lucide-react";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import "../../news.css";
export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const { categories } = useCategories();

  // Find the category object by slug to get the ID
  const categoryObj = categories.find(cat => cat.slug === category);
  const categoryId = categoryObj?._id;

  const { posts, loading, error } = usePosts(categoryId ? { categoryId } : undefined);

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
        name: postCategory?.name || categoryObj?.name || 'Uncategorized',
        slug: postCategory?.slug || categoryObj?.slug || 'uncategorized',
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

  return (
    <>
      <SeoHelmet
        title={`Tin tức ${categoryObj?.name || category} - Necimatech Group`}
        description={
          categoryObj?.description ||
          `Khám phá những bài viết mới nhất về ${categoryObj?.name || category} từ các chuyên gia tại Necimatech Group.`
        }
        url={`https://necimatech.com/tin-tuc/${category}`}
        image="https://necimatech.com/blog-og.jpg"
        keywords={`${categoryObj?.name || category}, tin tức ${categoryObj?.name || category}, blog ${categoryObj?.name || category}`}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Breadcrumb */}
          <section className="w-full border-b border-border bg-background py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="flex items-center gap-1">
                      <Home className="w-3.5 h-3.5" />
                      <span>Trang chủ</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/tin-tuc">Tin tức</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{categoryObj?.name || category}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Category Header */}
          <section className="w-full bg-gradient-to-b from-[#F8F9FA] to-background py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-[#FF7A00] hover:bg-[#E56D00] text-white">
                  {categoryObj?.name || category}
                </Badge>
                <h1 className="mb-4">
                  Tin tức {categoryObj?.name || category}
                </h1>
                {categoryObj?.description && (
                  <p className="text-muted-foreground">
                    {categoryObj.description}
                  </p>
                )}
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{transformedPosts.length} bài viết</span>
                </div>
              </div>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transformedPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl"
                  >
                    {/* Image */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <ImageWithFallback
                        src={post.coverImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col gap-3">
                      {/* Title */}
                      <h3 className="line-clamp-2 min-h-[3rem] group-hover:text-[#FF7A00] transition-colors">
                        {post.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground line-clamp-2">
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

              {/* Empty State */}
              {transformedPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    Chưa có bài viết nào trong chuyên mục này
                  </p>
                  <a
                    href="/tin-tuc"
                    className="inline-flex items-center gap-2 text-[#FF7A00] hover:underline"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Quay lại trang tin tức
                  </a>
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
