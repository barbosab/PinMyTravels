import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import WorldMap from "./components/WorldMap/WorldMap";
import worldmapjson from "./data/worldmap_lowres.json";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pin My Travels</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <WorldMap geojson={worldmapjson} height={800} width={1200} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
