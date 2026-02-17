import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "D Design Hub transformed our outdated living room into a modern sanctuary. The attention to detail was incredible.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    text: "Our office now reflects our brand's innovation perfectly. The team was professional, creative, and efficient.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    name: "Elena Rodriguez",
    role: "Villa Owner",
    text: "I was blown away by how they managed to blend luxury with comfort. Highly recommended for anyone looking for premium design.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-stone-50">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3"
        >
          Client Stories
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-serif font-bold text-stone-900"
        >
          What Our Clients Say
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xs relative flex flex-col h-full"
          >
            <Quote className="absolute top-8 left-8 text-stone-200 w-12 h-12 -z-0" />
            <p className="text-stone-600 italic mb-6 relative z-10 pt-12">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h4 className="font-serif font-bold text-stone-900">{testimonial.name}</h4>
                <span className="text-xs text-stone-400 uppercase tracking-wider">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
