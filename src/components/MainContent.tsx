import { useEffect, useRef, useState } from "react";
import data from "../data.json";

interface Test extends Element {
  resetOption: () => void;
}

export const MainContent = () => {
  const [filterBy, setFilterBy] = useState("");
  const ref = useRef(null);

  function filterArray() {
    if (filterBy === ">200.000 km") {
      const updatedMap = data.filter(
        (value) =>
          parseInt(value.distance.replace(" km", "").replace(",", "")) > 200000
      );
      return JSON.stringify(updatedMap);
    } else if (filterBy === "<=200.000 km") {
      const updatedMap = data.filter(
        (value) =>
          parseInt(value.distance.replace(" km", "").replace(",", "")) <= 200000
      );
      return JSON.stringify(updatedMap);
    } else return JSON.stringify(data);
  }

  useEffect(() => {
    filterArray();
  }, []);

  function reset() {
    const dropdownReset: Test | null =
      document.querySelector("#dropdown-parent");
    if (dropdownReset) {
      dropdownReset.resetOption();
    }
    setFilterBy("");
    filterArray();
  }

  return (
    <div className="main">
      <div className="sdds-message sdds-message__type-informative sdds-message__icon-active sdds-message__extended-active sdds-message-ongrey">
        <svg
          className="sdds-message-icon sdds-message-icon--informative"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.008 2.50244C5.85715 2.50244 2.49219 5.8674 2.49219 10.0183C2.49219 14.1692 5.85715 17.5341 10.008 17.5341C14.1589 17.5341 17.5239 14.1692 17.5239 10.0183C17.5239 5.8674 14.1589 2.50244 10.008 2.50244ZM1.24219 10.0183C1.24219 5.17705 5.16679 1.25244 10.008 1.25244C14.8493 1.25244 18.7739 5.17705 18.7739 10.0183C18.7739 14.8595 14.8493 18.7841 10.008 18.7841C5.16679 18.7841 1.24219 14.8595 1.24219 10.0183Z"
            fill="#2B70D3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0156 8.82889C10.3608 8.82889 10.6406 9.10871 10.6406 9.45389L10.6406 12.9635C10.6406 13.3087 10.3608 13.5885 10.0156 13.5885C9.67045 13.5885 9.39063 13.3087 9.39063 12.9635L9.39063 9.45389C9.39063 9.10871 9.67045 8.82889 10.0156 8.82889Z"
            fill="#2B70D3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0156 6.44809C10.3608 6.44809 10.6406 6.72791 10.6406 7.07309L10.6406 7.20878C10.6406 7.55396 10.3608 7.83378 10.0156 7.83378C9.67045 7.83378 9.39062 7.55396 9.39062 7.20878L9.39062 7.07309C9.39062 6.72791 9.67045 6.44809 10.0156 6.44809Z"
            fill="#2B70D3"
          ></path>
        </svg>

        <h4 className="sdds-message-single">Filtrating options.</h4>

        <p className="sdds-message-extended">
          Choose one of the options below to filtrate drivers by distances.
        </p>
      </div>
      <div className="sdds-block sdds-block__onwhite" id="main-wrapper">
        <div className="dropdown-reset-wrapper">
          <div className="dropdown-wrapper">
            <sdds-dropdown
              placeholder="Select distance"
              id="dropdown-parent"
              ref={ref}
            >
              <sdds-dropdown-option
                id="test1"
                value="option-1"
                onClick={() => {
                  setFilterBy("<=200.000 km");
                }}
              >
                {"<=200.000 km"}
              </sdds-dropdown-option>
              <sdds-dropdown-option
                id="test2"
                value="option-2"
                onClick={() => {
                  setFilterBy(">200.000 km");
                }}
              >
                {">200.000 km"}
              </sdds-dropdown-option>
            </sdds-dropdown>
          </div>
          <button id="btn" onClick={reset}>
            Reset
          </button>
        </div>

        <sdds-table body-data={filterArray()}>
          <sdds-header-cell
            column-key="driver"
            column-title="Driver"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="company"
            column-title="Company"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="distance"
            column-title="Distance"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="score"
            column-title="Score"
          ></sdds-header-cell>
        </sdds-table>
      </div>
    </div>
  );
};
