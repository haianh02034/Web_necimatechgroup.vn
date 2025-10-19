import { motion } from "motion/react";
import { TrendingUp, Users, Megaphone, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, x: -20, y: -20 },
    { Icon: Users, delay: 0.2, x: 20, y: -30 },
    { Icon: Megaphone, delay: 0.4, x: -30, y: 20 },
    { Icon: Sparkles, delay: 0.6, x: 30, y: 15 },
  ];

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white"style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🚀 Giải pháp Marketing Chuyên Nghiệp
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl mb-6"
            >
              Dịch vụ Booking KOL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Giải pháp Influencer Marketing toàn diện của Necimatech Group
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-8 text-white/80"
            >
              Kết nối thương hiệu với hàng ngàn KOL/Influencer uy tín trên mọi nền tảng. 
              Tối ưu chi phí, hiệu quả vượt trội.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Tư vấn miễn phí
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem bảng giá
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating icons animation */}
          <div className="relative h-96 hidden md:block">
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.7, duration: 0.5 }}
                className="absolute"
                style={{
                  left: `${25 + index * 20}%`,
                  top: `${20 + (index % 2) * 40}%`,
                }}
              >
                <motion.div
                  animate={{
                    y: [y, y - 20, y],
                    x: [x, x + 10, x],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl"
                >
                  <Icon className="w-12 h-12" />
                </motion.div>
              </motion.div>
            ))}

            {/* Central glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
