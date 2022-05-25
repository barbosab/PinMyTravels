import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import WorldMap from "./components/WorldMap/WorldMap";
import worldmapjson from "./data/worldmap_lowres.json";
import {
  getVisitedCountries,
  getWantToVisitCountries,
} from "./storage/storageUtil";

function App() {
  // setVisitedCountries(["United Kingdom", "Russia", "United States", "Canada"]);
  // setWantToVisitCountries(["Sweden", "France"]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pin My Travels</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ overflow: "auto" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <WorldMap
              geojson={worldmapjson}
              height={800}
              width={1200}
              visited={getVisitedCountries()}
              wantToVisit={getWantToVisitCountries()}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
