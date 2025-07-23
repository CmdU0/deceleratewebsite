import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">
              A modern media platform for quiet contemplation and thoughtful articles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Navigate</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/writers" className="text-sm text-muted-foreground hover:text-primary">Writers</Link></li>
                <li><Link to="/anonymous" className="text-sm text-muted-foreground hover:text-primary">Anonymous</Link></li>
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-3">
                {legalLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold text-foreground">Subscribe to our newsletter</h3>
              <p className="text-sm text-muted-foreground mt-4">Get the latest posts and updates delivered to your inbox.</p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Decelerate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;