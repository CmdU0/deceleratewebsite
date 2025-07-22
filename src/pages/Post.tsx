import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { latestPosts, featuredWriters } from "@/data/mock";
import NotFound from "./NotFound";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageWithFallback from "@/components/ImageWithFallback";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = latestPosts.find((p) => p.slug === slug);
  const writer = featuredWriters.find(w => w.name === post?.author);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow animate-fade-in-up">
        <article>
          <header className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center py-12 md:py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">{post.title}</h1>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={writer?.imageUrl} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </header>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
             <div className="overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback src={post.imageUrl} alt={post.title} className="w-full aspect-[16/9] object-cover" />
             </div>
          </div>
          <div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12 prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-headings:font-serif"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Post;