import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line, ComposedChart, ReferenceLine } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CarbonChart = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Complete");

  const data = [
    { name: "Project A", value: 549, type: "Refurbishment", status: "Complete" },
    { name: "Project B", value: 278, type: "New build", status: "Complete" },
    { name: "Project C", value: 875, type: "Refurbishment", status: "Complete" },
    { name: "Project D", value: 617, type: "New build", status: "Complete" },
    { name: "Project E", value: 506, type: "Refurbishment", status: "Complete" },
    { name: "Project F", value: 36, type: "New build", status: "Complete" },
    { name: "Project G", value: 185, type: "Refurbishment", status: "Estimate" },
    { name: "Project H", value: 191, type: "New build", status: "Estimate" },
    { name: "Project I", value: 122, type: "Refurbishment", status: "Complete" },
    { name: "Project J", value: 550, type: "New build", status: "Complete" },
    { name: "Project K", value: 881, type: "Refurbishment", status: "Complete" },
    { name: "Project L", value: 539, type: "New build", status: "Complete" },
    { name: "Project M", value: 269, type: "Refurbishment", status: "Complete" },
    { name: "Project N", value: 29, type: "New build", status: "Complete" },
    { name: "Project O", value: 82, type: "Refurbishment", status: "Complete" },
    { name: "Project P", value: 44, type: "New build", status: "Complete" },
    { name: "Project Q", value: 109, type: "Refurbishment", status: "Complete" },
    { name: "Project R", value: 106, type: "New build", status: "Complete" },
    { name: "Project S", value: 607, type: "Refurbishment", status: "Complete" },
    { name: "Project T", value: 528, type: "New build", status: "Complete" },
  ];

  const filteredData = data.filter(item => {
    const typeMatch = activeFilter === "All" || item.type === activeFilter;
    const statusMatch = statusFilter === "All" || item.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const typeFilters = ["Refurbishment", "New build", "All"];
  const statusFilters = ["Complete", "Estimate"];

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Filter by Type</label>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className={activeFilter === filter ? "bg-[#8B4B5C] hover:bg-[#6B3A4A]" : ""}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={statusFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(filter)}
                    className={statusFilter === filter ? "bg-[#8B4B5C] hover:bg-[#6B3A4A]" : ""}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Embodied Carbon Emissions</span>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-gray-400 border-dashed border-t-2"></div>
                <span className="text-muted-foreground">500 kgCO₂e/m² - Embodied Carbon Target 2030</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <span className="text-muted-foreground">600 kgCO₂e/m² - Embodied Carbon Target 2025</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  tick={{ fontSize: 12, dy: 4, fontWeight: 600 }}
                  label={{ value: 'Embodied carbon intensity (kgCO₂e/m²)', angle: -90, position: 'insideLeft' }}
                />
                <ReferenceLine y={500} stroke="#9CA3AF" strokeDasharray="5 5" />
                <ReferenceLine y={600} stroke="#4B5563" strokeWidth={2} />
                <Bar 
                  dataKey="value" 
                  fill="#8B4B5C"
                  radius={[2, 2, 0, 0]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#8B4B5C] rounded"></div>
          <span>Project Emissions</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-gray-400 border-dashed border-t-2"></div>
          <span>2030 Target</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-gray-600"></div>
          <span>2025 Target</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonChart;
