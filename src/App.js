import './App.css';
import Navbar from './component/Navbar';
import SidebBar from './component/sideBar';
import VideoList from './component/videoList';
import Broadcast from './component/broadcast';
import Library from './component/library';
import Explorer from './component/explorer';
import About from './component/about';
import { BrowserRouter as Router, Route, BrowserRouter, Routes, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='apps flex'>
          <SidebBar />
          <Routes>
            <Route exact path="/" element={<VideoList />} />
            <Route path="/Broadcast" element={<Broadcast />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
