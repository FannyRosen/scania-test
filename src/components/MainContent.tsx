export const MainContent = () => {
  /*  function reset() {
    const dropdown = document.querySelector('#dropdownExample');
    dropdown.resetOption();
  } */

  function handleClick1() {}

  return (
    <>
      <div className="sdds-block sdds-block__onwhite">
        <sdds-dropdown placeholder="Select distance" id="dropdownExample">
          <sdds-dropdown-option value="option-1" onClick={() => handleClick1()}>
            {"<=200.000 km"}
          </sdds-dropdown-option>
          <sdds-dropdown-option value="option-2" onClick={() => handleClick1()}>
            {">200.000 km"}
          </sdds-dropdown-option>
        </sdds-dropdown>

        <sdds-table
          body-data='[{"driver":"Marcus Lundberg","company":"Aris FC","distance": 75044,"score": 52},
  {
    "driver": "Marcus Mena Pachero",
    "company": "Lio LTD",
    "distance": 129417,
    "score": 95
  },
  {
    "driver": "Valentine Ichtertz",
    "company": "LOTS Group",
    "distance": 244656,
    "score": 67
  },
  {
    "driver": "Niklas Rosén",
    "company": "DD Interactive",
    "distance": 200000,
    "score": 78
  }
]'
        >
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

      {/*   {DriverEvaluations.map((driver) => {
        return <div key={driver.id}></div>;
      })} */}
    </>
  );
};
