import { Route ,Routes, Navigate} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Contact/ContactUs';
import Schedule from './Pages/Schedule/schedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
    </Routes>
  );
}

export default App;
