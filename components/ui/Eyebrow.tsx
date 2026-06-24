import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function Eyebrow({ children, className, light }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-body text-label-sm uppercase tracking-[0.25em]",
        light ? "text-bayou-cream/60" : "text-bayou-brass",
        className
      )}
    >
      {children}
    </p>
  );
}
