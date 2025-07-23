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
    <section className="py-16 sm:py-24 bg-background animate-fade-in-up [animation-delay:200ms]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Writing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most recent articles and musings from our talented writers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.slice(0, 3).map((post) => (
            <Link to={`/posts/${post.slug}`} key={post.id} className="group">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 rounded-2xl">
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
                  <p className="text-sm text-primary font-semibold">{post.category}</p>
                  <CardTitle className="text-xl leading-snug mt-2">
                    {post.title}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
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