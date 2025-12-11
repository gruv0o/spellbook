import './App.css'
import Sidebar from './components/sidebar'
import Interface from './components/Interface'

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden p-3 bg-Background flex gap-3">
      <Sidebar/>
      <Interface/>
    </div>
  )
}

export default App
