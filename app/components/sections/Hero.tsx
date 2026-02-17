import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero2.png"
          alt="Modern Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
        >
          Transform Your Space Into a Masterpiece
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[#FFFFFF]/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-[1.2] drop-shadow-md"
        >
          We blend functionality with aesthetic perfection to create interiors that reflect your unique personality and lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[160px] sm:min-w-[200px] sm:text-lg sm:px-8 sm:py-4 shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
            View Projects
          </Button>
          <Button variant="outline" size="md" className="w-full sm:w-auto min-w-[160px] sm:min-w-[200px] sm:text-lg sm:px-8 sm:py-4 text-white border-white hover:bg-white hover:text-stone-900 hover:border-white shadow-lg backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-1">
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
    </section>
  );
}
