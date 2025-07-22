import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-serif text-center my-8">About Decelerate</h1>
        <div className="max-w-2xl mx-auto text-lg text-muted-foreground space-y-4">
            <p>Decelerate is a sanctuary for the written word in a world that moves too fast. We believe in the power of thoughtful, long-form content to inspire reflection and foster deeper understanding.</p>
            <p>Our platform features work from both established writers and anonymous contributors, creating a diverse tapestry of perspectives. We are committed to clean, minimalist design to ensure the focus remains on the stories being told.</p>
            <p>This page is under construction. More about our mission and team coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;