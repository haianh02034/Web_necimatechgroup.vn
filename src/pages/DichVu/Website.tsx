import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SeoHelmet from "../../components/SeoHelmet";

export default function Website() {
  return (
    <>
      <SeoHelmet
        title="Website - Thiết kế và phát triển website chuyên nghiệp - Necimatech Group"
        description="Dịch vụ thiết kế và phát triển website chuyên nghiệp. Từ website doanh nghiệp, thương mại điện tử đến các ứng dụng web phức tạp với công nghệ hiện đại."
        url="https://necimatech.com/dich-vu/website"
        image="https://necimatech.com/og-website.jpg"
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Website</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Dịch vụ thiết kế và phát triển website chuyên nghiệp, từ website doanh nghiệp, thương mại điện tử
              đến các ứng dụng web phức tạp với công nghệ hiện đại và giao diện đẹp mắt.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Loại website</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Website doanh nghiệp</li>
                  <li>• Website thương mại điện tử</li>
                  <li>• Web application</li>
                  <li>• Landing page</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Công nghệ sử dụng</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React & Next.js</li>
                  <li>• Node.js & Express</li>
                  <li>• Database (MongoDB, PostgreSQL)</li>
                  <li>• Cloud services (AWS, Vercel)</li>
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
