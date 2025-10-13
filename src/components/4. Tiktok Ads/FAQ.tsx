import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "TikTok Ads phù hợp ngành hàng nào?",
    answer: "TikTok Ads phù hợp với hầu hết các ngành hàng như thời trang, mỹ phẩm, F&B, công nghệ, giáo dục, du lịch và nhiều lĩnh vực khác. Với khả năng targeting chính xác, chúng tôi có thể tối ưu chiến dịch cho bất kỳ ngành hàng nào.",
  },
  {
    question: "Ngân sách tối thiểu cần bao nhiêu?",
    answer: "Doanh nghiệp có thể bắt đầu chỉ từ 5 triệu VNĐ với gói Basic. Tùy vào mục tiêu và quy mô, chúng tôi sẽ tư vấn gói dịch vụ phù hợp nhất để tối ưu hiệu quả đầu tư.",
  },
  {
    question: "Bao lâu có kết quả?",
    answer: "Thông thường từ 2 – 4 tuần đã thấy hiệu quả ban đầu như tăng lượt tiếp cận, tương tác và đơn hàng. Tuy nhiên, để đạt kết quả tối ưu và bền vững, chúng tôi khuyến nghị duy trì chiến dịch ít nhất 3 tháng.",
  },
  {
    question: "Khác biệt giữa tự chạy và dùng dịch vụ Necimatech?",
    answer: "Necimatech đảm bảo chiến lược bài bản dựa trên kinh nghiệm thực tế, tối ưu chi phí qua A/B testing liên tục, nội dung sáng tạo bắt trend, và hỗ trợ toàn diện từ setup đến vận hành. Điều này giúp tiết kiệm thời gian, chi phí và đạt hiệu quả cao hơn so với tự chạy.",
  },
  {
    question: "Tôi có được đào tạo để tự vận hành sau này không?",
    answer: "Có, với gói Premium chúng tôi cung cấp 3 buổi đào tạo chuyên sâu cho đội ngũ nội bộ. Bạn sẽ được hướng dẫn chi tiết về cách tạo nội dung, setup chiến dịch, và tối ưu quảng cáo để có thể tự chủ động vận hành lâu dài.",
  },
];

export function FAQ() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-600">
            Những câu hỏi phổ biến từ khách hàng
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border-2 border-gray-100 rounded-xl px-6 hover:border-purple-200 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
