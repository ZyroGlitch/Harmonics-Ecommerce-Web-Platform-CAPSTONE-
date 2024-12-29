import logo from '../../../public/assets/logo.png';
import image1 from '../../../public/assets/image1.png';
import carousel1 from '../../../public/assets/carousel1.png';
import carousel2 from '../../../public/assets/carousel2.png';
import carousel3 from '../../../public/assets/carousel3.png';
import about from '../../../public/assets/about.jpg';
import mission from '../../../public/assets/mission.jpg';
import { FaPhone, FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { Link } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">
                        <img src={logo} alt="Logo" className='object-fit-contain rounded-pill me-2' style={{ width: '40px', height: '40px' }} />
                        Harmonics
                    </a>

                    {/* Responsive Humburger Menu */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav fw-bold fs-6 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#shop">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACT</a>
                            </li>
                        </ul>

                        <Link href="/customers/create" type='button' className="btn btn-outline-dark login-btn">LOGIN</Link>
                    </div>
                </div>
            </nav>

            <section className='container vh-100' id="home">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-lg-6 col-md-6">
                        <div className="text-center">
                            <img src={image1} alt="image" className='object-fit-contain rounded-xl' style={{ width: '480px', height: '480px' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div>
                            <h2>Keep Fit and Strum the Beat of your Heart String</h2>
                            <p className='fs-5'>Shop the best instruments and gear of Harmonics today.</p>

                            <div className="d-flex gap-3">
                                <a href="#" className="btn btn-outline-dark rounded-pill" style={{ width: '150px' }}>Learn More</a>
                                <a href="#" className="btn btn-dark rounded-pill" style={{ width: '150px' }}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-secondary d-flex justify-content-evenly align-items-center text-light' style={{ height: '64px' }}>
                <h4>Yamaha</h4>
                <h4>Fenders</h4>
                <h4>Pearl</h4>
                <h4>Spalding</h4>
                <h4>Under Armor</h4>
                <h4>Nike</h4>
                <h4>Adidas</h4>
            </section>

            <section className="container py-5 vh-100" id='shop'>
                <h2>Best Sellers</h2>
                <h4 className='mb-5'>Get Yours Now</h4>

                <div className="">
                    <div id="responsiveCarousel" className="carousel slide" data-bs-ride="carousel">
                        {/* Indicators */}
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#responsiveCarousel"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    backgroundColor: "black", // Black color for clarity
                                    borderRadius: "50%", // Circular dots
                                    border: "2px solid white", // Border for contrast
                                }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#responsiveCarousel"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    backgroundColor: "black",
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#responsiveCarousel"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    backgroundColor: "black",
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                }}
                            ></button>
                        </div>


                        {/* Carousel Items */}
                        <div className="carousel-inner" style={{ height: '425px' }}>
                            {/* 1st Carousel Items */}
                            <div className="carousel-item active">
                                <div className="row items-stretch">
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel1}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title">Guitar</h5>
                                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, iusto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel2}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Barbell</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel3}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Basketball</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd Carousel Items */}
                            <div className="carousel-item ">
                                <div className="row items-stretch">
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel1}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title">Guitar</h5>
                                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, iusto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel2}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Barbell</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel3}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Basketball</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3rd Carousel Items */}
                            <div className="carousel-item ">
                                <div className="row items-stretch">
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel1}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title">Guitar</h5>
                                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, iusto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel2}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Barbell</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="card shadow">
                                            <div className="text-center">
                                                <img
                                                    src={carousel3}
                                                    className="object-fit-contain"
                                                    alt="Carousel Image" style={{ width: '250px', height: '250px' }}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Basketball</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#responsiveCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{
                                    filter: "invert(1)", // Makes the arrow black
                                }}
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#responsiveCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{
                                    filter: "invert(1)", // Makes the arrow black
                                }}
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="vh-100 py-5 bg-secondary" id='about'>
                <div className="container h-100">
                    <div className="row justify-content-evenly align-items-center h-100">
                        <div className="col-lg-6 col-md-6 text-light">
                            <h2 className='mb-3'>ABOUT US</h2>

                            <p>Founded in year of 1996, our business was created to bring together the worlds of sports and music through high-quality gear.Starting as a small venture, we quickly grew by focusing on delivering durable and affordable products that meet the needs of both athletes and musicians.Today, we proudly offer a diverse range of sports equipment and musical instruments,serving customers worldwide. Our commitment to quality and customer satisfaction continues to drive our growth and success.</p>
                        </div>
                        <div className="col-lg-5 col-md-6 text-center">
                            <img src={about} alt="about us image" className="object-fit-contain rounded-lg" style={{ width: '500px', height: '500px' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="vh-100 py-5 bg-light">
                <div className="container h-100">
                    <div className="row justify-content-evenly align-items-center h-100">
                        <div className="col-lg-6 col-md-6">
                            <h2 className='mb-3'>MISSION</h2>

                            <p>Our mission is simple: to provide top-tier products and exceptional service for every customer.We believe in the harmony between music and sports both expressions of passion,creativity, and discipline and we strive to be the go to shop for people who want to embrace both sides of their talents.</p>
                        </div>
                        <div className="col-lg-5 col-md-6 text-center">
                            <img src={mission} alt="about us image" className="object-fit-contain rounded-lg" style={{ width: '500px', height: '500px' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="vh-100 py-5 bg-secondary text-light">
                <div className="container h-100">
                    <div className="row justify-content-center h-100">
                        <h2 className=''>Frequently Asked Questions</h2>
                        <div className="col-lg-6 col-md-6">
                            <div class="accordion accordion-flush" id="firstAccordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstFlush1" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How can I place an order?
                                        </button>
                                    </h2>
                                    <div id="firstFlush1" class="accordion-collapse collapse" data-bs-parent="#firstAccordion">
                                        <div class="accordion-body text-justify">
                                            Placing an order is simple. To get started, you must first create an account. Once your account is set up, browse our products, add your desired items to the cart, and proceed to checkout. Enter your shipping details and payment information to complete the purchase. After your order is confirmed, you will receive a confirmation email.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstFlush2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What payment methods do you accept?
                                        </button>
                                    </h2>
                                    <div id="firstFlush2" class="accordion-collapse collapse" data-bs-parent="#firstAccordion">
                                        <div class="accordion-body text-justify">
                                            We accept the following payment methods: cash, GCash, PayMaya, and Palawan Pera Padala. You can choose your preferred option during checkout, and detailed instructions will be provided to complete your payment.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstFlush3" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How long does delivery take?
                                        </button>
                                    </h2>
                                    <div id="firstFlush3" class="accordion-collapse collapse" data-bs-parent="#firstAccordion">
                                        <div class="accordion-body text-justify">
                                            Delivery times depend on your location and the shipping method selected. Standard shipping typically takes 3–7 business days, while express options are faster. During checkout, estimated delivery times will be displayed.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#firstFlush4" aria-expanded="false" aria-controls="flush-collapseFour">
                                            How can I track my order?
                                        </button>
                                    </h2>
                                    <div id="firstFlush4" class="accordion-collapse collapse" data-bs-parent="#firstAccordion">
                                        <div class="accordion-body text-justify">
                                            Once your order is shipped, you can track it directly through your account on our website. Log in to your account, go to the "My Orders" section, and select the order you wish to track. The tracking details will be displayed there.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div class="accordion accordion-flush" id="secondAccordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondflush1" aria-expanded="false" aria-controls="flush-collapseOne">
                                            What is your return policy?
                                        </button>
                                    </h2>
                                    <div id="secondflush1" class="accordion-collapse collapse" data-bs-parent="#secondAccordion">
                                        <div class="accordion-body text-justify">
                                            We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please visit our Returns & Refunds page to start a return request.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondflush2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What should I do if my order arrives damaged?
                                        </button>
                                    </h2>
                                    <div id="secondflush2" class="accordion-collapse collapse" data-bs-parent="#secondAccordion">
                                        <div class="accordion-body text-justify">
                                            If your order arrives damaged or defective, please contact our customer support team immediately with photos of the item and your order number. We will arrange for a replacement or refund.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondflush3" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I reset my password?
                                        </button>
                                    </h2>
                                    <div id="secondflush3" class="accordion-collapse collapse" data-bs-parent="#secondAccordion">
                                        <div class="accordion-body text-justify">
                                            If you forgot your password, click the Forgot Password link on the login page. Enter your registered email address, and we’ll send instructions to reset your password.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondflush4" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Do you ship internationally?
                                        </button>
                                    </h2>
                                    <div id="secondflush4" class="accordion-collapse collapse" data-bs-parent="#secondAccordion">
                                        <div class="accordion-body text-justify">
                                            No, we currently ship only within the Philippines. Shipping fees and delivery times may vary depending on your location. During checkout, you’ll see the available shipping options for your area.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vh-100 py-5 bg-light" id='contact'>
                <div className="container h-100">
                    <div className="row justify-content-around h-100">
                        <h2 className='mb-5'>Contact Us</h2>
                        <div className="col-lg-5 col-md-5 d-flex justify-content-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.423289919317!2d125.61305387373395!3d7.076825016488685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d2158dc90d5%3A0x54ad2ae082c5865a!2sFEELMORE%20DAVAO%20CITY!5e0!3m2!1sen!2sph!4v1735343444863!5m2!1sen!2sph"
                                width="400"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h2>Get in Touch</h2>
                            <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus id suscipit optio animi beatae expedita voluptates inventore ex, enim minus mollitia perspiciatis accusamus modi sapiente adipisci aut consequuntur neque ab.</p>

                            <p>
                                <FaPhone className='me-2' />
                                +639615607681
                            </p>
                            <p>
                                <FaLocationDot className='me-2' />
                                648 Sta. Ana Ave, Poblacion District, Davao City
                            </p>
                            <a href="https://www.facebook.com/feelmore.davao" className='text-light' style={{ textDecoration: 'none' }}>
                                <FaSquareFacebook className='me-2' />
                                feelmore.davao
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 h-1/2 bg-secondary text-light">
                <div className="container h-100">
                    <div className="row justify-content-center  h-100">
                        <div className="col-lg-4 col-md-4">
                            <h5>Branches</h5>
                            <p>648 Sta. Ana Ave, Poblacion District, Davao City</p>
                            <p>Sm Center Muntinlupa</p>
                            <p>Feelmore Iloilo</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h5>Get Started</h5>
                            <p>
                                <a href="#" className='text-light' style={{ textDecoration: 'none' }}>Create an Account</a>
                            </p>

                            <p>
                                <a href="#" className='text-light' style={{ textDecoration: 'none' }}>Frequently Asked Questions</a>
                            </p>

                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h5>Links</h5>
                            <p>
                                <a href="#home" className='text-light' style={{ textDecoration: 'none' }}>Home</a>
                            </p>
                            <p>
                                <a href="#shop" className='text-light' style={{ textDecoration: 'none' }}>Shop</a>
                            </p>
                            <p>
                                <a href="#about" className='text-light' style={{ textDecoration: 'none' }}>About</a>
                            </p>
                            <p>
                                <a href="#contact" className='text-light' style={{ textDecoration: 'none' }}>Contact</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}