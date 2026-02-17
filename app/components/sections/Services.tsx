import { motion } from "framer-motion";
import { Coffee, Home, Layout, PenTool } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Creating warm, inviting homes that reflect your personal style and meet your family's needs.",
  },
  {
    icon: Layout,
    title: "Commercial Spaces",
    description: "Designing productive and inspiring work environments that enhance brand identity and employee well-being.",
  },
  {
    icon: PenTool,
    title: "Custom Furniture",
    description: "Crafting bespoke furniture pieces that perfectly fit your space and functional requirements.",
  },
  {
    icon: Coffee,
    title: "Consultation",
    description: "Expert advice on color palettes, material selection, and layout optimization for your DIY projects.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3"
        >
          Our Expertise
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-serif font-bold text-stone-900"
        >
          Tailored Design Solutions
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6 text-stone-900" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-stone-900 mb-3">{service.title}</h4>
            <p className="text-stone-600 leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
