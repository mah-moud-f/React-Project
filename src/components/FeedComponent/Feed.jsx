import { useRef, useEffect, useState } from "react";
import "./Feed.css";
import Header from "../HeaderComponent/Header";
import { Link } from "react-router-dom";

export default function Feed() {
    const divRef = useRef(null);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        divRef.current.style.setProperty("left", "initial", "important");
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    {/* ================= Sidebar ================= */}
                    <div className="col-12 col-lg-3">
                        <div
                            className="d-none d-xxl-block h-100 fixed-top overflow-hidden scrollbar"
                            style={{ maxWidth: "360px", zIndex: 4 }}
                        >
                            <ul className="navbar-nav mt-4 ms-3 d-flex flex-column" style={{ paddingTop: "56px" }}>
                                {/* top */}
                                {/* avatar */}
                                <li className="dropdown-item p-1 rounded">
                                    <Link to="/profile" className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/collection/happy-people"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Team 4</p>
                                        </div>
                                    </Link>
                                </li>
                                {/* top 1 */}
                                <li className="dropdown-item p-1 rounded">
                                    <Link
                                        to="./friends.html"
                                        className="d-flex align-items-center text-decoration-none text-dark"
                                    >
                                        <div className="p-2">
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/qcQzKspn3y3.png"
                                                alt="from fb"
                                                className="rounded-circle"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Friends</p>
                                        </div>
                                    </Link>
                                </li>
                                {/* top 2 */}
                                <li className="dropdown-item p-1 rounded">
                                    <Link to="#" className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/PyK8C03Gggr.png"
                                                alt="from fb"
                                                className="rounded-circle"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Groups</p>
                                            <i
                                                className="fas fa-circle text-primary me-1"
                                                style={{ fontSize: "0.5rem", important: "true" }}
                                            ></i>
                                            <span className="fs-7 text-primary">3 new</span>
                                        </div>
                                    </Link>
                                </li>
                                {/* top 3 */}
                                <li className="dropdown-item p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/3YkGLxHO24x.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Feeds</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                {/* top 4 */}
                                <li className="dropdown-item p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/XmInAjFfce-.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Marketplace</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                {/* top 5 */}
                                <li className="dropdown-item p-1">
                                    <Link
                                        to="/video"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/_5LxOEFlxtj.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Video</p>
                                                <i
                                                    className="fas fa-circle text-primary me-1"
                                                    style={{ fontSize: "0.5rem", important: true }}
                                                ></i>
                                                <span className="fs-7 text-primary">9+ new videos</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                {/* see more */}
                                <li className="p-1" type="button">
                                    <div id="accordionFlushExample">
                                        <div>
                                            {/* see more button */}
                                            <div
                                                className="d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                <div className="p-2">
                                                    <i
                                                        className="fas fa-chevron-down rounded-circle p-2"
                                                        style={{ backgroundColor: "#d5d5d5", important: true }}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <p className="m-0">See More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <hr className="m-0" />
                                {/* shortcuts */}
                                {/* heading */}
                                <div className="d-flex justify-content-between align-items-center mt-2 text-muted edit-heading">
                                    <h6 className="m-3 pointer">Your Shorcuts</h6>
                                    <p
                                        className="m-0 text-primary me-3 pointer edit-button"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#shortCutModal"
                                    >
                                        Edit
                                    </p>
                                </div>
                                {/* short-1 */}
                                <li className="dropdown-item p-1">
                                    <Link to="#" className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/1"
                                                alt="from fb"
                                                className="rounded border border-1 border-secondary"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Lorem Ipsum</p>
                                        </div>
                                    </Link>
                                </li>
                                {/* short-2 */}
                                <li className="dropdown-item p-1">
                                    <Link className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/2"
                                                alt="from fb"
                                                className="rounded border border-1 border-secondary"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Lorem Ipsum</p>
                                        </div>
                                    </Link>
                                </li>
                                {/* short-3 */}
                                <li className="dropdown-item p-1">
                                    <Link className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/3"
                                                alt="from fb"
                                                className="rounded border border-1 border-secondary"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0">Lorem Ipsum</p>
                                        </div>
                                    </Link>
                                </li>
                                {/* see more */}
                                <li className="p-1" type="button">
                                    <div id="accordionFlushExample">
                                        <div>
                                            {/* see more button */}
                                            <div
                                                className="d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#shortModal"
                                                aria-expanded="false"
                                                aria-controls="shortModal"
                                            >
                                                <div className="p-2">
                                                    <i
                                                        className="fas fa-chevron-down rounded-circle p-2"
                                                        style={{ backgroundColor: "#d5d5d5", important: true }}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <p className="m-0">See More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* terms */}
                            <div className="px-4 pt-2">
                                <p className="text-muted fs-7">
                                    Privacy &#8226; Terms &#8226; Advertising &#8226; Ad Choices &#8226; Cookies &#8226;
                                    Facebook © 2021
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= Timeline ================= */}
                    <div className="col-12 col-lg-6 pb-5">
                        <div
                            className="d-flex flex-column justify-content-center w-100 mx-auto"
                            style={{ paddingTop: "56px", maxWidth: "680px" }}
                        >
                            {/* stories */}
                            <div className="mt-5 p-3 shadow-sm d-flex justify-content-between position-relative bg-white rounded-2">
                                {/* s 1 */}
                                <div
                                    className="mx-1 bg-white rounded story shadow-sm"
                                    type="button"
                                    style={{ width: "7em", height: "190px" }}
                                >
                                    <img
                                        src="https://source.unsplash.com/collection/happy-people"
                                        className="card-img-top"
                                        alt="story posts"
                                        style={{ height: "140px", objectFit: "cover" }}
                                    />
                                    <div
                                        className="d-flex align-items-center justify-content-center position-relative"
                                        style={{ minHeight: "55px" }}
                                    >
                                        <p className="mb-0 text-center fs-7 fw-bold">Create Story</p>
                                        <div className="position-absolute top-0 start-50 translate-middle">
                                            <i className="fas fa-plus-circle fs-3 text-primary bg-white p-1 rounded-circle"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* s 2 */}
                                <div
                                    className="rounded mx-1 story shadow-sm"
                                    type="button"
                                    style={{ width: "7em", height: "190px" }}
                                >
                                    <img
                                        src="https://source.unsplash.com/random/2"
                                        className="card-img-top rounded"
                                        alt="story posts"
                                        style={{ minHeight: "190px", objectFit: "cover" }}
                                    />
                                </div>
                                {/* s 3 */}
                                <div
                                    className="rounded mx-1 story shadow-sm"
                                    type="button"
                                    style={{ width: "7em", height: "190px" }}
                                >
                                    <img
                                        src="https://source.unsplash.com/random/3"
                                        className="card-img-top rounded"
                                        alt="story posts"
                                        style={{ minHeight: "190px", objectFit: "cover" }}
                                    />
                                </div>
                                {/* s 4 */}
                                <div
                                    className="rounded mx-1 story shadow-sm"
                                    type="button"
                                    style={{ width: "7em", height: "190px" }}
                                >
                                    <img
                                        src="https://source.unsplash.com/random/4"
                                        className="card-img-top rounded"
                                        alt="story posts"
                                        style={{ minHeight: "190px", objectFit: "cover" }}
                                    />
                                </div>
                                {/* s 5 */}
                                <div
                                    className="d-none d-lg-block rounded mx-1 story shadow-sm"
                                    type="button"
                                    style={{ width: "7em", height: "190px" }}
                                >
                                    <img
                                        src="https://source.unsplash.com/random/5"
                                        className="card-img-top rounded"
                                        alt="story posts"
                                        style={{ minHeight: "190px", objectFit: "cover" }}
                                    />
                                </div>
                                {/* next icon */}
                                <div className="position-absolute top-50 start-100 translate-middle pointer d-none d-lg-block">
                                    <i className="fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"></i>
                                </div>
                            </div>
                            {/* create post */}
                            <div className="bg-white p-3 mt-3 rounded border shadow">
                                {/* avatar */}
                                <div className="d-flex" type="button">
                                    <div className="p-1">
                                        <Link to="./profile.html">
                                            <img
                                                src="https://source.unsplash.com/collection/happy-people"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </Link>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill border-0 bg-gray"
                                        placeholder="What's on your mind, Team 4?"
                                    />
                                </div>
                                <hr />
                                {/* actions */}
                                <div className="d-flex flex-column flex-lg-row mt-3">
                                    {/* a 1 */}
                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center"
                                        type="button"
                                    >
                                        <i className="fas fa-video me-2 text-danger"></i>
                                        <p className="m-0 text-muted">Live Video</p>
                                    </div>
                                    {/* a 2 */}
                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center py-2"
                                        type="button"
                                    >
                                        <i className="fas fa-photo-video me-2 text-success"></i>
                                        <p className="m-0 text-muted">Photo/Video</p>
                                    </div>
                                    {/* a 3 */}
                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center"
                                        type="button"
                                    >
                                        <i className="fas fa-smile me-2 text-warning"></i>
                                        <p className="m-0 text-muted">Feeling/Activity</p>
                                    </div>
                                </div>
                            </div>
                            {/* create room */}
                            <div className="bg-white p-3 mt-3 rounded border shadow d-flex justify-content-xxl-between justify-content-center position-relative">
                                {/* btn */}
                                <div>
                                    <button className="btn rounded-pill btn-info justify-content-center">
                                        <i className="fas fa-video me-3"></i>
                                        Create Room
                                    </button>
                                </div>
                                {/* slider desktop */}
                                <div className="d-none d-xxl-block" style={{ maxWidth: "450px" }}>
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/4"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/5"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/6"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/7"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/8"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/9"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/4"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/5"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/6"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/7"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/8"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                                <img
                                                    src="https://source.unsplash.com/random/9"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* slider btn */}
                                <div
                                    className="position-absolute start-0 top-50 translate-middle d-none d-xxl-block"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <div
                                        className="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                                        style={{ width: "30px", height: "30px" }}
                                    >
                                        <i className="fas fa-chevron-left text-muted"></i>
                                    </div>
                                </div>
                                <div
                                    className="position-absolute start-100 top-50 translate-middle d-none d-xxl-block"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <div
                                        className="p-2 bg-white border rounded-circle d-flex justify-content-center align-items-center pointer story"
                                        style={{ width: "30px", height: "30px" }}
                                    >
                                        <i className="fas fa-chevron-right text-muted"></i>
                                    </div>
                                </div>
                            </div>
                            {/* posts */}
                            {/* p 1 */}
                            <div className="bg-white p-4 rounded shadow mt-3">
                                {/* author */}
                                <div className="d-flex justify-content-between">
                                    {/* avatar */}
                                    <div className="d-flex">
                                        <Link to="./profile.html">
                                            <img
                                                src="https://source.unsplash.com/collection/happy-people"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        <div>
                                            <Link
                                                to="./profile.html"
                                                className="m-0 fw-bold text-decoration-none text-black d-block"
                                            >
                                                Team 4
                                            </Link>
                                            <span className="text-muted fs-7">July 17 at 1:23 pm</span>
                                        </div>
                                    </div>
                                    {/* edit */}
                                    <i
                                        className="fas fa-ellipsis-h"
                                        type="button"
                                        id="post1Menu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>
                                    {/* edit menu */}
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1Menu">
                                        <li className="d-flex align-items-center">
                                            <Link
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                to="#"
                                            >
                                                Edit Post
                                            </Link>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <Link
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                to="#"
                                            >
                                                Delete Post
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* post content */}
                                <div className="mt-3">
                                    {/* content */}
                                    <div>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt
                                            consequatur tenetur doloremque officia corrupti provident tempore vitae labore?
                                        </p>
                                        <img
                                            src="https://source.unsplash.com/random/12"
                                            alt="post image"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    {/* likes & comments */}
                                    <div className="post__comment mt-3 position-relative">
                                        {/* likes */}
                                        <div className="d-flex justify-content-between">
                                            <div className="me-2 d-sm-flex pointer">
                                                <i className="text-primary fas fa-thumbs-up pe-1"></i>
                                                <i className="text-danger fab fa-gratipay pe-1"></i>
                                                <i className="text-warning fas fa-grin-squint pe-1"></i>
                                                <p className="m-0 text-muted fs-7">Ahmed , Mahmoud and 3 others</p>
                                            </div>
                                            <div>
                                                <p className="text-muted pointer text-nowrap">2 Comments</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex text-muted justify-content-between">
                                            <div className="w-50 text-center">
                                                <i className="fa-solid fa-thumbs-up pe-2 pointer"></i>
                                                <span className="pointer">Like</span>
                                            </div>
                                            <div className="w-50 text-center">
                                                <i className="fa-solid fa-message pe-2 pointer"></i>
                                                <span className="pointer">Comment</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div>
                                                {/* comment 1 */}
                                                <div className="d-flex align-items-center my-1">
                                                    {/* avatar */}
                                                    <Link to="./profile.html">
                                                        <img
                                                            src="https://source.unsplash.com/collection/happy-people"
                                                            alt="avatar"
                                                            className="rounded-circle me-2"
                                                            style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                        />
                                                    </Link>
                                                    {/* comment text */}
                                                    <div className="p-3 rounded comment__input w-100">
                                                        <Link
                                                            to="./profile.html"
                                                            className="text-decoration-none text-black"
                                                        >
                                                            <p className="fw-bold m-0 pointer">Team 4</p>
                                                        </Link>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* comment 2 */}
                                                <div className="d-flex align-items-center my-1">
                                                    {/* avatar */}
                                                    <img
                                                        src="https://source.unsplash.com/random/2"
                                                        alt="avatar"
                                                        className="rounded-circle me-2"
                                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                    />
                                                    {/* comment text */}
                                                    <div className="p-3 rounded comment__input w-100">
                                                        <p className="fw-bold m-0 pointer">Ahmed</p>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* create comment */}
                                                <form className="d-flex my-1">
                                                    {/* avatar */}
                                                    <div>
                                                        <Link to="./profile.html">
                                                            <img
                                                                src="https://source.unsplash.com/collection/happy-people"
                                                                alt="avatar"
                                                                className="rounded-circle me-2"
                                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                            />
                                                        </Link>
                                                    </div>
                                                    {/* input */}
                                                    <input
                                                        type="text"
                                                        className="form-control border-0 rounded-pill bg-gray"
                                                        placeholder="Write a comment"
                                                    />
                                                </form>
                                                {/* end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= Chatbar ================= */}
                    <div className="col-12 col-lg-3">
                        <div
                            ref={divRef}
                            className="d-none d-xxl-block h-100 fixed-top end-0 overflow-hidden scrollbar"
                            style={{
                                maxWidth: "360px",
                                width: "100%",
                                zIndex: 4,
                                paddingTop: "56px",
                            }}
                        >
                            <div className="p-3 mt-4">
                                {/* sponsors */}
                                <h5 className="text-muted">Sponsored</h5>
                                {/* s 1 */}
                                <li className="dropdown-item my-2 d-flex justify-content-between">
                                    {/* img */}
                                    <Link to="#" className="d-flex align-items-center text-decoration-none link-dark">
                                        <img
                                            src="https://source.unsplash.com/random/1"
                                            alt="ads"
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                            className="rounded me-3"
                                        />
                                        <div>
                                            <p className="m-0">Lorem ipsum</p>
                                            <span className="text-muted fs-7">loremipsum.com</span>
                                        </div>
                                    </Link>
                                    {/* icon */}
                                    <div
                                        className="rounded-circle p-1 bg-white d-flex align-items-center justify-content-center mx-2 sponsor-icon nav-item"
                                        type="button"
                                        style={{ width: "38px", height: "38px" }}
                                    >
                                        <i className="fas fa-ellipsis-h text-muted p-2" data-bs-toggle="dropdown"></i>
                                        {/* menu */}
                                        <ul className="dropdown-menu">
                                            {/* item 1 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="far fa-window-close"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Hide Ad</p>
                                                        <span className="text-muted fs-7"> Never see this ad again. </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            {/* item 2 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Report Ad</p>
                                                        <span className="text-muted fs-7">
                                                            {" "}
                                                            Tell us a problem with this add.{" "}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            {/* item 3 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="fas fa-info-circle"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Why am I seeing this ad?</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* s 2 */}
                                <li className="dropdown-item my-2 d-flex justify-content-between">
                                    {/* img */}
                                    <Link to="#" className="d-flex align-items-center text-decoration-none link-dark">
                                        <img
                                            src="https://source.unsplash.com/random/2"
                                            alt="ads"
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                            className="rounded me-3"
                                        />
                                        <div>
                                            <p className="m-0">Lorem ipsum</p>
                                            <span className="text-muted fs-7">loremipsum.com</span>
                                        </div>
                                    </Link>
                                    {/* icon */}
                                    <div
                                        className="rounded-circle p-1 bg-white d-flex align-items-center justify-content-center mx-2 sponsor-icon nav-item"
                                        type="button"
                                        style={{ width: "38px", height: "38px" }}
                                    >
                                        <i className="fas fa-ellipsis-h text-muted p-2" data-bs-toggle="dropdown"></i>
                                        {/* menu */}
                                        <ul className="dropdown-menu">
                                            {/* item 1 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="far fa-window-close"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Hide Ad</p>
                                                        <span className="text-muted fs-7"> Never see this ad again. </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            {/* item 2 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Report Ad</p>
                                                        <span className="text-muted fs-7">
                                                            {" "}
                                                            Tell us a problem with this add.{" "}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            {/* item 3 */}
                                            <li className="dropdown-item">
                                                <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-decoration-none text-dark"
                                                >
                                                    <i className="fas fa-info-circle"></i>
                                                    <div className="ms-3">
                                                        <p className="m-0">Why am I seeing this ad?</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* contacts */}
                                <hr className="m-0" />
                                <div className="my-3 d-flex justify-content-between align-items-center">
                                    <p className="text-muted fs-5 m-0">Contacts</p>
                                    {/* icons */}
                                    <div className="text-muted">
                                        {/* video room */}
                                        <i
                                            className="fas fa-video mx-2 pointer"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoRoomD"
                                        ></i>
                                        {/* video room modal */}
                                        <div
                                            className="modal fade"
                                            id="videoRoomD"
                                            tabIndex="-1"
                                            aria-labelledby="videoRoomDLabel"
                                            data-bs-backdrop="false"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content bg-dark">
                                                    {/* header */}
                                                    <div className="modal-header border-0">
                                                        <button
                                                            type="button"
                                                            className="btn-close btn-close-white"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    {/* body */}
                                                    <div
                                                        className="modal-body d-flex flex-column align-items-center justify-content-center"
                                                        style={{ minHeight: "400px" }}
                                                    >
                                                        <i className="fas fa-video fs-0"></i>
                                                        <h3 className="text-white">Schedule A Room For Later</h3>
                                                        <p className="text-white text-center w-50 mx-auto">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                                                            deserunt alias laudantium itaque eius enim natus culpa eligendi
                                                            consectetur maiores!
                                                        </p>
                                                        <button className="btn btn-lg btn-primary rounded-pill">
                                                            Schedule Room
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* new chat */}
                                        <i className="fas fa-search mx-2 pointer" type="button"></i>
                                        {/* chat settings */}
                                        <i
                                            className="fas fa-ellipsis-h pointer text-muted mx-2"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                        ></i>
                                        {/* chat setting dd */}
                                        <ul className="dropdown-menu shadow" style={{ width: "18em" }}>
                                            {/* title */}
                                            <div className="p-2">
                                                <h5>Chat Settings</h5>
                                                <span className="text-muted fs-7">
                                                    {" "}
                                                    Customize your Messenger experience.{" "}
                                                </span>
                                            </div>
                                            <hr />
                                            {/* incoming sound */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-phone-alt me-3"></i>
                                                        <p className="m-0">Incoming call sounds</p>
                                                    </div>
                                                    {/* toggle */}
                                                    <div className="form-check form-switch m-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="flexSwitchCheckChecked"
                                                            defaultChecked={checked}
                                                            onChange={() => setChecked((state) => !state)}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexSwitchCheckChecked"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* message sound */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-volume-off me-4 fs-4"></i>
                                                        <p className="m-0">Message sounds</p>
                                                    </div>
                                                    {/* toggle */}
                                                    <div className="form-check form-switch m-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="flexSwitchCheckChecked"
                                                            defaultChecked={checked}
                                                            onChange={() => setChecked((state) => !state)}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexSwitchCheckChecked"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* popup message */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-spinner me-3"></i>
                                                        <p className="m-0">Pop-up new messages</p>
                                                    </div>
                                                    {/* toggle */}
                                                    <div className="form-check form-switch m-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="flexSwitchCheckChecked"
                                                            defaultChecked={checked}
                                                            onChange={() => setChecked((state) => !state)}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexSwitchCheckChecked"
                                                        ></label>
                                                    </div>
                                                </div>
                                                <span className="ms-5 text-muted fs-7">
                                                    {" "}
                                                    Automatically open new messages.{" "}
                                                </span>
                                            </li>
                                            <hr className="m-0" />
                                            {/* item 1 */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-toggle-off me-3"></i>
                                                        <p className="m-0">Turn Off Active Status</p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* item 2 */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="far fa-comment-alt me-3"></i>
                                                        <p className="m-0">Message Request</p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* item 3 */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-share-square me-3"></i>
                                                        <p className="m-0">Message delivery settings</p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* item 4 */}
                                            <li className="pointer">
                                                <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                    {/* icon */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-shield-alt me-3"></i>
                                                        <p className="m-0">Block settings</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* friends */}
                                {/* friend 1 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/11"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 2 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/12"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 3 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/43"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 4 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/4"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 5 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/5"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 6 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/6"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 7 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/7"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 8 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/8"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 9 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/9"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 10 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/10"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                                {/* friend 11 */}
                                <li className="dropdown-item rounded my-2 px-0" type="button">
                                    {/* avatar */}
                                    <div className="d-flex align-items-center mx-2 chat-avatar">
                                        <div className="position-relative">
                                            <img
                                                src="https://source.unsplash.com/random/11"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                            <span
                                                className="position-absolute bottom-0 border border-light rounded-circle bg-success p-1"
                                                style={{ left: "65%" }}
                                            >
                                                <span className="visually-hidden"></span>
                                            </span>
                                        </div>
                                        <p className="m-0 ps-3">Lorem</p>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
