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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: () => void;
}

export function VerificationModal({
  isOpen,
  onClose,
  onVerified,
}: VerificationModalProps) {
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Simple math CAPTCHA
  const num1 = 7;
  const num2 = 3;
  const correctAnswer = num1 + num2;

  const handleVerify = () => {
    setIsVerifying(true);

    setTimeout(() => {
      if (parseInt(captchaAnswer) === correctAnswer) {
        setIsVerified(true);
        setTimeout(() => {
          onVerified();
          onClose();
          setIsVerified(false);
          setCaptchaAnswer("");
        }, 1500);
      } else {
        setCaptchaAnswer("");
        alert("Incorrect answer. Please try again.");
      }
      setIsVerifying(false);
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    setCaptchaAnswer("");
    setIsVerified(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Security Verification
          </DialogTitle>
          <DialogDescription>
            Please complete this simple verification to continue and access your
            exclusive skincare offer.
          </DialogDescription>
        </DialogHeader>

        {!isVerified ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="captcha">
                What is {num1} + {num2}?
              </Label>
              <Input
                id="captcha"
                type="number"
                placeholder="Enter your answer"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="text-center text-lg"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 py-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <p className="text-center text-green-600 font-medium">
              Verification successful! Redirecting...
            </p>
          </div>
        )}

        {!isVerified && (
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleVerify}
              disabled={!captchaAnswer || isVerifying}
              className="bg-gradient-to-r from-blush-500 to-primary hover:from-blush-600 hover:to-primary/90"
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
