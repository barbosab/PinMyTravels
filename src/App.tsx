import WorldMap from "./components/WorldMap/WorldMap";
import worldmapjson from "./data/worldmap_lowres.json";

function App() {
  return (
    <div className="App">
      <WorldMap geojson={worldmapjson} height={800} width={1000} />
    </div>
  );
}

export default App;
