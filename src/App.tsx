import AppRoutes from './routes/AppRoutes'
import './App.css'
import Navbar from './components/ui/navbar'
import { Toaster } from './components/ui/toaster'
function App() {

  // for now add only routes later we can HOC

  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Toaster />
      
      </>
  
  )
}

export default App
