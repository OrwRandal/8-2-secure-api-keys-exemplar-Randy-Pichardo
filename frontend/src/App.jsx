import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setSearchTerm={setSearchTerm}></GifSearch>
        <br></br>
        <GifContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
