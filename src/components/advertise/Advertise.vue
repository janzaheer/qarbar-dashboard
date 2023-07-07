<template>
    <div class="container">
        <div class="row g-2">
            <div class="col-6 col-md-6 col-lg-4">
                <div class="card text-dark">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" height="300px" class="card-img" alt="...">
                    <div class="card-img-overlay text-dark">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text text-wrap">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Enquire Now</small></p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-6 col-lg-4">
                <div class="card text-dark">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" height="300px" class="card-img" alt="...">
                    <div class="card-img-overlay text-dark">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Enquire Now</small></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card text-white">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img agentHubImg" style="height: 300px;" alt="...">
                    <div class="card-img-overlay p-md-5 p-lg-3">
                        <h5 class="card-title">Agent Hub:</h5>
                        <h3 class="card-text text-wrap">List your property with us.</h3>
                        <div class="mt-3">
                            <RouterLink to="/agentsList" class="btn btn-light text-danger">Get Started</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4 g-2">
            <div class="col-12 col-md-12 col-lg-8">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-8 col-md-8 bg-dark text-white rounded">
                            <div class="card-body ">
                                <h5 class="card-title text-wrap">Agent Hub: Grow your audience, boost your brand</h5>
                                <p class="card-text text-wrap">For real estate agents who want to make the most out of their presence
                                    on Qaarbar.</p>
                                <RouterLink to="/agentpanel" class="btn btn-light text-info">Go To Agent Hub</RouterLink>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-start h-100" alt="...">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center d-sm-none d-md-block">
                    <p class="me-2">Follow us</p>
                    <button class="btn btn-primary">facebook</button>
                    <button class="btn btn-danger mx-1">instagram</button>
                    <button class="btn btn-info me-1">twitter</button>
                    <button class="btn btn-success">linkdin</button>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 d-sm-none d-md-block">
                <div class="card text-dark">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" height="300px" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">Market Watch 2023.</h5>
                        <p class="card-text">Real Estate Report for Abu Dhabi and Dubai.</p>
                        <p class="card-text"><small>Download Now</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style>
@media only screen and (max-width: 990px) {
    .agentHubImg{
        height: 200px !important;
    }
}
@media only screen and (max-width: 720px) {
    .agentHubImg{
        height: 200px !important;
    }
}
</style>