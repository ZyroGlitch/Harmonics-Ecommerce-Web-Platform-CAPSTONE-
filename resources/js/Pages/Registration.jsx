import React, { useState } from "react";
import signup_img from '../../../public/assets/signUp.png';
import logo from '../../../public/assets/logo.png';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useForm } from "@inertiajs/react";

export default function Registration() {
    // Toggle Show / Hide Password
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Inertia Form Helper
    const { data, setData, post, processing, errors } = useForm({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/customers');
    }

    // console.log(useForm()); to show all the useForm functions

    return (
        <section className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="col-lg-9 col-md-9">
                <div className="card shadow-sm">
                    <div className="card-body d-flex justify-content-around align-items-center">
                        <div className="col-lg-6 col-md-6 text-center">
                            <div className="d-flex align-items-center gap-3 text-center">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="object-fit-contain rounded-pill"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <h5 className="text-success text-shadow fw-bold">HARMONICS</h5>
                            </div>
                            <img
                                src={signup_img}
                                alt="Sign Up"
                                className="object-fit-contain"
                                style={{ width: "450px", height: "450px" }}
                            />
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="text-center mb-4">
                                <h1 className="fw-bold">Get Started</h1>
                                <h6 className="fw-bold">
                                    Already have an account?{" "}
                                    <a href="#" className="text-success" style={{ textDecoration: "none" }}>
                                        Sign In
                                    </a>
                                </h6>
                            </div>

                            <form onSubmit={submit}>
                                <div className="d-flex gap-3 mb-4">
                                    <input
                                        type="text"
                                        className={
                                            `form-control shadow-sm w-100 
                                            ${errors.firstname ? 'border border-danger' : ''}`
                                        }
                                        placeholder="Firstname"
                                        value={data.firstname}
                                        onChange={(e) => setData('firstname', e.target.value)}
                                    />
                                    {
                                        errors.firstname && <p className="text-danger">{errors.firstname}</p>
                                    }

                                    <input
                                        type="text"
                                        className="form-control shadow-sm w-100"
                                        placeholder="Lastname"
                                        value={data.lastname}
                                        onChange={(e) => setData('lastname', e.target.value)}
                                    />
                                    {
                                        errors.lastname && <p className="text-danger">{errors.lastname}</p>
                                    }
                                </div>
                                <input
                                    type="text"
                                    className="form-control shadow-sm mb-4"
                                    placeholder="Contact Number"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                {
                                    errors.phone && <p className="text-danger">{errors.phone}</p>
                                }

                                <input
                                    type="text"
                                    className="form-control shadow-sm mb-4"
                                    placeholder="Address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                />
                                {
                                    errors.address && <p className="text-danger">{errors.address}</p>
                                }

                                <input
                                    type="email"
                                    className="form-control shadow-sm mb-4"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {
                                    errors.email && <p className="text-danger">{errors.email}</p>
                                }

                                <div className="input-group shadow-sm mb-4">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {
                                        errors.password && <p className="text-danger">{errors.password}</p>
                                    }

                                    <span
                                        className="input-group-text"
                                        onClick={togglePassword}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <p className="m-0">
                                            {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                        </p>
                                    </span>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success fw-bold" disabled={processing}>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
