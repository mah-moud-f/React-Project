import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [checked, setChecked] = useState(true);

    // tesllt

    return (
        <>
            <div className="bg-white d-flex align-items-center fixed-top shadow" style={{ minHeight: "56px", zIndex: 5 }}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Logo + Search */}
                        <div className="col-xl-3 col-4 d-flex align-items-center">
                            {/* logo */}
                            <Link to="/feed">
                                <i className="fab fa-facebook text-primary" style={{ fontSize: "3rem" }}></i>
                            </Link>

                            {/* search bar */}
                            <div className="input-group ms-2" type="button">
                                {/* mobile */}
                                <span
                                    className="input-group-prepend d-lg-none"
                                    id="searchMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    data-bs-auto-close="outside"
                                >
                                    <div
                                        className="input-group-text bg-gray border-0 rounded-circle"
                                        style={{ minHeight: "40px" }}
                                    >
                                        <i className="fas fa-search text-muted"></i>
                                    </div>
                                </span>
                                {/* desktop */}
                                <span
                                    className="input-group-prepend d-none d-lg-block"
                                    id="searchMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    data-bs-auto-close="outside"
                                >
                                    <div
                                        className="input-group-text bg-gray border-0 rounded-pill"
                                        style={{ minHeight: "40px", minWidth: "230px" }}
                                    >
                                        <i className="fas fa-search me-2 text-muted"></i>
                                        <p className="m-0 fs-7 text-muted">Search Facebook</p>
                                    </div>
                                </span>
                                {/* search menu */}
                                <ul
                                    className="dropdown-menu overflow-auto border-0 shadow p-3"
                                    aria-labelledby="searchMenu"
                                    style={{ width: "20em", maxHeight: "600px" }}
                                >
                                    {/* search input */}
                                    <li>
                                        <input
                                            type="text"
                                            className="rounded-pill border-0 bg-gray dropdown-item"
                                            placeholder="Search Facebook..."
                                            autoFocus
                                        />
                                    </li>
                                    {/* search 1 */}
                                    <li className="my-4">
                                        <div
                                            className="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                                />
                                                <p className="m-0">Lorem ipsum</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                    {/* search 2 */}
                                    <li className="my-4">
                                        <div
                                            className="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                                />
                                                <p className="m-0">Lorem ipsum</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                    {/* search 3 */}
                                    <li className="my-4">
                                        <div
                                            className="alert fade show dropdown-item p-1 m-0 d-flex align-items-center justify-content-between"
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                                                />
                                                <p className="m-0">Lorem ipsum</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* nav */}
                        <div className="col-xl-6 d-none d-xl-flex justify-content-center">
                            {/* home */}
                            <div className="mx-4 nav__btn nav__btn-active">
                                <button type="button" className="btn px-4">
                                    <i className="fas fa-home text-muted fs-4"></i>
                                </button>
                            </div>
                            {/* market */}
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <i className="fas fa-store text-muted fs-4"></i>
                                </button>
                            </div>
                            {/* group */}
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <i className="position-relative fas fa-users text-muted fs-6 icon-with-border">
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: "0.5rem" }}
                                        >
                                            3<span className="visually-hidden"></span>
                                        </span>
                                    </i>
                                </button>
                            </div>
                            {/* gaming */}
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <i className="fas fa-gamepad text-muted fs-4"></i>
                                </button>
                            </div>
                        </div>
                        {/* menus */}
                        <div className="col-xl-3 col-8 d-flex align-items-center justify-content-end">
                            {/* main menu */}
                            <div
                                className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                                style={{ width: "38px", height: "38px" }}
                                type="button"
                                id="mainMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                            {/* main menu dd */}
                            <ul
                                className="dropdown-menu border-0 shadow p-3 overflow-auto w-100"
                                aria-labelledby="mainMenu"
                                style={{ maxWidth: "350px", maxHeight: "600px" }}
                            >
                                {/* menu */}
                                <div>
                                    {/* header */}
                                    <li className="p-1 mx-2">
                                        <h2>Menu</h2>
                                    </li>
                                    {/* search */}
                                    <li className="p-1">
                                        <div
                                            className="input-group-text bg-gray border-0 rounded-pill"
                                            style={{ minHeight: "40px", minWidth: "230px" }}
                                        >
                                            <i className="fas fa-search me-2 text-muted"></i>
                                            <input
                                                type="text"
                                                className="form-control rounded-pill border-0 bg-gray"
                                                placeholder="Search Menu"
                                            />
                                        </div>
                                    </li>
                                    {/* social items */}
                                    <h4 className="m-2">Social</h4>
                                    {/* s1 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">Events</p>
                                                <span className="fs-7 text-muted"></span>
                                                Lorem, ipsum dolor sit amet consectetur.
                                            </div>
                                        </Link>
                                    </li>
                                    {/* s2 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="./friends.html"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">Friends</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* s3 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">Groups</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* s4 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/E__N70WXrPM.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">News Feed</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* s5 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">Feeds</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* s6 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/2QQIoQlVGnh.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0 fw-bolder">Pages</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <hr />
                                    {/* entertainment items */}
                                    <h4 className="m-2">Entertainment</h4>
                                    {/* e1 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Gaming Video</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* e2 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/Tvf-JvODx7o.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Play Games</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* e3 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="./video.html"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Video</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* e4 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark d-flex align-items-center justify-content-between"
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png"
                                                    alt="icon from fb"
                                                    className="rounded-circle"
                                                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Live Video</p>
                                                <span className="fs-7 text-muted">
                                                    {" "}
                                                    Lorem, ipsum dolor sit amet consectetur.{" "}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                                <hr />
                                {/* create */}
                                <div>
                                    {/* header */}
                                    <li className="p-1 mx-2">
                                        <h2>Create</h2>
                                    </li>
                                    {/* c-1 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Post</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-2 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-book-open"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Story</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-3 */}
                                    <li className="my-2 p-1">
                                        <Link
                                            to="./video.html"
                                            className="text-decoration-none text-dark d-flex align-items-center"
                                        >
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-video"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Video</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <hr />
                                    {/* c-4 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-flag"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Page</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-5 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-bullhorn"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Add</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-6 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-users"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Group</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-7*/}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-book"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Event</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-8 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-shopping-basket"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Marketplace Listing</p>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* c-9 */}
                                    <li className="my-2 p-1">
                                        <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
                                            <div
                                                className="rounded-circle bg-gray p-1 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: "38px", height: "38px" }}
                                            >
                                                <i className="fas fa-suitcase"></i>
                                            </div>
                                            <div>
                                                <p className="m-0">Job</p>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                            {/* chat */}
                            <div
                                className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                                style={{ width: "38px", height: "38px" }}
                                type="button"
                                id="chatMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <i className="fas fa-comment"></i>
                            </div>
                            {/* chat  dd */}
                            <ul
                                className="dropdown-menu border-0 shadow p-3 overflow-auto w-100"
                                aria-labelledby="chatMenu"
                                style={{ maxWidth: "400px", maxHeight: "600px" }}
                            >
                                {/* header */}
                                <li className="p-1">
                                    <div className="d-flex justify-content-between">
                                        <h2>Message</h2>
                                        <div>
                                            {/* setting */}
                                            <i
                                                className="fas fa-ellipsis-h text-muted mx-2"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                            ></i>
                                            {/* setting dd */}
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
                                                <li>
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
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                        {/* icon */}
                                                        <div className="d-flex align-items-center">
                                                            <i className="fas fa-volume-off me-3 fs-4"></i>
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
                                                <li>
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
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                        {/* icon */}
                                                        <div className="d-flex align-items-center">
                                                            <i className="fas fa-toggle-off me-3"></i>
                                                            <p className="m-0">Turn Off Active Status</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* item 2 */}
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                        {/* icon */}
                                                        <div className="d-flex align-items-center">
                                                            <i className="far fa-comment-alt me-3"></i>
                                                            <p className="m-0">Message Request</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* item 3 */}
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                        {/* icon */}
                                                        <div className="d-flex align-items-center">
                                                            <i className="fas fa-share-square me-3"></i>
                                                            <p className="m-0">Message delivery settings</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* item 4 */}
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                                        {/* icon */}
                                                        <div className="d-flex align-items-center">
                                                            <i className="fas fa-shield-alt me-3"></i>
                                                            <p className="m-0">Block settings</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <i className="fas fa-expand-arrows-alt text-muted mx-2" type="button"></i>
                                            {/* new message */}
                                            <i
                                                className="fas fa-edit text-muted mx-2"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#newChat"
                                            ></i>
                                        </div>
                                    </div>
                                </li>
                                {/* search */}
                                <li className="p-1">
                                    <div
                                        className="input-group-text bg-gray border-0 rounded-pill"
                                        style={{ minHeight: "40px", minWidth: "230px" }}
                                    >
                                        <i className="fas fa-search me-2 text-muted"></i>
                                        <input
                                            type="text"
                                            className="form-control rounded-pill border-0 bg-gray"
                                            placeholder="Search Messenger"
                                        />
                                    </div>
                                </li>
                                {/* message 1 */}
                                <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat1">
                                    <div className="d-flex align-items-center justify-content-between">
                                        {/* big avatar */}
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">Lorem</p>
                                                <span className="fs-7 text-muted"> Lorem ipsum &#8226; 7d </span>
                                            </div>
                                        </div>
                                        {/* small avatar */}
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/1"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* message 2 */}
                                <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        {/* big avatar */}
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Tuan
                                                    <span className="fs-7 text-muted"> Lorem ipsum &#8226; 7d </span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* small avatar */}
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/2"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* message 3 */}
                                <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        {/* big avatar */}
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">Jerry</p>
                                                <span className="fs-7 text-muted"> Lorem ipsum &#8226; 7d </span>
                                            </div>
                                        </div>
                                        {/* small avatar */}
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/3"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* message 4 */}
                                <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        {/* big avatar */}
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/4"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">Tony</p>
                                                <span className="fs-7 text-muted"> Lorem ipsum &#8226; 7d </span>
                                            </div>
                                        </div>
                                        {/* small avatar */}
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/4"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* message 5 */}
                                <li className="my-2 p-1" type="button" data-bs-toggle="modal" data-bs-target="#singleChat5">
                                    <div className="d-flex align-items-center justify-content-between">
                                        {/* big avatar */}
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/5"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">Phu</p>
                                                <span className="fs-7 text-muted"> Lorem ipsum &#8226; 7d </span>
                                            </div>
                                        </div>
                                        {/* small avatar */}
                                        <div className="p-2">
                                            <img
                                                src="https://source.unsplash.com/random/5"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "15px", height: "15px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                <hr className="m-0" />
                                <Link to="#" className="text-decoration-none">
                                    <p className="fw-bold text-center pt-3 m-0">See All in Messenger</p>
                                </Link>
                            </ul>
                            {/* notifications */}
                            <div
                                className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
                                style={{ width: "38px", height: "38px" }}
                                type="button"
                                id="notMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <i className="fas fa-bell"></i>
                            </div>
                            {/* notifications dd */}
                            <ul
                                className="dropdown-menu border-0 shadow p-3 w-100"
                                aria-labelledby="notMenu"
                                style={{ maxHeight: "600px", maxWidth: "400px", overflowY: "auto" }}
                            >
                                {/* header */}
                                <li className="p-1">
                                    <div className="d-flex justify-content-between">
                                        <h2>Notifications</h2>
                                        <div>
                                            <i
                                                className="fas fa-ellipsis-h pointer p-2 rounded-circle bg-gray"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                            ></i>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item d-flex align-items-center" type="button">
                                                    <i className="fas fa-check me-3 text-muted"></i>
                                                    <p className="m-0">Mark all as read</p>
                                                </li>
                                                <li className="dropdown-item d-flex align-items-center" type="button">
                                                    <i className="fas fa-cog me-3 text-muted"></i>
                                                    <p className="m-0">Privacy Checkup</p>
                                                </li>
                                                <li className="dropdown-item d-flex align-items-center" type="button">
                                                    <i className="fas fa-desktop me-3 text-muted"></i>
                                                    <p className="m-0">Privacy Shortcuts</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex" type="button">
                                        <p className="rounded-pill bg-gray p-2">All</p>
                                        <p className="ms-3 rounded-pill bg-primary p-2 text-white">Unread</p>
                                    </div>
                                </li>
                                {/* new section */}
                                <div className="d-flex justify-content-between mx-2">
                                    <h5>New</h5>
                                    <Link to="#" className="text-decoration-none">
                                        See All
                                    </Link>
                                </div>
                                {/* n1 */}
                                <li className="my-2 p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde amet
                                                    at nulla quae porro.
                                                </p>
                                                <span className="fs-7 text-primary">about an hour ago</span>
                                            </div>
                                        </div>
                                        <i className="fas fa-circle fs-7 text-primary"></i>
                                    </Link>
                                </li>
                                {/* n2 */}
                                <li className="my-2 p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde amet
                                                    at nulla quae porro.
                                                </p>
                                                <span className="fs-7 text-primary">about an hour ago</span>
                                            </div>
                                        </div>
                                        <i className="fas fa-circle fs-7 text-primary"></i>
                                    </Link>
                                </li>
                                {/* n3 */}
                                <li className="my-2 p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde amet
                                                    at nulla quae porro.
                                                </p>
                                                <span className="fs-7 text-primary">about an hour ago</span>
                                            </div>
                                        </div>
                                        <i className="fas fa-circle fs-7 text-primary"></i>
                                    </Link>
                                </li>
                                {/* n4 */}
                                <li className="my-2 p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/4"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde amet
                                                    at nulla quae porro.
                                                </p>
                                                <span className="fs-7 text-primary">about an hour ago</span>
                                            </div>
                                        </div>
                                        <i className="fas fa-circle fs-7 text-primary"></i>
                                    </Link>
                                </li>
                                {/* n5 */}
                                <li className="my-2 p-1">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center justify-content-evenly text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/5"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "58px", height: "58px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="fs-7 m-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde amet
                                                    at nulla quae porro.
                                                </p>
                                                <span className="fs-7 text-primary">about an hour ago</span>
                                            </div>
                                        </div>
                                        <i className="fas fa-circle fs-7 text-primary"></i>
                                    </Link>
                                </li>
                            </ul>
                            {/* secondary menu */}
                            <div
                                className="rounded-circle p-1 d-flex align-items-center justify-content-center mx-2"
                                style={{ width: "38px", height: "38px" }}
                                type="button"
                                id="secondMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <div className="align-items-center justify-content-center d-flex">
                                    <img
                                        src="https://source.unsplash.com/collection/happy-people"
                                        className="rounded-circle me-2"
                                        alt="avatar"
                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            {/* secondary menu dd */}
                            <ul className="dropdown-menu border-0 shadow p-3" aria-labelledby="secondMenu">
                                {/* avatar */}
                                <Link to="/profile" className="text-decoration-none">
                                    <li className="dropdown-item p-1 rounded d-flex" type="button">
                                        <img
                                            src="https://source.unsplash.com/collection/happy-people"
                                            alt="avatar"
                                            className="rounded-circle me-2"
                                            style={{ width: "45px", height: "45px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <p className="m-0">Team 4</p>
                                            <p className="m-0 text-muted">See your profile</p>
                                        </div>
                                    </li>
                                </Link>
                                <hr />
                                {/* feedback */}
                                <li className="dropdown-item p-1 rounded d-flex align-items-center" type="button">
                                    <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle"></i>
                                    <div className="ms-3">
                                        <p className="m-0">Give Feedback</p>
                                        <p className="m-0 text-muted fs-7">Help us improve the new Facebook.</p>
                                    </div>
                                </li>
                                <hr />
                                {/* options */}
                                {/* 1 */}
                                <li className="dropdown-item p-1 my-3 rounded" type="button">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <div className="d-flex" data-bs-toggle="dropdown">
                                                <i className="fas fa-cog bg-gray p-2 rounded-circle"></i>
                                                <div className="ms-3 d-flex justify-content-between align-items-center w-100">
                                                    <p className="m-0">Settings & Privacy</p>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            {/* nested menu */}
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-cog"></i>
                                                        </div>
                                                        <p className="m-0">Settings</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-lock"></i>
                                                        </div>
                                                        <p className="m-0">Privacy Checkup</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-unlock-alt"></i>
                                                        </div>
                                                        <p className="m-0">Privacy Shortcuts</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-list"></i>
                                                        </div>
                                                        <p className="m-0">Activity Log</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-newspaper"></i>
                                                        </div>
                                                        <p className="m-0">News Feed Preferences</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                                        <div
                                                            className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center me-2"
                                                            style={{ width: "38px", height: "38px" }}
                                                        >
                                                            <i className="fas fa-globe"></i>
                                                        </div>
                                                        <p className="m-0">Language</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* 2 */}
                                <li className="dropdown-item p-1 my-3 rounded" type="button">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <div className="d-flex" data-bs-toggle="dropdown">
                                                <i className="fas fa-question-circle bg-gray p-2 rounded-circle"></i>
                                                <div className="ms-3 d-flex justify-content-between align-items-center w-100">
                                                    <p className="m-0">Help & Support</p>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* 3 */}
                                <li className="dropdown-item p-1 my-3 rounded" type="button">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <div className="d-flex" data-bs-toggle="dropdown">
                                                <i className="fas fa-moon bg-gray p-2 rounded-circle"></i>
                                                <div className="ms-3 d-flex justify-content-between align-items-center w-100">
                                                    <p className="m-0">Display & Accessibility</p>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* 4 */}
                                <li className="dropdown-item p-1 my-3 rounded" type="button">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="./index.html" className="d-flex text-decoration-none text-dark">
                                                <i className="fas fa-cog bg-gray p-2 rounded-circle"></i>
                                                <div className="ms-3 d-flex justify-content-between align-items-center w-100">
                                                    <p className="m-0">Log Out</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/* end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
