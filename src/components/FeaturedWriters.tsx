import { featuredWriters } from "@/data/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

const FeaturedWriters = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30 animate-fade-in-up [animation-delay:400ms]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Writers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the voices shaping our community and explore their unique perspectives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWriters.map((writer) => (
            <Card key={writer.id} className="text-center flex flex-col items-center p-8 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-2 rounded-2xl shadow-soft">
              <Avatar className="w-28 h-28 mb-6 border-4 border-background">
                <AvatarImage src={writer.imageUrl} alt={writer.name} />
                <AvatarFallback>{writer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{writer.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-grow">{writer.bio}</p>
              <Button variant="link" asChild className="mt-6 text-primary font-semibold">
                <Link to={`/writers/${writer.id}`}>View Profile</Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" asChild className="rounded-full px-8 py-6 text-base font-semibold shadow-soft hover:shadow-soft-lg transition-shadow">
            <Link to="/writers">
              See All Writers <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriters;