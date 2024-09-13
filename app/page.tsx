'use client';
import React, { useState } from 'react';
// import CircularProgress from './components/CircularChart';
import { poppin } from './constants';
import WeatherChart from './components/weatherChart';

const metricsData = [
  { id: 1, name: 'Temperature', data: [275.04, 278.54, 281.12, 276.87, 280.42, 284.90], yAxisLabel: 'Temperature (K)', unit: 'K' },
  { id: 2, name: 'Pressure', data: [1022, 1020, 1025, 1018, 1023, 1026], yAxisLabel: 'Pressure (hPa)', unit: 'hPa' },
  { id: 3, name: 'Humidity', data: [94, 92, 89, 90, 93, 95], yAxisLabel: 'Humidity (%)', unit: '%' },
];

const Dashboard: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(metricsData[0]);

  const formattedData = activeMetric.data.map((value, index) => ({
    date: `Day ${index + 1}`,
    value,
  }));

  const handleMetricClick = (metric: typeof metricsData[0]) => {
    setActiveMetric(metric);
  };

  const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

  return (
    <div className="min-h-screen bg-[#171a1d] text-white p-4 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className={`${poppin.className} text-2xl font-semibold`}>Analytics Overview</h1>
        <div className="space-x-4 w-[60%] flex-bet">
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              onClick={() => handleMetricClick(metric)}
              className={`cursor-pointer text-md rounded-[20px] ${poppin.className} py-2 px-5 transition-colors duration-200 ${
                activeMetric.id === metric.id ? 'bg-[#8952e0] text-white' : 'bg-[#1d2025]'
              }`}
            >
              {metric.name}
            </div>
          ))}
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="col-span-2 bg-[#1d2025] p-6 rounded-lg shadow-lg">
          <h2 className={`${poppin.className} text-xl mb-4`}>Data Overview for {activeMetric.name}</h2>
          <WeatherChart
            data={formattedData}
            title={activeMetric.name}
            yAxisLabel={activeMetric.yAxisLabel}
            unit={activeMetric.unit}
          />
        </div>
        <div className="bg-[#1d2025] p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Metric Details</h2>
          <p className={`${poppin.className}`}>The current {activeMetric.name} of the day is {activeMetric.data[0]} {activeMetric.unit}</p>
          <p className={`${poppin.className}`}>The average {activeMetric.name} for the selected period is {average(activeMetric.data).toFixed(2)} {activeMetric.unit}</p>
          <p className={`${poppin.className}`}>The highest recorded {activeMetric.name} is {Math.max(...activeMetric.data)} {activeMetric.unit}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
