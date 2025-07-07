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
    window.location.href = "https://corbux.us/?ed6c489";
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
              },
              {
                name: "Emma L.",
                age: "28",
                review:
                  "Finally found something that doesn't irritate my sensitive skin but still gives amazing results.",
                rating: 5,
              },
              {
                name: "Jessica R.",
                age: "45",
                review:
                  "My skin feels 10 years younger. The hydration boost is incredible and lasts all day.",
                rating: 5,
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
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blush-300 to-lavender-300 rounded-full"></div>
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
