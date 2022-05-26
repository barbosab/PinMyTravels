import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import AddCountryModal from "./components/AddCountryModal/AddCountryModal";
import WorldMap from "./components/WorldMap/WorldMap";
import worldmapjson from "./data/worldmap_lowres.json";
import {
  getVisitedCountries,
  getWantToVisitCountries,
  addVisitedCountry,
  addWantToVisitCountry,
} from "./storage/storageUtil";

function App() {
  const [showVisited, setShowVisited] = useState(false);
  const [showWantToVisit, setShowWantToVisit] = useState(false);

  const visited = getVisitedCountries();
  const wantToVisit = getWantToVisitCountries();

  let countryList = worldmapjson.features.map((value) => {
    return value.properties.name;
  });

  countryList = countryList.filter((country) => {
    if (visited.includes(country) || wantToVisit.includes(country)) {
      return false;
    }
    return true;
  });

  countryList.sort();

  return (
    <>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pin My Travels</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setShowVisited(true)}>
                Add Country I Visited
              </Nav.Link>
              <Nav.Link onClick={() => setShowWantToVisit(true)}>
                Add Country I Want to Visit
              </Nav.Link>
              <Nav.Link>Remove Countries</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ overflow: "auto" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <WorldMap
              geojson={worldmapjson}
              height={800}
              width={1200}
              visited={visited}
              wantToVisit={wantToVisit}
            />
          </Col>
        </Row>
      </Container>
      <AddCountryModal
        show={showVisited}
        title={"Add Country I Visited"}
        countryList={countryList}
        setShow={setShowVisited}
        addCountry={addVisitedCountry}
      />
      <AddCountryModal
        show={showWantToVisit}
        title={"Add Country I Want to Visit"}
        countryList={countryList}
        setShow={setShowWantToVisit}
        addCountry={addWantToVisitCountry}
      />
    </>
  );
}

export default App;
