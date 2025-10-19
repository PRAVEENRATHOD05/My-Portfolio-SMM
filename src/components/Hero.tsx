import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/avatar.png";
import heroImg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-glow" />
              <img 
                src={avatarImg} 
                alt="Praveen Rathod" 
                className="relative w-32 h-32 rounded-full border-4 border-primary object-cover neon-glow"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turning brands into{" "}
            <span className="text-gradient">movements</span>
            <br />
            through storytelling and strategy
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Social Media Manager | AI Content Strategist | Digital Marketing Expert
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-8">
            <div className="glass-card rounded-xl px-8 py-4 neon-glow">
              <div className="text-4xl font-bold text-gradient">160K+</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="glass-card rounded-xl px-8 py-4 neon-glow">
              <div className="text-4xl font-bold text-gradient">100M+</div>
              <div className="text-sm text-muted-foreground">Views</div>
            </div>
            <div className="glass-card rounded-xl px-8 py-4 neon-glow">
              <div className="text-4xl font-bold text-gradient">IIT</div>
              <div className="text-sm text-muted-foreground">Dhanbad Student</div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 neon-glow-md"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Let's Collaborate
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
