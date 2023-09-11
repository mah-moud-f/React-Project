// import React from 'react'

import { useState } from "react";
import "./Login.css";
import { Link, Outlet } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({
        password: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        passError: "",
        emailError: "",
    });

    const handleValidation = (evt) => {
        if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value });
            setErrors({
                ...errors,
                passError:
                    evt.target.value.length == 0
                        ? "Password is required"
                        : evt.target.value.length <= 8
                        ? "password must be at least 8 characters"
                        : "",
            });
        } else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value });
            setErrors({
                ...errors,
                emailError:
                    evt.target.value.length == 0
                        ? "Email is Required"
                        : evt.target.value.includes("@")
                        ? ""
                        : "Email must includes @",
            });
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    return (
        <>
            <Outlet />
            <h2 className="text-primary text-center fw-bold">facebook</h2>
            <div className="form1">
                <div className=" d-flex justify-content-center ">
                    <form
                        autoComplete="off"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                        className=" bg-white col-4-lg col-6-md col-7-sm rounded p-3 shadow"
                    >
                        <h4 className="text-center">Log in to facebook </h4>

                        <div className="mb-3">
                            <input
                                type="text"
                                className={`form-control ${errors.nameError && "border-danger shadow-none"}`}
                                id="formGroupExampleInput"
                                placeholder="Email address or Phone number"
                                value={user.email}
                                name="email"
                                onChange={(e) => {
                                    handleValidation(e);
                                }}
                            />
                            <p style={{ color: "red" }}>{errors.emailError}</p>
                        </div>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                type={"password"}
                                id="formGroupExampleInput2"
                                placeholder="Password"
                                value={user.password}
                                name="password"
                                onChange={(e) => {
                                    handleValidation(e);
                                }}
                            />

                            <p style={{ color: "red" }}>{errors.passError}</p>
                        </div>

                        <div className="">
                            <button type="submit" className="btn btn-primary col-12 btn-lg">
                                log in
                            </button>
                        </div>
                        <a href="" className="text-primary text-center text-decoration-none p-2">
                            <p>Forgotten password?</p>
                        </a>

                        <Link to="/siginin">
                            <div className="text-center my-4">
                                <button type="button" className="btn btn-success btn-lg">
                                    Create new account
                                </button>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
            <footer className=" col-12 50 text-muted p-4 bg-white d-flex align-items-end ">
                <div className="container  ">
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className="mx-2 fs-6 mb-0">English (UK)</p>
                        <p className="mx-2 fs-6 mb-0">العربية</p>
                        <p className="mx-2 fs-6 mb-0">Français (France)</p>
                        <p className="mx-2 fs-6 mb-0">Italiano</p>
                        <p className="mx-2 fs-6 mb-0">Deutsch</p>
                        <p className="mx-2 fs-6 mb-0">Русский</p>
                        <p className="mx-2 fs-6 mb-0">Español</p>
                        <p className="mx-2 fs-6 mb-0">Bahasa Indonesia</p>
                        <p className="mx-2 fs-6 mb-0">Türkçe</p>
                        <p className="mx-2 fs-6 mb-0">Português (Brasil)</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className="mx-2 fs-6 mb-0">Sign Up</p>
                        <p className="mx-2 fs-6 mb-0">Log in</p>
                        <p className="mx-2 fs-6 mb-0">Messenger</p>
                        <p className="mx-2 fs-6 mb-0">Facebook Lite</p>
                        <p className="mx-2 fs-6 mb-0">Video</p>
                        <p className="mx-2 fs-6 mb-0">Places</p>
                        <p className="mx-2 fs-6 mb-0">Games</p>
                        <p className="mx-2 fs-6 mb-0">Marketplace</p>
                        <p className="mx-2 fs-6 mb-0">Meta Pay</p>
                        <p className="mx-2 fs-6 mb-0">Meta Store</p>
                        <p className="mx-2 fs-6 mb-0">Meta Quest</p>
                        <p className="mx-2 fs-6 mb-0">Instagram</p>
                        <p className="mx-2 fs-6 mb-0">Threads</p>
                        <p className="mx-2 fs-6 mb-0">Fundraisers</p>
                        <p className="mx-2 fs-6 mb-0">Services</p>
                        <p className="mx-2 fs-6 mb-0">Voting Information Centre</p>
                        <p className="mx-2 fs-6 mb-0">Privacy Policy</p>
                        <p className="mx-2 fs-6 mb-0">Privacy Centre</p>
                        <p className="mx-2 fs-6 mb-0">Groups</p>
                        <p className="mx-2 fs-6 mb-0">About</p>
                        <p className="mx-2 fs-6 mb-0">Create ad</p>
                        <p className="mx-2 fs-6 mb-0">Create Page</p>
                        <p className="mx-2 fs-6 mb-0">Developers</p>
                        <p className="mx-2 fs-6 mb-0">Careers</p>
                        <p className="mx-2 fs-6 mb-0">Cookies</p>
                        <p className="mx-2 fs-6 mb-0">Terms</p>
                        <p className="mx-2 fs-6 mb-0">Help</p>
                        <p className="mx-2 fs-6 mb-0">Contact uploading and non-usersSettings</p>
                    </div>
                    <div className="pt-5">Meta © 2023</div>
                </div>
            </footer>
        </>
    );
}
