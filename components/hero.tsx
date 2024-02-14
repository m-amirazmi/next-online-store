import { cn } from "@/lib/utils";

interface HeroProps {
  size?: "small" | "medium" | "large";
}

export default function Hero({ size = "large" }: HeroProps) {
  const sizes = {
    small: "h-[200px]",
    medium: "h-[350px]",
    large: "h-[500px]",
  };
  return (
    <div className={cn("bg-gray-100 rounded-md", sizes[size])}>
      <div className="w-full h-full flex items-center justify-center">
        Hero Section
      </div>
    </div>
  );
}
