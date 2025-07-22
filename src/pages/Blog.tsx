import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { latestPosts } from "@/data/mock";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "@/components/ImageWithFallback";

const Blog = () => {
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [...new Set(latestPosts.map((p) => p.category))];

  const displayedPosts = useMemo(() => {
    let filteredPosts = [...latestPosts];

    // Filter by category
    if (selectedCategory !== "all") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === selectedCategory
      );
    }

    // Sort posts
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (sortOrder === "newest") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    return filteredPosts;
  }, [sortOrder, selectedCategory]);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold font-serif">All Articles</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stories, insights, and reflections.
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-12">
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
          {displayedPosts.map((post) => (
            <Link to={`/posts/${post.slug}`} key={post.id} className="group">
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {post.category}
                  </p>
                  <CardTitle className="text-xl font-serif leading-snug mt-1">
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
      </main>
      <Footer />
    </div>
  );
};

export default Blog;