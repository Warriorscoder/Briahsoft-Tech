import { Toaster } from 'sonner'
import './App.css'
import Body from './components/Body'
import Navbar from './components/Navbar'
// import Bargraph from './components/Bargraph'

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Toaster />
      {/* <Bargraph/> */}
    </>
  )
}

export default App
