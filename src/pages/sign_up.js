
const SignUp  = () => {
  require('../assets/css/soft-ui-dashboard.css');
	require('../assets/css/nucleo-icons.css');
	require('../assets/css/nucleo-svg.css');

	return <>
		 <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
    <div className="container">
      <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" href="/admin">
       Website bán hàng
      </a>
      <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon mt-2">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
          <li className="nav-item">
            <a className="nav-link me-2" aria-current="page" href="/admin">
              <i className="fa fa-pie-chart opacity-6  me-1"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-2" href="admin/profile">
              <i className="fa fa-user opacity-6  me-1"></i>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-2" href="#">
              <i className="fa fa-user-circle opacity-6  me-1"></i>
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-2" href="admin/sign-in">
              <i className="fa fa-key opacity-6  me-1"></i>
              Sign In
            </a>
          </li>
        </ul>
    
      <li className="nav-item d-flex align-items-center">
            <a href="/" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-light">Trang người dùng</a>
          </li>    
      </div>
    </div>
  </nav>
 
  <main className="main-content  mt-0">
    <section className="min-vh-100 mb-8">
      <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{ backgroundImage: `url(${require('../assets/img/curved-images/curved14.jpg')})` }}  >
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center mx-auto">
              <h1 className="text-white mb-2 mt-5">Welcome!</h1>
              <p className="text-lead text-white">Sign Up Account Free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>Register with</h5>
              </div>
             
              <div className="card-body">
                <form role="form text-left">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon"/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div className="form-check form-check-info text-left">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                    <label className="form-check-label" for="flexCheckDefault">
                      I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                  </div>
                  <p className="text-sm mt-3 mb-0">Already have an account? <a href="/admin/sign-in" className="text-dark font-weight-bolder">Sign in</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer py-5">
      <div className="container">
     
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              Made at 3/3/2023  by Kien.
            </p>
          </div>
        </div>
      </div>
    </footer>

  </main>
	</>
}
export default SignUp;