import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { anonymousPosts } from "@/data/mock";
import NotFound from "./NotFound";
import ImageWithFallback from "@/components/ImageWithFallback";

const AnonymousPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = anonymousPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center py-12 md:py-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              An Anonymous Submission
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mt-4">{post.title}</h1>
            <p className="mt-6 text-muted-foreground">{post.date}</p>
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

export default AnonymousPost;