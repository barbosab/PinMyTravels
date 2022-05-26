import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Typeahead } from "react-bootstrap-typeahead";

type Props = {
  show: boolean;
  title: string;
  countryList: string[];
  setShow: Function;
  addCountry: Function;
};

function AddCountryModal({
  show,
  title,
  countryList,
  setShow,
  addCountry,
}: Props) {
  const [addingCountryVisited, setAddingCountryVisited] = useState<string[]>(
    []
  );

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Choose Country to Add</Form.Label>
            <Typeahead
              id="country-visited-dropdown-typeahead-single"
              onChange={(selected) => {
                setAddingCountryVisited([selected.toString()]);
              }}
              options={countryList}
              placeholder="Choose a country..."
              selected={addingCountryVisited}
            />
          </Form.Group>
          <Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                addCountry(addingCountryVisited[0]);
                setShow(false);
                setAddingCountryVisited([]);
              }}
              disabled={addingCountryVisited.length === 0}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddCountryModal;
