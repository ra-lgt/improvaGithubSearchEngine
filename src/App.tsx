import AppRoutes from './routes/AppRoutes'
import './App.css'
import Navbar from './components/ui/navbar'
import { Toaster } from './components/ui/toaster'
import { SearchHistoryProvider } from './context/searchHistoryContext'
function App() {

  // for now add only routes later we can HOC

  return (
    <>
    <SearchHistoryProvider>
      <Navbar/>
      <AppRoutes/>
      <Toaster />
    </SearchHistoryProvider>

      
      </>
  
  )
}

export default App
