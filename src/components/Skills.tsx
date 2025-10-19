import { 
  BarChart3, 
  Brain, 
  Megaphone, 
  Palette, 
  TrendingUp, 
  Video, 
  Zap,
  Target,
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Strategy & Management",
      skills: [
        "Social Media Strategy",
        "Campaign Planning",
        "Audience Growth",
        "Analytics"
      ],
      icon: Target
    },
    {
      category: "Content Creation & Editing",
      skills: [
        "Reels, Shorts, Stories",
        "Memes & Blogs",
        "Canva, Premiere Pro, CapCut"
      ],
      icon: Video
    },
    {
      category: "Marketing & Growth",
      skills: [
        "Paid Ads (Facebook, Instagram)",
        "Hashtag Research",
        "Trend Analysis",
        "Growth Hacking"
      ],
      icon: Megaphone
    },
    {
      category: "Collaboration & Engagement",
      skills: [
        "Copywriting & Storytelling",
        "Community Engagement",
        "Brand Partnerships",
        "Content Research"
      ],
      icon: MessageSquare
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-spectrum social media expertise powered by AI and creativity
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 neon-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools & Platforms */}
          <div className="mt-16 glass-card rounded-2xl p-8 md:p-12 neon-glow">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Meta Business Suite",
                "HubSpot",
                "Hootsuite",
                "Buffer",
                "Google Analytics",
                "Canva",
                "Premiere Pro",
                "CapCut",
                "Facebook Ads Manager",
                "Instagram Ads"
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
