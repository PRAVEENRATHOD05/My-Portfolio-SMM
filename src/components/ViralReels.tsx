import { ExternalLink, Eye, Heart, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ViralReels = () => {
  const viralContent = [
    {
      title: "AI Revolution Content",
      platform: "Instagram",
      views: "20M+",
      engagement: "500K+",
      description: "Viral reel breaking down the future of AI and its impact on the creator economy",
      link: "https://www.instagram.com/reel/DEz-rZ3OkGa/?igsh=NzlndWNvYzJnOWl0",
      embedId: "DEz-rZ3OkGa",
      stats: {
        views: "10M+",
        likes: "500K+",
        shares: "50K+"
      }
    },
    {
      title: "Trending AI Insights",
      platform: "Instagram",
      views: "8M+",
      engagement: "400K+",
      description: "Breaking down the latest AI trends and their real-world applications",
      link: "https://www.instagram.com/reel/DH0qSR4uvoF/?utm_source=ig_web_copy_link&igsh=OGhpa3hkZnZkdXNz",
      embedId: "DH0qSR4uvoF",
      stats: {
        views: "8M+",
        likes: "400K+",
        shares: "40K+"
      }
    },
    {
      title: "Content Strategy Mastery",
      platform: "Instagram",
      views: "7M+",
      engagement: "350K+",
      description: "Data-driven strategies that transformed engagement and follower growth",
      link: "https://www.instagram.com/reel/DEuZm8jxmI9/?utm_source=ig_web_copy_link&igsh=dHo3czhmaWZiOTU=",
      embedId: "DEuZm8jxmI9",
      stats: {
        views: "7M+",
        likes: "350K+",
        shares: "35K+"
      }
    },
    {
      title: "Viral Growth Tactics",
      platform: "Instagram",
      views: "9M+",
      engagement: "450K+",
      description: "How to engineer viral moments using trend analysis and timing",
      link: "https://www.instagram.com/reel/DBjLhV0oak1/?igsh=MThiODlzYzI4YzdmYQ==",
      embedId: "DBjLhV0oak1",
      stats: {
        views: "9M+",
        likes: "450K+",
        shares: "45K+"
      }
    },
    {
      title: "Creator Economy Insights",
      platform: "Instagram",
      views: "6M+",
      engagement: "300K+",
      description: "Understanding the future of content creation and monetization",
      link: "https://www.instagram.com/reel/C_DjMnnMoyO/?igsh=MWpkaXFldDd0MXI5bg==",
      embedId: "C_DjMnnMoyO",
      stats: {
        views: "6M+",
        likes: "300K+",
        shares: "30K+"
      }
    },
    {
      title: "Social Media Innovation",
      platform: "Instagram",
      views: "7.5M+",
      engagement: "375K+",
      description: "Innovative approaches to social media marketing and audience building",
      link: "https://www.instagram.com/reel/DBJqxxhy4LE/?igsh=aGRrZGp4Mjlncncw",
      embedId: "DBJqxxhy4LE",
      stats: {
        views: "7.5M+",
        likes: "375K+",
        shares: "37K+"
      }
    }
  ];

  return (
    <section id="viral-reels" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6 neon-glow">
              <TrendingUp className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold">Top Performing Content</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Viral <span className="text-gradient">Reels</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating content that doesn't just perform—it dominates
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>

          {/* Featured Reel - Embed */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-8 md:p-12 neon-glow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Featured Viral Content</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Instagram Embed */}
                <div className="relative w-full" style={{ minHeight: '500px' }}>
                  <div className="glass-card rounded-2xl overflow-hidden neon-glow h-full flex items-center justify-center">
                    <iframe
                      src={`https://www.instagram.com/reel/${viralContent[0].embedId}/embed`}
                      className="w-full h-[600px] border-0"
                      allowFullScreen
                      scrolling="no"
                      allow="encrypted-media"
                    />
                  </div>
                </div>

                {/* Content Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{viralContent[0].title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {viralContent[0].description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass-card rounded-xl p-4 text-center neon-glow">
                      <Eye className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gradient">{viralContent[0].stats.views}</div>
                      <div className="text-xs text-muted-foreground">Views</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 text-center neon-glow">
                      <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gradient">{viralContent[0].stats.likes}</div>
                      <div className="text-xs text-muted-foreground">Likes</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 text-center neon-glow">
                      <Share2 className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gradient">{viralContent[0].stats.shares}</div>
                      <div className="text-xs text-muted-foreground">Shares</div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow group"
                    asChild
                  >
                    <a href={viralContent[0].link} target="_blank" rel="noopener noreferrer">
                      View on Instagram
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* More Viral Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {viralContent.slice(1).map((content, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 neon-glow group"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{content.description}</p>
                </div>

                {/* Instagram Embed */}
                <div className="relative w-full mb-4" style={{ minHeight: '400px' }}>
                  <div className="glass-card rounded-xl overflow-hidden neon-glow h-full flex items-center justify-center">
                    <iframe
                      src={`https://www.instagram.com/reel/${content.embedId}/embed`}
                      className="w-full h-[500px] border-0"
                      allowFullScreen
                      scrolling="no"
                      allow="encrypted-media"
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{content.stats.views}</div>
                    <div className="text-xs text-muted-foreground">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{content.stats.likes}</div>
                    <div className="text-xs text-muted-foreground">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{content.stats.shares}</div>
                    <div className="text-xs text-muted-foreground">Shares</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full glass-card border-primary/50 hover:bg-primary/10 hover:border-primary"
                  asChild
                >
                  <a href={content.link} target="_blank" rel="noopener noreferrer">
                    View on Instagram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center glass-card rounded-2xl p-8 neon-glow">
            <p className="text-xl font-semibold mb-4">
              Want to create viral content like this?
            </p>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and make your brand go viral with data-driven strategies
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow-md"
              asChild
            >
              <a href="#contact">
                Get Started
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralReels;
