//add the routing endpoints home,history page
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '@/pages/home/home';
import History from '@/pages/history/history';
import Userdetail from '@/pages/userdetails/userdetail';
import Result from '@/pages/result/result';
function AppRoutes(){
return( 
    <Router>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/history" element={<History/>} />
        <Route  path="/result" element={<Result/>} />
        <Route  path="/userdetail" element={<Userdetail/>} />
        </Routes>
        
      
    </Router>
 
)
}
export default AppRoutes;