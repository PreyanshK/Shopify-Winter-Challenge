import './App.css';
import Navbar from './components/Navbar';
import ImageGallery from './sections/ImageGallery';
import Landing from './sections/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ImageGallery />
    </div>
  );
}

export default App;
