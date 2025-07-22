import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredWriters, latestPosts } from "@/data/mock";
import NotFound from "./NotFound";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const WriterProfile = () => {
  const { id } = useParams<{ id: string }>();
  const writer = featuredWriters.find((w) => w.id.toString() === id);
  const writerPosts = latestPosts.filter((p) => p.author === writer?.name);

  if (!writer) {
    return <NotFound />;
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 shadow-lg">
            <AvatarImage src={writer.imageUrl} alt={writer.name} />
            <AvatarFallback className="text-4xl">{writer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">{writer.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{writer.bio}</p>
          </div>
        </header>

        <section>
          <h2 className="text-3xl font-bold font-serif mb-8">Writings by {writer.name}</h2>
          {writerPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {writerPosts.map((post) => (
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
                      <CardTitle className="text-xl font-serif leading-snug">
                        {post.title}
                      </CardTitle>
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
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">No posts found for this writer yet.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WriterProfile;