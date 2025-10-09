import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function TikTokAds() {
  return (
    <>
      <SeoHelmet
        title="TikTok Ads - Dịch vụ quảng cáo TikTok chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo TikTok Ads chuyên nghiệp. Tiếp cận thế hệ Gen Z và Millennial với nội dung sáng tạo, thu hút và có tính lan truyền cao."
        url="https://necimatech.com/quang-cao/tiktok-ads"
        image="https://necimatech.com/og-tiktok-ads.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">TikTok Ads</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ chạy quảng cáo TikTok Ads chuyên nghiệp giúp thương hiệu tiếp cận thế hệ trẻ với nội dung sáng tạo,
              độc đáo và có khả năng lan truyền mạnh mẽ.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Đặc điểm nổi bật</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nội dung video ngắn, sáng tạo</li>
                  <li>• Thuật toán AI thông minh</li>
                  <li>• Targeting theo sở thích và hành vi</li>
                  <li>• Tương tác cao với người dùng trẻ</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Đối tượng mục tiêu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gen Z (16-24 tuổi)</li>
                  <li>• Gen Alpha (dưới 16 tuổi)</li>
                  <li>• Người dùng yêu thích nội dung giải trí</li>
                  <li>• Thị trường thương mại điện tử</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
