import './App.css';
import SlideOne from './components/slide_one/SlideOne';
import SlideTwo from './components/slideTwo/SlideTwo';
import SlideThree from './components/slide_three/SlideThee';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <SlideOne/>
      <SlideTwo/>
      <SlideThree/>
      <Pagination/>
    </div>
  );
}

export default App;
