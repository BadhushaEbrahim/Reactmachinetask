import { Avatar } from 'flowbite-react';
import ProfileAvathar from '../../assets/Rectangle 10.png';
import LineChart from '../Charts/LineChart';
import { useEffect, useState } from 'react';
import Table from '../table/table';
import Pie_Chart from '../Charts/pie_Chart';
import Profilecard from '../profileCard/profilecard';
import axios from 'axios';
function navbar() {
  const baseUrl = import.meta.env.VITE_Baseurl;
  const [showLoading, setshowLoading] = useState(true)
  const [GrapgData, setGrapgData] = useState({
    labels:[],
    datasets:[]
  })

  const [PieChart, setPieChart] = useState({
    labels:[],
    datasets:[]
  })

const getGraphData=async()=>{
  try {
    const response=await axios.get(`${baseUrl}/Graph`)
    const labels = await response.data.map(item => item.x)
    const datasets = await response.data.map(item => item.y)
      
    setGrapgData({
      labels: labels,
      datasets:[{
        label:"Product Growth",
        data:datasets
      }] 
    }); 

  
  } catch (error) {
    console.log(error);
  }
}

const getPieChart=async()=>{
  try {
    const response=await axios.get(`${baseUrl}/pie-chart`)
    const labels = await response.data.map(item => item.label)
    const datasets = await response.data.map(item => item.value)
      
    setPieChart({
      labels: labels,
      datasets:[{
        label:"Pie Chart",
        data:datasets
      }] 
    }); 

  
  } catch (error) {
    console.log(error);
  }
}
console.log(GrapgData);

  useEffect(() => {
    getGraphData()
    getPieChart()
  }, [])


  return (
<div className=" w-full flex bg-[#E8EDFF]">
<div className="w-full ml-9 mt-10 font-semibold">
<h2>Good Moring ! 🌞
</h2>
<div>


    <LineChart chartData={GrapgData} />
  
</div>
<div className='m-6'>
  <Table/>
</div>

</div>

<div className=" m-6 w-full  ">
  
<Avatar img={ProfileAvathar}   className='border border-raduis rounded-md	space-x-2 h-14 w-60 ml-40 flext shadow-xl  justify-center bg-white'> 
      <div className=" font-medium dark:text-white">
        <div className='font-semibold'>Jese Leos</div>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">johndeo@gmail.com</div>
      </div>
  </Avatar>
  <Pie_Chart chartData={PieChart}/>

  <div>
<Profilecard  />
</div>
</div>



    </div>


  );
}

export default navbar


