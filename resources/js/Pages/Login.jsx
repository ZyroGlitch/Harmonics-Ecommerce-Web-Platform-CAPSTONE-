import React, { useState } from 'react'
import login_img from '../../../public/assets/loginpage.png';
import logo from '../../../public/assets/logo.png';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useRoute } from 'routes-ziggy';

export default function Login() {
    // Flash Message
    const { flash } = usePage().props;
    // console.log(usePage());

    const route = useRoute();

    // Toggle Show / Hide Password
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('guest.authentication', {
            onSuccess() {
                // Reset the useForm data
                reset();
            }
        }));
    }



    return (
        <div style={{ backgroundColor: '#72BF78' }}>
            <div className='container'>
                <div className="row justify-content-center align-items-center vh-100">

                    <div className="col-lg-10 col-md-10">
                        {
                            flash.error && (
                                <div class="alert bg-danger text-light  alert-dismissible fade show" role="alert">
                                    {flash.error}

                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                        }
                        <div className="card shadow-lg border-0">
                            <div className="card-body row justify-content-center align-items-stretch p-0 m-0">
                                <div className="col-lg-6 col-md-6 p-0">
                                    <img src={login_img} alt="image" className='object-fit-fill' style={{ width: '480px', height: '100%' }} />
                                </div>
                                <div className="col-lg-6 col-md-6 text-center p-5">
                                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                                        <img src={logo} alt="logo" className="object-fit-contain rounded" style={{ width: '40px', height: '40px' }} />

                                        <h5>Harmonics</h5>
                                    </div>
                                    <h3 className='mb-4'>Welcome Back</h3>

                                    <form onSubmit={submit} className='text-start'>
                                        <div class="mb-3">
                                            <label for="email" className="form-label fw-semibold">Email address</label>
                                            <input
                                                type="email"
                                                className={
                                                    `form-control shadow-sm
                                                        ${errors.password ? 'border border-danger' : 'mb-3'}`
                                                }
                                                id="email"
                                                placeholder='Enter your email'
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {
                                                errors.email && <p className="text-danger">{errors.email}</p>
                                            }
                                        </div>


                                        <div className="mb-3">
                                            <label for="password" className="form-label fw-semibold">Password</label>
                                            <input
                                                type={showPassword ? "text" : "password"} className={
                                                    `form-control shadow-sm 
                                                        ${errors.password ? 'border border-danger' : 'mb-3'}`
                                                }
                                                id="password"
                                                placeholder='Enter your password'
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            {
                                                errors.password && <p className="text-danger">{errors.password}</p>
                                            }
                                        </div>

                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input shadow-sm"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                onClick={togglePassword}
                                            />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Show password
                                            </label>
                                        </div>

                                        <div className="d-grid mb-3">
                                            <button type="submit" disabled={processing} className="btn btn-success shadow rounded-pill fw-bold">Login</button>
                                        </div>
                                    </form>

                                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                                        <p className='m-0'>Don't have an account? </p>
                                        <Link href={route('guest.formRegistration')} className='text-dark fw-semibold' style={{ textDecoration: 'none' }}>Sign up</Link>
                                    </div>

                                    {/* {
                                        flash.error && (<p className='text-danger fw-semibold'>{flash.error}</p>)
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


// Set this page with no default layout
Login.noLayout = true;
