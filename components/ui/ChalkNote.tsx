import { cn } from "@/lib/utils";

interface ChalkNoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChalkNote({ children, className }: ChalkNoteProps) {
  return (
    <span
      className={cn(
        "font-script text-bayou-stone text-lg leading-none",
        className
      )}
    >
      {children}
    </span>
  );
}
