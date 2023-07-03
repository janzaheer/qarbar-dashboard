<template>
    <Header/>
    <div class="container listingPage">
        <div class="border-bottom border-top p-2 sticky-top">
            <div class="row g-1">
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="search Community ot building ..."
                        aria-label="First name">
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="1">Buy</option>
                        <option value="2">Rent</option>
                        <option value="3">Commercial for Rent</option>
                        <option value="4">Commercial for Sale</option>
                    </select>
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
                        <option selected> Beds & Baths</option>
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
                        <option selected> More Filters</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col">
                    <button class="btn btn-danger">Find</button>
                </div>
            </div>
            <!-- <div class="d-flex my-2">
                <div class="form-check form-switch me-4">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"><img
                            src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;" alt="" /> Verified</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"><img
                            src="../../assets/tropyBadgeIcon/pngegg.png" style="height: 15px;" alt="" /> SuperAgent</label>
                </div>
            </div> -->
        </div>
        <div class="row g-0 mt-4">

            <div class="d-flex justify-content-between">
                <div>
                    <h6>Properties for sale in Turkiye</h6>
                    <p>123456 results <span class="badge rounded-pill text-bg-danger">2344 new</span></p>
                    <!-- <button class="btn btn-outline-info me-2"><img src="../../assets/icons/location.png"
                            style="width: 30px; height: 20px;" alt=""> Map view</button>
                    <button class="btn btn-outline-info">save Search</button> -->
                </div>
                <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="1">Featured</option>
                        <option value="2">Price (low)</option>
                        <option value="3">Price (high)</option>
                        <option value="4">Beds (latest)</option>
                        <option value="5">Beds (most)</option>
                        <option value="6">Delivery date (earliest)</option>
                        <option value="7">Delivery date (latest)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row g-2 my-2">
            <div class="col-md-9">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/bbcfe4e68a.marina.webp" class="img-fluid rounded-start h-100"
                                        alt="...">
                                    <div class="card-img-overlay">
                                        <!-- <div class="">
                                        <span class="badge text-bg-success card-title">
                                            <img src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;"
                                                alt="" /> VERIFIED</span>
                                    </div> -->
                                        <div>
                                            <span class="badge text-bg-secondary card-title">
                                                <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                    style="height: 15px;" alt=""> SUPERAGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body bg-white rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <!-- <div>
                                                <p>PREMIUM</p>
                                            </div>
                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt=""> -->
                                            <small class="text-body-secondary me-2">Last updated 3 mins ago</small>
                                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                                class="rounded-circle border border-2 border-primary p-1">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex ">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/phone.png" style="width: 30px; height: 20px;"
                                                    alt=""></button>
                                            <button class="btn btn-outline-info btn-sm mx-2"><img
                                                    src="../../assets/icons/email.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/whatsapp.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm mx-2">
                                                <img src="../../assets/icons/heart.png" style="width: 30px; height: 20px;"
                                                    alt="">
                                            </button>
                                        </div>
                                        <div>

                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-3 d-md-none d-lg-block">
                <div class="card text-dark">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                    <div class="card-img-overlay text-dark">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text text-wrap">This is a wider card with supporting text below as a natural lead-in
                            to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Enquire Now</small></p>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-start h-100"
                                        alt="...">
                                    <div class="card-img-overlay">
                                        <div class="">
                                            <span class="badge text-bg-success card-title">
                                                <img src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;"
                                                    alt="" /> VERIFIED</span>
                                        </div>
                                        <div>
                                            <span class="badge text-bg-secondary card-title">
                                                <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                    style="height: 15px;" alt=""> SUPERAGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body bg-white rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <!-- <span class="badge text-bg-warning card-title me-1">PREMIUM</span> -->
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <small class="text-body-secondary me-2">Last updated 3 mins ago</small>
                                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                                class="rounded-circle border border-2 border-primary p-1">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex ">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/phone.png" style="width: 30px; height: 20px;"
                                                    alt=""></button>
                                            <button class="btn btn-outline-info btn-sm mx-2"><img
                                                    src="../../assets/icons/email.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/whatsapp.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm mx-2">
                                                <img src="../../assets/icons/heart.png" style="width: 30px; height: 20px;"
                                                    alt="">
                                            </button>
                                        </div>
                                        <div>
                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-9">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-start h-100"
                                        alt="...">
                                    <div class="card-img-overlay">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">
                                                <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                    style="height: 15px;" alt=""> SUPERAGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body bg-white rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <small class="text-body-secondary me-2">Last updated 3 mins ago</small>
                                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                                class="rounded-circle border border-2 border-primary p-1">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex ">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/phone.png" style="width: 30px; height: 20px;"
                                                    alt=""></button>
                                            <button class="btn btn-outline-info btn-sm mx-2"><img
                                                    src="../../assets/icons/email.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/whatsapp.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm mx-2">
                                                <img src="../../assets/icons/heart.png" style="width: 30px; height: 20px;"
                                                    alt="">
                                            </button>
                                        </div>
                                        <div>

                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-9">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-start h-100"
                                        alt="...">
                                    <div class="card-img-overlay">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">
                                                <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                    style="height: 15px;" alt=""> SUPERAGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body bg-white rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <!-- <span class="badge text-bg-warning card-title me-1">PREMIUM</span> -->
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <small class="text-body-secondary me-2">Last updated 3 mins ago</small>
                                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                                class="rounded-circle border border-2 border-primary p-1">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex ">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/phone.png" style="width: 30px; height: 20px;"
                                                    alt=""></button>
                                            <button class="btn btn-outline-info btn-sm mx-2"><img
                                                    src="../../assets/icons/email.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/whatsapp.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm mx-2">
                                                <img src="../../assets/icons/heart.png" style="width: 30px; height: 20px;"
                                                    alt="">
                                            </button>
                                        </div>
                                        <div>
                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-9">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-start h-100"
                                        alt="...">
                                    <div class="card-img-overlay">
                                        <div class="">
                                            <span class="badge text-bg-success card-title">
                                                <img src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;"
                                                    alt="" /> VERIFIED</span>
                                        </div>
                                        <div>
                                            <span class="badge text-bg-secondary card-title">
                                                <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                    style="height: 15px;" alt=""> SUPERAGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body bg-white rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <small class="text-body-secondary me-2">Last updated 3 mins ago</small>
                                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                                class="rounded-circle border border-2 border-primary p-1">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex ">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/phone.png" style="width: 30px; height: 20px;"
                                                    alt=""></button>
                                            <button class="btn btn-outline-info btn-sm mx-2"><img
                                                    src="../../assets/icons/email.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm"><img
                                                    src="../../assets/icons/whatsapp.png" style="width: 30px; height: 20px;"
                                                    alt=""> </button>
                                            <button class="btn btn-outline-info btn-sm mx-2">
                                                <img src="../../assets/icons/heart.png" style="width: 30px; height: 20px;"
                                                    alt="">
                                            </button>
                                        </div>
                                        <div>

                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <!-- <div class="col-md-9">
                <div class="card text-dark listPageHover">
                    <div class="row g-0">
                        <div class="col-4">
                            <div class="card">
                                <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../../assets/homeImage/h2.jpg" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/homeImage/h1.jpg" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/homeImage/h5.jpg" class="d-block w-100 card-img"
                                                alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-img-overlay">
                                    <div class="">
                                        <span class="badge text-bg-success card-title">
                                            <img src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;"
                                                alt="" /> VERIFIED</span>
                                    </div>
                                    <div>
                                        <span class="badge text-bg-secondary card-title">
                                            <img src="../../assets/tropyBadgeIcon/pngegg.png" class="" style="height: 15px;"
                                                alt=""> SUPERAGENT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="">
                                <div class="card-body bg-white text-dark rounded">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">Apartment</span>
                                            <h6>200000 Rs</h6>
                                            <h6>1 Bed / Study / Address View / 1,043 SqFt</h6>
                                        </div>
                                        <div>
                                            <div>
                                                <p>PREMIUM</p>
                                            </div>
                                            <img src="../../assets/icons/bed.png" style="width: 60px; height: 60px;" alt="">
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> Badini,Nushki Balochistan
                                            Pakistan
                                        </p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bedroom</p>
                                        <p class="card-text mx-2"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                                        <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                style="width: 30px; height: 30px;" alt=""> 888 sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <div>
                                <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                    class="rounded-circle border border-2 border-primary p-1">
                                <small class="text-body-secondary ms-2">Last updated 30 mins ago</small>
                            </div>
                            <div class="mt-2">
                                <button class="btn btn-outline-info"><img src="../../assets/icons/phone.png"
                                        style="width: 30px; height: 20px;" alt="">call</button>
                                <button class="btn btn-outline-info mx-2"><img src="../../assets/icons/email.png"
                                        style="width: 30px; height: 20px;" alt=""> Email</button>
                                <button class="btn btn-outline-info"><img src="../../assets/icons/whatsapp.png"
                                        style="width: 30px; height: 25px;" alt=""> WhatsApp</button>
                                <button class="btn btn-outline-info mx-2"><img src="../../assets/icons/heart.png"
                                        style="width: 30px; height: 25px;" alt=""></button>
                                <button class="btn btn-outline-info"><img src="../../assets/icons/dots.png"
                                        style="width: 30px; height: 25px;" alt=""></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> -->
        </div>
        <div class="my-4">
            <button class="btn btn-primary me-2">Previous</button>
            <button class="btn btn-primary">Next</button>
        </div>
    </div>
    <Footer/>
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
export default {
    name: 'Listing',
    components:{
        Header,
        Footer,
    },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        const queryParams = new URLSearchParams(window.location.search)
        let category_name = queryParams.get("Buy");
        let rent_name = queryParams.get("Rent");
        let commercial_name = queryParams.get("Commercial");
        let newproject_name = queryParams.get("newProject");
        if (category_name) {
            console.log(category_name)
            console.log('-------------111111----------------------')
        }

        if (rent_name) {
            console.log(rent_name)
            console.log('-------------22222222222222----------------------')
        }

        if (commercial_name) {
            console.log(commercial_name)
            console.log('------------3333333----------------------')
        }

        if (newproject_name) {
            console.log(newproject_name)
            console.log('-----------444444----------------------')
        }

        // console.log(category_name)

        // console.log(category_name)
        // console.log(this.$route.params.id)

    }

}
</script>

<style>
.card-images {
    height: 50vh !important;
}

.listingPage {
    min-height: 100vh;
}

.listPageHover {
    cursor: pointer;
}

.listPageHover:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>