import logo from './logo.svg';
import './App.css';
import VideoList from './components/videoList';
import Comments from './components/comments';
import MainVid from './components/mainVid';

function App() {
  return (
   <>

<div className="all">
<div className="main a">
   <MainVid/>
   <Comments/>
   </div>
    
  <div>  <VideoList/>
  </div>
</div>
       
 </>

  );
}

export default App;
