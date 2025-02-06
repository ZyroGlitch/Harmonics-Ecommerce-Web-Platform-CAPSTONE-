import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { useForm } from '@inertiajs/react'
import { useRoute } from 'routes-ziggy'
import profile from '../../../public/assets/profile.jpg'

function Profile({ user_info }) {
    console.log(user_info);

    const route = useRoute();

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: user_info[0].firstname,
        lastname: user_info[0].lastname,
        phone: user_info[0].phone,
        email: user_info[0].email,
        address: user_info[0].address
    });

    function submit(e) {
        e.preventDefault();
        post(route('customer.profile_update'), {
            onSuccess() {
                reset();
            }
        });
    }

    return (
        <div className="container h-100 py-5">
            <div className="row justify-content-center align-items-stretch">
                <div className="col-lg-7 col-md-7">
                    <div className="card shadow rounded border-0">
                        <div className="card-header bg-primary text-light">
                            <h3>My Profile</h3>
                            <p>Manage and protect your account</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="row justify-content-between align-items-center mb-3">
                                    <div className='col-lg-6 col-md-6'>
                                        <label htmlFor="firstname" className="form-label ">Firstname</label>
                                        <input
                                            type="text"
                                            className="form-control shadow-sm rounded-pill"
                                            id='firstname'
                                            value={data.firstname}
                                            onChange={(e) => { setData('firstname', e.target.value) }}
                                        />
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <label htmlFor="lastname" className="form-label">Lastname</label>
                                        <input
                                            type="text"
                                            className="form-control shadow-sm rounded-pill"
                                            id='lastname'
                                            value={data.lastname}
                                            onChange={(e) => { setData('lastname', e.target.value) }}
                                        />
                                    </div>
                                </div>

                                <div className="row justify-content-between align-items-center mb-3">
                                    <div className='col-lg-6 col-md-6'>
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control shadow-sm rounded-pill"
                                            id='phone'
                                            value={data.phone}
                                            onChange={(e) => { setData('phone', e.target.value) }}
                                        />
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control shadow-sm rounded-pill"
                                            id='email'
                                            value={data.email}
                                            onChange={(e) => { setData('email', e.target.value) }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label ">Address</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm rounded-pill"
                                        id='address'
                                        value={data.address}
                                        onChange={(e) => { setData('address', e.target.value) }}
                                    />
                                </div>

                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary rounded-pill shadow"
                                        disabled={processing}
                                    >Update Information</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="card shadow rounded border-0">
                        <div className="card-body">
                            <div className="text-center mb-5">
                                <img src={profile} alt="profile"
                                    className="object-fit-contain rounded-pill"
                                    style={{ width: '200px', height: '200px' }} />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="upload" className="form-label">Upload Profile</label>
                                <input type="file" className="form-control shadow-sm" id='upload' />
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary rounded-pill">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Profile.layout = page => <AuthenticatedLayout children={page} />
export default Profile
