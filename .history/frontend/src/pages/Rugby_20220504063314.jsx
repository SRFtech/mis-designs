    import logo from '../assets/logo.png'
    import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
    import 'react-tabs/style/react-tabs.css';
    function Rugby() {
        return (
            <div>
                <>
                    <nav className="sb-topNav navbar navbar-expand navbar-light bg-light">
                        {/* Navbar Brand*/}
                        <a className="navbar-brand ps-3" href="index.html">
                        <img src={logo} alt='logo' />
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
                            aria-describedBy="btnNavbarSearch"
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
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
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
                                aria-labelledBy="headingTwo"
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
                        <>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                            <h1 className="mt-4">Player Details</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item">
                                <a href="index.html">Registration</a>
                                </li>
                                <li className="breadcrumb-item active">Player Details</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-body">
                                <p className="mb-0"></p>
                                <Tabs>
                                    <TabList>
                                    <Tab>Player Details</Tab>
                                    <Tab>Rugby Sessions</Tab>
                                    </TabList>
                                    <TabPanel>
                                    <h2>Registration</h2>
                                    <div className="form mt-5">
                                        <form>
                                        <div>
                                            <div className="form-group row pb-2">
                                            <label
                                                htmlFor="date"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Date
                                            </label>
                                            <div className="col-sm-4">
                                                <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                placeholder=""
                                                />
                                            </div>
                                            </div>
                                            <h2 className="mt-4">Player Details</h2>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput1">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formControlInput1"
                                                placeholder="Player's Name"
                                            />
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput2">Age</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="formControlInput2"
                                                placeholder="Age"
                                            />
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput3">
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="formControlInput3"
                                                placeholder=""
                                            />
                                            </div>
                                            <div className="form-group">
                                            <label htmlFor="formControlSelect1">Gender</label>
                                            <select
                                                className="form-control"
                                                id="formControlSelect1"
                                            >
                                                <option>Female</option>
                                                <option>Male</option>
                                            </select>
                                            </div>
                                            <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea14">
                                                Medical Condition (if any)
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea14"
                                                rows={6}
                                                defaultValue={""}
                                            />
                                            </div>
                                        </div>
                                        <div className="row pb-2 pt-2">
                                            <h2 className="mt-4">Care Giver Details</h2>
                                            <div className="form-group pb-4">
                                            <label htmlFor="formControlSelect2">
                                                What is the relationship of the caregiver to the
                                                beneficiary?
                                            </label>
                                            <select
                                                className="form-control"
                                                id="formControlSelect2"
                                            >
                                                <option>Father</option>
                                                <option>Mother</option>
                                                <option>Guardian</option>
                                            </select>
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput4">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formControlInput4"
                                                placeholder="Name"
                                            />
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput5">Phone No.</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="formControlInput5"
                                                placeholder="Phone No."
                                            />
                                            </div>
                                            <div className="form-group row pt-2">
                                            <div className="col-sm-4">
                                                <button type="submit" className="btn btn-success">
                                                + Add Caregiver
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row pb-2 pt-2">
                                            <h2 className="mt-4">School Details</h2>
                                            <div className="form-group">
                                            <label htmlFor="formControlInput10">Name</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                id="formControlInput10"
                                                placeholder="School name"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <label htmlFor="formControlInput11">Class</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formControlInput11"
                                                placeholder="Class/Grade/Form"
                                            />
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput12">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formControlInput12"
                                                placeholder="Head teacher's Name"
                                            />
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="formControlInput13">Phone No.</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="formControlInput13"
                                                placeholder="Phone No."
                                            />
                                            </div>
                                        </div>
                                        <div className="row pb-2 pt-2">
                                            <h2 className="mt-4">Details</h2>
                                            <div className="form-group pb-2">
                                            <label htmlFor="exampleFormControlSelect1">
                                                Clinics
                                            </label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect1"
                                            >
                                                <option>Mathare</option>
                                                <option>Kibera</option>
                                                <option>Eastlands</option>
                                                <option>Tatu City</option>
                                                <option>Kangemi</option>
                                            </select>
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="exampleFormControlSelect1">
                                                Teams
                                            </label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect2"
                                            >
                                                <option>Under 10s</option>
                                                <option>Under 12s</option>
                                                <option>Under 16s</option>
                                                <option>Junior</option>
                                                <option>Senior</option>
                                            </select>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                    <div className="card mb-4">
                                <div className="card-body">
                                <p className="mb-0">
                                    I hereby consent to the participation in the activities and
                                    fully accept and assume all such risking all responsibility for
                                    losses, cost and damages incurred as a result of such
                                    participation. I have completely read and understood this
                                    agreement and its terms. The participant is under 18 year old,
                                    as the parent/guardian i sign this agreement on his/her behalf
                                    having legal responsibility.All the information above is the
                                    truth.
                                </p>
                                <div className="form-group row pt-2">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-success">
                                        Consent
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p className="mb-0">
                                            SRF has a duty of care for the children and will be responsible
                                            to ensure child safety and cover medical cost related to rugby
                                            injuries.
                                            <br />
                                            <br />
                                            <strong>Required documents for registration.</strong>
                                        </p>
                                        <ul>
                                            <li>Copy of child birth certificate.</li>
                                            <li>Copy of parents/guardian id.</li>
                                            <li>Passport size photo.</li>
                                            <li>Exam results copy.</li>
                                        </ul>
                                        <p />
                                        <div className="form-group row pt-2">
                                            <div className="col-sm-4">
                                            <button type="submit" className="btn btn-success">
                                                Upload
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="form-group row px-3  pt-2">
                                        <div className="col-sm-10 pb-4">
                                        <button type="submit" className="btn btn-success">
                                            Submit
                                        </button>
                                        </div>
                                    </div>
                                    </TabPanel>
                                    <TabPanel>
                                    <h2>Session Attendance</h2>
                                    <div className="form mt-5">
                                        <form>
                                        <div>
                                            <div className="form-group row pb-2">
                                                <label
                                                    htmlFor="date"
                                                    className="col-sm-2 col-form-label"
                                                >
                                                    Date
                                                </label>
                                                <div className="col-sm-4">
                                                    <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row pb-2">
                                                <label
                                                    htmlFor="date"
                                                    className="col-sm-2 col-form-label"
                                                >
                                                    Session Type
                                                </label>
                                                <div className="col-sm-4">
                                                    <select
                                                    className="form-control"
                                                    id="formControlSelect"
                                                    >
                                                    <option>School Visit</option>
                                                    <option>Weekend Session</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pb-2 pt-2">
                                            <div className="form-group pb-2">
                                            <label htmlFor="exampleFormControlSelect1">
                                                Clinics
                                            </label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect1"
                                            >
                                                <option>Mathare</option>
                                                <option>Kibera</option>
                                                <option>Eastlands</option>
                                                <option>Tatu City</option>
                                                <option>Kangemi</option>
                                            </select>
                                            </div>
                                            <div className="form-group pb-2">
                                            <label htmlFor="exampleFormControlSelect1">
                                                Teams
                                            </label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect2"
                                            >
                                                <option>Under 10s</option>
                                                <option>Under 12s</option>
                                                <option>Under 16s</option>
                                                <option>Junior</option>
                                                <option>Senior</option>
                                            </select>
                                            </div>
                                            <>

                    
                    Phares Otieno
                    Ronald Ogutu
                    Kennedy Onyango
                    Nick Juma
                    Emily Mutua
                    Philis Atieno
                    Ronald Ogutu
                    Kate Muli
                    Juma Mwanza

                                            <form action="/action_page.php">
                                                <input type="checkbox" id="player1" name="player1" defaultValue="Bike" />
                                                <label htmlFor="player1">Players name</label>
                                                <br />
                                                <input type="checkbox" id="player2" name="player2" defaultValue="Car" />
                                                <label htmlFor="player2"></label>
                                                <br />
                                                <input type="checkbox" id="player3" name="player3" defaultValue="Boat" />
                                                <label htmlFor="player3"> I have a boat</label>
                                                <br />
                                                <input type="checkbox" id="player1" name="player1" defaultValue="Bike" />
                                                <label htmlFor="player1"> I have a bike</label>
                                                <br />
                                                <input type="checkbox" id="player2" name="player2" defaultValue="Car" />
                                                <label htmlFor="player2"> I have a car</label>
                                                <br />
                                                <input type="checkbox" id="player3" name="player3" defaultValue="Boat" />
                                                <label htmlFor="player3"> I have a boat</label>
                                                <br />
                                                <input type="checkbox" id="player1" name="player1" defaultValue="Bike" />
                                                <label htmlFor="player1"> I have a bike</label>
                                                <br />
                                                <input type="checkbox" id="player2" name="player2" defaultValue="Car" />
                                                <label htmlFor="player2"> I have a car</label>
                                                <br />
                                                <input type="checkbox" id="player3" name="player3" defaultValue="Boat" />
                                                <label htmlFor="player3"> I have a boat</label>
                                                <input type="checkbox" id="player1" name="player1" defaultValue="Bike" />
                                                <label htmlFor="player1"> I have a bike</label>
                                                <br />
                                                <input type="checkbox" id="player2" name="player2" defaultValue="Car" />
                                                <label htmlFor="player2"> I have a car</label>
                                                <br />
                                                <input type="checkbox" id="player3" name="player3" defaultValue="Boat" />
                                                <label htmlFor="player3"> I have a boat</label>
                                                <br />
                                                <br />
                                                <br />
                                                <div className="form-group row px-3  pt-2">
                                                    <div className="col-sm-10 pb-4">
                                                    <button type="submit" className="btn btn-success">
                                                        Submit
                                                    </button>
                                                    </div>
                                                </div>
                                            </form>
                                            </>
                                        </div>
                                        </form>
                                    </div>
                                    </TabPanel>
                                </Tabs>
                                <p/>
                                </div>
                            </div>
                            </div>
                        </main>
                        </div>
                </div>
                </>
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
