import React, { useState } from 'react'
import gcash from '../../../public/assets/gcash.jpg'
import paymaya from '../../../public/assets/paymaya.jpg'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy';
function Checkout({ carts, payment_method }) {

    // console.log(carts);
    // console.log(payment_method);
    // console.log(address);

    const route = useRoute();

    const { data, setData, post, processing, errors, reset } = useForm({
        cart_id: carts.map(cart => cart.id),
        payment_method: payment_method,
        referrence: '',
        receipt: '',
    });

    const [receipt, preview_Receipt] = useState(null);

    function handleReceipt(e) {
        const receipt = e.target.files[0];
        setData('receipt', receipt);


        receipt
            ? preview_Receipt(URL.createObjectURL(receipt))
            : preview_Receipt(null);
    }

    function submit(e) {
        e.preventDefault();
        post(route('customer.store_checkout'), {
            onSuccess() {
                reset();
            }
        })
    }


    return (
        <div className="container h-100 py-5">
            <div className="row justify-content-evenly align-items-start h-100">

                {
                    payment_method === 'Gcash' && (
                        <div className="col-lg-6 col-md-6 text-center">
                            <h4 className='mb-1'>Scan the QR Code</h4>
                            <img src={gcash} alt="gcash" className="object-fit-cover shadow rounded" style={{ width: '400px', height: '530px' }} />
                        </div>
                    )
                }

                {
                    payment_method === 'Paymaya' && (
                        <div className="col-lg-6 col-md-6 text-center">
                            <h4 className='mb-1'>Scan the QR Code</h4>
                            <img src={paymaya} alt="gcash" className="object-fit-cover shadow rounded" style={{ width: '400px', height: '530px' }} />
                        </div>
                    )
                }

                <div className="col-lg-6 col-md-6">
                    <div className="card shadow rounded border-0">
                        <div className={
                            payment_method === 'Paymaya' ?
                                `card-header bg-success text-light`
                                :
                                `card-header bg-primary text-light`
                        }>
                            <h4>Checkout Details</h4>
                        </div>
                        <div className="card-body">

                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <h5>Items Summary</h5>
                                    {
                                        carts.map(cart => (
                                            <div key={cart.id}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p>{cart.product.name}</p>
                                                    <p>₱{cart.subtotal}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div className="d-flex justify-content-between align-items-center fw-semibold">
                                        <p>Total</p>
                                        <p>₱
                                            {
                                                carts.reduce((subtotal, cart) => subtotal + Number(cart.subtotal), 0).toFixed(2)
                                            }</p>
                                    </div>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="referrence" className="form-label">Referrence No.</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        id='referrence'
                                        value={data.referrence}
                                        onChange={(e) => { setData('referrence', e.target.value) }}
                                    />
                                    {
                                        errors.referrence && (
                                            <p className="text-danger">{errors.referrence}</p>
                                        )
                                    }
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="receipt" className="form-label">Upload the payment receipt</label>
                                    <input
                                        type="file"
                                        className="form-control shadow-sm"
                                        id='receipt'
                                        onChange={handleReceipt}
                                    />
                                    {
                                        errors.receipt && (
                                            <p className="text-danger">{errors.receipt}</p>
                                        )
                                    }

                                    {/* Preview Receipt Upload Image */}
                                    {
                                        receipt && (
                                            <img src={receipt} alt="receipt" className="object fit-cover shadow-sm rounded mt-2" style={{ width: '60px', height: '100px' }} />
                                        )
                                    }


                                </div>

                                <div className="d-grid">
                                    <button
                                        type='submit'
                                        className={
                                            payment_method === 'Paymaya' ?
                                                `btn btn-success shadow`
                                                :
                                                `btn btn-primary shadow`
                                        }
                                        disabled={processing}
                                    >Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

Checkout.layout = page => <AuthenticatedLayout children={page} />
export default Checkout;