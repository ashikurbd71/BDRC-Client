
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home';

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Dashboard/>,
            children:([
              
                {
                    path:"/",
                    element:<Home/>
                }
            ])
        }
    ]
)

export default router;