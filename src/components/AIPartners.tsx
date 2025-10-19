import { Sparkles, Zap, Star } from "lucide-react";

const AIPartners = () => {
  const partners = [
    { name: "InVideo AI", specialty: "AI Video Creation", impact: "Produced 50+ viral AI videos boosting engagement by 35%" },
    { name: "Higgsfield AI", specialty: "Creative AI Tools", impact: "Collaborated on tool testing and content strategy" },
    { name: "Emergent AI", specialty: "AI Innovation", impact: "Created AI-driven campaigns reaching 2M+ impressions" },
    { name: "MetaGPT X", specialty: "AI Automation", impact: "Developed automated social media content workflows" },
    { name: "Nemo Video.com", specialty: "Video AI Platform", impact: "Optimized video content pipeline for faster delivery" },
    { name: "Charmkey AI", specialty: "AI Solutions", impact: "Consulted on AI content strategy & audience growth" },
    { name: "Pippit AI", specialty: "AI Technology", impact: "Implemented AI solutions for trending content creation" },
  ];

  return (
    <section id="ai-partners" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/50 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Trusted Collaborations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            AI Companies We've Collaborated With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnering with industry-leading AI platforms to deliver cutting-edge content solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 neon-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <Star className="h-5 w-5 text-primary animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {partner.specialty}
                </p>
                <p className="text-sm text-foreground/80">
                  {partner.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass-card rounded-2xl p-8 neon-glow">
          <p className="text-lg text-muted-foreground">
            Ready to leverage AI for your brand?{" "}
            <a 
              href="#contact" 
              className="text-primary hover:underline font-semibold"
            >
              Let's collaborate
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIPartners;
