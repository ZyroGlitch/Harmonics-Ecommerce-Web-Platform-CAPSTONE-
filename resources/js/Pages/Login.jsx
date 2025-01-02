import React, { useEffect, useState } from 'react'
import login_img from '../../../public/assets/loginpage.png';
import logo from '../../../public/assets/logo.png';
import { Link, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Login() {
    // Toggle Show / Hide Password
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/customers/authentication');
    }

    // Flash Message
    const { flash } = usePage().props;
    // console.log(usePage());

    // Show SweetAlert when there's an error
    useEffect(() => {
        if (flash.error) {
            // Show the SweetAlert popup
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: flash.error,
                confirmButtonText: 'Ok',
            }).then(() => {
                // Reset the error after the SweetAlert closes
                // This will allow the error to be shown again if set
                setData('email', '');  // Reset the form or data if needed
            });
        }
    }, [flash.error]); // This runs whenever flash.error changes

    return (
        <div style={{ backgroundColor: '#72BF78' }}>
            <div className='container'>
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-10 col-md-10">
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
                                            <label for="email" class="form-label fw-semibold">Email address</label>
                                            <input
                                                type="email"
                                                class="form-control shadow-sm"
                                                id="email"
                                                placeholder='Enter your email'
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label for="password" class="form-label fw-semibold">Password</label>
                                            <input
                                                type={showPassword ? "text" : "password"} class="form-control shadow-sm"
                                                id="password"
                                                placeholder='Enter your password'
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                        </div>

                                        <div class="form-check mb-4">
                                            <input
                                                class="form-check-input shadow-sm"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                onClick={togglePassword}
                                            />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Show password
                                            </label>
                                        </div>

                                        <div className="d-grid mb-3">
                                            <button type="submit" disabled={processing} className="btn btn-success shadow rounded-pill fw-bold">Login</button>
                                        </div>
                                    </form>

                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <p className='m-0'>Don't have an account? </p>
                                        <Link href="/customers/create" className='text-dark fw-semibold' style={{ textDecoration: 'none' }}>Sign up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
