<template>
    <Header/>
    <div class="container newProjectBg">
        <div class="border-bottom border-top p-2 sticky-top">
            <div class="row g-1">
                <div class="col">
                    <input type="text" class="form-control" placeholder="City, community or buildings ..." aria-label="First name">
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Property type</option>
                        <option value="1">Apartment</option>
                        <option value="2">VIlla</option>
                        <option value="3">Penthhouse</option>
                        <option value="4">Townhouse</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Beds</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Price</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Property Status</option>
                        <option value="1">Upcoming</option>
                        <option value="2">Under construction</option>
                        <option value="3">Completed</option>
                    </select>
                </div>
                <div class="col">
                    <button class="btn btn-danger">Find</button>
                </div>
            </div>
        </div>
        <h3 class="my-2">New Project in UAE</h3>
        <div class="d-flex justify-content-between my-3">
            <div>
                <h6>700 Projects</h6>
            </div>
            <div>
                <select class="form-select" aria-label="Default select example">
                    <option selected value="1">Delivery date (latest)</option>
                    <option value="2">Delivery date (earliest)</option>
                    <option value="3">Price (low)</option>
                    <option value="4">Price (high)</option>
                </select>
            </div>
        </div>
        <div class="my-2">
            <button class="btn btn-secondary">Dubai (611 projects)</button>
            <button class="btn btn-secondary mx-1">Abu DHabi (610 projects)</button>
            <button class="btn btn-secondary">Sharjah (711 projects)</button>
            <button class="btn btn-secondary mx-1">Oman (311 projects)</button>
            <button class="btn btn-secondary">Dubai (111 projects)</button>
        </div>
        <div class="row">
            <div class="col-12 mt-4">
                <div class="card text-dark">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card">
                                <!-- <img src="../../assets/homeImage/h1.jpg" class="card-img" alt="..."> -->
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">UPCOMING</span>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Floor plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                                        width="643" height="425" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-white text-dark rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="badge text-bg-secondary card-title">Delivery Date Q2 2028</span>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="card-text"><b>Project</b> Sharif Khan Badini City</p>
                                    </div>
                                    <div>
                                        <p class="card-text me-5"><b>Developer</b> Atif badini Properties Co.LLC</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/bed.png"
                                            style="width: 30px; height: 30px;" alt=""> 1-5 Beds</p>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/location.png"
                                            style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan Pakistan
                                    </p>
                                </div>

                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="card text-dark">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card">
                                <!-- <img src="../../assets/homeImage/h1.jpg" class="card-img" alt="..."> -->
                                <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">UNDER CONSTRUCTION</span>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Floor plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6895.264590686442!2d66.98384974553706!3d30.219040549344413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e06de2801c53%3A0xf16eb24a0cd722ea!2sJinnah%20Town%2C%20Quetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686141220079!5m2!1sen!2s"
                                        width="643" height="425" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-white text-dark rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="badge text-bg-secondary card-title">Delivery Date Q3 2030</span>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="card-text"><b>Project</b> Jinnah City</p>
                                    </div>
                                    <div>
                                        <p class="card-text me-5"><b>Developer</b> Ali AKbar Properties Co.LLC</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/bed.png"
                                            style="width: 30px; height: 30px;" alt=""> 1-6 Beds</p>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/location.png"
                                            style="width: 30px; height: 20px;" alt=""> Jinnah Town,Quetta Balochistan
                                        Pakistan
                                    </p>
                                </div>

                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="card text-dark">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card">
                                <!-- <img src="../../assets/homeImage/h1.jpg" class="card-img" alt="..."> -->
                                <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">UPCOMING</span>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Floor plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4124.810732676322!2d74.1742659554352!3d31.36663219163254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff9a30fa362d%3A0x528615a7981ce611!2sBahria%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686141069878!5m2!1sen!2s"
                                        width="643" height="425" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-white text-dark rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="badge text-bg-secondary card-title">Delivery Date Q4 2029</span>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="card-text"><b>Project</b> Bahria City</p>
                                    </div>
                                    <div>
                                        <p class="card-text me-5"><b>Developer</b> Shehroz Properties Co.LLC</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/bed.png"
                                            style="width: 30px; height: 30px;" alt=""> 1-5 Beds</p>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/location.png"
                                            style="width: 30px; height: 20px;" alt=""> Bahria Town, Lahore Punjab Pakistan
                                    </p>
                                </div>

                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 my-4">
                <div class="card text-dark">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card">
                                <!-- <img src="../../assets/homeImage/h1.jpg" class="card-img" alt="..."> -->
                                <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" style="height: 430px;" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">UNDER CONSTRUCTION</span>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Floor plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27257.479820230692!2d74.23193532670302!3d31.35387435457201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919aa91e49da6af%3A0xc134fd8552b3464d!2sLake%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686141160118!5m2!1sen!2s"
                                        width="643" height="425" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-white text-dark rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="badge text-bg-secondary card-title">Delivery Date Q2 2031</span>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="card-text"><b>Project</b> Lake City</p>
                                    </div>
                                    <div>
                                        <p class="card-text me-5"><b>Developer</b> Shaid kha kan Properties Co.LLC</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/bed.png"
                                            style="width: 30px; height: 30px;" alt=""> 1-8 Beds</p>
                                </div>
                                <div>
                                    <p class="card-text"><img src="../../assets/icons/location.png"
                                            style="width: 30px; height: 20px;" alt=""> Lake City,Lahore Punjab Pakistan
                                    </p>
                                </div>

                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-4">
                <button class="btn btn-primary me-2">Previous</button>
                <button class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Floor plan</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <div>
                        <h3>Level 10-18 Unit 1&6</h3>
                        <img src="../../assets/floor/floor.webp" class="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style>
.newProjectBg {
    min-height: 100vh;
}
</style>

<script setup>
import Header from '../../components/common/header/Header.vue';
import Footer from '../../components/common/footer/Footer.vue'
</script>