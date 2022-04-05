import './App.css';
import Reviews from './Components/Reviews/Reviews'
import Blogs from './Components/Blogs/Blogs'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
