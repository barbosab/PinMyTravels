import {
  getVisitedCountries,
  getWantToVisitCountries,
  addVisitedCountry,
  addWantToVisitCountry,
} from "../../storage/storageUtil";

const fakeLocalStorage = (function () {
  let store: Record<string, any> = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: any) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe("Testing storageUtils", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  test("successfully add a country visited", () => {
    addVisitedCountry("Sweden");
    expect(window.localStorage.getItem("VISITED")).toEqual("Sweden");
    addVisitedCountry("Ireland");

    expect(window.localStorage.getItem("VISITED")).toEqual("Sweden,Ireland");
    expect(getVisitedCountries()).toEqual(["Sweden", "Ireland"]);
  });

  test("successfully add a country want to visit", () => {
    addWantToVisitCountry("France");
    expect(window.localStorage.getItem("WANT_TO_VISIT")).toEqual("France");

    addWantToVisitCountry("Japan");
    expect(window.localStorage.getItem("WANT_TO_VISIT")).toEqual(
      "France,Japan"
    );
    expect(getWantToVisitCountries()).toEqual(["France", "Japan"]);
  });
});
