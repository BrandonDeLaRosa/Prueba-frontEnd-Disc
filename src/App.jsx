import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/header'
import Hotels from './pages/Hotels'
import ProtectedRoutes from './components/ProtectedRoutes'
import Modals from './components/Modals'
import { useSelector } from 'react-redux'
import Loader from './components/Loader'
import BackgroundLoad from './components/backgroundLoad'
import { useState } from 'react'

function App() {

  const isLoading = useSelector(state => state.loader)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <HashRouter>
        <div className={darkMode ? "dark-mode" : "ligh-mode"}>
        {/* <div className='container'> */}
        <Header/>
        {isLoading && <BackgroundLoad />}
        {/* <div className='toggler'>
            {
              darkMode ?
                (
                  <>
                    <span onClick={() => setDarkMode(false)} style={{ color: "yellow" }}><i class="fa-solid fa-sun"></i></span>
                  </>
                ) :
                (
                  <>
                    <span onClick={() => setDarkMode(true)} style={{ color:  "#c96dfd" }}> <i class="fa-solid fa-moon"></i></span>
                  </>
                )
            }
          </div>
        </div> */}
        <Routes>
          <Route path='/' element={<Login/>}/>
        <Route element={<ProtectedRoutes />}> 
          <Route path='/hotels' element={<Hotels/>}/>
          <Route path='/modal' element={<Modals/>}/>
        </Route>
        </Routes>
    </div>
      </HashRouter>
  )
}

export default App
