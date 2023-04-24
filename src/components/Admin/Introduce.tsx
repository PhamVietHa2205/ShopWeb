import { memo } from "react";

const Introduce = () => {
    return (
        <>
        <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column h-100">
                                            <p className="mb-1 pt-2 text-bold">Built by developers</p>
                                            <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                                            <p className="mb-5">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                            <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                                Read More
                                                <i className="fa fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                        <div className="bg-gradient-primary border-radius-lg h-100">
                                            
                                            <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                                <img className="w-100 position-relative z-index-2 pt-4" src={require("../../assets/img/illustrations/rocket-white.png")} alt="rocket" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card h-100 p-3">
                            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{ backgroundImage: "url('../../assets/img/ivancik.jpg')" }}>
                                <span className="mask bg-gradient-dark"></span>
                                <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                                    <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
                                    <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                                    <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        Read More
                                        <i className="fa fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default memo(Introduce);