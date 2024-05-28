import './App.css';
import imageData from './components/DataComponent';

function App() {
  // code here
  return (
    <div className='image-grid'>
      {imageData.map((image)=>(
        <div key={image.id} className='image-container'>
          <img src={image.img} alt={'Elephant'}/>
        </div>
      ))}

    </div>
  );
}

export default App;
