
import { useState, useEffect } from "react";
import { Moon, Sun, BarChart3, TrendingUp, Leaf, Building2, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BrandKitSelector from "@/components/BrandKitSelector";
import CarbonChart from "@/components/CarbonChart";
import PortfolioMetrics from "@/components/PortfolioMetrics";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState("The Agency");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-[#8B4B5C]" />
              <span className="text-2xl font-bold">ESG Dashboard</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('brands')}
                className="text-sm font-medium hover:text-[#8B4B5C] transition-colors"
              >
                Brand Kits
              </button>
              <button 
                onClick={() => scrollToSection('emissions')}
                className="text-sm font-medium hover:text-[#8B4B5C] transition-colors"
              >
                Emissions
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium hover:text-[#8B4B5C] transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('analytics')}
                className="text-sm font-medium hover:text-[#8B4B5C] transition-colors"
              >
                Analytics
              </button>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover:bg-[#8B4B5C] hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Sustainable forest background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B4B5C] to-[#6B3A4A] bg-clip-text text-transparent">
            ESG Performance Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track, analyze, and optimize your organization's environmental, social, and governance performance with comprehensive data insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#8B4B5C]/10 text-[#8B4B5C]">
              <BarChart3 className="mr-2 h-4 w-4" />
              Real-time Analytics
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#8B4B5C]/10 text-[#8B4B5C]">
              <TrendingUp className="mr-2 h-4 w-4" />
              Performance Tracking
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#8B4B5C]/10 text-[#8B4B5C]">
              <Building2 className="mr-2 h-4 w-4" />
              Multi-Brand Support
            </Badge>
          </div>
        </div>
      </section>

      {/* Brand Kits Section */}
      <section id="brands" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Brand Portfolio Management</h2>
          <BrandKitSelector selectedBrand={selectedBrand} onBrandSelect={setSelectedBrand} />
        </div>
      </section>

      {/* Carbon Emissions Section */}
      <section id="emissions" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Embodied Carbon Emissions</h2>
              <p className="text-muted-foreground">Intensity measured by kgCO₂e/m²</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 hover:bg-[#8B4B5C] hover:text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Data
            </Button>
          </div>
          <CarbonChart />
        </div>
      </section>

      {/* Portfolio Metrics Section */}
      <section id="portfolio" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio Performance Metrics</h2>
          <PortfolioMetrics />
        </div>
      </section>

      {/* Analytics Overview with Images */}
      <section id="analytics" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Analytics Overview</h2>
          
          {/* Featured Analytics with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Data Analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                  <p className="text-sm opacity-90">Advanced analytics dashboard</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-[#8B4B5C] mb-2">24/7</div>
                <p className="text-muted-foreground">Continuous monitoring and alerts</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainability Report"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Impact Reports</h3>
                  <p className="text-sm opacity-90">Comprehensive ESG reporting</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-[#8B4B5C] mb-2">150+</div>
                <p className="text-muted-foreground">Detailed sustainability reports</p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Carbon Intensity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">394 kgCO₂e/m²</div>
                <p className="text-xs text-muted-foreground">-8% from target</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">Above industry avg.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94/100</div>
                <p className="text-xs text-muted-foreground">Excellent rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 ESG Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
