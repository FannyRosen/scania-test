export const Header = () => {
  return (
    <>
      <nav className="sdds-nav">
        <div className="sdds-nav__left">
          <div className="sdds-nav__app-name" id="header">
            Fleet Portal
          </div>
        </div>

        <div className="sdds-nav__right">
          <a className="sdds-nav__item sdds-nav__app-logo" href="#"></a>
        </div>
      </nav>
      <div className="sdds-block sdds-block__ongrey" id="subheader">
        Driver Evaluation
      </div>
    </>
  );
};
