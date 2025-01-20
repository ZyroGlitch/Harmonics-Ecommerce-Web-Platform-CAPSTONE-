import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { FaStar } from "react-icons/fa6";
import { Link, useForm } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy';

function ShowProduct({ show_product }) {

    const route = useRoute();

    // console.log(show_product);

    const { data, setData, post, processing } = useForm({
        productID: show_product.id,
        price: show_product.price,
        quantity: 1,
    });


    function submit(e) {
        e.preventDefault();
        post(route('customer.buyProduct'));
    }


    return (
        <div className='container h-100 py-5'>
            <form onSubmit={submit}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 text-center">
                        <img
                            src={"/storage/" + show_product.image}
                            alt="image"
                            className="object-fit-contain"
                            style={{ width: '350px', height: '350px' }}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav aria-label="breadcrumb mb-3">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item fw-semibold">
                                    <Link
                                        href={route('customer.dashboard')}
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                    >Back
                                    </Link>
                                </li>

                                <li className="breadcrumb-item fw-semibold active" aria-current="page">{show_product.name}
                                </li>
                            </ol>
                        </nav>

                        <h2>{show_product.name}</h2>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>
                                ₱{show_product.price}
                            </h4>

                            <div className="d-flex gap-1 align-items-center">
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />

                                <p className='fw-semibold'>3 Reviews</p>
                            </div>
                        </div>

                        <p className='mb-4' style={{ textAlign: 'justify' }}>
                            {show_product.description}
                        </p>

                        <div className="mb-5">
                            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                style={{ width: '50%' }}
                                value={data.quantity}
                                onChange={(e) => { setData('quantity', e.target.value) }}
                                min={1}
                            />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="d-grid">
                                    <button
                                        type='submit'
                                        href={route('customer.buyProduct', show_product.id)} className="btn btn-primary rounded-pill shadow"
                                        disabled={processing}
                                    >BUY
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="d-grid">
                                    <button className="btn btn-secondary rounded-pill shadow">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

ShowProduct.layout = page => <AuthenticatedLayout children={page} />

export default ShowProduct

