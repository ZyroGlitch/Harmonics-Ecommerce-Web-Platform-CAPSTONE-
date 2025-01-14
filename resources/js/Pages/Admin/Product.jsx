import AdminLayout from '../../Layouts/AdminLayout';
import { router, useForm } from '@inertiajs/react';
import { useRoute } from '../../../../vendor/tightenco/ziggy';

function Product() {
    const route = useRoute();

    // Inertia Form Helper
    const { data, setData, post, processing, errors } = useForm({
        name: null,
        price: null,
        stock: null,
        description: null,
        image: null,
    });

    // const setImageValue = (e) => {
    //     setData('image', e.target.files[0]); // Correctly set file input using `setData`
    // };

    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route('admin.productUpload'), {
    //         //     // Specify options for multipart form submission
    //         //     forceFormData: true,
    //         //     onSuccess: () => {
    //         //         console.log('Product uploaded successfully!');
    //         //     },
    //         //     onError: (error) => {
    //         //         console.error('Failed to upload product:', error);
    //         //     },
    //         // });
    //     };

    function submit(e) {
        e.preventDefault();
        post(route('admin.productUpload'));
    }

    return (
        <div className="h-100">
            <h3 className="mb-3">Product Page</h3>

            <form onSubmit={submit}>
                <div className="row justify-content-between">
                    <div className="col-lg-7 col-md-7">
                        <div className="card rounded shadow border-0">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        id="name"
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>

                                <div className="row justify-content-between mb-3">
                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="price" className="form-label fw-semibold">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control shadow-sm w-100"
                                            id="price"
                                            value={data.price}
                                            onChange={(e) => setData('price', e.target.value)}
                                        />
                                        {errors.price && <div className="text-danger">{errors.price}</div>}
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <label htmlFor="stock" className="form-label fw-semibold">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control shadow-sm"
                                            id="stock"
                                            value={data.stock}
                                            onChange={(e) => setData('stock', e.target.value)}
                                        />
                                        {errors.stock && <div className="text-danger">{errors.stock}</div>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="description" className="form-label fw-semibold">
                                        Product Description
                                    </label>
                                    <textarea
                                        className="form-control shadow-sm"
                                        id="description"
                                        rows="3"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                    ></textarea>
                                    {errors.description && (
                                        <div className="text-danger">{errors.description}</div>
                                    )}
                                </div>

                                <div className="d-grid">
                                    <button type="submit" disabled={processing} className="btn btn-primary">
                                        Upload Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="card shadow rounded">
                            <div className="card-body">
                                <label htmlFor="file" className="form-label fw-semibold">
                                    Upload Product Image
                                </label>
                                <input
                                    type="file"
                                    className='form-control'
                                    onChange={e => setData('image', e.target.files[0])}
                                />
                                {errors.image && (
                                    <div className="text-danger">{errors.image}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

Product.layout = (page) => <AdminLayout children={page} />;
export default Product;
