import { Sidenav, Nav } from 'rsuite';
import logo from '../../../public/assets/logo.png';
import { FaCartShopping, FaBagShopping, FaChartLine, FaUsers, FaCommentDots, FaArrowRightFromBracket, FaDiceD6 } from "react-icons/fa6";
import { Link } from '@inertiajs/react';
import { useRoute } from 'routes-ziggy';

export default function AdminLayout({ children }) {
    const route = useRoute();

    return (
        <div className="d-flex h-100">
            {/* Sidebar */}

            <div className="shadow vh-100" style={{ width: 240 }}>
                <Sidenav defaultOpenKeys={['3', '4']} style={{ backgroundColor: 'white' }}>
                    <Sidenav.Header>
                        <div className="d-flex align-items-center p-3 gap-2">
                            <img src={logo} alt="logo" className="object-fit-cover rounded" style={{ width: '40px', height: '40px' }} />
                            <h4 className="fw-bold">Harmonics</h4>
                        </div>
                    </Sidenav.Header>
                    <Sidenav.Body style={{ backgroundColor: 'white' }}>
                        <Nav>
                            <Link href={route('admin.dashboard')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaDiceD6 />
                                <h6 className="fw-semibold ms-3">Dashboard</h6>
                            </Link>

                            <Link href={route('admin.orders')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaCartShopping />
                                <h6 className="fw-semibold ms-3">Orders</h6>
                            </Link>

                            <Link href={route('admin.adminProduct')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaBagShopping />
                                <h6 className="fw-semibold ms-3">Product</h6>
                            </Link>

                            <Link href={route('admin.salesReport')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaChartLine />
                                <h6 className="fw-semibold ms-3">Sales Report</h6>
                            </Link>

                            <Link href={route('admin.users')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaUsers />
                                <h6 className="fw-semibold ms-3">Users</h6>
                            </Link>

                            <Link href={route('admin.messages')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaCommentDots />
                                <h6 className="fw-semibold ms-3">Messages</h6>
                            </Link>

                            <Link href={route('admin.signout')} className="d-flex align-items-center m-2 p-2 rounded side-navigation" style={{ textDecoration: 'none' }}>
                                <FaArrowRightFromBracket />
                                <h6 className="fw-semibold ms-3">Signout</h6>
                            </Link>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>

            {/* Navbar */}
            <div className="flex-grow-1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm p-2 mb-3">
                    <div className="container-fluid d-flex justify-content-end">
                        <a
                            className="position-relative me-3"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#notification"
                            aria-controls="offcanvasRight"
                        >
                            <i className="bi bi-bell-fill fs-3"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
                                20
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </a>
                        <div className="d-flex align-items-center ms-3">
                            <img
                                src="#"
                                alt="User"
                                className="object-fit rounded shadow-md me-3"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <div>
                                <h4 className="fw-bold mb-0">Cristopher</h4>
                                <p className="mb-0">Admin</p>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Dynamic Content */}
                <div className="px-3">
                    {children}
                </div>

            </div>

            {/* Offcanvas Notifications */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="notification" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header bg-primary text-light">
                    <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">NOTIFICATIONS</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body h-auto p-2">
                    <div className="card shadow-sm mb-2">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <img
                                src="#"
                                alt="Notification"
                                className="object-fit-contain rounded-pill shadow-sm me-3"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold">Boss Malupiton</h5>
                                    <p className="fw-bold text-success">New</p>
                                </div>
                                <p className="fw-medium">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
