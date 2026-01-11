import { Eye, PlayCircle, TrendingUp, Users, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Live Account Monitoring",
    description: "Watch traders' accounts in real-time. See exactly how our strategy performs across different market conditions.",
  },
  {
    icon: PlayCircle,
    title: "Strategy Video Library",
    description: "Access our comprehensive video library with step-by-step tutorials on executing our proven trading strategy.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Growth",
    description: "Monitor your progress with detailed analytics. See your win rate, profit/loss, and performance metrics evolve.",
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Connect with fellow traders. Share experiences, discuss setups, and learn from the community's collective wisdom.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Learn proper position sizing and risk management techniques that protect your capital while maximizing gains.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Access daily market analysis and trade setups prepared by our experienced team of analysts.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From learning our strategy to tracking your progress, we provide all the tools for your trading journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
