import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function MediaGallery() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const heading = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MDQ1NzA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Business team collaboration",
      label: "Tư vấn chiến lược chuyên nghiệp"
    },
    {
      src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MDQzNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Digital marketing analytics",
      label: "Đo lường hiệu quả chi tiết"
    },
    {
      src: "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXJ8ZW58MXx8fHwxNzYwNDM3ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Social media influencer",
      label: "Kết nối KOL & Influencer"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.25), transparent)" }}
          animate={{ y: [0, 10, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-16 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(168,85,247,0.25), transparent)" }}
          animate={{ y: [0, -12, 8, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Đối tác tin cậy của doanh nghiệp
            </span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <div key={index} style={{ perspective: 1000 }}>
              <motion.div
                variants={card}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                whileTap={{ scale: 0.995 }}
                className="group relative rounded-2xl overflow-hidden shadow-[0_10px_30px_-8px_rgba(31,38,135,0.25)] bg-white/80 backdrop-blur-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="pointer-events-none absolute -inset-y-8 -left-1/3 w-1/2 rotate-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                </div>

                {/* Move label below image */}
                <div className="p-5 text-center">
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="text-gray-800 font-medium text-lg"
                  >
                    {item.label}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent"
        />
      </div>
    </section>
  );
}