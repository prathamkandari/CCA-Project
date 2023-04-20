import React from 'react';
import './material-dashboard.css';
import './material-dashboard.css.map';
import './material-dashboard.min.css';
import image1 from'../assets/img/1 (2).jpg';
import image2 from'../assets/img/2.jpg';
import image3 from'../assets/img/3.jpg';
const Dashboard = () => {
    return (
        // <div>Dashboard</div> 
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <h6 className="font-weight-bolder mb-0">Designed by Pratham Kandari</h6>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group input-group-outline">
                                <label className="form-label">Search</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <ul className="navbar-nav  justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="#" >Search</a>
                            </li>

                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item px-3 d-flex align-items-center">
                                <a href="javascript:;" className="nav-link text-body p-0">
                                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar End */}

            <div className="row">
                {/* <div className="col">
                    <div className="card h-100">
                        <img src="https://via.placeholder.com/300x200.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer bg-white border-0">
                            <div className="btn-group">
                                <a href="#" className="btn btn-sm btn-outline-secondary">button</a>
                                <a href="#" className="btn btn-sm btn-outline-secondary">button</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row row-cols-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={image1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Crime Police Station, Uttarakhand Police</h5>
                                    <p className="card-text">Uttarakhand STF's Kumaon Cyber ​​Station police arrested the mastermind of cyber fraud worth Rs 1.85 crore, a foreign national of Nigerian origin from Delhi.</p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-sm btn-outline-secondary">View More</a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src={image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Crime Police Station, Uttarakhand Police</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-sm btn-outline-secondary">View More</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Crime Police Station, Uttarakhand Police</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-sm btn-outline-secondary">View More</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                                        <h4 className="mb-0">$53k</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                                        <h4 className="mb-0">2,300</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">New Clients</p>
                                        <h4 className="mb-0">3,462</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Sales</p>
                                        <h4 className="mb-0">$103,430</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-bars" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Website Views</h6>
                                    <p className="text-sm ">Last Campaign Performance</p>
                                    <hr className="dark horizontal" />
                                        <div className="d-flex ">
                                            <i className="material-icons text-sm my-auto me-1">schedule</i>
                                            <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2  ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 "> Daily Sales </h6>
                                    <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) increase in today sales. </p>
                                    <hr className="dark horizontal" />
                                        <div className="d-flex ">
                                            <i className="material-icons text-sm my-auto me-1">schedule</i>
                                            <p className="mb-0 text-sm"> updated 4 min ago </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mb-3">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Completed Tasks</h6>
                                    <p className="text-sm ">Last Campaign Performance</p>
                                    <hr className="dark horizontal" />
                                        <div className="d-flex ">
                                            <i className="material-icons text-sm my-auto me-1">schedule</i>
                                            <p className="mb-0 text-sm">just updated</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="row">
                                        <div className="col-lg-6 col-7">
                                            <h6>Projects</h6>
                                            <p className="text-sm mb-0">
                                                <i className="fa fa-check text-info" aria-hidden="true"></i>
                                                <span className="font-weight-bold ms-1">30 done</span> this month
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-5 my-auto text-end">
                                            <div className="dropdown float-lg-end pe-4">
                                                <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-v text-secondary"></i>
                                                </a>
                                                <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-xd.svg" className="avatar avatar-sm me-3" alt="xd" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Material XD Version</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="../assets/img/team-1.jpg" alt="team1" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="../assets/img/team-2.jpg" alt="team2" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="../assets/img/team-3.jpg" alt="team3" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="../assets/img/team-4.jpg" alt="team4" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> $14,000 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">60%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm me-3" alt="atlassian" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Add Progress Track</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="../assets/img/team-2.jpg" alt="team5" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="../assets/img/team-4.jpg" alt="team6" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> $3,000 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">10%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm me-3" alt="team7" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Fix Platform Errors</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="../assets/img/team-3.jpg" alt="team8" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="../assets/img/team-1.jpg" alt="team9" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> Not set </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm me-3" alt="spotify" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Launch our Mobile App</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="../assets/img/team-4.jpg" alt="user1" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="../assets/img/team-3.jpg" alt="user2" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="../assets/img/team-4.jpg" alt="user3" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="../assets/img/team-1.jpg" alt="user4" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> $20,500 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-jira.svg" className="avatar avatar-sm me-3" alt="jira" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Add the New Pricing Page</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="../assets/img/team-4.jpg" alt="user5" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> $500 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">25%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-invision.svg" className="avatar avatar-sm me-3" alt="invision" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Redesign New Online Shop</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="../assets/img/team-1.jpg" alt="user6" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="../assets/img/team-4.jpg" alt="user7" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> $2,000 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">40%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100">
                                <div className="card-header pb-0">
                                    <h6>Orders overview</h6>
                                    <p className="text-sm">
                                        <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                        <span className="font-weight-bold">24%</span> this month
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="timeline timeline-one-side">
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-success text-gradient">notifications</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-danger text-gradient">code</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-info text-gradient">shopping_cart</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-warning text-gradient">credit_card</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-primary text-gradient">key</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block">
                                            <span className="timeline-step">
                                                <i className="material-icons text-dark text-gradient">payments</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer className="footer py-4  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center ">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link pe-0 text-muted" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </div>
        </main>
    )
}

export default Dashboard