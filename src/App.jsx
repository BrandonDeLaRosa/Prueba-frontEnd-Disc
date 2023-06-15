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

function App() {

  const isLoading = useSelector(state => state.loader)

  return (
    <div>
      <HashRouter>
        <Header/>
        {isLoading && <BackgroundLoad />}
        <Routes>
          <Route path='/' element={<Login/>}/>
        <Route element={<ProtectedRoutes />}> 
          <Route path='/hotels' element={<Hotels/>}/>
          <Route path='/modal' element={<Modals/>}/>
        </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
