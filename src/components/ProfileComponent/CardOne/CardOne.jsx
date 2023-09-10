import pic1 from "../../../assets/profile images/pic1.jpg";
import pic2 from "../../../assets/profile images/pic2.jpg";
import pic3 from "../../../assets/profile images/pic3.jpg";
import pic4 from "../../../assets/profile images/pic4.jpg";
import pic5 from "../../../assets/profile images/pic5.jpg";
import pic6 from "../../../assets/profile images/pic6.jpg";
import pic7 from "../../../assets/profile images/pic7.jpg";
import pic8 from "../../../assets/profile images/pic8.jpg";
import pic9 from "../../../assets/profile images/pic9.jpg";
import "./CardOne.css";

export default function CardOne() {
    return (
        <>
            <div className="card1 mb-3 container">
                <div className="bigpic row justify-content-center">
                    <div className="col-8">
                        <img src={pic1} alt="" style={{ width: "100% ", height: "100%" }} className="rounded" />
                    </div>
                </div>

                <div className="smallpic row justify-content-center">
                    <div className="col-8 row">
                        <div className="col-12 col-lg-3" id="kilwa-pic">
                            <img
                                src={pic2}
                                alt="picone"
                                style={{ borderRadius: "50%", height: "168px", width: "168px" }}
                                className="bg-white p-1 rounded-circl"
                                id="smaallpic"
                            />

                            <i
                                className="fa-solid fa-camera fa-lg"
                                style={{
                                    backgroundCoolor: "#d8dadf",
                                    padding: "",
                                    borderRradius: "50%",
                                    marginLleft: "",
                                    marginTtop: "-5px",
                                }}
                            ></i>
                        </div>

                        <div className="col-12 col-lg-4" id="name-friends">
                            <h2 style={{ color: "#050505" }} id="name">
                                هاجر مراد
                            </h2>
                            <p style={{ fontWweight: "500", fontSize: "15px" }} id="friends">
                                521 friends
                            </p>

                            <div className="friend_pic">
                                <span>
                                    <img
                                        src={pic3}
                                        alt=""
                                        style={{
                                            borderRadius: "50%",
                                            height: "32px",
                                            width: "32px",
                                            marginRight: "-9px",
                                            marginLeft: "30px",
                                        }}
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic6}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic7}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic8}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic9}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic3}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic6}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                                <span>
                                    <img
                                        src={pic7}
                                        alt=""
                                        style={{ borderRadius: "50%", height: "32px", width: "32px", marginRight: "-9px" }}
                                        className="bg-white ps-1"
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 align-self-center" id="add-edit">
                            <span>
                                <button type="button" className="btn btn-primary" id="add">
                                    <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}>
                                        {" "}
                                    </i>
                                    Add to story
                                </button>
                            </span>
                            <span id="edit">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{ backgroundColor: "#d8dadf", color: "#050505" }}
                                >
                                    <i className="fa-solid fa-pen"></i> Edit Profile
                                </button>
                            </span>
                            <span id="down">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{ backgroundColor: "#d8dadf", color: "#050505" }}
                                >
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="line row">
                        <div className="col-2"></div>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <hr />
                        </div>
                        <div className="col-2"></div>
                    </div>

                    <div className="post row">
                        <div className="col-2"></div>
                        <div className="row col-sm-12 col-md-12 col-lg-8 col-xl-8 col-12" style={{ marginBottom: "10px" }}>
                            <div className="col-11">
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#4c95f5", fontWeight: "500" }}
                                    >
                                        Posts
                                    </button>
                                </span>
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#717376", fontWeight: "500" }}
                                    >
                                        About
                                    </button>
                                </span>
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#717376", fontWeight: "500" }}
                                    >
                                        Friends
                                    </button>
                                </span>
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#717376", fontWeight: "500" }}
                                    >
                                        Photos
                                    </button>
                                </span>
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#717376", fontWeight: "500" }}
                                    >
                                        Videos
                                    </button>
                                </span>
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-white"
                                        style={{ color: "#717376", fontWeight: "500" }}
                                    >
                                        Reels
                                    </button>
                                </span>
                                <span>
                                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                className="btn btn-white dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{ color: "#717376", fontWeight: "500" }}
                                            >
                                                More
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Check-ins
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Sports
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Music
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Movies
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        TV shows
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Books
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        App and games
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Likes
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Events
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Reviews given
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Groups
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Manage sections
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="col-1 dots">
                                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className="btn btn-white dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ backgroundColor: "#d8dadf", color: "#050505" }}
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-regular fa-eye"></i> View As
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-magnifying-glass"></i> Search
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-triangle-exclamation"></i> Account Status
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-box-archive"></i> Archive
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-regular fa-clock"></i> Story archive
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-list"></i> Activity log
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-regular fa-circle-user"></i> Profile and tagging
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-lock"></i> Look profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fa-solid fa-briefcase"></i> Turn on professional mode
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
