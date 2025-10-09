import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function LandingPage() {
  return (
    <>
      <SeoHelmet
        title="Landing Page - Thiết kế và tối ưu hóa Landing Page chuyên nghiệp - Necimatech Group"
        description="Dịch vụ thiết kế Landing Page chuyên nghiệp với tỷ lệ chuyển đổi cao. Tối ưu hóa UX/UI, tốc độ tải trang và các yếu tố thúc đẩy hành vi mua hàng."
        url="https://necimatech.com/dich-vu/landing-page"
        image="https://necimatech.com/og-landing-page.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Landing Page</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ thiết kế Landing Page chuyên nghiệp với tỷ lệ chuyển đổi cao, tối ưu hóa trải nghiệm người dùng
              và các yếu tố thúc đẩy hành vi mua hàng.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Tính năng Landing Page</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Thiết kế responsive</li>
                  <li>• Tối ưu tốc độ tải trang</li>
                  <li>• A/B testing</li>
                  <li>• Tích hợp công cụ tracking</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mục đích sử dụng</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bán sản phẩm/dịch vụ</li>
                  <li>• Thu thập thông tin khách hàng</li>
                  <li>• Quảng bá sự kiện</li>
                  <li>• Tăng tỷ lệ đăng ký</li>
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
