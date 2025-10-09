import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function SEO() {
  return (
    <>
      <SeoHelmet
        title="SEO - Dịch vụ tối ưu hóa công cụ tìm kiếm chuyên nghiệp - Necimatech Group"
        description="Dịch vụ SEO chuyên nghiệp giúp website đạt thứ hạng cao trên Google. Tối ưu hóa On-page, Off-page, Technical SEO và Content Marketing."
        url="https://necimatech.com/dich-vu/seo"
        image="https://necimatech.com/og-seo.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">SEO</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ SEO chuyên nghiệp giúp website đạt thứ hạng cao trên các công cụ tìm kiếm,
              tăng lưu lượng truy cập tự nhiên và cải thiện tỷ lệ chuyển đổi.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Các loại SEO</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SEO On-page</li>
                  <li>• SEO Off-page</li>
                  <li>• Technical SEO</li>
                  <li>• Local SEO</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Công cụ sử dụng</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google Analytics & Search Console</li>
                  <li>• SEMrush & Ahrefs</li>
                  <li>• Google PageSpeed Insights</li>
                  <li>• Schema Markup</li>
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
