import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";

const benefits = [
  "Step-by-step video tutorials",
  "Live trading sessions",
  "Real-time market analysis",
  "Direct feedback on your trades",
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Learn Our <span className="text-gradient">Winning Strategy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our proprietary trading strategy has been refined over years of market experience. 
              Through our comprehensive video library, you'll learn exactly how to identify 
              high-probability setups and execute trades with confidence.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg">
              <Play className="w-5 h-5" />
              Start Watching
            </Button>
          </div>

          {/* Video Preview Card */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden card-gradient border border-border glow-primary">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                <button className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300 glow-primary-strong">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
              </div>
              
              {/* Decorative Chart Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 225">
                <path
                  d="M0 180 Q50 170, 100 140 T200 120 T300 80 T400 60"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 200 Q80 190, 150 160 T250 130 T350 100 T400 90"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass animate-float">
              <div className="text-sm font-semibold text-primary">+24.5%</div>
              <div className="text-xs text-muted-foreground">This Week</div>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-sm font-semibold text-primary">150+ Videos</div>
              <div className="text-xs text-muted-foreground">Available Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
