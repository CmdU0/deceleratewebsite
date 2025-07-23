import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-secondary/30 py-24 md:py-40 text-center animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A Space for Quiet Contemplation
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Decelerate is a modern media platform dedicated to thoughtful articles and blogs from a diverse range of voices.
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild className="rounded-full px-8 py-6 text-base font-semibold shadow-soft hover:shadow-soft-lg transition-shadow">
            <Link to="/blog">
              Start Reading <MoveRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;