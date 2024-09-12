'use client'
import React from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, label }) => {
  const circleRadius = 50;
  const strokeDasharray = 2 * Math.PI * circleRadius;
  const strokeDashoffset = strokeDasharray - (percentage / 100) * strokeDasharray;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={120}
        height={120}
        viewBox="0 0 120 120"
        className="mb-4"
      >
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke="white"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <p className="text-lg font-bold">{percentage}%</p>
      <p>{label}</p>
    </div>
  );
};

export default CircularProgress;
