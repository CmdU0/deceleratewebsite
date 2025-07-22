import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-background py-24 md:py-40 text-center animate-fade-in-up">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A Space for Quiet Contemplation
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Decelerate is a modern media platform dedicated to thoughtful articles and blogs from a diverse range of voices.
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <Link to="/blog">Start Reading</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;