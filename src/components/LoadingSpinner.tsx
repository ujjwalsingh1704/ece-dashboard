
import { Leaf } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <Leaf className="h-12 w-12 text-[#8B4B5C]/20" />
          </div>
          <div className="relative animate-pulse">
            <Leaf className="h-12 w-12 text-[#8B4B5C]" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Loading ESG Dashboard</h2>
          <p className="text-muted-foreground">Preparing your sustainability insights...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#8B4B5C] to-[#6B3A4A] rounded-full animate-pulse"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-[#8B4B5C] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#8B4B5C] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#8B4B5C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
