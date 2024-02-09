
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './components/Home';
import User from './components/User';

import 'bootstrap/dist/css/bootstrap.min.css';

  
ReactDOM.createRoot(document.getElementById('root')).render(

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home/> } />
          {/* <Route path='users/:id'  element={<User/> } /> */}
          <Route path='users/:name'  element={<User/> } />
        </Route>
      </Routes>
    </BrowserRouter>

)

