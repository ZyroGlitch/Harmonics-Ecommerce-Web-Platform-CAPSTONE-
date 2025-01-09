import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import { DatePicker, Nav } from 'rsuite'

const products = [
    { id: '#2024', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2221', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#0298', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2902', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2223', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2223', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2223', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
    { id: '#2223', subtotal: 3000, change: 200, payment: 'COD', status: 'Pending' },
]


function Order() {
    return (
        <div className="container h-100 py-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h2 className='fw-semibold'>Order</h2>
                    <p>28 orders found</p>
                </div>

                <div className="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <Nav justified defaultActiveKey="All" className="d-flex gap-3 fw-semibold">
                    <Nav.Item eventKey="All">
                        <Link href="#" className='text-dark' style={{ textDecoration: 'none' }}>All orders</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="Pending">
                        <Link href="#" className='text-dark' style={{ textDecoration: 'none' }}>Pending</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="Completed">
                        <Link href="#" className='text-dark' style={{ textDecoration: 'none' }}>Completed</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="Returned">
                        <Link href="#" className='text-dark' style={{ textDecoration: 'none' }}>Returned</Link>
                    </Nav.Item>
                    <Nav.Item eventKey="Canceled">
                        <Link href="#" className='text-dark' style={{ textDecoration: 'none' }}>Canceled</Link>
                    </Nav.Item>
                </Nav>

                <div className="">
                    <DatePicker placeholder='Select Date' />
                </div>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <table class="table">
                        <thead className='text-center'>
                            <tr>
                                <th>Order id</th>
                                <th>Subtotal</th>
                                <th>Change</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className='text-center'>

                            {products.map((product) => (
                                <tr className='align-middle'>
                                    <th key={product.id}>{product.id}</th>
                                    <td>P{product.subtotal}</td>
                                    <td>P{product.change}</td>
                                    <td>{product.payment}</td>
                                    <td>{product.status}</td>
                                    <td className='row justify-content-center align-items-center'>
                                        <div className="col-lg-5 col-md-5">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-sm fw-semibold">View</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                            <div className="d-grid">
                                                <button className="btn btn-warning btn-sm fw-semibold">Edit</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

Order.layout = page => <AuthenticatedLayout children={page} />

export default Order
