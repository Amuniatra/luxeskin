import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VerificationModal } from "@/components/VerificationModal";
import { ReviewModal } from "@/components/ReviewModal";
import { ProductFeatures } from "@/components/ProductFeatures";
import {
  Heart,
  Star,
  Users,
  ShoppingBag,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const [showVerification, setShowVerification] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleGetStarted = () => {
    setShowVerification(true);
  };

  const handleVerificationComplete = () => {
    setIsVerified(true);
    setShowReview(true);
  };

  const handleReviewSubmitted = () => {
    // Redirect to CPA offer
    window.location.href =
      "https://d2jgih9urxpa47.cloudfront.net/public/locker.php?it=4523307&key=a95c2";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blush-50/30 to-lavender-50/30">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blush-500 to-primary rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">LuxeSkin</span>
          </div>
          <Badge
            variant="secondary"
            className="bg-blush-100 text-blush-800 border-blush-200"
          >
            Limited Time Offer
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blush-500 to-primary text-white border-0">
                  ✨ New Formula Available
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Unlock Your
                  <span className="bg-gradient-to-r from-blush-600 to-primary bg-clip-text text-transparent">
                    {" "}
                    Radiant{" "}
                  </span>
                  Skin
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Revolutionary skincare that targets aging, hydration, and skin
                  health with clinically proven ingredients. Transform your skin
                  in just 7 days.
                </p>
                <div className="bg-blush-100 border border-blush-200 rounded-lg p-4 mt-4">
                  <p className="text-blush-800 font-medium text-sm">
                    🎯 We're looking for more reviewers! Share your skin
                    concerns and get a free sample to try our products.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>10,000+ satisfied customers</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-blush-500 to-primary hover:from-blush-600 hover:to-primary/90 text-white px-8 py-6 text-lg"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Claim Your Sample
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg border-blush-200 hover:bg-blush-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Dermatologist Tested</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cruelty Free</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white to-blush-50 rounded-3xl p-8 shadow-2xl border border-blush-100">
                  <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdf6d11d3164a4323bedc7a273032d85b%2Ffe913e735bb7487fa9dfe931eda5037b?format=webp&width=800"
                      alt="Anua Skincare Products - Heartleaf Collection"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-bold text-xl mb-2">Anua Collection</h3>
                    <p className="text-muted-foreground">
                      Heartleaf formula with 77% soothing ingredients
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blush-300/20 to-lavender-300/20 rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <ProductFeatures />

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Results from Real Women
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands who have transformed their skin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                age: "32",
                review:
                  "My fine lines have visibly reduced in just 2 weeks! This is the best skincare investment I've made.",
                rating: 5,
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2Fdf6d11d3164a4323bedc7a273032d85b%2Ff37a298d105f470182b85d5cc80528f4?format=webp&width=800",
              },
              {
                name: "Emma L.",
                age: "28",
                review:
                  "Finally found something that doesn't irritate my sensitive skin but still gives amazing results.",
                rating: 5,
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2Fdf6d11d3164a4323bedc7a273032d85b%2F53780dd464de40af92b914b6fe7d7f78?format=webp&width=800",
              },
              {
                name: "Jessica R.",
                age: "45",
                review:
                  "My skin feels 10 years younger. The hydration boost is incredible and lasts all day.",
                rating: 5,
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2Fdf6d11d3164a4323bedc7a273032d85b%2F29edfc43e1f446d7a10e6edff87497e2?format=webp&width=800",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blush-200">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - Customer`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Age {testimonial.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-16 px-4 bg-gradient-to-r from-blush-50 to-lavender-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Incredible Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the dramatic before and after results our customers achieved
              in just weeks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blush-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-card-foreground leading-relaxed mb-4">
                  "I couldn't believe the difference after just 3 weeks! My skin
                  texture improved dramatically, and the dark spots started
                  fading. This product has given me my confidence back."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blush-300 to-lavender-300 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria K.</p>
                    <p className="text-sm text-muted-foreground">
                      Age 34, Used for 3 weeks
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blush-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">-78%</div>
                    <p className="text-xs text-muted-foreground">
                      Dark spots reduced
                    </p>
                  </div>
                  <div className="bg-blush-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">+85%</div>
                    <p className="text-xs text-muted-foreground">
                      Skin smoothness
                    </p>
                  </div>
                  <div className="bg-blush-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <p className="text-xs text-muted-foreground">
                      Weeks to results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-blush-200">
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdf6d11d3164a4323bedc7a273032d85b%2F6571dbccb4ae4cb1a751a213509ed00f?format=webp&width=800"
                      alt="Before and After Skin Transformation Results"
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Real customer results • No filters • 3 weeks apart
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blush-500 to-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✨ Verified Results
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blush-500 to-primary hover:from-blush-600 hover:to-primary/90 text-white px-8 py-4 text-lg"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Get My Transformation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Join 10,000+ women who transformed their skin
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blush-500 to-primary rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of women who have discovered their skin's true
              potential. Get your exclusive sample and free Anua gift today.
            </p>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-white text-primary hover:bg-blush-50 px-8 py-6 text-lg"
            >
              <Heart className="h-5 w-5 mr-2" />
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background/80">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blush-500 to-primary rounded-full flex items-center justify-center">
              <Heart className="h-3 w-3 text-white" />
            </div>
            <span className="font-bold text-lg">LuxeSkin</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 LuxeSkin. All rights reserved. | Dermatologist approved |
            Cruelty-free skincare
          </p>
        </div>
      </footer>

      {/* Modals */}
      <VerificationModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        onVerified={handleVerificationComplete}
      />

      <ReviewModal
        isOpen={showReview}
        onClose={() => setShowReview(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </div>
  );
}
