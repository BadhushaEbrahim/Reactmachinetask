import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function pie_Chart({chartData}) {
  return (
    <div className='bg-white border rounded-lg shadow-sm mt-7 ml-6 h-[310px] w-[300px] shadow-xl'>

    <Pie data={chartData} />
  </div>
  )
}

export default pie_Chart