import { HTMLMotionProps, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "link" | "white";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string; // Add className prop
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-hidden focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 border border-transparent",
    outline: "bg-transparent text-stone-900 border border-stone-300 hover:border-primary hover:text-primary hover:bg-stone-50",
    ghost: "bg-transparent text-stone-900 hover:bg-stone-100 border border-transparent",
    link: "text-stone-900 px-0 hover:underline border border-transparent underline-offset-4",
    white: "bg-white text-stone-900 hover:bg-stone-100 border border-transparent",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  // Adjust padding for link variant
  const sizeStyles = variant === "link" ? "p-0" : sizes[size];

  return (
    <motion.button
      whileHover={{ scale: variant !== "link" ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}
