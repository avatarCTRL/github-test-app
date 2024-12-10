
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Dashboard from './pages/dashboard'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        {/* <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
