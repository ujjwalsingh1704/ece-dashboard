import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Settings } from "lucide-react";

const BrandKitSelector = ({ selectedBrand, onBrandSelect }) => {
  const brands = [
    { id: "1", name: "ECorp", color: "#10B981" },
    { id: "2", name: "ICorp", color: "#F59E0B" },
    { id: "3", name: "The Agency", color: "#EF4444" }
  ];

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 border-2 border-gradient">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">Brand Kits</h3>
          <div className="space-y-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => onBrandSelect(brand.name)}
                className={`
                  flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-[1.02]
                  ${selectedBrand === brand.name 
                    ? 'border-[#8B4B5C] bg-[#8B4B5C]/5' 
                    : 'border-border hover:border-[#8B4B5C]/50'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  {selectedBrand === brand.name && (
                    <div className="w-6 h-6 bg-[#8B4B5C] rounded flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {selectedBrand !== brand.name && (
                    <div className="w-6 h-6 border-2 border-border rounded"></div>
                  )}
                  
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: brand.color }}
                    ></div>
                    <span className="font-medium">{brand.name}</span>
                  </div>
                </div>
                
                <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandKitSelector;
