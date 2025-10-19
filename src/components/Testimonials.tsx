import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gen3ative Team",
      role: "Remote Client, USA",
      content: "Praveen grew our client pages by 20K+ followers in just 2 months! His viral short-form videos achieved over 500K views and he optimized our ad campaigns, reducing CPC by 25%. Exceptional results!",
      rating: 5,
      avatar: "GA"
    },
    {
      name: "DopeSquad",
      role: "Campus Merchandise D2C Brand",
      content: "Working with Praveen transformed our social presence. He achieved 30% repeat purchases, INR 51+ revenue per user, and boosted our ROI by 20% through targeted content strategies.",
      rating: 5,
      avatar: "DS"
    },
    {
      name: "InVideo AI",
      role: "AI Video Platform",
      content: "Praveen's campaign generated 500K+ impressions and boosted engagement by 25%. His strategic use of AI-powered content tools and trend adaptation delivered outstanding results.",
      rating: 5,
      avatar: "IV"
    },
    {
      name: "Arising Aaina",
      role: "Social Media Brand",
      content: "Praveen manages our Instagram and Facebook with engaging content that retains followers. His influencer outreach and data-driven insights have significantly boosted our visibility and engagement.",
      rating: 5,
      avatar: "AA"
    }
  ];

  const socialProof = [
    { metric: "$3.6K", label: "Earned in 2 Months" },
    { metric: "160K+", label: "Community Built" },
    { metric: "100M+", label: "Total Views" },
    { metric: "30%", label: "Repeat Purchases" }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it—hear from brands that have grown with me
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {socialProof.map((item, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 text-center neon-glow"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 neon-glow"
              >
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 glass-card rounded-2xl p-8 text-center neon-glow">
            <p className="text-2xl font-semibold text-gradient mb-4">
              "Every client's success is a testament to what's possible when creativity meets data."
            </p>
            <p className="text-muted-foreground">
              Ready to write your success story?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
