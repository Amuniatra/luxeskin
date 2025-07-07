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
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating || !review.trim() || !email.trim()) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        onReviewSubmitted();
        handleClose();
      }, 2000);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setRating(0);
    setHoveredRating(0);
    setReview("");
    setEmail("");
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Share Your Experience
          </DialogTitle>
          <DialogDescription>
            Tell us about your skincare journey and receive a free sample from
            Anua as our thank you gift!
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
              <Label htmlFor="review">Your review</Label>
              <Textarea
                id="review"
                placeholder="Share your thoughts about the product, how it helped with your skin concerns..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
                className="resize-none"
              />
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
              <p className="text-xs text-muted-foreground">
                We'll send your free Anua sample to this email address
              </p>
            </div>

            <div className="bg-blush-50 p-4 rounded-lg border border-blush-200">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="h-4 w-4 text-blush-600" />
                <span className="font-medium text-blush-800">
                  Free Sample Reward
                </span>
              </div>
              <p className="text-sm text-blush-700">
                Receive a complimentary Anua Heartleaf 77% Soothing Toner sample
                for sharing your honest review!
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 py-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
              <p className="text-muted-foreground">
                Your review has been submitted successfully. We'll send your
                free Anua sample within 3-5 business days.
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
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
