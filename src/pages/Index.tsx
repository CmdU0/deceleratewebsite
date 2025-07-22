import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestWriting from "@/components/LatestWriting";
import Footer from "@/components/Footer";
import ScrollingBlogs from "@/components/ScrollingBlogs";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LatestWriting />
        <ScrollingBlogs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;