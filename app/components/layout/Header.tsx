"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
    setIsMobileMenuOpen(false);
  };

  // Force solid background on non-home pages or if scrolled
  const showSolidBackground = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBackground ? "bg-white shadow-xs py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-3xl font-branding font-bold tracking-tight z-50 text-primary hover:text-primary/80 transition-colors">
          <span className="hidden md:block">D Design Hub</span>
          <span className="md:hidden">DDH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors group ${
                showSolidBackground ? "text-stone-600 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                showSolidBackground ? "bg-primary" : "bg-white"
              }`} />
            </Link>
          ))}
          <Button variant={showSolidBackground ? "primary" : "white"} size="sm" onClick={handleScrollToContact}>
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 p-2 transition-colors ${
            showSolidBackground || isMobileMenuOpen ? "text-stone-900" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <nav className="flex flex-col items-center gap-8 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative font-medium text-stone-900 hover:text-primary font-serif text-2xl group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleScrollToContact}
                >
                  Get a Quote
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
