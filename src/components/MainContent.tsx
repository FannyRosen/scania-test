import { DriverEvaluations } from "./DriverEvaluations";

export const MainContent = () => {
  /*  function reset() {
    const dropdown = document.querySelector('#dropdownExample');
    dropdown.resetOption();
  } */
  return (
    <>
      <div className="sdds-block sdds-block__onwhite">
        <sdds-dropdown placeholder="Select distance" id="dropdownExample">
          <sdds-dropdown-option value="option-1">
            {"<=200.000 km"}
          </sdds-dropdown-option>
          <sdds-dropdown-option value="option-2">
            {">200.000 km"}
          </sdds-dropdown-option>
        </sdds-dropdown>
      </div>
      <sdds-table body-data="">
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

      {/*   {DriverEvaluations.map((driver) => {
        return <div key={driver.id}></div>;
      })} */}
    </>
  );
};
