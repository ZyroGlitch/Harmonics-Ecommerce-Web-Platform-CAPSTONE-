import AdminLayout from '../../Layouts/AdminLayout';

function SalesReport() {
    return (
        <>
            <h1>Sales Report Content</h1>
        </>
    );
}

SalesReport.layout = page => <AdminLayout children={page} />
export default SalesReport
