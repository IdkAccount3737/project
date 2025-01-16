import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimationProps } from './types';
import { Direction } from './types';

interface FadeInProps extends AnimationProps {
  direction?: Direction;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const FadeIn = ({ children, delay = 0, direction = 'up' }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : offset.x,
        y: inView ? 0 : offset.y,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;