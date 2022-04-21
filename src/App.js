import logo from './logo.svg';
import './App.css';
import Geo from './geo';
import Network from './network';
import CustomForm from './formik';
import Navbar from './navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './dashboard';
import About from './about';
import Home from './home';

function App() {
  return (
    <div>
      {/* {/* <Geo />
    <Network /> */}
    
      {/* <CustomForm /> */
      }
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/dashboard'  element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
