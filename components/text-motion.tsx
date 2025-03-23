'use client'
import { motion, MotionProps } from "motion/react";

interface MotionsProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const Motions: React.FC<MotionsProps> = ({ className, children, ...motionProps }) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default Motions;