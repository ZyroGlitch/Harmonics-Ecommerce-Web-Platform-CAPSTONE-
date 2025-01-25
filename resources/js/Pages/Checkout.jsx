import React from 'react'
import gcash from '../../../public/assets/gcash.jpg'
import paymaya from '../../../public/assets/paymaya.jpg'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';

function Checkout({ payment_method, address }) {
    return (
        <div className="container h-100 py-5">
            <div className="row justify-content-evenly align-items-start h-100">

                {
                    payment_method === 'gcash' && (
                        <div className="col-lg-6 col-md-6 text-center">
                            <h4 className='mb-1'>Scan the QR Code</h4>
                            <img src={gcash} alt="gcash" className="object-fit-cover shadow rounded" style={{ width: '400px', height: '530px' }} />
                        </div>
                    )
                }

                {
                    payment_method === 'paymaya' && (
                        <div className="col-lg-6 col-md-6 text-center">
                            <h4 className='mb-1'>Scan the QR Code</h4>
                            <img src={paymaya} alt="gcash" className="object-fit-cover shadow rounded" style={{ width: '400px', height: '530px' }} />
                        </div>
                    )
                }

                <div className="col-lg-6 col-md-6">
                    <div className="card shadow rounded border-0">
                        <div className={
                            payment_method === 'paymaya' ?
                                `card-header bg-success text-light`
                                :
                                `card-header bg-primary text-light`
                        }>
                            <h4>Checkout Details</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h5>Items Summary</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Product 1</p>
                                    <p>₱ 100.00</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Product 1</p>
                                    <p>₱ 100.00</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Shipping Fee</p>
                                    <p>₱ 50.00</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center fw-semibold">
                                    <p>Total</p>
                                    <p>₱ 1000.00</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="referrence" className="form-label">Referrence No.</label>
                                <input type="text" className="form-control shadow-sm" id='referrence' />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="receipt" className="form-label">Upload the payment receipt</label>
                                <input type="file" className="form-control shadow-sm" id='receipt' />
                            </div>

                            <div className="d-grid">
                                <button
                                    type='submit'
                                    className={
                                        payment_method === 'paymaya' ?
                                            `btn btn-success shadow`
                                            :
                                            `btn btn-primary shadow`
                                    }
                                >Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

Checkout.layout = page => <AuthenticatedLayout children={page} />
export default Checkout;