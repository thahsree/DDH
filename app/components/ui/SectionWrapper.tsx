import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 w-full ${className}`}>
      <div className={`container mx-auto px-6 md:px-12 max-w-7xl ${containerClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
