import { featuredWriters } from "@/data/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";

const FeaturedWriters = () => {
  return (
    <section className="py-16 sm:py-24 bg-background animate-fade-in-up [animation-delay:400ms]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
            Featured Writers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the voices shaping our community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWriters.map((writer) => (
            <Card key={writer.id} className="text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary/30">
              <Avatar className="w-24 h-24 mb-4 border-4 border-background">
                <AvatarImage src={writer.imageUrl} alt={writer.name} />
                <AvatarFallback>{writer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold font-serif">{writer.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 flex-grow">{writer.bio}</p>
              <Button variant="link" asChild className="mt-4">
                <Link to={`/writers/${writer.id}`}>View Profile</Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/writers">See All Writers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriters;