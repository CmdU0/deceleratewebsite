import { Link } from "react-router-dom";
import { latestPosts, Post } from "@/data/mock";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";
import React from "react";

const PostCard = ({ post }: { post: Post }) => (
  <Link to={`/posts/${post.slug}`} className="group w-[300px] flex-shrink-0">
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="overflow-hidden aspect-video">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{post.category}</p>
        <CardTitle className="text-md leading-snug mt-1">{post.title}</CardTitle>
      </div>
    </Card>
  </Link>
);

const Scroller = ({ children, direction, speed }: { children: React.ReactNode, direction: 'left' | 'right', speed: 'normal' | 'fast' }) => (
  <div className="overflow-hidden group" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
    <div
      className={cn(
        "flex gap-4 py-4",
        "min-w-full w-max",
        "group-hover:[animation-play-state:paused]",
        direction === 'left' && (speed === 'fast' ? 'animate-scroll-left-fast' : 'animate-scroll-left-normal'),
        direction === 'right' && (speed === 'fast' ? 'animate-scroll-right-fast' : 'animate-scroll-right-normal')
      )}
    >
      {children}
    </div>
  </div>
);

const ScrollingBlogs = () => {
  const isMobile = useIsMobile();
  
  const row1 = (
    <>
      {latestPosts.map((post) => <PostCard key={post.id} post={post} />)}
      {latestPosts.map((post) => <PostCard key={`${post.id}-clone`} post={post} />)}
    </>
  );

  const row2 = (
    <>
      {latestPosts.map((post) => <PostCard key={post.id} post={post} />)}
      {latestPosts.map((post) => <PostCard key={`${post.id}-clone`} post={post} />)}
    </>
  );

  return (
    <section className="py-16 sm:py-24 bg-secondary/50 animate-fade-in-up [animation-delay:600ms]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
            From the Blog
          </h2>
          <Button asChild variant="secondary">
            <Link to="/blog">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <Scroller direction="left" speed={isMobile ? 'fast' : 'normal'}>
          {row1}
        </Scroller>
        <Scroller direction="right" speed={isMobile ? 'fast' : 'normal'}>
          {row2}
        </Scroller>
      </div>
    </section>
  );
};

export default ScrollingBlogs;