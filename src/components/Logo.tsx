"use client"

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  imgClassName?: string; // This prop will be ignored but kept for compatibility
  containerClassName?: string;
}

const Logo = ({ containerClassName }: LogoProps) => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link to="/" onClick={handleLogoClick} className={cn("font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors", containerClassName)}>
      Decelerate
    </Link>
  );
};

export default Logo;