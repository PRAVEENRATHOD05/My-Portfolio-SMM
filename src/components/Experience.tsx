import { Briefcase, Calendar, MapPin, TrendingUp, Users, DollarSign } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Founder and Creator",
      company: "AI for Future",
      platform: "Instagram & Facebook",
      duration: "Aug 2024 – Present",
      location: "Remote",
      highlights: [
        "Developed and executed growth plans, scaling audience from 0 to 160K+ across Instagram and Facebook",
        "Created more than 150 AI-focused content pieces while optimizing engagement using analytics and insights",
        "Achieved over 100M views, improving audience retention using SEO, analytics, and content strategy techniques",
        "Managed collaborations and coordinated cross-functional teams to foster community engagement and outcomes"
      ],
      icon: TrendingUp
    },
    {
      role: "Freelance Social Media Manager",
      company: "Gen3ative",
      platform: "Remote, USA",
      duration: "March 2025 – May 2025",
      location: "Remote",
      highlights: [
        "Designed and executed content strategies, growing client pages by more than 20K followers within 2 months",
        "Produced viral short-form videos that achieved over 500K views, boosting overall audience engagement",
        "Handled paid ad campaigns efficiently, optimizing ROI and reducing cost per click (CPC) by 25%",
        "Developed brand identity and storytelling frameworks to improve reach and client account performance"
      ],
      icon: Users
    },
    {
      role: "Social Media Manager Intern",
      company: "Arising Aaina",
      platform: "Remote",
      duration: "Oct 2025 – Present",
      location: "Remote",
      highlights: [
        "Managed the brand's Instagram and Facebook presence, creating engaging content to attract and retain followers",
        "Planned and scheduled posts, reels, and campaigns tailored to the target audience",
        "Reached out to influencers via DMs and cold emails, securing collaborations to boost visibility",
        "Analyzed social media insights to optimize strategies and align content with brand storytelling"
      ],
      icon: Briefcase
    }
  ];

  const projects = [
    {
      title: "Social Media & Growth Project",
      client: "DopeSquad",
      description: "Campus Merchandise D2C Brand",
      platforms: "Instagram, Facebook, WhatsApp",
      highlights: [
        "Managed Instagram, Facebook, and WhatsApp campaigns, boosting brand awareness and engagement",
        "Executed product launches with high engagement, achieving 30% repeat purchases and INR 5L+ revenue",
        "Used analytics to optimize posting schedules and improve audience reach",
        "Coordinated content, design, and marketing teams, ensuring brand consistency and effective promotion strategies"
      ],
      icon: DollarSign
    },
    {
      title: "Social Media Campaign",
      client: "InVideo AI",
      description: "Instagram, Facebook, YouTube",
      platforms: "Aug 2025 – Sep 2025",
      highlights: [
        "Executed a 1-month social media campaign in collaboration with InVideo AI, producing 30+ AI-driven short videos",
        "Achieved 500k+ impressions and boosted engagement rates by 25% through strategic content planning",
        "Applied AI-powered content creation tools for storytelling, trend adaptation, and performance optimization",
        "Strengthened brand collaboration experience by aligning campaign goals with InVideo AI's marketing objectives"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building brands, growing audiences, and delivering measurable results through strategic social media management and AI-powered content creation.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300 neon-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="p-3 rounded-lg bg-primary/10 mt-1">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.platform}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="text-gradient">Projects</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300 neon-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <project.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                    <p className="text-lg text-primary font-semibold">{project.client}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <p className="text-sm text-muted-foreground mt-1">{project.platforms}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
