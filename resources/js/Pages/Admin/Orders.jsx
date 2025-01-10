import AdminLayout from '../../Layouts/AdminLayout';

function Orders() {
    return (
        <>
            <h1>Orders Content</h1>
        </>
    );
}

Orders.layout = page => <AdminLayout children={page} />
export default Orders
