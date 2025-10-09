import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  delay?: number;
  animation?: 'bounce' | 'pulse' | 'spin' | 'float' | 'glow';
}

export function AnimatedIcon({ 
  icon: Icon, 
  className = '', 
  size = 24, 
  delay = 0,
  animation = 'bounce'
}: AnimatedIconProps) {
  const animations = {
    bounce: {
      initial: { scale: 0, rotate: -180 },
      animate: { 
        scale: 1, 
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay
        }
      },
      whileHover: { 
        scale: 1.1,
        y: -2,
        transition: { duration: 0.2 }
      }
    },
    pulse: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      },
      whileHover: { 
        scale: 1.05,
        transition: { duration: 0.2 }
      }
    },
    spin: {
      initial: { rotate: -90, opacity: 0 },
      animate: { 
        rotate: 0, 
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      },
      whileHover: { 
        rotate: 360,
        transition: { duration: 0.6 }
      }
    },
    float: {
      initial: { y: 20, opacity: 0 },
      animate: { 
        y: 0, 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      },
      whileHover: { 
        y: -5,
        transition: { 
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      }
    },
    glow: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay
        }
      },
      whileHover: { 
        scale: 1.1,
        filter: "drop-shadow(0 0 10px rgb(59 130 246 / 0.5))",
        transition: { duration: 0.2 }
      }
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={`inline-flex ${className}`}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      whileHover={selectedAnimation.whileHover}
    >
      <Icon size={size} />
    </motion.div>
  );
}