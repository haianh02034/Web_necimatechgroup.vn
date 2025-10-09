import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function ZaloOA() {
  return (
    <>
      <SeoHelmet
        title="Zalo OA - Dịch vụ quản lý Official Account Zalo - Necimatech Group"
        description="Dịch vụ quản lý Zalo Official Account chuyên nghiệp. Xây dựng kênh chăm sóc khách hàng, tăng tương tác và hỗ trợ bán hàng hiệu quả trên nền tảng Zalo."
        url="https://necimatech.com/quang-cao/zalo-oa"
        image="https://necimatech.com/og-zalo-oa.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Zalo Official Account</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ quản lý Zalo Official Account chuyên nghiệp giúp doanh nghiệp xây dựng kênh chăm sóc khách hàng,
              tăng tương tác và hỗ trợ bán hàng hiệu quả trên nền tảng Zalo.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Tính năng chính</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chatbot tự động trả lời</li>
                  <li>• Gửi tin nhắn hàng loạt</li>
                  <li>• Livestream bán hàng</li>
                  <li>• Tích hợp với hệ thống CRM</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Lợi ích kinh doanh</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chăm sóc khách hàng 24/7</li>
                  <li>• Tăng tỷ lệ chuyển đổi</li>
                  <li>• Giảm chi phí vận hành</li>
                  <li>• Nâng cao trải nghiệm khách hàng</li>
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
