import './App.css';
import Navbar from './component/Navbar';
import SidebBar from './component/sideBar';
import VideoList from './component/videoList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='apps flex'>
        <SidebBar />
        <VideoList />
      </div>
    </div>
  );
}

export default App;
