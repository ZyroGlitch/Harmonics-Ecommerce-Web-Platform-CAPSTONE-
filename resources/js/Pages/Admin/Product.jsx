import AdminLayout from '../../Layouts/AdminLayout';
import { router, useForm } from '@inertiajs/react';
import { useRoute } from '../../../../vendor/tightenco/ziggy';
import { useState } from 'react';

function Product() {
    const route = useRoute();

    // State for image preview
    const [imagePreview, setImagePreview] = useState(null);

    // Inertia Form Helper
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: 'Music',
        price: '',
        stock: '',
        description: '',
        image: '',
    });

    // Handle file selection and set image preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file); // Set the file to the Inertia form

        if (file) {
            setImagePreview(URL.createObjectURL(file)); // Generate preview URL
        } else {
            setImagePreview(null); // Reset preview if no file is selected
        }
    };

    function submit(e) {
        e.preventDefault();

        // Submit the form data to the backend
        post(route('admin.productUpload'), {
            onSuccess() {
                reset();
            }
        });
    }


    return (
        <div className="h-100 p-3" style={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'hidden' }}>
            <h3 className="mb-3">Product Page</h3>

            <form onSubmit={submit}>
                <div className="row justify-content-between">
                    <div className="col-lg-7 col-md-7">
                        <div className="card rounded shadow border-0">
                            {/* <div className='px-3' style={{ maxHeight: '450px', overflowY: 'auto', overflowX: 'hidden' }}> */}
                            <div className="card-body">

                                {/* Other form fields */}
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

                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label fw-semibold">
                                        Category
                                    </label>
                                    <select class="form-select shadow-sm" id='category'
                                        value={data.category}
                                        onChange={(e) => { setData('category', e.target.value) }}
                                    >
                                        <option value="Music">Music</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Fitness">Fitness</option>
                                    </select>

                                    {
                                        errors.category && <div className="text-danger">{errors.category}</div>
                                    }
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
                        {/* </div> */}
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="card shadow rounded">
                            <div className="card-body">
                                <label htmlFor="file" className="form-label fw-semibold">
                                    Upload Product Image
                                </label>

                                {/* Image Preview */}
                                {imagePreview && (
                                    <div className="text-center mb-3">
                                        <img
                                            src={imagePreview}
                                            alt="Preview Image"
                                            className="object-fit-cover rounded"
                                            style={{ width: '200px', height: '200px' }}
                                        />
                                    </div>
                                )}

                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={handleImageChange}
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
