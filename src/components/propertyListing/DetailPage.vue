<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue'
import { RouterLink } from 'vue-router';
export default {
    name: 'DetailPage',
    components: {
        Header,
        Footer,
        // VueGallerySlideshow
    },
//     data: {
//     images: [
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//       'https://github.com/mdo.png',
//     ],
//     index: null
//   }
};
</script>

<style>
.detailPage {
    min-height: 100vh;
}
</style>

<template>
    <Header />
    <div class="container detailPage">
        <!-- <div class="my-5">
            <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </div> -->
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card">
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/bbcfe4e68a.marina.webp" class="card-img-top" style="height: 600px;" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Overview</h5>
                        <h6 class="card-title">APARTMENT FOR SALE IN SKYCOURTS TOWER F, SKYCOURTS TOWERS</h6>
                        <div class="d-flex align-items-center">
                            <p class="card-text"><img src="../../assets/icons/bed.png" style="width: 30px; height: 30px;"
                                    alt=""> 5 Bedroom</p>
                            <p class="card-text mx-5"><img src="../../assets/icons/bed.png"
                                    style="width: 30px; height: 30px;" alt=""> 5 Bathrooms</p>
                            <p class="card-text"><img src="../../assets/icons/sqft.png" style="width: 30px; height: 30px;"
                                    alt=""> 888 sqft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-2">
            <div class="col-8">
                <div class="card text-bg-light mb-3">
                    <div class="card-header">Details</div>
                    <div class="card-body">
                        <div class="row g-1">
                            <div class="col-6">
                                <div class="card-body">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Type</th>
                                                <th scope="col">House</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">price</th>
                                                <td>77 Crore PKR</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Bath's</th>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Location</th>
                                                <td>Nushki, Balochistan</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card-body">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Area</th>
                                                <th scope="col">990 Sqft</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Bed's</th>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Listed</th>
                                                <td>5 hours ago</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Purpose</th>
                                                <td>For sale</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <h5>Description</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam inventore itaque eveniet
                            cupiditate tempora, a tenetur, animi fugiat at, labore dolore. Quos asperiores tempore, culpa
                            eos totam ullam delectus! Esse ullam, excepturi possimus distinctio eum minus quam ipsam nam
                            fuga deleniti quia, voluptatem explicabo, doloremque eius hic sit eligendi enim!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi, culpa expedita deserunt
                            corporis illum repellat ducimus perferendis asperiores aliquam.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card mb-3 sticky-top">
                        <div class="card-header">
                            <h5 class="card-title">PKR 7.7 Core</h5>
                        </div>
                        <div class="card-body text-center">
                            <button class="btn btn-outline-success me-2">Call</button>
                            <button class="btn btn-outline-success">WhatsApp</button>
                            <div class="mt-2">
                                <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                    class="rounded-circle border border-2 border-primary p-1">
                                <p class="card-text">Atif Badini usually responds.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header">Amenities</div>
                    <div class="card-body">
                        <h5 class="card-title">Amenities</h5>
                        <div class="d-flex justify-content-around">
                            <div>
                                <p>Unfurnished</p>
                                <p>Built in Wardrobes</p>
                                <p>Children's Play Area</p>
                                <p>Covered Parking</p>
                                <p>Security</p>
                                <p>Shared Pool</p>
                            </div>
                            <div>
                                <p>Balcony</p>
                                <p>Central A/C</p>
                                <p>Children's Pool</p>
                                <p>Pets Allowed</p>
                                <p> Shared Gym</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-2 my-4">
            <div class="col-8">
                <div class="card">
                    <div class="card-header"><img src="../../assets/icons/location.png" height="30" alt=""> Location</div>
                    <div class="card-body">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                            width="830" height="330" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
            <div class="col-8">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card">
                        <div class="card-header">Agent Info</div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="me-4">
                                    <img src="https://github.com/mdo.png" alt="" width="200" height="200"
                                        class="rounded-circle border border-2 border-primary p-1">
                                </div>
                                <div>
                                    <h5 class="card-title text-muted">Atif Badini</h5>
                                    <p class="card-text text-wrap">Sales and Leasing Consultant at Edwards and Towers Real
                                        Estate Brokers
                                        (304 properties) </p>
                                    <p class="card-text">Speaks English, Urdu, Balochi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">Prices & Trends</div>
                    <div class="card-body">
                        <h6 class="card-title">6 bedrooms villas sold in Aseel and Arabian Ranches</h6>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In possimus facilis
                            odit sed, eaque inventore dolor consequuntur cum beatae vero.</p>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In possimus facilis
                            odit sed, eaque inventore dolor consequuntur cum beatae vero.</p>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In possimus facilis
                            odit sed, eaque inventore dolor consequuntur cum beatae vero.</p>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In possimus facilis
                            odit sed, eaque inventore dolor consequuntur cum beatae vero.</p>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In possimus facilis
                            odit sed, eaque inventore dolor consequuntur cum beatae vero.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="">
            <div class='container payment-method mt-5 w-50'>
                <div class='payment-box p-5 bg-white rounded shadow'>
                    <h3 class='mb-3'>Select Payment Method Please</h3>
                    <div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                    aria-selected="true">
                                    trrrtytryrty
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">gggggggg</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact-tab-pane" type="button" role="tab"
                                    aria-controls="contact-tab-pane" aria-selected="false">rttrtrttr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab"
                                    data-bs-target="#disabled-tab-pane" type="button" role="tab"
                                    aria-controls="disabled-tab-pane" aria-selected="false">
                                    hhhhhh
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content mt-4" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabIndex={0}>
                                <p>You can pay cash to your courier when you received the good at your doorstep.</p>
                                <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabIndex={0}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni!</p>
                                <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                            </div>
                            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                                tabIndex={0}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur provident dolor
                                    animi.</p>
                                <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                            </div>
                            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                                tabIndex={0}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!</p>
                                <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div> -->
    </div>
    <Footer />
</template>