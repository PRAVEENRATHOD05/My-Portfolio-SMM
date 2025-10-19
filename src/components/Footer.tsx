import { Heart, Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/ai.forfuture", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@ai.forfuture", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/14vTUcsaVk/", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/in/rathod-praveen-kumar", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ai_forfuture", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Rathod Praveen Kumar</h3>
              <p className="text-muted-foreground mb-4">
                Social Media Manager, AI Content Strategist & Digital Marketing Expert
              </p>
              <p className="text-sm text-muted-foreground">
                IIT Dhanbad • Founder of @ai.forfuture • 160K+ Community
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Connect</h4>
              <div className="flex gap-4 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all neon-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Available for collaborations and projects
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Rathod Praveen Kumar. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-primary fill-primary" /> using AI & Creativity
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
