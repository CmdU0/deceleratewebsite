import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestWriting from "@/components/LatestWriting";
import FeaturedWriters from "@/components/FeaturedWriters";
import ScrollingBlogs from "@/components/ScrollingBlogs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LatestWriting />
        <FeaturedWriters />
        <ScrollingBlogs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;