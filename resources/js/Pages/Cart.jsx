import React from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
import { Pagination } from 'rsuite';
import { useRoute } from '../../../vendor/tightenco/ziggy';

function Cart({ carts, total_amount }) {

    console.log(carts);

    // Ensure total_amount is a number before calling toFixed
    const parse_totalAmount = parseFloat(total_amount).toFixed(2);

    const [activePage, setActivePage] = React.useState(1);

    const route = useRoute();

    const { setData, post, processing } = useForm({
        cart_id: carts.data.map((cart) => cart.id),
        payment_method: '',
        address: 'UM Matina Gravahan, Davao City',
    });

    function submit(e) {
        e.preventDefault();
        post(route('customer.checkout'));
    }

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
                            <h4>{carts.total} Items</h4>
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
                                        carts.data.map((cart) => (
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

                        <div className="card-footer d-flex justify-content-end align-items-center">
                            {
                                carts.links.map((link) => (
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

                        {/* <div className='card-footer border-0 bg-light d-flex justify-content-between align-items-center'>
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
                        </div> */}
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="card border-0 shadow rounded">
                        <div className="card-body">

                            <form onSubmit={submit}>

                                <div className="border-bottom mb-4">
                                    <h4>Order Summary</h4>
                                </div>

                                <div className="d-flex justify-content-between align-items-center fw-semibold">
                                    <p>ITEMS {carts.total}</p>
                                    <p>
                                        ₱ {parse_totalAmount}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between align-items-center fw-semibold mb-3">
                                    <p>SHIPPING</p>
                                    <p>₱50.00</p>
                                </div>

                                <p className='fw-semibold mb-2'>MODE OF PAYMENT</p>
                                <div className="form-check border rounded shadow-sm p-2 mb-2">
                                    <input
                                        className="form-check-input ms-2 me-3"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cod"
                                        value="COD"
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="cod">
                                        Cash on delivery
                                    </label>
                                </div>

                                <div className="form-check border rounded shadow-sm p-2 mb-2">
                                    <input
                                        className="form-check-input ms-2 me-3"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="gcash"
                                        value="Gcash"
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="gcash">
                                        Gcash
                                    </label>
                                </div>

                                <div className="form-check border  rounded shadow-sm p-2 mb-3">
                                    <input
                                        className="form-check-input ms-2 me-3"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="paymaya"
                                        value="Paymaya"
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="paymaya">
                                        Paymaya
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <p className='fw-semibold'>ADDRESS</p>
                                    <p>UM Matina Gravahan, Davao City</p>
                                </div>

                                <div className="d-grid">
                                    <button
                                        type='submit'
                                        className="btn btn-primary fw-bold"
                                        disabled={processing}
                                    >CHECKOUT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

Cart.layout = page => <AuthenticatedLayout children={page} />;
export default Cart;