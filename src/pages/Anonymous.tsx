import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { anonymousPosts } from "@/data/mock";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "@/components/ImageWithFallback";

const Anonymous = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold font-serif">From the Anonymous</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Unfiltered thoughts and stories, shared in confidence. Explore the
            depths of shared human experience, without a name attached.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
          {anonymousPosts.map((post) => (
            <Link
              to={`/anonymous/${post.slug}`}
              key={post.id}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="overflow-hidden aspect-[16/9]">
                    <ImageWithFallback
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-serif leading-snug">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-3 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Anonymous;