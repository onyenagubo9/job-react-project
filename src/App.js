// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'


// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Router
import { Route, Routes } from 'react-router-dom'


import './App.css';

import { Dash } from './components/Dash'
import { Login } from './components/Login'

function App() {
  return (
    
<Routes>
  <Route path='/' element= { <Dash /> } />
  <Route path='/login' element= { <Login /> } />
</Routes>
  );
}

export default App;
