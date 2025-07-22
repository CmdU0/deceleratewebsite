import { Link } from "react-router-dom";
import Logo from "./Logo";

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
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo imgClassName="h-10" />
            <p className="text-muted-foreground text-sm">
              A space for quiet contemplation.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/writers" className="text-sm text-muted-foreground hover:text-primary">Writers</Link></li>
                <li><Link to="/anonymous" className="text-sm text-muted-foreground hover:text-primary">Anonymous</Link></li>
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-2">
                {socialLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Decelerate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;