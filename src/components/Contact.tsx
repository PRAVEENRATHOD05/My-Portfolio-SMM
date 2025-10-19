import { Mail, Instagram, Linkedin, Twitter, ArrowRight, Sparkles, Youtube, Facebook, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "praveenofficial783@gmail.com",
      href: "mailto:praveenofficial783@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9014204594",
      href: "tel:+919014204594",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@ai.forfuture",
      href: "https://www.instagram.com/ai.forfuture",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@ai.forfuture",
      href: "https://youtube.com/@ai.forfuture",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Facebook Page",
      href: "https://www.facebook.com/share/14vTUcsaVk/",
      color: "from-blue-700 to-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://linkedin.com/in/rathod-praveen-kumar",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter (X)",
      value: "@ai_forfuture",
      href: "https://x.com/ai_forfuture",
      color: "from-gray-800 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your social media presence? Let's create something amazing together.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>

          {/* Main Contact Card */}
          <div className="glass-card rounded-3xl p-12 md:p-16 neon-glow-md mb-12 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            <div className="relative z-10">
              {/* CTA */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6 neon-glow">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Available for Projects</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Grow Together 🚀
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're a brand looking to scale or a creator wanting to break through, 
                  I'm here to help you achieve your goals with proven strategies and AI-powered insights.
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 neon-glow group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{method.label}</div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {method.value}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Primary CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 py-6 neon-glow-md group"
                  asChild
                >
                  <a href="mailto:praveenofficial783@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Me a Message
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              Powered by creativity, fueled by data.
            </p>
            <p className="text-muted-foreground">
              Let's turn your vision into reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
