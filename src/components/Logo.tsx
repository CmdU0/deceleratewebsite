"use client"

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
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
    <Link to="/" onClick={handleLogoClick} className={cn("text-2xl font-bold font-serif text-foreground hover:text-primary transition-colors", containerClassName)}>
      Decelerate
    </Link>
  );
};

export default Logo;