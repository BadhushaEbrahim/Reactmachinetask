import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Logo from '../../assets/Briefcase.png';
import supportLogo from '../../assets/Support.png'
import HelpLogo from '../../assets/Help.png'
import DashboardLogo from '../../assets/Circled Menu.png';
import PluginsLogo from '../../assets/Puzzle.png';


function sidebar() {


  return (
    <div className='flex mt-0 h-screen'>
      <Sidebar  className='h-screen'>
        <div className='mt-5'>
          <img src={Logo} className='ml-10 mt-2' alt="" />
          <p className='font-extrabold text-sm mt-0 ml-12 text-[#20263a]'>STATBOARD</p>
        </div>
        <div className=''>
          <Sidebar.Items className='mt-28'>
            <Sidebar.ItemGroup className='space-y-8 ml-12 '>
              <Sidebar.Item className='hover:bg-[#E8EDFF] bg-[#90C4E9]  ' href="#"  >
              <img className='inline mr-2' src={DashboardLogo} alt="" />
                Dashboard 
              </Sidebar.Item>
              <Sidebar.Item className='hover:bg-[#E8EDFF] bg-[#90C4E9]  ' href="#"  >
              <img className='inline mr-2' src={supportLogo} alt="" />
                Support 
              </Sidebar.Item>
              <Sidebar.Item className='hover:bg-[#E8EDFF] bg-[#90C4E9]  ' href="#"  >
              <img className='inline mr-2' src={PluginsLogo} alt="" />
                Plugins 
              </Sidebar.Item>
              <Sidebar.Item className='hover:bg-[#E8EDFF] bg-[#90C4E9]  ' href="#"  >
              <img className='inline mr-2' src={HelpLogo} alt="" />
                Help 
              </Sidebar.Item>
           
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </div>
  );
}

export default sidebar;
