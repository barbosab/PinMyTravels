import { render, screen, fireEvent, act } from "@testing-library/react";
import AddCountryModal from "../../../components/AddCountryModal/AddCountryModal";

describe("Testing AddCountryModal", () => {
  test("renders with show true", () => {
    render(
      <AddCountryModal
        show={true}
        title="Test Title Text"
        countryList={[]}
        setShow={() => {}}
        addCountry={() => {}}
      />
    );

    const titleElement = screen.getByText(/Test Title Text/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("doesn't renders with show false", () => {
    render(
      <AddCountryModal
        show={false}
        title="Test Title Text"
        countryList={[]}
        setShow={() => {}}
        addCountry={() => {}}
      />
    );

    const titleElement = screen.queryByText(/Test Title Text/i);
    expect(titleElement).not.toBeInTheDocument();
  });

  test("closes by setting show to false", () => {
    const setShow = jest.fn();

    render(
      <AddCountryModal
        show={true}
        title="Test Title Text"
        countryList={[]}
        setShow={setShow}
        addCountry={() => {}}
      />
    );

    const closeButton = screen.getByLabelText("Close");
    closeButton.click();
    expect(setShow).toHaveBeenCalledWith(false);
    expect(setShow).toHaveBeenCalledTimes(1);
  });
});
