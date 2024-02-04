import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full text-white flex flex-col justify-between h-screen border-r border-white bg-black transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
                {/* <img src="" alt="tailus logo"> */}
                <Link to={'/'}> <h1 className='lg:text-2xl text-xl text-white font-bold px-4'>Ta<span className='text-red-500'>S</span>k<span className='text-red-500'>B</span>r<span className='text-red-500'>E</span>ez<span className='text-red-500'>E</span></h1></Link>
            </a>
        </div>

       

        <ul className="space-y-2 tracking-wide mt-8">
           
            <li>
                

                    <NavLink
  to="/dashboardLayout/profile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
 <div className='flex gap-1 items-center'>
    {/* <FaHome/> */}
 <span className="-mr-1 font-medium">Profile</span>
 </div>
</NavLink>

              
            </li>



            <li>
                

                    <NavLink
  to="/dashboardLayout/addtask"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
<div className='flex gap-1 items-center'>
    {/* <FaEdit/> */}
<span className="-mr-1 font-medium">Create Task</span>
</div>
</NavLink>

              
            </li>



            <li>
                

                    <NavLink
  to="/dashboardlayout"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
    <div className='flex gap-1 items-center'>
        {/* <MdManageHistory/> */}
        <span className="-mr-1 font-medium">Manages Task</span>
    </div>

</NavLink>

              
            </li>



           
            
        </ul>
    </div>

    

         
                  
</aside>
        </div>
    );
};

export default Sidebar;