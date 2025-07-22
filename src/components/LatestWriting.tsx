import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { latestPosts } from "@/data/mock";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

const LatestWriting = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50 animate-fade-in-up [animation-delay:200ms]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Writing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our most recent articles and musings.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.slice(0, 3).map((post) => (
            <Link to={`/posts/${post.slug}`} key={post.id} className="group">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 border-transparent hover:border-primary/20 hover:shadow-xl hover:-translate-y-1">
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
                  <CardTitle className="text-xl leading-snug">
                    {post.title}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWriting;