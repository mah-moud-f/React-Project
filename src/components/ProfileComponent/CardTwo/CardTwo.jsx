import pic2 from "../../../assets/profile images/pic2.jpg";
import pic10 from "../../../assets/profile images/pic10.jpg";
import pic11 from "../../../assets/profile images/pic11.jpg";

export default function CardTwo() {
    return (
        <>
            <div className="card2 row">
                <div className="col-2"></div>

                <div className="row col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div className="intro p-3 rounded shadow-sm mb-3" style={{ backgroundColor: "white" }}>
                            <h4 style={{ color: "#050505" }}>Intro</h4>

                            <p className="text-center">Hello world !</p>
                            <div className="d-grid gap-2">
                                <button className="btn" type="button" style={{ backgroundColor: "#e4e6eb" }}>
                                    Add bio
                                </button>
                                <button className="btn" type="button" style={{ backgroundColor: "#e4e6eb" }}>
                                    Edit details
                                </button>
                                <button className="btn" type="button" style={{ backgroundColor: "#e4e6eb" }}>
                                    Add hobbies
                                </button>
                                <button className="btn" type="button" style={{ backgroundColor: "#e4e6eb" }}>
                                    Add featured
                                </button>
                            </div>
                        </div>

                        <div
                            className="photo p-3 d-flex justify-content-between rounded shadow-sm mb-3"
                            style={{ backgroundColor: "white" }}
                        >
                            <span>
                                <h4 style={{ color: "#050505" }}>Photos</h4>
                            </span>
                            <span style={{ color: "#1f69d0" }}>See all photos</span>
                        </div>

                        <div
                            className="friends p-3 d-flex justify-content-between rounded shadow-sm"
                            style={{ backgroundColor: "white" }}
                        >
                            <span>
                                <h4 style={{ color: "#050505" }}>Friends</h4>
                            </span>
                            <span style={{ color: "#1f69d0" }}>See all friends</span>
                        </div>

                        <p style={{ color: "#65676b", fontSize: "small" }}>
                            Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2023
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="mind p-3 rounded shadow-sm mb-3" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                    />
                                </div>

                                <div className="col-11">
                                    <input
                                        type="text"
                                        className="form-control rounded-pill border-0 bg-gray"
                                        placeholder="What is on your mind?"
                                        style={{ backgroundColor: "#e4e6e9" }}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="live row">
                                <div className="col-4 text-center" style={{ color: "#717383", fontWeight: "500" }}>
                                    <i className="fa-solid fa-video" style={{ color: "#ff3050" }}></i> Live video
                                </div>
                                <div className="col-4 text-center" style={{ color: "#717383", fontWeight: "500" }}>
                                    <i className="fa-regular fa-images" style={{ color: "#00ff00" }}></i>
                                    Photo/video
                                </div>
                                <div className="col-4 text-center" style={{ color: "#717383", fontWeight: "500" }}>
                                    <i className="fa-solid fa-flag" style={{ color: "#0000ff" }}></i> Life event
                                </div>
                            </div>
                        </div>

                        <div className="posts p-3 rounded shadow-sm mb-3" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col-6">
                                    <h4 style={{ color: "#050505" }}>Posts</h4>
                                </div>

                                <div className="col-6">
                                    <span>
                                        <button type="button" className="btn" style={{ backgroundColor: "#d8dadf" }}>
                                            <i className="fa-solid fa-sliders"></i> Filters
                                        </button>
                                    </span>
                                    <span>
                                        <button type="button" className="btn m-1" style={{ backgroundColor: "#d8dadf" }}>
                                            <i className="fa-solid fa-gear"></i>Manage posts
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6 text-center" style={{ color: "#0000ff" }}>
                                    <i className="fa-solid fa-bars"></i> List view
                                </div>
                                <div className="col-6 text-center">
                                    <i className="fa-solid fa-border-all"></i> Grid view
                                </div>
                            </div>
                        </div>

                        <p style={{ color: "#65676b", fontWeight: "500" }}>Pinned Post</p>
                        <div className="pind row p-3 rounded shadow-sm mb-3 mx-0" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-10">
                                    <h6 style={{ color: "#050505" }}>هاجر مراد</h6>
                                    <p style={{ fontSize: "small" }}>
                                        April 27,2021 .<i className="fa-solid fa-earth-americas"></i>
                                    </p>
                                </div>
                                <div className="col-1">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3">
                                    <h6>انتصروا .. مُجددًا</h6>
                                </div>
                            </div>

                            <div className="row">
                                <img src={pic10} alt="" />
                            </div>

                            <div className="row">
                                <div className="col-11">
                                    <span>
                                        <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-thumbs-up" style={{ color: "#0000ff" }}></i>
                                    </span>
                                    <span> Sara mostafa , Mona kamel and 51 others</span>
                                </div>

                                <div className="col-1"></div>
                            </div>

                            <div>
                                <hr />

                                <div className="row" style={{ marginTop: "-9px", marginBottom: "-9px" }}>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-thumbs-up"></i> Like
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-message"></i> Comment
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-share-from-square"></i> Share
                                    </div>
                                </div>

                                <hr />
                            </div>

                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "25px", height: "25px", objectFit: "cover" }}
                                    />
                                </div>

                                <div className="col-11 row">
                                    <span>
                                        <input
                                            type="text"
                                            className="form-control rounded-pill border-0"
                                            placeholder="Write a Comment..."
                                            style={{ backgroundColor: "#e4e6e9" }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p style={{ color: "#65676b", fontWeight: "500" }}>Other posts</p>
                        <div className="pind row p-3 rounded shadow-sm mb-3 mx-0" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-10">
                                    <h6 style={{ color: "#050505" }}>هاجر مراد</h6>
                                    <p style={{ fontSize: "small" }}>
                                        April 27,2021 .<i className="fa-solid fa-earth-americas"></i>
                                    </p>
                                </div>
                                <div className="col-1">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-10"></div>
                            </div>

                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ</div>
                            </div>
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-11">
                                    <span>
                                        <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-thumbs-up" style={{ color: "#0000ff" }}></i>
                                    </span>
                                    <span> Lena Ahmed , Ali kamel and 32 others</span>
                                </div>

                                <div className="col-1"></div>
                            </div>

                            <div>
                                <hr />

                                <div className="row" style={{ marginTop: "-9px", marginBottom: "-9px" }}>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-thumbs-up"></i> Like
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-message"></i> Comment
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-share-from-square"></i> Share
                                    </div>
                                </div>

                                <hr />
                            </div>

                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "25px", height: "25px", objectFit: "cover" }}
                                    />
                                </div>

                                <div className="col-11 row">
                                    <input
                                        type="text"
                                        className="form-control rounded-pill border-0"
                                        placeholder="Write a Comment..."
                                        style={{ backgroundColor: "#e4e6e9" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pind row p-3 rounded shadow-sm mb-3 mx-0" style={{ backgroundColor: "white" }}>
                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-10">
                                    <h6 style={{ color: "#050505" }}>هاجر مراد</h6>
                                    <p style={{ fontSize: "small" }}>
                                        April 27,2021 .<i className="fa-solid fa-earth-americas"></i>
                                    </p>
                                </div>
                                <div className="col-1">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>

                            <div className="row">
                                <img src={pic11} alt="" />
                            </div>

                            <div className="row">
                                <div className="col-11">
                                    <span>
                                        <i className="fa-solid fa-face-laugh-squint" style={{ color: "#fbcf5a" }}></i>
                                    </span>
                                    <span> Ahmed Elshazly , Mona kamel and 55 others</span>
                                </div>

                                <div className="col-1"></div>
                            </div>

                            <div>
                                <hr />

                                <div className="row" style={{ marginTop: "-9px", marginBottom: "-9px" }}>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-thumbs-up"></i> Like
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-message"></i> Comment
                                    </div>
                                    <div className="col-4 text-center">
                                        <i className="fa-regular fa-share-from-square"></i> Share
                                    </div>
                                </div>

                                <hr />
                            </div>

                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src={pic2}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: "25px", height: "25px", objectFit: "cover" }}
                                    />
                                </div>

                                <div className="col-11 row">
                                    <span>
                                        <input
                                            type="text"
                                            className="form-control rounded-pill border-0"
                                            placeholder="Write a Comment..."
                                            style={{ backgroundColor: "#e4e6e9" }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                    </div>
                </div>

                <div className="col-2"></div>
            </div>
        </>
    );
}
