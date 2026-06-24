import { cn } from "@/lib/utils";
import type { DietaryFlag, HeatLevel } from "@/types/menu";

const dietaryLabels: Record<DietaryFlag, string> = {
  GF: "GF",
  V:  "V",
  VE: "VE",
  DF: "DF",
  N:  "N",
};

interface DietaryBadgeProps {
  flags: DietaryFlag[];
  className?: string;
}

export function DietaryBadges({ flags, className }: DietaryBadgeProps) {
  if (!flags.length) return null;
  return (
    <span className={cn("flex items-center gap-1", className)}>
      {flags.map((f) => (
        <span
          key={f}
          className="font-body text-[0.6rem] tracking-widest uppercase text-bayou-cobalt border border-bayou-cobalt/35 px-1.5 py-0.5"
        >
          {dietaryLabels[f]}
        </span>
      ))}
    </span>
  );
}

interface HeatBadgeProps {
  level: HeatLevel;
  className?: string;
}

export function HeatBadge({ level, className }: HeatBadgeProps) {
  if (level === 0) return null;
  return (
    <span className={cn("flex items-center gap-0.5", className)} aria-label={`Heat level ${level} of 3`}>
      {Array.from({ length: 3 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "inline-block w-1.5 h-1.5 rounded-full transition-colors",
            i < level ? "bg-bayou-ember" : "bg-bayou-stone/25"
          )}
        />
      ))}
    </span>
  );
}
