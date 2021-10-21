
import './App.css';
import { Gallery } from './components/Gallery/Gallery';

const galleryImage = {
  title: 'Images',
  description: 'Best images in the World!!!',
  images: [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg',
    'https://cdn.motor1.com/images/mgl/krW6R/s1/lotus-elise.jpg',
  ],
}
const {title, description, images} = galleryImage;
function App() {
  return (
    <div className="App">Olga Sabadash
    <Gallery 
    t={title} 
    d={description}
    i={images} />
    </div>
  );
}

export default App;
