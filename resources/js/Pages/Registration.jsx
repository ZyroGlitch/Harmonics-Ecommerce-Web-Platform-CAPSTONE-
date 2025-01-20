import React, { useState } from "react";
import signup_img from '../../../public/assets/signUp1.svg';
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from 'routes-ziggy';


export default function Registration() {

    const route = useRoute();

    // Toggle Show / Hide Password
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Inertia Form Helper
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();

        post(route('guest.register', {
            onSuccess() {
                // Reset the useForm data
                reset();
            }
        }
        ));
    }

    // console.log(useForm()); to show all the useForm functions



    return (
        <section className="row justify-content-center align-items-center vh-100 bg-light m-0 p-0">
            <div className="col-lg-6 col-md-6 text-center">
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
                        Already have an account? <Link href={route('guest.login')} className="text-success" style={{ textDecoration: "none" }}>
                            Sign In
                        </Link>
                    </h6>
                </div>

                <form onSubmit={submit}>
                    <div className="d-flex align-items-center gap-3">
                        <div style={{ width: "300px" }}>
                            <input
                                type="text"
                                className={
                                    `form-control shadow-sm w-100 
                                            ${errors.firstname ? 'border border-danger' : 'mb-3'}`
                                }
                                placeholder="Firstname"
                                value={data.firstname}
                                onChange={(e) => setData('firstname', e.target.value)}
                            />
                            {
                                errors.firstname && <p className="text-danger">{errors.firstname}</p>
                            }
                        </div>
                        <div style={{ width: "300px" }}>
                            <input
                                type="text"
                                className={
                                    `form-control shadow-sm w-100 
                                            ${errors.lastname ? 'border border-danger' : 'mb-3'}`
                                }
                                placeholder="Lastname"
                                value={data.lastname}
                                onChange={(e) => setData('lastname', e.target.value)}
                            />
                            {
                                errors.lastname && <p className="text-danger">{errors.lastname}</p>
                            }
                        </div>
                    </div>

                    <input
                        type="text"
                        className={
                            `form-control shadow-sm w-100 
                                            ${errors.phone ? 'border border-danger' : 'mb-3'}`
                        }
                        placeholder="Contact Number"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    {
                        errors.phone && <p className="text-danger">{errors.phone}</p>
                    }

                    <input
                        type="text"
                        className={
                            `form-control shadow-sm w-100 
                                            ${errors.address ? 'border border-danger' : 'mb-3'}`
                        }
                        placeholder="Address"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                    />
                    {
                        errors.address && <p className="text-danger">{errors.address}</p>
                    }

                    <input
                        type="email"
                        className={
                            `form-control shadow-sm w-100 
                                            ${errors.email ? 'border border-danger' : 'mb-3'}`
                        }
                        placeholder="Email Address"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {
                        errors.email && <p className="text-danger">{errors.email}</p>
                    }

                    <input
                        type={showPassword ? "text" : "password"}
                        className={
                            `form-control shadow-sm w-100 
                                            ${errors.password ? 'border border-danger' : 'mb-3'}`
                        }
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    {
                        errors.password && <p className="text-danger">{errors.password}</p>
                    }

                    <div class="form-check mb-3">
                        <input class="form-check-input shadow-sm" type="checkbox" value="" id="flexCheckDefault" onClick={togglePassword} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Show password
                        </label>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-success rounded-pill fw-bold" disabled={processing}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

// Set this page with no default layout
Registration.noLayout = true;
