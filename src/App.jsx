import Monitor from './components/Monitor.jsx';
//import Boot from './components/Boot.jsx';
import Tabs from './components/Tabs.jsx';
import './App.css';
import './assets/fonts/FSEX300.ttf';

function App() {
  return (
    <>
      <div className='main'>
        <Monitor/>
        {/* <Boot/> */}
        <Tabs/>
      </div>
    </>
  );
}

export default App;
