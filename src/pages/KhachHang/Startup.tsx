import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function Startup() {
  return (
    <>
      <SeoHelmet
        title="Startup - Đồng hành cùng doanh nghiệp khởi nghiệp - Necimatech Group"
        description="Giải pháp toàn diện dành cho doanh nghiệp Startup. Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi đồng hành cùng bạn trong hành trình khởi nghiệp thành công."
        url="https://necimatech.com/khach-hang/startup"
        image="https://necimatech.com/og-startup.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Startup</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Giải pháp toàn diện dành cho doanh nghiệp Startup. Từ ý tưởng đến sản phẩm hoàn thiện,
              chúng tôi đồng hành cùng bạn trong hành trình khởi nghiệp thành công và bền vững.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Giai đoạn khởi nghiệp</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Xác định ý tưởng kinh doanh</li>
                  <li>• Nghiên cứu thị trường</li>
                  <li>• Phát triển sản phẩm MVP</li>
                  <li>• Ra mắt sản phẩm</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Hỗ trợ cần thiết</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tư vấn chiến lược kinh doanh</li>
                  <li>• Phát triển sản phẩm công nghệ</li>
                  <li>• Marketing và bán hàng</li>
                  <li>• Kết nối nhà đầu tư</li>
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
