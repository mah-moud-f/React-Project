import { useRef, useEffect, useState } from "react";
import "./Video.css";
import Header from "../HeaderComponent/Header";


import { BsFillCameraVideoFill } from 'react-icons/Bs';
import { IoMdRadio } from 'react-icons/Io';
import { BsShop } from 'react-icons/Bs';
import { BsFillCameraVideoOffFill } from 'react-icons/Bs';
import { FaRocket } from 'react-icons/Fa';
import { BsFillBookmarkFill } from 'react-icons/Bs';




export default function Video() {
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
                    <div className="col-12 col-lg-3 ">
                        <div
                            className="d-none d-xxl-block h-100 fixed-top overflow-hidden scrollbar icon"
                            style={{ maxWidth: "360px", zIndex: 4 }}
                        >
                            <ul className="navbar-nav mt-4 ms-3 d-flex flex-column" style={{ paddingTop: "56px" }}>

                                <li className="dropdown-item p-1 rounded">
                                    <a
                                        href="./profile.html"
                                        className="d-flex align-items-center text-decoration-none text-dark"
                                    >
                                        <div className="p-2">
                                           
                                            <a href="" className="text-dark ">
                                                <BsFillCameraVideoFill size={"30px"} />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="m-0"> Video </p>
                                        </div>

                                    </a>
                                    
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search Videos"
                                        />
                                </li>

                                <li className="dropdown-item p-1 rounded">
                                    <a
                                        href="./friends.html"
                                        className="d-flex align-items-center text-decoration-none text-dark"
                                    >
                                        <div className="p-2">
                                           <a href="" className="text-dark  ">
                                                <IoMdRadio size={"30px"} />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="m-0"> Live </p>
                                        </div>
                                    </a>
                                </li>

                                <li className="dropdown-item p-1 rounded">
                                    <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                                        <div className="p-2">
                                           <a href="" className="text-dark ">
                                                <BsFillCameraVideoOffFill size={"30px"} />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="m-0"> Reels </p>
                                           </div>
                                    </a>
                                </li>

                                <li className="dropdown-item p-1">
                                    <a
                                        href="#"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                               < a href="" className="text-dark ">
                                                    <BsShop size={"30px"} />
                                                </a>
                                            </div>
                                            <div>
                                                <p className="m-0">Shows</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="dropdown-item p-1">
                                    <a
                                        href="#"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <a href="" className="text-dark  ">
                                                    <FaRocket size={"29px"} />
                                                </a>
                                            </div>
                                            <div>
                                                <p className="m-0"> Explore </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li className="dropdown-item p-1">
                                    <a
                                        href="./video.html"
                                        className="d-flex align-items-center justify-content-between text-decoration-none text-dark"
                                    >
                                        <div className="d-flex align-items-center justify-content-evenly">
                                            <div className="p-2">
                                                <a href="" className="text-dark ">
                                                    <BsFillBookmarkFill size={"27px"} />
                                                </a>
                                            </div>
                                            <div>
                                                <p className="m-0"> Saved Videos </p>
                                                 </div>
                                        </div>
                                    </a>
                                </li>

                                {/* <li className="p-1" type="button">
                                    <div id="accordionFlushExample">
                                        <div>
                                           
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
                                                        style={{ backgroundColor: "#d5d5d5 !important" }}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <p className="m-0">See More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                {/* <hr className="m-0" /> */}

                                {/* <div className="d-flex justify-content-between align-items-center mt-2 text-muted edit-heading">
                                    <h6 className="m-3 pointer">Your Shorcuts</h6>
                                    <p
                                        className="m-0 text-primary me-3 pointer edit-button"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#shortCutModal"
                                    >
                                        Edit
                                    </p>
                                </div> */}

                                {/* <li className="dropdown-item p-1">
                                    <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
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
                                    </a>
                                </li> */}

                                {/* <li className="dropdown-item p-1">
                                    <a className="d-flex align-items-center text-decoration-none text-dark">
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
                                    </a>
                                </li>
                               
                                <li className="dropdown-item p-1">
                                    <a className="d-flex align-items-center text-decoration-none text-dark">
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
                                    </a>
                                </li> */}

                                {/* <li className="p-1" type="button">
                                    <div id="accordionFlushExample">
                                        <div>
                                           
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
                                                        style={{ backgroundColor: "#d5d5d5 !important" }}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <p className="m-0">See More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>

                            {/* <div className="px-4 pt-2">
                                <p className="text-muted fs-7">
                                    Privacy &#8226; Terms &#8226; Advertising &#8226; Ad Choices &#8226; Cookies &#8226;
                                    Facebook © 2021
                                </p>
                            </div> */}
                        </div>
                    </div>

                     
                    
                    {/* ================= Timeline ================= */}
                    <div className="col-12 col-lg-6 pb-5 ved ">
                        <div
                            className="d-flex flex-column justify-content-center w-100 mx-auto"
                            style={{ paddingTop: "56px", maxWidth: "680px" }}
                        >
                           
                            {/* <div className="mt-5 p-3 shadow-sm d-flex justify-content-between position-relative bg-white rounded-2">
                               
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
                               
                                <div className="position-absolute top-50 start-100 translate-middle pointer d-none d-lg-block">
                                    <i className="fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"></i>
                                </div>
                            </div> */}
                           
                            {/* <div className="bg-white p-3 mt-3 rounded border shadow">
                                
                                <div className="d-flex" type="button">
                                    <div className="p-1">
                                        <a href="./profile.html">
                                            <img
                                                src="https://source.unsplash.com/collection/happy-people"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </a>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill border-0 bg-gray"
                                        placeholder="What's on your mind, Team 4?"
                                    />
                                </div>
                                <hr />
                                
                                <div className="d-flex flex-column flex-lg-row mt-3">
                                    
                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center"
                                        type="button"
                                    >
                                        <i className="fas fa-video me-2 text-danger"></i>
                                        <p className="m-0 text-muted">Live Video</p>
                                    </div>

                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center py-2"
                                        type="button"
                                    >
                                        <i className="fas fa-photo-video me-2 text-success"></i>
                                        <p className="m-0 text-muted">Photo/Video</p>
                                    </div>
                                    
                                    <div
                                        className="dropdown-item rounded d-flex align-items-center justify-content-center"
                                        type="button"
                                    >
                                        <i className="fas fa-smile me-2 text-warning"></i>
                                        <p className="m-0 text-muted">Feeling/Activity</p>
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* <div className="bg-white p-3 mt-3 rounded border shadow d-flex justify-content-xxl-between justify-content-center position-relative">

                                <div>
                                    <button className="btn rounded-pill btn-info justify-content-center">
                                        <i className="fas fa-video me-3"></i>
                                        Create Room
                                    </button>
                                </div>
                                
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
                            </div> */}
                            
                            <div className="bg-white p-4 rounded shadow mt-3">

                                <div className="d-flex justify-content-between">
                                    
                                    <div className="d-flex">
                                        <a href="./profile.html">
                                            <img
                                                src="https://source.unsplash.com/collection/happy-people"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </a>
                                        <div>
                                            <a
                                                href="./profile.html"
                                                className="m-0 fw-bold text-decoration-none text-black d-block"
                                            >
                                               Panda Play
                                            </a>
                                            <span className="text-muted fs-7"> Yesterday at 4:34 pm </span>
                                        </div>
                                    </div>
                                    
                                    <i
                                        className="fas fa-ellipsis-h"
                                        type="button"
                                        id="post1Menu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>
                                    
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1Menu">
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Edit Post
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Delete Post
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="mt-3">
                                    
                                    <div>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt
                                            consequatur tenetur doloremque officia corrupti provident tempore vitae labore?
                                        </p>
                                        <video autoplay loop controls
                                            src="../../../src/assets/1.mp4"
                                            alt="post video"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    
                                    <div className="post__comment mt-3 position-relative">
                                        
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
                                                
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <a href="./profile.html">
                                                        <img
                                                            src="https://source.unsplash.com/collection/happy-people"
                                                            alt="avatar"
                                                            className="rounded-circle me-2"
                                                            style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                        />
                                                    </a>
                                                    
                                                    <div className="p-3 rounded comment__input w-100">
                                                        <a href="./profile.html" className="text-decoration-none text-black">
                                                            <p className="fw-bold m-0 pointer">Team 4</p>
                                                        </a>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <img
                                                        src="https://source.unsplash.com/random/2"
                                                        alt="avatar"
                                                        className="rounded-circle me-2"
                                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                    />

                                                    <div className="p-3 rounded comment__input w-100">
                                                        <p className="fw-bold m-0 pointer">Ahmed</p>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <form className="d-flex my-1">

                                                    <div>
                                                        <a href="./profile.html">
                                                            <img
                                                                src="https://source.unsplash.com/collection/happy-people"
                                                                alt="avatar"
                                                                className="rounded-circle me-2"
                                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                            />
                                                        </a>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        className="form-control border-0 rounded-pill bg-gray"
                                                        placeholder="Write a comment"
                                                    />
                                                </form>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div
                            className="d-flex flex-column justify-content-center w-100 mx-auto"
                            style={{ paddingTop: "10px", maxWidth: "680px" }}
                        >
                           
                           
                            
                            <div className="bg-white p-4 rounded shadow mt-3">

                                <div className="d-flex justify-content-between">
                                    
                                    <div className="d-flex">
                                        <a href="./profile.html">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </a>
                                        <div>
                                            <a
                                                href="./profile.html"
                                                className="m-0 fw-bold text-decoration-none text-black d-block"
                                            >
                                              Anas Abd El-satar
                                            </a>
                                            <span className="text-muted fs-7"> last Month </span>
                                        </div>
                                    </div>
                                    
                                    <i
                                        className="fas fa-ellipsis-h"
                                        type="button"
                                        id="post1Menu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>
                                    
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1Menu">
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Edit Post
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Delete Post
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="mt-3">
                                    
                                    <div>
                                        <p>
                                        We destroyed the generations before you when they did wrong and their messengers came to them with clear proofs, and they would not believe likewise.
                                        </p>
                                        <video autoplay loop controls
                                            src="../../../src/assets/1.mp4"
                                            alt="post video"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    
                                    <div className="post__comment mt-3 position-relative">
                                        
                                        <div className="d-flex justify-content-between">
                                            <div className="me-2 d-sm-flex pointer">
                                                <i className="text-primary fas fa-thumbs-up pe-1"></i>
                                                <i className="text-danger fab fa-gratipay pe-1"></i>
                                                <i className="text-warning fas fa-grin-squint pe-1"></i>
                                                <p className="m-0 text-muted fs-7"> Nour and Nagwa and 3 others</p>
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
                                                
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <a href="./profile.html">
                                                        <img
                                                            src="https://source.unsplash.com/collection/happy-people"
                                                            alt="avatar"
                                                            className="rounded-circle me-2"
                                                            style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                        />
                                                    </a>
                                                    
                                                    <div className="p-3 rounded comment__input w-100">
                                                        <a href="./profile.html" className="text-decoration-none text-black">
                                                            <p className="fw-bold m-0 pointer"> Ali </p>
                                                        </a>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <img
                                                        src="https://source.unsplash.com/random/2"
                                                        alt="avatar"
                                                        className="rounded-circle me-2"
                                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                    />

                                                    <div className="p-3 rounded comment__input w-100">
                                                        <p className="fw-bold m-0 pointer"> Mahmoud </p>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <form className="d-flex my-1">

                                                    <div>
                                                        <a href="./profile.html">
                                                            <img
                                                                src="https://source.unsplash.com/collection/happy-people"
                                                                alt="avatar"
                                                                className="rounded-circle me-2"
                                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                            />
                                                        </a>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        className="form-control border-0 rounded-pill bg-gray"
                                                        placeholder="Write a comment"
                                                    />
                                                </form>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="d-flex flex-column justify-content-center w-100 mx-auto"
                            style={{ paddingTop: "10px", maxWidth: "680px" }}
                        >
                           
                            .
                            
                            <div className="bg-white p-4 rounded shadow mt-3">

                                <div className="d-flex justify-content-between">
                                    
                                    <div className="d-flex">
                                        <a href="./profile.html">
                                            <img
                                                src="https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/348654905_600316758880446_8909223254898583378_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=754033&_nc_ohc=DnvswTLugkgAX9dYb5q&_nc_ht=scontent.fcai20-3.fna&oh=00_AfDJZrbESdq7twXlsjJR13NOz4np-cMYbHEi7ove5q3tqQ&oe=65049962"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                            />
                                        </a>
                                        <div>
                                            <a
                                                href="./profile.html"
                                                className="m-0 fw-bold text-decoration-none text-black d-block"
                                            >
                                               Panda Play
                                            </a>
                                            <span className="text-muted fs-7"> Yesterday at 4:34 pm </span>
                                        </div>
                                    </div>
                                    
                                    <i
                                        className="fas fa-ellipsis-h"
                                        type="button"
                                        id="post1Menu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>
                                    
                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1Menu">
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Edit Post
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <a
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="#"
                                            >
                                                Delete Post
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="mt-3">
                                    
                                    <div>
                                        <p >
                                        Those who disbelieved and wronged, God would never forgive them, nor would He guide them to a way.
                                        </p>
                                        <video autoplay loop controls
                                            src="../../../src/assets/1.mp4"
                                            alt="post video"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    
                                    <div className="post__comment mt-3 position-relative">
                                        
                                        <div className="d-flex justify-content-between">
                                            <div className="me-2 d-sm-flex pointer">
                                                <i className="text-primary fas fa-thumbs-up pe-1"></i>
                                                <i className="text-danger fab fa-gratipay pe-1"></i>
                                                <i className="text-warning fas fa-grin-squint pe-1"></i>
                                                <p className="m-0 text-muted fs-7">Marwa , Eman  and 3 others</p>
                                            </div>
                                            <div>
                                                <p className="text-muted pointer text-nowrap"> 5 Comments</p>
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
                                                
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <a href="./profile.html">
                                                        <img
                                                            src="https://source.unsplash.com/collection/happy-people"
                                                            alt="avatar"
                                                            className="rounded-circle me-2"
                                                            style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                        />
                                                    </a>
                                                    
                                                    <div className="p-3 rounded comment__input w-100">
                                                        <a href="./profile.html" className="text-decoration-none text-black">
                                                            <p className="fw-bold m-0 pointer"> Anas Abd El-satar </p>
                                                        </a>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center my-1">
                                                   
                                                    <img
                                                        src="https://source.unsplash.com/random/2"
                                                        alt="avatar"
                                                        className="rounded-circle me-2"
                                                        style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                    />

                                                    <div className="p-3 rounded comment__input w-100">
                                                        <p className="fw-bold m-0 pointer"> Omar </p>
                                                        <p className="m-0 fs-7 bg-gray p-2 rounded">
                                                           
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <form className="d-flex my-1">

                                                    <div>
                                                        <a href="./profile.html">
                                                            <img
                                                                src="https://source.unsplash.com/collection/happy-people"
                                                                alt="avatar"
                                                                className="rounded-circle me-2"
                                                                style={{ width: "38px", height: "38px", objectFit: "cover" }}
                                                            />
                                                        </a>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        className="form-control border-0 rounded-pill bg-gray"
                                                        placeholder="Write a comment"
                                                    />
                                                </form>
                                               
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
