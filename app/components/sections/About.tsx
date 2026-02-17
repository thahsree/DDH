import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/sketch.jpeg"
            alt="Interior Sketch"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Designing Spaces That Inspire and Endure
          </h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 leading-relaxed text-lg"
          >
            At D Design Hub, we believe that interior design is more than just arranging furniture—it's about creating environments that enhance the way you live and work. 
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-stone-600 leading-relaxed"
          >
            Founded on the principles of minimalism, elegance, and functionality, our team of dedicated designers works closely with you to bring your vision to life. From initial concept to final touches, we ensure every detail is perfect.
          </motion.p>
          
          <div className="pt-4">
            <Button variant="link" icon>
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
