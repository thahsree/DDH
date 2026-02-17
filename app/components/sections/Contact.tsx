import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-[#080808] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Info */}
        <div className="space-y-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-primary/90 uppercase tracking-[0.2em] mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Let's Discuss Your <br className="hidden md:block" />
              <span className="text-stone-400">Next Project</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-stone-300 text-lg leading-relaxed max-w-lg"
            >
              Ready to start your journey to a beautiful space? Fill out the form, and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-5 group"
            >
              <div className="p-3 rounded-full bg-stone-900 border border-stone-800 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="font-bold text-white text-lg mb-1">Address</h5>
                <p className="text-stone-400">123 Design Avenue, Creative District, NY 10001</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-5 group"
            >
              <div className="p-3 rounded-full bg-stone-900 border border-stone-800 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h5 className="font-bold text-white text-lg mb-1">Email</h5>
                <p className="text-stone-400">hello@ddesignhub.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start gap-5 group"
            >
              <div className="p-3 rounded-full bg-stone-900 border border-stone-800 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h5 className="font-bold text-white text-lg mb-1">Phone</h5>
                <p className="text-stone-400">+1 (555) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <form
            className="space-y-5 md:space-y-6 p-6 md:p-10 bg-stone-900/40 backdrop-blur-md rounded-3xl border border-stone-800/50 shadow-2xl"
            onSubmit={(e:any) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-stone-300 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-stone-800 bg-black/40 text-white placeholder-stone-600 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-300 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-stone-800 bg-black/40 text-white placeholder-stone-600 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-stone-300 ml-1">Subject</label>
              <div className="relative">
                <select
                  id="subject"
                  className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-stone-800 bg-black/40 text-white focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none font-light"
                >
                  <option className="bg-stone-900">General Inquiry</option>
                  <option className="bg-stone-900">Residential Design</option>
                  <option className="bg-stone-900">Commercial Design</option>
                  <option className="bg-stone-900">Consultation</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-stone-300 ml-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-stone-800 bg-black/40 text-white placeholder-stone-600 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none font-light"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button type="submit" className="w-full py-3 md:py-4 text-base md:text-lg shadow-lg shadow-primary/10 hover:shadow-primary/20">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
