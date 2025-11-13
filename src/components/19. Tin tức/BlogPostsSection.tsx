import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string;
  coverImageUrl: string;
  publishedAt: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
}

interface BlogPostsSectionProps {
  posts: Post[];
  categoryName: string;
  currentPage?: number;
  totalPages?: number;
  onPreviousPage?: () => void;
  onNextPage?: () => void;
}

export default function BlogPostsSection({
  posts,
  categoryName,
  currentPage = 1,
  totalPages = 1,
  onPreviousPage,
  onNextPage,
}: BlogPostsSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="mb-2">Recent posts in {categoryName}</h2>
          <div className="h-1 w-20 bg-[#FF7A00] rounded-full"></div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-xl"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <ImageWithFallback
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Category Badge */}
                <Badge
                  className="w-fit bg-[#FF7A00] hover:bg-[#E56D00] text-white border-none"
                >
                  {post.category.name}
                </Badge>

                {/* Title */}
                <h3 className="line-clamp-2 min-h-[3rem]">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-muted-foreground line-clamp-2 min-h-[3rem]">
                  {post.summary}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <a href={`/tin-tuc/${post.category.name.toLowerCase()}/${post.slug}`} className="mt-2">
                  <Button
                    className="w-full bg-[#FF7A00] hover:bg-[#E56D00] text-white"
                  >
                    Read more
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={onPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <span className="text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={onNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
