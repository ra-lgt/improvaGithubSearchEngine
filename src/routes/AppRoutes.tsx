//add the routing endpoints home,history page
import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '@/pages/home/home';
function AppRoutes(){
return( 
    <Router>
        <Routes>
        <Route  path="/" element={<Home/>} />
        </Routes>
        
      
    </Router>
 
)
}
export default AppRoutes;