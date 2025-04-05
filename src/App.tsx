import AppRoutes from './routes/AppRoutes'
import './App.css'
import Navbar from './components/ui/navbar'
import Home from './pages/home/home'

function App() {

  // for now add only routes later we can HOC

  return (
    <>
      <Navbar/>
      <AppRoutes/>
      </>
  
  )
}

export default App
