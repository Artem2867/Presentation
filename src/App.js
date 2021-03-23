import './App.css';
import SlideOne from './components/slide_one/SlideOne';
import SlideTwo from './components/slideTwo/SlideTwo';
import SlideThree from './components/slide_three/SlideThee';
import Pagination from './components/Pagination';
import { useRef } from 'react';

function App() {
  const pagination = {
    roundOne: useRef(),
    roundTwo: useRef(),
    roundThree: useRef()
  }
  return (
    <div className="App">
      <SlideOne pagination={pagination}/>
      <SlideTwo pagination={pagination}/>
      <SlideThree pagination={pagination}/>
      <Pagination pagination={pagination}/>
    </div>
  );
}

export default App;
