import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from '@inertiajs/react';
import sport1 from '../../../public/products/sport1.png';
import sport2 from '../../../public/products/sport2.png';
import sport3 from '../../../public/products/sport3.png';
import music1 from '../../../public/products/music1.png';
import music2 from '../../../public/products/music2.png';
import music3 from '../../../public/products/music3.png';
import gym1 from '../../../public/products/gym1.png';
import gym2 from '../../../public/products/gym2.png';
import gym3 from '../../../public/products/gym3.png';

function Dashboard() {
    return (
        <div className='container h-100 py-5' style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className='grid-product justify-content-center align-items-center h-100'>
                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={sport1} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={sport2} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={sport3} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={music1} alt="product" className="object-fit-contain" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={music2} alt="product" className="object-fit-contain" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={music3} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={gym1} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={gym2} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        <div className="text-end">
                            <Link href='#' className='text-primary'>
                                <FaRegHeart className='fs-4' />
                            </Link>
                        </div>

                        <img src={gym3} alt="product" className="object-fit-cover" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h4 className='mb-4'>Product Name</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-secondary">Price</h6>
                                <h4>$200</h4>
                            </div>

                            <Link href="#" className='text-light bg-primary p-3 rounded shadow'>
                                <FaCartShopping className='fs-4' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page} />

export default Dashboard

