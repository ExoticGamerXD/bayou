import { cn } from "@/lib/utils";
import FleurDeLis from "./FleurDeLis";

interface BrassRuleProps {
  className?: string;
  ornament?: boolean;
}

export default function BrassRule({ className, ornament = false }: BrassRuleProps) {
  if (ornament) {
    return (
      <div className={cn("flex items-center gap-5", className)}>
        <div className="flex-1 brass-rule" />
        <FleurDeLis className="w-3.5 h-4 text-bayou-brass/55 flex-shrink-0" />
        <div className="flex-1 brass-rule" />
      </div>
    );
  }

  return <hr className={cn("brass-rule", className)} />;
}
