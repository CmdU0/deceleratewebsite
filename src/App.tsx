import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Anonymous from "./pages/Anonymous";
import About from "./pages/About";
import Post from "./pages/Post";
import AnonymousPost from "./pages/AnonymousPost";
import Writers from "./pages/Writers";
import WriterProfile from "./pages/WriterProfile";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/writers/:id" element={<WriterProfile />} />
          <Route path="/anonymous" element={<Anonymous />} />
          <Route path="/anonymous/:slug" element={<AnonymousPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;