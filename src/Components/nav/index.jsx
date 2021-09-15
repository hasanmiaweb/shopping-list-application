import BrandLogo from "../../assets/brand-logo/brand-logo-2.png"
import MoreMenu from "../../assets/icons/more-menu.png"
const NavigationBar = () => {
    return (
        <div>
            <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img
              className="nav__brand-logo"
              src={BrandLogo}
              alt="Brand Logo"
            />
            <h1 className="nav__brand-name">Shopping List</h1>
          </div>
          <div className="nav__menu nav__menu--right">
            <div className="nav__menu-items">
              <img
                className="nav__menu-icon"
                src={MoreMenu}
                alt="More Menu"
              />
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default NavigationBar;