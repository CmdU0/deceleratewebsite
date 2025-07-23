import { Link } from "react-router-dom";
import { latestPosts, Post } from "@/data/mock";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";
import React from "react";

const PostCard = ({ post }: { post: Post }) => (
  <Link to={`/posts/${post.slug}`} className="group w-[300px] md:w-[350px] flex-shrink-0">
    <Card className="overflow-hidden h-full transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 rounded-2xl">
      <CardHeader className="p-0">
        <div className="overflow-hidden aspect-video">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{post.category}</p>
        <CardTitle className="text-lg font-serif leading-snug mt-1">{post.title}</CardTitle>
      </div>
    </Card>
  </Link>
);

const Scroller = ({ children, direction, speed }: { children: React.ReactNode, direction: 'left' | 'right', speed: 'normal' | 'fast' }) => (
  <div className="overflow-hidden group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
    <div
      className={cn(
        "flex gap-8 py-4",
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
      {[...latestPosts].reverse().map((post) => <PostCard key={post.id} post={post} />)}
      {[...latestPosts].reverse().map((post) => <PostCard key={`${post.id}-clone`} post={post} />)}
    </>
  );

  return (
    <section className="py-16 sm:py-24 bg-background animate-fade-in-up [animation-delay:600ms]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            From the Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A continuous stream of consciousness. Dive into our world of ideas.
          </p>
        </div>
      </div>
      <div className="space-y-8">
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