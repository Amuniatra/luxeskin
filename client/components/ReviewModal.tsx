import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Gift, CheckCircle } from "lucide-react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: () => void;
}

export function ReviewModal({
  isOpen,
  onClose,
  onReviewSubmitted,
}: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [skinProblems, setSkinProblems] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating || !skinProblems.trim() || !email.trim() || !address.trim()) {
      alert(
        "Please fill in all fields including your address and provide a rating.",
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        onReviewSubmitted();
        handleClose();
      }, 6000);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setRating(0);
    setHoveredRating(0);
    setSkinProblems("");
    setEmail("");
    setAddress("");
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Get Your Free Sample
          </DialogTitle>
          <DialogDescription>
            Please provide your details and tell us about your skin concerns to
            receive your free Anua sample!
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Rate your experience</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Shipping address</Label>
              <Textarea
                id="address"
                placeholder="Enter your full shipping address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skinProblems">
                Tell us about your skin concerns
              </Label>
              <Textarea
                id="skinProblems"
                placeholder="Describe your main skin concerns (aging, dryness, acne, sensitivity, etc.)..."
                value={skinProblems}
                onChange={(e) => setSkinProblems(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="bg-blush-50 p-4 rounded-lg border border-blush-200">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="h-4 w-4 text-blush-600" />
                <span className="font-medium text-blush-800">
                  Free Sample Delivery
                </span>
              </div>
              <p className="text-sm text-blush-700">
                We'll ship your complimentary Anua Heartleaf 77% Soothing Toner
                sample to your provided address within 3-5 business days!
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 py-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
              <p className="text-muted-foreground">
                Your information has been submitted successfully. We'll send
                your free Anua sample to your address within 3-5 business days.
              </p>
            </div>
          </div>
        )}

        {!isSubmitted && (
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blush-500 to-primary hover:from-blush-600 hover:to-primary/90"
            >
              {isSubmitting ? "Submitting..." : "Get My Free Sample"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
