import { Brain, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Driven Strategy",
      description: "Combining creativity with data analytics to create content that resonates"
    },
    {
      icon: TrendingUp,
      title: "Growth Expert",
      description: "Proven track record of 0 to 160K+ organic growth across platforms"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Building engaged communities through authentic storytelling"
    },
    {
      icon: Zap,
      title: "Trend Mapper",
      description: "Early trend adoption and viral content creation specialist"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: About + Achievements */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                I'm <span className="font-semibold">Rathod Praveen Kumar</span>, founder of <span className="text-primary font-semibold">@ai.forfuture</span>. 
                I specialize in creating high-impact social media strategies that grow audiences, engage communities, and amplify brand presence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the last few years, I’ve grown my Instagram from 0 → <span className="text-primary">160K+ followers</span> and generated <span className="text-primary">100M+ views</span> across content platforms. 
                I’ve helped global clients increase engagement, optimize content strategy, and achieve measurable ROI through data-driven campaigns.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise includes <span className="text-primary">social media strategy</span>, <span className="text-primary">content creation</span>, <span className="text-primary">paid campaigns</span>, <span className="text-primary">community building</span>, and <span className="text-primary">trend spotting</span>. 
                Tools I use daily: Canva, Photoshop, Premiere Pro, CapCut, Buffer, and Meta Business Suite.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in blending <span className="text-accent">creativity with analytics</span> to create content that doesn’t just perform—it resonates. 
                Whether it’s launching viral campaigns or nurturing engaged communities, I focus on measurable impact and sustainable growth.
              </p>
            </div>

            {/* Right: Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 neon-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center neon-glow mb-12">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-gradient mb-4">
              "In the age of AI, authenticity is your superpower. I help brands find their voice and amplify it with data-driven strategies."
            </blockquote>
            <p className="text-muted-foreground">— Rathod Praveen Kumar</p>
          </div>

          {/* Relevant Coursework */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Relevant <span className="text-gradient">Coursework</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Digital Marketing",
                "Social Media Marketing",
                "Social Media Analytics",
                "Content Strategy",
                "Brand Management",
                "Graphic Design (Canva, Photoshop)",
                "Video Editing (Premiere Pro, CapCut)",
                "Communication Skills"
              ].map((course, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
