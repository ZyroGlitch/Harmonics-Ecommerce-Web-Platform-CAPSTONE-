import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from '@inertiajs/react';
import { useRoute } from 'routes-ziggy';


function Dashboard({ products }) {

    // console.log(products); check fetch data from product table

    const route = useRoute();

    return (
        <div className='container h-100 py-5' style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className='grid-product justify-content-center align-items-center h-100'>

                {products.map(product => (
                    <div className="card shadow-sm" key={product.productID}>
                        <div className="card-header text-center">
                            <div className="text-end">
                                <Link href='#' className='text-primary'>
                                    <FaRegHeart className='fs-4' />
                                </Link>
                            </div>

                            <img
                                src={"storage/" + product.image}
                                alt="product"
                                className="object-fit-contain"
                                style={{ width: '250px', height: '250px' }}
                            />
                        </div>
                        <div className="card-body">
                            <h4 className='mb-4'>{product.name}</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-secondary">Price</h6>
                                    <h4>₱{product.price}</h4>
                                </div>

                                <Link
                                    href={route('customer.showProduct', product.productID)}
                                    className='text-light bg-primary p-3 rounded shadow'
                                >
                                    <FaCartShopping className='fs-5' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page} />

export default Dashboard

