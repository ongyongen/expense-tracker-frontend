import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const SpendingChart = ({data}) =>  {
    return (
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
            left:-30,
            right:30
          }}
        >
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="spending" fill="#b18aeb" />
        </BarChart>
    );
  }

export default SpendingChart