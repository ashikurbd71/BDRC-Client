

import {  Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navber from '../Navber';

const Dashboard = () => {
   
    return (
       <>
       
       <div>
   
      {/* sidebar */}

      <Sidebar/>



<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
 

 {/* dashboard navber */}

<Navber/>
   

   {/* outlet */}
     <div className="w-full px-10">
        
            
           <Outlet/>

         
    </div> 
</div>


        </div>
       
       
       
       </>
    );
};

export default Dashboard;