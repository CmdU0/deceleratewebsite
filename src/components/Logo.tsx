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
    <Link to="/" onClick={handleLogoClick} className={cn("flex items-center", containerClassName)}>
      <img src="https://i.ibb.co/tYvGzHj/where-the-story-be-GINS-3000-x-1350-px-1.webp" alt="Decelerate Logo" className="h-8 w-auto" />
    </Link>
  );
};

export default Logo;