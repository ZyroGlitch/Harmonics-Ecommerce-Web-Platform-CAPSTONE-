import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import { DatePicker, Nav } from 'rsuite'
import { useRoute } from '../../../vendor/tightenco/ziggy'

function Order({ orders }) {
    const route = useRoute();
    // console.log(orders);
    // console.log(route('customer.view_order', { order_id: orders[0].orderID }));

    return (
        <div className="container h-100 py-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h2 className='fw-semibold'>Order</h2>
                    <p>{orders.length} orders found</p>
                </div>

                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
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
                    <table className="table">
                        <thead className='text-center'>
                            <tr>
                                <th>Order ID</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Payment</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {orders.map((order) => (
                                <tr className='align-middle' key={order.orderID}>

                                    <td>{order.orderID}</td>
                                    <td>{order.quantity}</td>
                                    <td>P{order.subtotal}</td>
                                    <td>{order.payment_method}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone_number}</td>
                                    <td>{order.order_status}</td>
                                    <td className="d-grid">
                                        <Link
                                            href={route('customer.view_order', { order_id: order.orderID })}
                                            type='button'
                                            className="btn btn-primary btn-sm fw-semibold"
                                            style={{ textDecoration: 'none' }}>
                                            View
                                        </Link>
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
