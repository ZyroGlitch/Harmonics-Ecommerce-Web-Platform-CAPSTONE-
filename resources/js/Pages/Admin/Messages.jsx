import AdminLayout from '../../Layouts/AdminLayout';

function Messages() {
    return (
        <>
            <h1>Messages Content</h1>
        </>
    );
}

Messages.layout = page => <AdminLayout children={page} />
export default Messages
