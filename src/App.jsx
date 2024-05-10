import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { NewTask } from './components/Task/NewTask'
function App() {
  const [fixedCompHeight,setFixedComponentHeight] = useState('calc(100vh-100px)');
  return (
    <div className='bg-black max-h-screen overflow-hidden flex justify-center'>
      <div className='flex flex-col justify-between overflow-y-scroll max-w-[500px] w-full h-screen rounded-lg bg-white p-4 pb-0'>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='task' element={<Tasks />}>
            </Route>
            <Route path='newTask' element={<NewTask/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      <Navbar/>
      </Router>
      </div>
    </div>
  )
}

export default App
