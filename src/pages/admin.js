// import '../asssets/css/soft-ui-dashboard.css'
// import '../asssets/scss/soft-ui-dashboard.scss'
// import '../asssets/css/nucleo-icons.css';
// import '../asssets/css/nucleo-svg.css';
const DashBoard  = () => {
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
    id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
        target="_blank">
        <img src={require('../asssets/img/logo-ct-dark.png')} className="navbar-brand-img h-100" alt="main_logo"/>
        <span className="ms-1 font-weight-bold">Website quản lý bán hàng</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  active" href="../pages/dashboard.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                     <i className=" fa fa-bell cursor-pointer"></i>
           
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/tables.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
               <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Người dùng</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/billing.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                 <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Sản phẩm</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/virtual-reality.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Đơn hàng</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/rtl.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                 <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Lịch sử giao dịch</span>
          </a>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/profile.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/sign-in.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                 <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Sign In</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/sign-up.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className=" fa fa-bell cursor-pointer"></i>
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer mx-3 ">
      <div class="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
        <div class="full-background" style={{ backgroundImage: `url(${require('../asssets/img/curved-images/white-curved.jpg')})` }} ></div>
        <div class="card-body text-start p-3 w-100">
          <div class="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
            <i class="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon"></i>
          </div>
          <div class="docs-info">
            <h6 class="text-white up mb-0">Need help?</h6>
            <p class="text-xs font-weight-bold">Please check our docs</p>
            <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" class="btn btn-white btn-sm w-100 mb-0">Documentation</a>
          </div>
        </div>
      </div>
      <a class="btn bg-gradient-primary mt-3 w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree">Upgrade to pro</a>
    </div>
  </aside>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
      navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fa fa-search" aria-hidden="true"></i></span>
              <input type="text" className="form-control" placeholder="Type here..."/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank"
                href="/">Trang người dùng</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign In</span>
              </a>
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
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src={require('../asssets/img/team-2.jpg')} className="avatar avatar-sm  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0 ">
                          <i className="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src={require('../asssets/img/small-logos/logo-spotify.svg')}
                          className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p className="text-xs text-secondary mb-0 ">
                          <i className="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                      <i className=" fa fa-bell cursor-pointer"></i>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary mb-0 ">
                          <i className="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                    <h5 className="font-weight-bolder mb-0">
                      $53,000
                      <span className="text-success text-sm font-weight-bolder">+55%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Users</p>
                    <h5 className="font-weight-bolder mb-0">
                      2,300
                      <span className="text-success text-sm font-weight-bolder">+3%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
                    <h5 className="font-weight-bolder mb-0">
                      +3,462
                      <span className="text-danger text-sm font-weight-bolder">-2%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Sales</p>
                    <h5 className="font-weight-bolder mb-0">
                      $103,430
                      <span className="text-success text-sm font-weight-bolder">+5%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex flex-column h-100">
                    <p className="mb-1 pt-2 text-bold">Built by Nguyen Huu Kien</p>
                    <h5 className="font-weight-bolder">Website bán hàng</h5>
                    <p className="mb-5">K64 CD </p>
                    <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                      Read More
                      <i className="fa fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                  <div className="bg-gradient-primary border-radius-lg h-100">
                    
                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 position-relative z-index-2 pt-4"
                         src={require('../asssets/img/illustrations/rocket-white.png')} alt="rocket"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style={{ backgroundImage: `url(${require('../asssets/img/ivancik.jpg')})` }}>
              <span className="mask bg-gradient-dark"></span>
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with admin pages</h5>
                <p className="text-white">Quản lý người dùng web, sản phẩm, và lịch sử mua bán</p>
                <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                  Read More
                  <i className="fa fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="row my-4">
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
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img  src={require('../asssets/img/small-logos/logo-xd.svg')}  className="avatar avatar-sm me-3" alt="xd"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Soft UI XD Version</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Ryan Tompson">
                            <img  src={require('../asssets/img/team-1.jpg')}  alt="team1"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Romina Hadid">
                            <img src={require('../asssets/img/team-2.jpg')} alt="team2"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Alexander Smith">
                            <img src={require('../asssets/img/team-3.jpg')} alt="team3"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Jessica Doe">
                            <img src={require('../asssets/img/team-4.jpg')} alt="team4"/>
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
                            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src={require('../asssets/img/small-logos/logo-atlassian.svg')}  className="avatar avatar-sm me-3"
                              alt="atlassian"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Add Progress Track</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Romina Hadid">
                            <img  src={require('../asssets/img/team-2.jpg')}   alt="team5"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Jessica Doe">
                            <img src={require('../asssets/img/team-4.jpg')}  alt="team6"/>
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
                            <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img  src={require('../asssets/img/small-logos/logo-slack.svg')} className="avatar avatar-sm me-3"
                              alt="team7"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Fix Platform Errors</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Romina Hadid">
                            <img   src={require('../asssets/img/team-3.jpg')} alt="team8"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Jessica Doe">
                            <img src={require('../asssets/img/team-1.jpg')} alt="team9"/>
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
                            <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src={require('../asssets/img/small-logos/logo-spotify.svg')} className="avatar avatar-sm me-3"
                              alt="spotify"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Launch our Mobile App</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Ryan Tompson">
                            <img src={require('../asssets/img/team-4.jpg')}  alt="user1"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Romina Hadid">
                            <img src={require('../asssets/img/team-3.jpg')}  alt="user2"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Alexander Smith">
                            <img src={require('../asssets/img/team-4.jpg')}  alt="user3"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Jessica Doe">
                            <img src={require('../asssets/img/team-1.jpg')}  alt="user4"/>
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
                            <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src={require('../asssets/img/small-logos/logo-jira.svg')} className="avatar avatar-sm me-3" alt="jira"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Add the New Pricing Page</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Ryan Tompson">
                            <img  src={require('../asssets/img/team-4.jpg')}  alt="user5"/>
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
                            <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25"
                              aria-valuemin="0" aria-valuemax="25"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img    src={require('../asssets/img/small-logos/logo-invision.svg')}  className="avatar avatar-sm me-3"
                              alt="invision"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Redesign New Online Shop</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Ryan Tompson">
                            <img src={require('../asssets/img/team-1.jpg')}  alt="user6"/>
                          </a>
                          <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="Jessica Doe">
                            <img src={require('../asssets/img/team-4.jpg')} alt="user7"/>
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
                            <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40"
                              aria-valuemin="0" aria-valuemax="40"></div>
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
                    <i className="fa fa-bell text-success text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-bell text-danger text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-bell text-info text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-bell text-warning text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-bell text-primary text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="fa fa-bell text-dark text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                    <p className=" font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                ©
              3/3/2023
                made with <i className="fa fa-heart"></i> by
                <a href="https://www.facebook.com/HuuGiangdz" className="font-weight-bold" target="_blank">Kiên Rùa</a>
                 for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About
                    Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted"
                    target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  </main>
  <div class="fixed-plugin">
    <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i class="fa fa-cog py-2"> </i>
    </a>
    <div class="card shadow-lg ">
      <div class="card-header pb-0 pt-3 ">
        <div class="float-start">
          <h5 class="mt-3 mb-0">Soft UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div class="float-end mt-4">
          <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
       
      </div>
      <hr class="horizontal dark my-1"/>
      <div class="card-body pt-sm-3 pt-0">
      
        <div>
          <h6 class="mb-0">Sidebar Colors</h6>
        </div>
        <a href="#" class="switch-trigger background-color">
          <div class="badge-colors my-2 text-start">
            <span class="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
          </div>
        </a>
      
        <div class="mt-3">
          <h6 class="mb-0">Sidenav Type</h6>
          <p class="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div class="d-flex">
          <button class="btn bg-gradient-primary w-100 px-3 mb-2 active" data-class="bg-transparent" onclick="sidebarType(this)">Transparent</button>
          <button class="btn bg-gradient-primary w-100 px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
        </div>
        <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
  
        <div class="mt-3">
          <h6 class="mb-0">Navbar Fixed</h6>
        </div>
        <div class="form-check form-switch ps-0">
          <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)"/>
        </div>
        <hr class="horizontal dark my-sm-4"/>
        <a class="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard">Free Download</a>
        <a class="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard">View documentation</a>
        <div class="w-100 text-center">
          <a class="github-button" href="https://github.com/creativetimofficial/soft-ui-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub">Star</a>
          <h6 class="mt-3">Thank you for sharing!</h6>
          <a href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
            <i class="fa fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
            <i class="fa fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>
        </>
    );
}

export default DashBoard;