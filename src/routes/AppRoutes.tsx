//add the routing endpoints home,history page
import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '@/pages/home/home';
import History from '@/pages/history/history';
import Userdetail from '@/pages/userdetails/userdetail';
function AppRoutes(){
return( 
    <Router>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/history" element={<History/>} />
        <Route  path="/userdetail" element={<Userdetail/>} />
        </Routes>
        
      
    </Router>
 
)
}
export default AppRoutes;