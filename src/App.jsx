import { artists } from './best-selling-music-artists';

import ArtistDetails from './ArtistDetails';

function App() {
  // arrays are cool because they have array methods
  // array methods are .forEach, .filter, .reduce and .map
  return (
    <div className="app"> 
      <div className="content">
        <h1>Best-selling music artists</h1>
        <div className="display-music-list">
          {artists.map((artist) => {
            return <ArtistDetails artist={artist} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
