import { Head, Link } from '@inertiajs/react';
import React from 'react';
import logo from '../../../public/assets/logo.png';
import profile from '../../../public/assets/profile.jpg';
import { HiBell } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { useRoute } from 'routes-ziggy';
import Title_MetaTagsLayout from './Title_MetaTagsLayout';

export default function AuthenticatedLayout({ children }) {
    const route = useRoute();

    return (
        <>
            <Title_MetaTagsLayout />

            <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <img
                            src={logo}
                            alt="Logo"
                            className="object-fit-contain rounded-pill me-2"
                            style={{ width: '40px', height: '40px' }}
                        />
                        Harmonics
                    </a>

                    {/* Responsive Hamburger Menu */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav fw-bold fs-6 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('customer.dashboard')}>PRODUCTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route('customer.order')}>ORDERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">CONTACT</Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-3">
                            {/* Bell Notification with Offcanvas Trigger */}
                            <Link
                                className="position-relative me-3 text-dark"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#notification"
                                aria-controls="notification"
                            >
                                <HiBell className="fs-4" />
                                <span
                                    className="position-absolute fw-semibold bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                                    style={{
                                        top: '-10px',
                                        right: '-10px',
                                        width: '20px',
                                        height: '20px',
                                        fontSize: '12px',
                                    }}
                                >
                                    20
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>

                            <Link
                                href={route('customer.cart', { cart_id: null })}
                                className="text-dark"
                            >
                                <FaCartShopping className="fs-4" />
                            </Link>


                            <Link href='#' className="text-center">
                                <img src={profile} alt="profile" className="object-fit-contain rounded-pill" style={{ width: '45px', height: '45px' }} />
                            </Link>
                        </div>


                    </div>
                </div>
            </nav >

            <main style={{ paddingTop: '66px' }}>
                {children}

                {/* Offcanvas Notification */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="notification"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header bg-primary text-light">
                        <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">
                            NOTIFICATIONS
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body h-auto p-2">
                        {/* Example Notification Card */}
                        <div className="card shadow-sm mb-2">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <img
                                    src="assets/photo.png"
                                    alt="User"
                                    className="object-fit-contain rounded-pill shadow-sm me-3"
                                    style={{ width: '60px', height: '60px' }}
                                />
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="fw-bold mb-0">Boss Malupiton</h5>
                                        <p className="fw-bold text-success mb-0">New</p>
                                    </div>
                                    <p className="fw-medium mb-0">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
