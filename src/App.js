
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shops from './components/Shops/Shops';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shops' element={<PrivateRoute><Shops></Shops></PrivateRoute>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
