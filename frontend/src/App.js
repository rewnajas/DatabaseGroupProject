import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import Login from './component/login/login'
import Protected from './component/routeHandling/protected'
import IsUser from './component/routeHandling/isUser'
import IsAdmin from './component/routeHandling/isAdmin'
import IsGuard from './component/routeHandling/isGuard'
import Homepage from './component/homepage/homepage'
import Admin from './component/admin/admin'
import Guard from './component/guard/guard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>

        <Route element={<Protected/>}>
          <Route element={<IsUser/>}> 
            <Route exact path='homepage' element={<Homepage/>}/>
          </Route>

          <Route element={<IsAdmin/>}> 
          <Route exact path='admin' element={<Admin/>}/>
            </Route>

            <Route element={<IsGuard/>}>
            <Route exact path='guard' element={<Guard/>}/>
            </Route>
        </Route>


      </Routes>
    
    </BrowserRouter>
      
  );
}

export default App;
