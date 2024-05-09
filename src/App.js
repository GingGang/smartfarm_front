import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home'
<<<<<<< HEAD
import HomeCamera from './component/homecamera/HomeCamera';
import HomeHistory from './pages/home/HomeHistory';
import './app.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SmartFarmComponent from './sever/Server';

function App() {

  return(
    <div className="App">
      <SmartFarmComponent></SmartFarmComponent>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>} /> {/* 홈 페이지 */}
          <Route path="/camera" element={<HomeCamera/>} /> {/* 카메라 페이지 */}
          <Route path="/history" element={<HomeHistory/>} />
        </Routes>
=======
import HomeCamera from './pages/home/HomeCamera';
import './app.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={HomeCamera}/>
        </Routes>
      </BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home />
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
      </div>
    </div>
  )
}

export default App;
