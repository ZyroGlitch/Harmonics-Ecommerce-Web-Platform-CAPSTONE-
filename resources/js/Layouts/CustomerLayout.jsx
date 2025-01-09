import { Link } from '@inertiajs/react';
import React from 'react'
import logo from '../../../public/assets/logo.png';
import Title_MetaTagsLayout from './Title_MetaTagsLayout';
import { useRoute } from 'routes-ziggy';

export default function CustomerLayout({ children }) {
    const route = useRoute();

    return (
        <>
            <Title_MetaTagsLayout />

            <nav class="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand fw-bold" href="#">
                        <img src={logo} alt="Logo" className='object-fit-contain rounded-pill me-2' style={{ width: '40px', height: '40px' }} />
                        Harmonics
                    </Link>

                    {/* Responsive Humburger Menu */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav fw-bold fs-6 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#shop">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACT</a>
                            </li>
                        </ul>

                        <Link href={route('customer.login')} type='button' className="btn btn-outline-dark login-btn">LOGIN</Link>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>
        </>
    );
}
