import { ArrowUpRight, BarChart3, Heart, Users, Video } from "lucide-react";

const Results = () => {
  const caseStudies = [
    {
      title: "AI for Future - Organic Growth",
      metric: "0 → 160K Followers",
      description: "Built @ai.forfuture from scratch scaling from 0 to 160K+ across Instagram and Facebook using SEO, analytics, and content strategy",
      impact: [
        "160K+ followers (Aug 2024 - Present)",
        "100M+ total views achieved",
        "Managed cross-functional teams for community engagement"
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "InVideo AI Campaign",
      metric: "500K+ Impressions",
      description: "Executed 1-month social media campaign producing 50+ AI-driven short videos with strategic content planning",
      impact: [
        "500K+ impressions generated",
        "25% boost in engagement rates",
        "AI-powered content creation optimization"
      ],
      icon: Video,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DopeSquad D2C Brand",
      metric: "20% ROI Increase",
      description: "Managed Instagram, Facebook, and WhatsApp campaigns for campus merchandise brand with product launch strategy",
      impact: [
        "30% repeat purchase rate achieved",
        "INR 51+ revenue per user",
        "20% ROI increase through targeted content"
      ],
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Total Views", value: "100M+", icon: Video },
    { label: "Followers", value: "160K+", icon: Users },
    { label: "Client Growth", value: "20K+", icon: BarChart3 },
    { label: "Revenue Generated", value: "$3.6K", icon: Heart },
  ];

  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Results That <span className="text-gradient">Speak</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data-driven growth. Measurable impact. Real results.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform neon-glow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 md:p-10 hover:scale-[1.02] transition-all duration-300 neon-glow group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon & Metric */}
                  <div className="md:w-1/3">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <div className="text-3xl font-bold text-gradient">{study.metric}</div>
                  </div>

                  {/* Description & Impact */}
                  <div className="md:w-2/3 space-y-4">
                    <p className="text-lg text-muted-foreground">{study.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4" />
                        Key Impact
                      </h4>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center glass-card rounded-2xl p-8 neon-glow">
            <p className="text-xl text-muted-foreground mb-4">
              Want results like these for your brand?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-lg font-semibold"
            >
              Let's talk strategy
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
