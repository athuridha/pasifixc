'use client'
import { motion, MotionProps } from "motion/react";

interface MotionDivProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({ className, children, ...motionProps }) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;