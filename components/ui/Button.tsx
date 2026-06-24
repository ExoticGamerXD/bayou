"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variantClasses = {
  // Brass fill — pops on both cream and teal backgrounds
  primary: [
    "bg-bayou-brass text-bayou-teal-deep border border-bayou-brass font-semibold shadow-card",
    "hover:bg-bayou-brass-light hover:shadow-card-hover hover:-translate-y-0.5",
    "active:bg-bayou-brass-dim active:translate-y-0 active:shadow-card",
    "disabled:bg-bayou-stone disabled:text-bayou-cream disabled:cursor-not-allowed disabled:opacity-50 disabled:-translate-y-0",
  ].join(" "),

  // Brass outline — legible on light and dark sections alike
  secondary: [
    "bg-transparent text-bayou-brass border border-bayou-brass/70",
    "hover:border-bayou-brass hover:bg-bayou-brass/10 hover:-translate-y-0.5",
    "active:bg-bayou-brass/20 active:translate-y-0",
  ].join(" "),

  ghost: [
    "bg-transparent text-current border-none px-0 link-draw opacity-80",
    "hover:opacity-100",
  ].join(" "),
};

const sizeClasses = {
  sm: "px-6 py-2.5 text-label-lg",
  md: "px-10 py-3.5 text-label-lg",
  lg: "px-12 py-4 text-body-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, className, children, ...props }, ref) => {
    const base = cn(
      "inline-flex items-center justify-center gap-2",
      "font-body font-medium tracking-[0.15em] uppercase rounded-none",
      "transition-all duration-300 ease-out-smooth cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-bayou-brass focus-visible:outline-offset-2",
      variantClasses[variant],
      variant !== "ghost" && sizeClasses[size],
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={base}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={base} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
