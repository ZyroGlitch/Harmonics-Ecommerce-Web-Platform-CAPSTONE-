import AdminLayout from '../../Layouts/AdminLayout';

function Users() {
    return (
        <>
            <h1>Users Content</h1>
        </>
    );
}

Users.layout = page => <AdminLayout children={page} />
export default Users
