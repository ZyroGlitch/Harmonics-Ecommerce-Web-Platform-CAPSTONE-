import { Link } from '@inertiajs/react';
import React from 'react'
import { useRoute } from 'routes-ziggy';

export default function ViewOrders({ view_orders }) {
    console.log(view_orders);

    const route = useRoute();

    return (
        <div className="container h-100 py-5">
            <div className="h-100">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb fw-semibold">
                        <Link
                            className="breadcrumb-item"
                            style={{ textDecoration: 'none' }}
                            href={route('customer.order')}
                        >
                            Orders
                        </Link>
                        <li className="breadcrumb-item active" aria-current="page">{view_orders.data[0].order_id}</li>
                    </ol>
                </nav>

                <div className="card shadow rounded border-0">
                    <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
                        <h3>Order Details</h3>
                        <h4>{view_orders.total} Items</h4>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>Product</th>
                                    <th style={{ width: '25%' }} className="text-center">Price</th>
                                    <th style={{ width: '25%' }} className="text-center">Quantity</th>
                                    <th style={{ width: '25%' }} className="text-center">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    view_orders.data.map((order) => (
                                        <tr className="align-middle" key={order.id}>
                                            <td className="d-flex align-items-center">
                                                <div className="text-center me-3">
                                                    <img
                                                        src={`/storage/${order.product.image}`}
                                                        alt=""
                                                        className="object-fit-contain"
                                                        style={{ width: '80px', height: '80px' }}
                                                    />
                                                </div>
                                                <h6 className="fw-semibold text-start">{order.product.name}</h6>
                                            </td>
                                            <td>₱{order.product.price}</td>
                                            <td>{order.quantity}</td>
                                            <td>₱{order.subtotal}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p className='fw-semibold'>{view_orders.to} out of {view_orders.total} Items</p>

                        <div>
                            {
                                view_orders.links.map((link) => (
                                    link.url ?
                                        <Link
                                            key={link.label}
                                            href={link.url}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`btn btn-sm me-3 ${link.active ? 'btn-primary' : 'btn-outline-primary'}`}
                                            style={{ textDecoration: 'none' }}
                                            preserveScroll
                                        />

                                        :
                                        <span
                                            key={link.label}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className='me-3 text-muted'
                                        >

                                        </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
