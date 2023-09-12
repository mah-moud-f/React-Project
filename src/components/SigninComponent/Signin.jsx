// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'
export default function Signin() {
  

      const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
         password: "",
        confirmPassword: "",
        
        
    })

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
         passwordError: "",
        confirmPasswordErr: "",
  });
        
        
  
    
    const handleValidation = (evt) => {
        var emailReg = /^[A-Za-z0-9]{4,}@(gmail|yaho)(.com)$/;
        var upperReg =/[A-Z]/
        
        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value })
            setErrors({ ...errors, nameError: (evt.target.value.length == 0) ? "Name is required" : "" })



        } else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value })
            setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? "Email is Required" : (emailReg.test(evt.target.value) ? "" : "enter valid email") })
        } else if (evt.target.name =="username") {
            setUser({ ...user, username: evt.target.value });
            setErrors({...errors,usernameError:(evt.target.value.length == 0) ? "username is required" : (evt.target.value.includes(' ') ? "username shouldnot have spaces":"")})
        } else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value });
            setErrors({...errors, passwordError: (evt.target.value.length == 0) ? "password is Required"
                : (evt.target.value.length <= 8) ? "password must be more than 8 characters"
                    : (!upperReg.test(evt.target.value)) ? "must be at least 1 uppercase character"
                : (!/[@#$*]/.test(evt.target.value)) ? "must be at least 1 special character":""
            })
        } else if (evt.target.name == "confirmPassword") {
            setUser({ ...user, confirmPassword: evt.target.value });
            if (evt.target.value != user.password) {
                setErrors({ ...errors,confirmPasswordErr:"invalid password" })
            } else {
                setErrors({ ...errors,confirmPasswordErr:"ok" })
            }
        }
    }

     const handleSubmit = (evt) => {
        evt.preventDefault()
    }


  return (
      <>
      <h2 className="text-primary text-center fw-bold">facebook</h2>
          <div className="form">
              <div className=" d-flex justify-content-center " >
                  <form autoComplete='off' onSubmit={(e) => { handleSubmit(e) }} className=" bg-white col-4-lg col-6-md col-7-sm rounded p-3 shadow">
                      <div >
                 
                    <h2 className="modal-title fs-5" id="exampleModalLabel">
                      Create new account
                    </h2>
                    <p className="opacity-75">It's quick and easy.</p>
                      </div>
                      <hr />
                      <form action="">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                                      placeholder="First name"
                                      name="name"
                                      required onChange={(e) => { handleValidation(e) }}
                                      
                                  />
                                  <p style={{ color: 'red' }}>{errors.nameError}</p>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                                      placeholder="Surname"
                                      name="name"
                          required onChange={(e) => { handleValidation(e) }}
                                  />
                                  <p style={{ color: 'red' }}>{errors.nameError}</p>
                      </div>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-control my-3"
                        placeholder="Email address"
                       required onChange={(e) => { handleValidation(e) }}
                          />
                          <p style={{ color: 'red' }}>{errors.emailError}</p>
                    <input
                      type="text"
                      className="form-control my-3"
                              placeholder="New Password"
                              name='password'
                              required
                              onChange={(e) => { handleValidation(e) }}
                    />
                          <p style={{ color: 'red' }}>{errors.passwordError}</p>
             <div>
                      <span className="opacity-75"
                        >Date of birth<i
                          type="button"
                          className="bi bi-question-circle-fill px-2"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="right"
                          data-bs-content=" helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. "
                        ></i
                      ></span>
                    </div>

                    <div className="row">
                      <div className="col">
                        <select
                          className="form-select form-select-lg mb-3"
                          name="day"
                          id=""
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                      <div className="col">
                        <select
                          className="form-select form-select-lg mb-3"
                          name="month"
                          id=""
                        >
                          <option value="jan">Jan</option>
                          <option value="feb">Feb</option>
                          <option value="mar">Mar</option>
                          <option value="apr">Apr</option>
                          <option value="may">May</option>
                          <option value="jun">Jun</option>
                          <option value="jul">Jul</option>
                          <option value="aug">Aug</option>
                          <option value="sep">Sep</option>
                          <option value="oct">Oct</option>
                          <option value="nov">Nov</option>
                          <option value="dec">Dec</option>
                        </select>
                      </div>
                      <div className="col">
                        <select className="form-select form-select-lg mb-3">
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                        </select>
                      </div>
                    </div>

                    <span className="opacity-75"
                      >Gender
                      <i
                        type="button"
                        className="bi bi-question-circle-fill px-2"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-placement="right"
                        data-bs-content=" You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say. "
                      ></i></span>

                    <div className="row">
                      <div className="col">
                        <div className="border rounded ">
                          <label
                            className="form-check-label pe-2 "
                            htmlFor="flexRadioDefault1"
                          >
                            Male
                          </label>

                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="border rounded pe-2">
                          <label
                            className="form-check-label pe-2 "
                            htmlFor="flexRadioDefault2"
                          >
                            Female
                          </label>

                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                        </div>
                      </div>
                      </div>
                     
                    <div>
                      <span className="text-muted fs-info">
                        People who use our service may have uploaded your
                        contact information to Facebook.
                        <a href="##" className="text-decoration-none">Learn more</a>
                      </span>
                    </div>
                    <div>
                      <span className="text-muted fs-info">
                        By clicking Sign Up, you agree to our
                        <a href="" className="text-decoration-none">
                          Terms, Privacy Policy and Cookies Policy</a
                        >
                        You may receive SMS notifications from us and can opt
                        out at any time.
                      </span>
                    </div>
                    <div className="text-center my-4">
                <Link to='/login'>
                   <button className="btn btn-success px-5 fw-bold fs-3" type="button">
                        Sign Up
                      </button>
                </Link>
                      
                      
                          </div>
                          <div>
                <Link to='/login'>
                  <a href="" className="text-primary text-center text-decoration-none ">
                    <p>Already have an account?</p></a>
                
                </Link>     
                          </div>
                
          </form>
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
          <hr/>
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
  )
}



