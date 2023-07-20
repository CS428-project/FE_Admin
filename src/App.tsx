import LoginPage from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
