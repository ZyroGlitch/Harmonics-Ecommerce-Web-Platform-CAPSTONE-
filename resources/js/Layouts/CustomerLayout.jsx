import { Link } from '@inertiajs/react';
import React from 'react'
import logo from '../../../public/assets/logo.png';

export default function CustomerLayout({ children }) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">
                        <img src={logo} alt="Logo" className='object-fit-contain rounded-pill me-2' style={{ width: '40px', height: '40px' }} />
                        Harmonics
                    </a>

                    {/* Responsive Humburger Menu */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav fw-bold fs-6 mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">SHOP</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">CONTACT</Link>
                            </li>
                        </ul>

                        <Link href="/customers/login" type='button' className="btn btn-outline-dark login-btn">LOGOUT</Link>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>
        </>
    );
}
