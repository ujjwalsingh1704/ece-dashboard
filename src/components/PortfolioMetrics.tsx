
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Download, TrendingUp, TrendingDown } from "lucide-react";

const PortfolioMetrics = () => {
  const metrics = [
    {
      title: "Managed portfolio carbon footprint",
      value: "45,048",
      unit: "tCO₂e",
      change: "+16%",
      changeType: "increase",
      fromYear: "from 2019",
      years: [
        { year: "2022", value: 45048, percentage: 100 },
        { year: "2021", value: 14111, percentage: 31 },
        { year: "2020", value: 32813, percentage: 73 },
        { year: "2019", value: 38673, percentage: 86 }
      ]
    },
    {
      title: "Managed portfolio energy intensity",
      value: "123",
      unit: "kWh/m²",
      change: "-22%",
      changeType: "decrease",
      fromYear: "from 2019",
      years: [
        { year: "2022", value: 123, percentage: 100 },
        { year: "2021", value: 128, percentage: 104 },
        { year: "2020", value: 135, percentage: 110 },
        { year: "2019", value: 157, percentage: 128 }
      ]
    },
    {
      title: "Managed portfolio energy consumption",
      value: "47,790,662",
      unit: "kWh",
      change: "-27%",
      changeType: "decrease",
      fromYear: "from 2019",
      years: [
        { year: "2022", value: 47790662, percentage: 100 },
        { year: "2021", value: 49324077, percentage: 103 },
        { year: "2020", value: 48784205, percentage: 102 },
        { year: "2019", value: 65198706, percentage: 137 }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Value */}
              <div>
                <div className="text-3xl font-bold">
                  {metric.value.toLocaleString()}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-muted-foreground">{metric.unit}</span>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.changeType === 'increase' ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {metric.changeType === 'increase' ? 
                      <TrendingUp className="w-4 h-4" /> : 
                      <TrendingDown className="w-4 h-4" />
                    }
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {metric.fromYear}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3">
                {metric.years.map((yearData) => (
                  <div key={yearData.year} className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-12">
                      {yearData.year}
                    </span>
                    <div className="flex-1">
                      <Progress 
                        value={yearData.percentage > 100 ? 100 : yearData.percentage} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-20 text-right">
                      {yearData.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                {index === 0 && (
                  <Button variant="outline" size="sm" className="flex-1">
                    <span className="mr-2">See full breakdown of carbon footprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
                {index > 0 && (
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download the data
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-[#8B4B5C]">2030</div>
            <div className="text-sm text-muted-foreground">Carbon Target Year</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-[#8B4B5C]">-35%</div>
            <div className="text-sm text-muted-foreground">Target Reduction</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-[#8B4B5C]">94%</div>
            <div className="text-sm text-muted-foreground">Data Coverage</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-[#8B4B5C]">A+</div>
            <div className="text-sm text-muted-foreground">ESG Rating</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioMetrics;
