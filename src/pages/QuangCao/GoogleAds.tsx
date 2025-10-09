import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function GoogleAds() {
  return (
    <>
      <SeoHelmet
        title="Google Ads - Dịch vụ quảng cáo Google chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo Google Ads (AdWords) chuyên nghiệp. Tối ưu hóa chiến dịch tìm kiếm, display và shopping ads để đạt hiệu quả cao nhất với ngân sách hợp lý."
        url="https://necimatech.com/quang-cao/google-ads"
        image="https://necimatech.com/og-google-ads.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Google Ads</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ chạy quảng cáo Google Ads chuyên nghiệp giúp doanh nghiệp xuất hiện trên trang đầu kết quả tìm kiếm,
              tiếp cận khách hàng đang có nhu cầu thực tế.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Loại hình quảng cáo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google Search Ads</li>
                  <li>• Google Display Network</li>
                  <li>• Google Shopping Ads</li>
                  <li>• YouTube Advertising</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ưu điểm nổi bật</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Targeting chính xác theo từ khóa</li>
                  <li>• Thanh toán theo click thực tế</li>
                  <li>• Đo lường và tối ưu hóa dễ dàng</li>
                  <li>• Phù hợp mọi quy mô doanh nghiệp</li>
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
