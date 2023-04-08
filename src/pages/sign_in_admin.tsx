export function SignInAdmin() {
    require('./../assets/css/soft-ui-dashboard.css');
	require('./../assets/css/nucleo-icons.css');
	require('./../assets/css/nucleo-svg.css');
    return (
        <>
        <div className="container position-sticky z-index-sticky top-0">
   <div className="row">
     <div className="col-12">
       <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
         <div className="container-fluid pe-0">
           <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
            Trang quản lý app
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
                 <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="/admin">
                   <i className="fa fa-pie-chart opacity-6 text-dark me-1"></i>
                   Dashboard
                 </a>
               </li>
              
               <li className="nav-item">
                 <a className="nav-link me-2" href="/sign_up">
                   <i className="fa fa-user-circle opacity-6 text-dark me-1"></i>
                   Đăng ký tài khoản người dùng
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link me-2" href="/log_in">
                   <i className="fa fa-key opacity-6 text-dark me-1"></i>
                  Đăng nhập người dùng
                 </a>
               </li>
             </ul>
             <li className="nav-item d-flex align-items-center">
               <a className="btn btn-round btn-sm mb-0 btn-outline-primary me-2" target="_blank" href="/">Trang người dùng</a>
             </li>
             <ul className="navbar-nav d-lg-block d-none">
               <li className="nav-item">
                 <a href="https://github.com/PhamVietHa2205/ShopWeb" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Free download</a>
               </li>
             </ul>
           </div>
         </div>
       </nav>
     </div>
   </div>
 </div>
 <main className="main-content  mt-0">
   <section>
     <div className="page-header min-vh-75">
       <div className="container">
         <div className="row">
           <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
             <div className="card card-plain mt-8">
               <div className="card-header pb-0 text-left bg-transparent">
                 <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                 <p className="mb-0">Enter your email and password to sign in</p>
               </div>
               <div className="card-body">
                 <form role="form">
                   <label>Email</label>
                   <div className="mb-3">
                     <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                   </div>
                   <label>Password</label>
                   <div className="mb-3">
                     <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                   </div>
                   <div className="form-check form-switch">
                     <input className="form-check-input" type="checkbox" id="rememberMe"/>
                     <label className="form-check-label" >Remember me</label>
                   </div>
                   <div className="text-center">
                     <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                   </div>
                 </form>
               </div>
               <div className="card-footer text-center pt-0 px-lg-2 px-1">
                 <p className="mb-4 text-sm mx-auto">
                   Don't have an account?
                   <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-8">
             <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
               <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${require('../assets/img/curved-images/curved6.jpg')})` }} ></div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </main>

 <footer className="footer py-5">
   <div className="container">
     <div className="row">
       <div className="col-lg-8 mb-4 mx-auto text-center">
        <h4>Nhóm 5</h4>
       </div>
       <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
         <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
           <span className="text-lg fa fa-dribbble"></span>
         </a>
         <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
           <span className="text-lg fa fa-twitter"></span>
         </a>
         <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
           <span className="text-lg fa fa-instagram"></span>
         </a>
         <a href="https://github.com/PhamVietHa2205/ShopWeb" target="_blank" className="text-secondary me-xl-4 me-4">
           <span className="text-lg fa fa-github"></span>
         </a>
       </div>
     </div>
     <div className="row">
       <div className="col-8 mx-auto text-center mt-1">
         <p className="mb-0 text-secondary">
         Created <script>
           3/3/2023
           </script> by Kien Rua.
         </p>
       </div>
     </div>
   </div>
 </footer>
       </>
    )
}