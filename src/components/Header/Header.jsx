import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header className="app-header sticky" id="header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <a href="index.html" className="header-logo">
                  <img
                    src="assets/images/brand-logos/desktop-logo.png"
                    alt="logo"
                    className="desktop-logo"
                  />
                  <img
                    src="https://bnidvr.com/img/site/5ec2854ed3f67d002d544276.png"
                    alt="logo"
                    className="toggle-dark"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/proxy/Jeixm6Fw7cgEGxGDsaLmzFQpDVAudLCLJfTLQvG5aO8SyaEnoQZeRISUpdGEeaafODcjVKwO8ik3JyL9uq9UZIGeXv-11U78O4TBnw"
                    alt="logo"
                    className="desktop-dark"
                    height="56px"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/proxy/Jeixm6Fw7cgEGxGDsaLmzFQpDVAudLCLJfTLQvG5aO8SyaEnoQZeRISUpdGEeaafODcjVKwO8ik3JyL9uq9UZIGeXv-11U78O4TBnw"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <img
                    src="https://lh3.googleusercontent.com/proxy/Jeixm6Fw7cgEGxGDsaLmzFQpDVAudLCLJfTLQvG5aO8SyaEnoQZeRISUpdGEeaafODcjVKwO8ik3JyL9uq9UZIGeXv-11U78O4TBnw"
                    alt="logo"
                    className="toggle-white"
                  />
                  <img
                    src="assets/images/brand-logos/desktop-white.png"
                    alt="logo"
                    className="desktop-white"
                  />
                </a>
              </div>
            </div>

            <div className="header-element mx-lg-0 mx-2">
              <a
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                href="javascript:void(0);"
              >
                <span></span>
              </a>
            </div>

            <div className="header-element header-search d-md-block d-none my-auto auto-complete-search">
              <input
                type="text"
                className="header-search-bar form-control"
                id="header-search"
                placeholder="Search anything here ..."
                spellCheck="false"
                autoComplete="off"
                autoCapitalize="off"
              />
              <a href="javascript:void(0);" className="header-search-icon border-0">
                <i className="ri-search-line"></i>
              </a>
            </div>
          </div>

          <ul className="header-content-right">
            <li className="header-element d-md-none d-block">
              <a href="javascript:void(0);" className="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
                <i className="bi bi-search header-link-icon"></i>
              </a>
            </li>

            <li className="header-element country-selector dropdown">
              <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21L15.75 9.75 21 21M12 18h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"></path>
                </svg>
              </a>

              <ul className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                          <img src="assets/images/flags/us_flag.jpg" alt="img" />
                        </span>
                        English
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/spain_flag.jpg" alt="img" />
                    </span>
                    Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/french_flag.jpg" alt="img" />
                    </span>
                    Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/uae_flag.jpg" alt="img" />
                    </span>
                    عربي
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/germany_flag.jpg" alt="img" />
                    </span>
                    Deutsch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/china_flag.jpg" alt="img" />
                    </span>
                    中国人
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/italy_flag.jpg" alt="img" />
                    </span>
                    Italiano
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                      <img src="assets/images/flags/russia_flag.jpg" alt="img" />
                    </span>
                    Русский
                  </a>
                </li>
              </ul>
            </li>

            {/* Other header items (notifications, profile, etc.) */}
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
