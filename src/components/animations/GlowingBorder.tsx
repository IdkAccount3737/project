import { motion } from 'framer-motion';
import { AnimationProps } from './types';

const GlowingBorder = ({ children }: AnimationProps) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(90deg, #45A59D, #C9AD75)',
            'linear-gradient(180deg, #C9AD75, #45A59D)',
            'linear-gradient(270deg, #45A59D, #C9AD75)',
            'linear-gradient(0deg, #C9AD75, #45A59D)',
            'linear-gradient(90deg, #45A59D, #C9AD75)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative bg-black m-[2px] rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingBorder;