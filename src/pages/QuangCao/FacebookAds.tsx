import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function FacebookAds() {
  return (
    <>
      <SeoHelmet
        title="Facebook Ads - Dịch vụ quảng cáo Facebook chuyên nghiệp - Necimatech Group"
        description="Dịch vụ chạy quảng cáo Facebook Ads chuyên nghiệp. Tối ưu hóa chiến dịch, tăng tỷ lệ chuyển đổi và tiếp cận khách hàng mục tiêu hiệu quả với đội ngũ chuyên gia giàu kinh nghiệm."
        url="https://necimatech.com/quang-cao/facebook-ads"
        image="https://necimatech.com/og-facebook-ads.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Facebook Ads</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ chạy quảng cáo Facebook Ads chuyên nghiệp giúp doanh nghiệp tiếp cận khách hàng mục tiêu,
              tăng tỷ lệ chuyển đổi và tối ưu hóa ngân sách quảng cáo.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Điểm mạnh dịch vụ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chiến lược quảng cáo được tối ưu hóa</li>
                  <li>• Targeting chính xác khách hàng mục tiêu</li>
                  <li>• Báo cáo chi tiết và minh bạch</li>
                  <li>• Hỗ trợ 24/7 từ đội ngũ chuyên gia</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Lợi ích mang lại</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tăng nhận diện thương hiệu</li>
                  <li>• Thu hút khách hàng tiềm năng</li>
                  <li>• Tăng doanh số bán hàng</li>
                  <li>• ROI cao và bền vững</li>
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
