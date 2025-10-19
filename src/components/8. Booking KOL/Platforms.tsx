import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const platforms = [
    {
    name: 'TikTok',
    description: 'Video ngắn viral, tiếp cận gen Z',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?fit=crop&w=800&q=80',
    gradient: 'from-pink-500/70 to-purple-500/70',
  },
  {
    name: 'Instagram',
    description: 'Stories, Reels & Posts sáng tạo',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1280&q=80',
    gradient: 'from-purple-500/70 to-pink-500/70',
  },
  {
    name: 'YouTube',
    description: 'Video dài, review chi tiết',
    // ✅ Link ổn định
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1280&q=80',
    gradient: 'from-red-500/70 to-orange-500/70',
  },
  {
    name: 'Facebook',
    description: 'Livestream, cộng đồng lớn',
    // ✅ Link ổn định
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1280&q=80',
    gradient: 'from-blue-500/70 to-indigo-500/70',
  },
];

export function SocialPlatforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Đa nền tảng Social Media
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kết nối với hàng ngàn KOL trên mọi nền tảng phổ biến
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                            transition-all duration-500 group"
                >
                <ImageWithFallback
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-t ${platform.gradient} opacity-80 
                                group-hover:opacity-90 transition-opacity duration-500`}
                />
                {/* phần text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 
                                bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                                translate-y-0 group-hover:translate-y-[-8px] transition-all duration-500">
                    <h3 className="text-lg font-semibold mb-1">{platform.name}</h3>
                    <p className="text-sm font-medium text-gray-100">{platform.description}</p>
                </div>
                </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
