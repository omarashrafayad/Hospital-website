import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  variant?: "light" | "dark" | "accent";
}

export default function ServiceCard({ title, description, Icon, href, variant = "light" }: ServiceCardProps) {
  const styles = {
    light: "bg-card text-card-foreground border-border/50",
    dark: "bg-primary text-primary-foreground border-primary",
    accent: "bg-accent text-accent-foreground border-accent",
  };

  return (
    <Card className={`p-10 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:shadow-xl group ${styles[variant]}`}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className={`mb-8 p-3 rounded-full w-fit transition-colors ${variant === "dark" ? "bg-white/10" : "bg-primary/5 group-hover:bg-accent/20"}`}>
          <Icon size={28} className={variant === "light" ? "text-primary" : "text-white"} />
        </div>
        <h3 className={`text-2xl font-serif mb-4 font-medium ${variant === "dark" ? "text-white" : "text-primary"}`}>{title}</h3>
        <p className={`text-sm leading-relaxed mb-8 flex-grow ${variant === "dark" ? "text-gray-300" : "text-muted-foreground"}`}>
          {description}
        </p>
        <Link 
          href={href} 
          className={`inline-flex items-center text-sm font-semibold transition-transform group-hover:translate-x-1 ${variant === "dark" ? "text-accent" : "text-primary"}`}
        >
          Learn More <ArrowRight size={16} className="ml-2" />
        </Link>
      </CardContent>
    </Card>
  );
}
