import React from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Pagination } from 'rsuite';
import { useRoute } from '../../../vendor/tightenco/ziggy/src/js';

function Cart({ carts }) {

    console.log(carts);

    const [activePage, setActivePage] = React.useState(1);

    const route = useRoute();

    return (
        <div className="h-100 p-5">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fw-semibold">
                    <Link
                        className="breadcrumb-item"
                        style={{ textDecoration: 'none' }}
                        href={route('customer.dashboard')}
                    >
                        Products
                    </Link>
                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </nav>

            <div className="row justify-content-center h-100">
                <div className="col-lg-8 col-md-8">
                    <div className="card border-0 shadow rounded">
                        <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
                            <h4>Shopping Cart</h4>
                            <h4>{carts.length} Items</h4>
                        </div>

                        <div className="card-body">
                            <table className="table">
                                <thead className='text-center'>
                                    <tr>
                                        <th className='text-start'>Product Details</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>

                                    {
                                        carts.map((cart) => (
                                            // console.log('Cart ID:' + cart.id),

                                            <tr className='align-middle' key={cart.id}>
                                                <td className='d-flex'>
                                                    <img
                                                        src={`/storage/${cart.product.image}`}
                                                        alt={cart.product.name}
                                                        className="object-fit-contain me-3"
                                                        style={{ width: '100px', height: '100px' }}
                                                    />

                                                    <div className="d-flex flex-column justify-content-center align-items-start">
                                                        <h6>{cart.product.name}</h6>
                                                        <Link
                                                            className='text-danger fw-semibold' style={{ textDecoration: 'none' }}>
                                                            Remove
                                                        </Link>
                                                    </div>

                                                </td>
                                                <td>{cart.quantity}</td>
                                                <td>₱{cart.product.price}</td>
                                                <td>₱{cart.subtotal}</td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                        <div className='card-footer border-0 bg-light d-flex justify-content-between align-items-center'>
                            <p className="fw-semibold">
                                10 out of 50
                            </p>
                            <Pagination
                                prev
                                next
                                total={100}
                                limit={10}
                                activePage={activePage}
                                onChangePage={setActivePage}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="card border-0 shadow rounded">
                        <div className="card-body">
                            <div className="border-bottom mb-4">
                                <h4>Order Summary</h4>
                            </div>

                            <div className="d-flex justify-content-between align-items-center fw-semibold">
                                <p>ITEMS {carts.length}</p>
                                <p>
                                    ₱ {carts.reduce((total, cart) => total + cart.quantity * cart.product.price, 0).toFixed(2)}
                                </p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center fw-semibold mb-3">
                                <p>SHIPPING</p>
                                <p>₱50.00</p>
                            </div>

                            <p className='fw-semibold mb-2'>MODE OF PAYMENT</p>
                            <div className="form-check border rounded shadow-sm p-2 mb-2">
                                <input className="form-check-input ms-2 me-3" type="radio" name="flexRadioDefault" id="cod" />
                                <label className="form-check-label" htmlFor="cod">
                                    Cash on delivery
                                </label>
                            </div>

                            <div className="form-check border rounded shadow-sm p-2 mb-2">
                                <input className="form-check-input ms-2 me-3" type="radio" name="flexRadioDefault" id="Gcash" />
                                <label className="form-check-label" htmlFor="Gcash">
                                    Gcash
                                </label>
                            </div>

                            <div className="form-check border  rounded shadow-sm p-2 mb-3">
                                <input className="form-check-input ms-2 me-3" type="radio" name="flexRadioDefault" id="palawan" />
                                <label className="form-check-label" htmlFor="palawan">
                                    Palawan Express Pera Padala
                                </label>
                            </div>

                            <div className="mb-4">
                                <p className='fw-semibold'>ADDRESS</p>
                                <p>UM Matina Gravahan, Davao City</p>
                            </div>

                            <div className="d-grid">
                                <button type='submit' className="btn btn-light fw-bold">CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

Cart.layout = page => <AuthenticatedLayout children={page} />;
export default Cart;