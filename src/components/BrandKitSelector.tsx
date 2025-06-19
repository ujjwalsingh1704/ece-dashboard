
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Settings } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  color: string;
  image: string;
  isSelected?: boolean;
}

interface BrandKitSelectorProps {
  selectedBrand: string;
  onBrandSelect: (brandName: string) => void;
}

const BrandKitSelector = ({ selectedBrand, onBrandSelect }: BrandKitSelectorProps) => {
  const brands: Brand[] = [
    { 
      id: "1", 
      name: "ECorp", 
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: "2", 
      name: "ICorp", 
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      id: "3", 
      name: "The Agency", 
      color: "#EF4444",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 border-2 border-gradient">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">Brand Kits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => onBrandSelect(brand.name)}
                className={`
                  relative overflow-hidden rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105
                  ${selectedBrand === brand.name 
                    ? 'border-[#8B4B5C] ring-2 ring-[#8B4B5C]/20' 
                    : 'border-border hover:border-[#8B4B5C]/50'
                  }
                `}
              >
                {/* Brand Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Selection Indicator */}
                  {selectedBrand === brand.name && (
                    <div className="absolute top-2 left-2 w-6 h-6 bg-[#8B4B5C] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  {/* Settings Icon */}
                  <div className="absolute top-2 right-2">
                    <Settings className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Brand Info */}
                <div className="p-4 bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: brand.color }}
                      ></div>
                      <span className="font-medium">{brand.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandKitSelector;
