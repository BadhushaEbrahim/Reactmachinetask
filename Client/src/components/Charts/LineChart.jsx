import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


function LineChart({chartData}) {
 

  return (
    

    <div className='bg-white border rounded-lg shadow-xl mt-11 '>

      <Line width={600} height={200} data={chartData} />
    </div>
  );
}

export default LineChart;
