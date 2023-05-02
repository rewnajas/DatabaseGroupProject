import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Protected from './component/routeHandling/protected'
import IsUser from './component/routeHandling/isUser'
import IsAdmin from './component/routeHandling/isAdmin'
import IsGuard from './component/routeHandling/isGuard'
import Homepage from './pages/homepage/homepage'
import Guard from './pages/guard/guard'
import Admin from './pages/admin/admin'
import Request from './pages/request/request'
import Navbar from './component/navbar/navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route element={<Protected />}>
          <Route element={<IsUser />}>
            <Route path='homepage' element={<Navbar />}>
              <Route index element={<>Home</>} />
              <Route path='request' element={<Request />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


