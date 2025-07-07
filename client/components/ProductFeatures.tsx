import { Sparkles, Droplets, Clock, ShieldCheck } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: "Anti-Aging Formula",
    description:
      "Advanced peptides and retinol alternatives reduce fine lines and boost collagen production for youthful, firm skin.",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    description:
      "Hyaluronic acid and ceramides lock in moisture for 24-hour hydration, leaving skin plump and radiant.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Skin Health Boost",
    description:
      "Vitamin C and antioxidants protect against environmental damage while evening skin tone and texture.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: ShieldCheck,
    title: "Gentle Protection",
    description:
      "Dermatologist-tested formula suitable for sensitive skin, providing care without irritation.",
    gradient: "from-green-400 to-emerald-400",
  },
];

export function ProductFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transform Your Skin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our revolutionary skincare formula addresses your most common
            concerns with clinically proven ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blush-50 to-lavender-50 rounded-2xl p-8 border border-blush-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Clinically Proven Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <p className="text-sm text-muted-foreground">
                  Saw improved hydration in 7 days
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">87%</div>
                <p className="text-sm text-muted-foreground">
                  Noticed firmer skin in 2 weeks
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-sm text-muted-foreground">
                  Would recommend to a friend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
