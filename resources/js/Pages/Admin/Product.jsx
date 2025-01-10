import AdminLayout from '../../Layouts/AdminLayout';

function Product() {
    return (
        <>
            <h1>Product Content</h1>
        </>
    );
}

Product.layout = page => <AdminLayout children={page} />
export default Product
