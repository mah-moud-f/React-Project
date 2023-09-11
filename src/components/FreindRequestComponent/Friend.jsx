import pic1 from "../../assets/friend image/3.png"
import Header from "../HeaderComponent/Header";
import "./Friend.css";

export default function Friend (){
    return (
        <>
            <Header />
            <div className="container-fluid first">
            <div className="row">
                {/* right sideee */}
                <div className="col-sm-3 text-white leftSide">
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <div
                                    href="#"
                                    className="list-group-item list-group-item-action py-2 ripple d-flex justify-content-between align-items-center"
                                    aria-current="true"
                                >
                                    <span>Friends</span>
                                    <i className="fa-solid fa-gear me-3 setting"></i>
                                </div>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                    <i className="fa-solid fa-user-group fa-fw me-3"></i><span>Home</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fa-solid fa-user-group me-3"></i><span>Friends</span></a
                                >
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fa-solid fa-user-group me-3"></i><span>Suggestions</span></a
                                >
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fa-solid fa-user-group me-3"></i><span>All Friend</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fa-solid fa-cake-candles me-3"></i><span>Birth Day</span></a
                                >
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fa-solid fa-table-list me-3"></i><span>Custom list</span></a
                                >
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <!-- left side  --> */}
                <div className="col-sm-9 text-white rightSide">
                    <div className="row g-2 mt-2">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="card">
                                <img src={pic1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ahmed Mohammed</h5>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary btn-block">Confirm</button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-light btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



