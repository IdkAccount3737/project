import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimationProps } from './types';

interface ParallaxScrollProps extends AnimationProps {
  offset?: number;
}

const ParallaxScroll = ({ children, offset = 50 }: ParallaxScrollProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -offset]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;