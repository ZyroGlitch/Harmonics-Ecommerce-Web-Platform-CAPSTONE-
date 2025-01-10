import AdminLayout from '../../Layouts/AdminLayout';

function Dashboard() {
    return (
        <>
            <h1>Dashboard Content</h1>
        </>
    );
}

Dashboard.layout = page => <AdminLayout children={page} />
export default Dashboard
