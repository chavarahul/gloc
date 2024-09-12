'use client'
import React, { useState } from 'react';
import LineChart from './components/LineChart';
import CircularProgress from './components/CircularChart';

const metricsData = [
  { id: 1, name: 'Temperature', data: [100, 200, 300, 400, 500, 600] },
  { id: 2, name: 'Pressure', data: [500, 400, 300, 200, 100, 50] },
  { id: 3, name: 'Volume', data: [300, 350, 400, 450, 500, 550] },
  { id: 4, name: 'Water Level', data: [200, 250, 300, 350, 400, 450] },
  { id: 5, name: 'Moraine Stability', data: [700, 650, 600, 550, 500, 450] },
  { id: 6, name: 'Depth', data: [150, 300, 450, 600, 750, 900] },
];

const Dashboard: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(metricsData[0]);

  const handleMetricClick = (metric: { id: number; name: string; data: number[] }) => {
    setActiveMetric(metric);
  };


  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-purple-600 rounded-lg">Refresh</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Data Overview for {activeMetric.name}</h2>
          <LineChart data={activeMetric.data} />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Progress Overview</h2>
          <CircularProgress percentage={75} label="Tasks Completed" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            onClick={() => handleMetricClick(metric)}
            className={`p-6 rounded-lg shadow-lg cursor-pointer ${activeMetric.id === metric.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800'
              }`}
          >
            <h2 className="text-xl mb-4">{metric.name}</h2>
            <p>Click to view more details for {metric.name}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
