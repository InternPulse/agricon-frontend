import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const completed = 62;
const data = [
  { name: 'Completed', value: completed, color: '#02402D' }, // Example: 75% completed
  { name: 'Remaining', value: 100 - completed, color: '#ffffff' }, // The rest
];

// Custom label for the center of the doughnut
const renderCustomizedLabel = ({ cx, cy }) => {
  const completionPercentage = data[0].value; // Assuming 'Completed' is the first item

  return (
    <text
      x={cx}
      y={cy}
      fill="#02402D"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: '12px', fontWeight: 'bold' }}
    >
      {`${completionPercentage}%`}
    </text>
  );
};

const Donut = ({ completionPercentage }) => {
  // Update data based on prop
  const chartData = [
    { name: 'Completed', value: completionPercentage, color: '#02402D' },
    { name: 'Remaining', value: 100 - completionPercentage, color: '#02402D66' },
  ];

  return (
    <ResponsiveContainer width="100%" height={55}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={18} // Defines the size of the inner hole (doughnut)
          outerRadius={23} // Default fill, overridden by Cell colors
          paddingAngle={0} // No padding between slices
          dataKey="value"
          startAngle={90} // Start from the top
          endAngle={-360} // Go full circle (360 degrees) clockwise
          // For the percentage label in the center
          label={renderCustomizedLabel}
          labelLine={false} // Hide the line connecting label to slice
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Donut;