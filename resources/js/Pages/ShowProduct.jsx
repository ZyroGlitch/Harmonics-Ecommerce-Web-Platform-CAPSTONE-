import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { FaStar } from "react-icons/fa6";
import { Link } from '@inertiajs/react';
import { useRoute } from 'routes-ziggy';

function ShowProduct({ products }) {

    const route = useRoute();

    console.log(products);

    return (
        <div className='container h-100 py-5'>
            {products.map((product) => (
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7">
                        <img src={"storage/" + product.image} alt="image" className="object-fit-cover" style={{ width: '400px', height: '400px' }} />
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <nav aria-label="breadcrumb mb-3">
                            <ol class="breadcrumb">
                                <Link href={route('customer.product')} class="breadcrumb-item fw-semibold"><a href="#">Home</a></Link>
                                <Link class="breadcrumb-item fw-semibold active" aria-current="page">Library</Link>
                            </ol>
                        </nav>

                        <h2>Product Name</h2>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>₱2000</h4>

                            <div className="d-flex gap-1 align-items-center">
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />
                                <FaStar className='fs-6 text-warning' />

                                <p className='fw-semibold'>3 Reviews</p>
                            </div>
                        </div>

                        <p className='mb-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima tenetur, harum facere impedit quae dolorum reprehenderit. Fugit molestias, ad fuga ipsa recusandae perferendis debitis qui vel odio earum autem?</p>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                            <input type="number" className="form-control shadow-sm" style={{ width: '50%' }} />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="d-grid">
                                    <button className="btn btn-primary rounded-pill shadow">BUY</button>
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
            ))}
        </div>
    )
}

ShowProduct.layout = page => <AuthenticatedLayout children={page} />

export default ShowProduct

