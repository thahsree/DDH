import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const projects = [
  { id: 1, title: "Modern Loft", category: "Residential", image: "/modern loft.jpeg", size: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, title: "Minimalist Office", category: "Commercial", image: "/office design.jpeg", size: "col-span-1 md:col-span-1 row-span-1" },
  { id: 3, title: "Cozy Bedroom", category: "Residential", image: "/room2.jpeg", size: "col-span-1 md:col-span-1 row-span-1" },
  { id: 4, title: "Luxury Villa", category: "Residential", image: "/villa.jpeg", size: "col-span-1 md:col-span-1 row-span-1" },
  { id: 5, title: "Urban Cafe", category: "Commercial", image: "/cafe interior.jpeg", size: "col-span-1 md:col-span-1 row-span-1" },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="bg-stone-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Selected Projects</h3>
        </div>
        <p className="max-w-md text-stone-400 text-right md:text-left">
          A showcase of our finest work, demonstrating our commitment to quality and attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative group overflow-hidden rounded-xl bg-stone-800 ${project.size}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-stone-300 text-xs uppercase tracking-wider mb-1 text-primary">{project.category}</span>
              <h4 className="text-xl font-serif font-medium text-white">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
