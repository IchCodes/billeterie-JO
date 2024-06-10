import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getSales } from '../utils/apiCall'; // Assure-toi que ce chemin est correct

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ x, y, name, percent }) => {
  return (
    <text x={x} y={y} fill="black" textAnchor={x > 0 ? 'start' : 'end'} dominantBaseline="central">
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSales().then((response) => {
      const salesData = response; 
      const formattedData = Object.keys(salesData).map((key) => ({
        name: key,
        value: salesData[key],
      }));
      setData(formattedData);
    });
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ x, y, name, percent }) => renderCustomizedLabel({ x, y, name, percent })}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
