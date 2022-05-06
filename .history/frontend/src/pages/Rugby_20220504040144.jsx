function Rugby() {
    return (
        <div>
            <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Charts SRF-MIS</title>
  <link href="css/styles.css" rel="stylesheet" />
  <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
    {/* Navbar Brand*/}
    <a className="navbar-brand ps-3" href="index.html">
      <img src="/assets/img/logo.png" />
    </a>
    {/* Sidebar Toggle*/}
    <button
      className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Navbar Search*/}
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
          aria-describedby="btnNavbarSearch"
        />
        <button className="btn btn-success" id="btnNavbarSearch" type="button">
          <i className="fas fa-search" />
        </button>
      </div>
    </form>
    {/* Navbar*/}
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle waves-effect waves-light"
          id="navbarDropdownMenuLink-5"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span className="badge badge-danger ml-2">4</span>
          <i className="fas fa-bell" />
        </a>
        <div
          className="dropdown-menu dropdown-menu-e dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-5"
        >
          <a className="dropdown-item waves-effect waves-light" href="#">
            Messages <span className="badge badge-danger ml-2">4</span>
          </a>
          <a className="dropdown-item waves-effect waves-light" href="#">
            Counselling sessions due
            <span className="badge badge-danger ml-2">1</span>
          </a>
          <a className="dropdown-item waves-effect waves-light" href="#">
            Home visits due <span className="badge badge-danger ml-2">4</span>
          </a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-user fa-fw" />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <a className="dropdown-item" href="#!">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Activity Log
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-light"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </a>
            <div className="sb-sidenav-menu-heading">Forms</div>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Login/Sign Out
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Sign Up &amp; Sign In
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="login.html">
                      Login
                    </a>
                    <a className="nav-link" href="register.html">
                      Register
                    </a>
                    <a className="nav-link" href="password.html">
                      Forgot Password
                    </a>
                  </nav>
                </div>
              </nav>
            </div>
            <a
              className="nav-link collapsed"
              href=""
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Registration
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Visits
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a className="nav-link" href="player-profile.html">
                  Initial Home Visit
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <a className="nav-link" href="class8-visits.html">
                  Class 8 Visit
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Form 4 Visit
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                {/* <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordionPages">
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="login.html">Login</a>
                <a class="nav-link" href="register.html">Register</a>
                <a class="nav-link" href="password.html">Forgot Password</a>
              </nav>
            </div> */}
              </nav>
            </div>
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Counseling
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div className="sb-sidenav-menu-heading">Data View Options</div>
            <a className="nav-link" href="charts.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Data Visuals
            </a>
            <a className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Data Tables
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Admin
        </div>
      </nav>
    </div>
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Charts</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Charts</li>
          </ol>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-area me-1" />
              Trend in Total Average Attendance
            </div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height={30} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1" />
                  Life Skills
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height={50} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-pie me-1" />
                  Center Population
                </div>
                <div className="card-body">
                  <canvas id="myPieChart" width="100%" height={50} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright © SRF 2022</div>
            <div>
              <a href="#">Privacy Policy</a>·
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>

        </div>
    )
}

export default Rugby
