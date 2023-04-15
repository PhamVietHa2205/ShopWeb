const Footer = () => {

	return (
		<>
		 <footer className="footer pt-3  ">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 mb-lg-0 mb-4">
                                <div className="copyright text-center text-sm text-muted text-lg-start">
                                    © 15/4/2023,
                                    made with <i className="fa fa-heart"></i> by
                                    <a href="#" className="font-weight-bold" target="_blank">Kiên Rùa</a>
                                    for a project web.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-muted" target="_blank">Nhóm 5</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-muted" target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-muted" target="_blank">Docs </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link pe-0 text-muted" target="_blank">Thời gian làm</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
		</>
	)
}

export default Footer;