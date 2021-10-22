
import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import { Title } from './components/Title/Title';

const galleryImage = {
  title: 'Images',
  description: 'Best images in the World!!!',
  images: [
    {id: "1", source: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg'},
    {id: "2", source: 'https://cdn.motor1.com/images/mgl/krW6R/s1/lotus-elise.jpg'},
  ],
}
const {title, description, images} = galleryImage;
function App() {
  return (
    <div className="App">Olga Sabadash
    <Gallery d={description} i={images}>
      {/* IF */}
      {title === 'Images' && <Title value={title}/>}
      {/* IF */}

      {/* if...else = TERNARY */}
      {title === 'images' ? (<h2>Условие выполнено</h2>) : (<h2>Условие не выполнено</h2>)}
      {/* if...else = TERNARY */}

      <p>Я хочу работать</p>
    </Gallery>
    </div>
  );
}

export default App;
