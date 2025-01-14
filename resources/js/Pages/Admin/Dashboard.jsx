import AdminLayout from '../../Layouts/AdminLayout';
import sales from '../../../../public/assets/sales.png';
import orders from '../../../../public/assets/orders.png';
import sold from '../../../../public/assets/sold.png';
import customers from '../../../../public/assets/customers.png';

function Dashboard() {
    return (
        <div className='h-100 py-5'>
            <div className="card shadow rounded border-0" style={{ background: '#E3FDFD' }}>
                <div className="card-body">
                    <h3>Today's Sales</h3>
                    <h6 className='mb-3'>Sales Summary</h6>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="card rounded shadow-sm" style={{ background: '#CBF1F5' }}>
                                <div className="card-body">
                                    <img src={sales} alt="sales" className="object-fit-cover mb-2" style={{ width: '45px', height: '45px' }} />

                                    <h5>P2000</h5>
                                    <h6 className='text-muted'>Total Sales</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="card rounded shadow-sm" style={{ background: '#CBF1F5' }}>
                                <div className="card-body">
                                    <img src={orders} alt="sales" className="object-fit-cover mb-2" style={{ width: '45px', height: '45px' }} />

                                    <h5>500</h5>
                                    <h6 className='text-muted'>Total Orders</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="card rounded shadow-sm" style={{ background: '#CBF1F5' }}>
                                <div className="card-body">
                                    <img src={sold} alt="sales" className="object-fit-cover mb-2" style={{ width: '45px', height: '45px' }} />

                                    <h5>1000</h5>
                                    <h6 className='text-muted'>Product Sold</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="card rounded shadow-sm" style={{ background: '#CBF1F5' }}>
                                <div className="card-body">
                                    <img src={customers} alt="sales" className="object-fit-cover mb-2" style={{ width: '45px', height: '45px' }} />

                                    <h5>100</h5>
                                    <h6 className='text-muted'>New Customer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

Dashboard.layout = page => <AdminLayout children={page} />
export default Dashboard
