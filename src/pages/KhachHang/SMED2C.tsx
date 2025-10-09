import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function SMED2C() {
  return (
    <>
      <SeoHelmet
        title="SMED2C - Giải pháp dành cho doanh nghiệp vừa và nhỏ - Necimatech Group"
        description="Giải pháp toàn diện dành cho doanh nghiệp SMED2C (Small and Medium Enterprises Direct to Consumer). Chuyển đổi số, marketing và bán hàng trực tuyến hiệu quả."
        url="https://necimatech.com/khach-hang/smed2c"
        image="https://necimatech.com/og-smed2c.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">SMED2C</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Giải pháp toàn diện dành cho doanh nghiệp SMED2C (Small and Medium Enterprises Direct to Consumer).
              Chúng tôi đồng hành cùng doanh nghiệp vừa và nhỏ trong hành trình chuyển đổi số và tiếp cận khách hàng trực tiếp.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Đối tượng phục vụ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Doanh nghiệp vừa và nhỏ</li>
                  <li>• Startup và doanh nghiệp mới</li>
                  <li>• Doanh nghiệp bán lẻ</li>
                  <li>• Doanh nghiệp dịch vụ</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Giải pháp cung cấp</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Website và ứng dụng bán hàng</li>
                  <li>• Marketing và quảng cáo online</li>
                  <li>• Hệ thống quản lý khách hàng</li>
                  <li>• Tư vấn chiến lược kinh doanh</li>
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
