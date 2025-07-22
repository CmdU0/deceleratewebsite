import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredWriters } from "@/data/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Writers = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center my-8">
            <h1 className="text-4xl font-bold font-serif">Our Writers</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who share their thoughts and stories on Decelerate.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default Writers;