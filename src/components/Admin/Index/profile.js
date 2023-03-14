const Profile = () => {
    return (
        <nav className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse"
                data-target=".sidebar-collapse">
               <i class=" fa fa-bars"></i>
            </button>
            <a className="navbar-brand waves-effect waves-dark" href="/admin"><i
                    className="large material-icons fa fa-angle-down"></i> <strong>target</strong></a>

            <div id="sideNav" href="">
            
               </div>
        </div>

        <ul className="nav navbar-top-links navbar-right">
            <li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown4"><i
                        className="fa fa-envelope fa-fw"></i>  
                        <i className="fa fa-angle-down text-dark material-icons right"></i></a>
            </li>
            <li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown3"><i
                        className="fa fa-tasks fa-fw"></i>   
                         <i className="fa fa-angle-down text-dark material-icons right"></i></a></li>
            <li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown2"><i
                        className="fa fa-bell fa-fw"></i>   
                         <i className="fa fa-angle-down text-dark material-icons right"></i></a></li>
            <li><a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1"><i
                        className="fa fa-user fa-fw"></i> <b>John Doe</b>
                          <i className="fa fa-angle-down text-dark material-icons right"></i></a></li>
        </ul>
    </nav>
    )
}
export default Profile