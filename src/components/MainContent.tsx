import { useEffect, useState } from "react";
import data from "../data.json";

interface Test extends Element {
  resetOption: () => void;
}

export const MainContent = () => {
  const [value, setValue] = useState("");

  function filterArray() {
    if (value === ">200.000 km") {
      const updatedMap = data.filter(
        (value) =>
          parseInt(value.distance.replace(" km", "").replace(",", "")) > 200000
      );
      return JSON.stringify(updatedMap);
    } else if (value === "<=200.000 km") {
      const updatedMap = data.filter(
        (value) =>
          parseInt(value.distance.replace(" km", "").replace(",", "")) <= 200000
      );
      return JSON.stringify(updatedMap);
    } else return JSON.stringify(data);
  }

  useEffect(() => {
    const dropdown = document.getElementById("dropdown-parent");
    const dropdownOption1 = document.getElementById("test1");
    const dropdownOption2 = document.getElementById("test2");
    if (dropdownOption2 && dropdownOption1 !== null) {
      dropdownOption1?.addEventListener("click", () => {
        setTimeout(() => {
          if (dropdown) {
            const element = dropdown.getAttribute("selected-text");
            if (element) {
              setValue(element);
            }
          }
        });
      });
      dropdownOption2?.addEventListener("click", () => {
        setTimeout(() => {
          if (dropdown) {
            const element = dropdown.getAttribute("selected-text");
            if (element) {
              setValue(element);
            }
          }
        });
      });
    }
    filterArray();
  }, []);

  function reset() {
    const dropdownReset: Test | null =
      document.querySelector("#dropdown-parent");
    if (dropdownReset) {
      dropdownReset.resetOption();
    }
    setValue("");
    filterArray();
  }

  console.log("Data: ", JSON.stringify(data));

  return (
    <>
      <div className="sdds-block sdds-block__onwhite" id="main-wrapper">
        <div className="dropdown-reset-wrapper">
          <div className="dropdown-wrapper">
            <sdds-dropdown placeholder="Select distance" id="dropdown-parent">
              <sdds-dropdown-option id="test1" value="option-1">
                {"<=200.000 km"}
              </sdds-dropdown-option>
              <sdds-dropdown-option id="test2" value="option-2">
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
    </>
  );
};
