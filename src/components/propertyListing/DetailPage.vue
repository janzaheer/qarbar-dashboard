<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow';
// import VuePictureSwipe from 'vue3-picture-swipe';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import { GoogleMap, Marker } from "vue3-google-map";
export default {
    name: 'DetailPage',
    components: {
        Header,
        Footer,
        GoogleMap, Marker
        // VuePictureSwipe
        // VueGallerySlideshow
    },
    created: function () {
        this.moment = moment;
    },
    setup() {
        const center = { lat: 30.188650, lng: -82.637150 };
        const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };

        return { center, markerOptions };
    },
    data() {
        return {
            productDetail: [],
            singleImage: [],
            ThumbnailImage: this.productDetail?.media && this.productDetail?.media[0].image_url,
        }
    },
    methods: {
        async getSingleProduct() {
            try {
                let res = await axios.get('http://13.127.231.16/api/v1/properties/' + this.$route.params.id + '/detail_property/')
                this.productDetail = res.data
                // this.image = res.data.media[0].image_url
                this.singleImage = res.data.media
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        },
        selectimage(i) {
            this.ThumbnailImage = i
            console.log('imageSelect', this.ThumbnailImage = i)
        },
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getSingleProduct();
    }
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
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card shadow-sm">
                    <img :src="ThumbnailImage ? ThumbnailImage.image_url : productDetail?.media && productDetail?.media[0]?.image_url"
                        class="card-img-top" style="height: 600px;" alt="...">
                    <div class="card-body">
                        <div class="d-flex justify-content-center mt-1">
                            <div class="thumbnail text-center mx-1" v-for="item in singleImage">
                                <img :src="item.image_url" class="img-thumbnail" style="height: 50px; width: 60px;"
                                    v-on:click="selectimage(item)" />
                            </div>
                        </div>
                        <h5 class="card-title">Overview</h5>
                        <h6 class="card-title">APARTMENT FOR SALE IN SKYCOURTS TOWER F, SKYCOURTS TOWERS</h6>
                        <div class="d-flex align-items-center">
                            <p class="card-text"><i class="fa-sharp fa-solid fa-bed"></i> {{ productDetail?.bedrooms }}
                                Bedroom</p>
                            <p class="card-text mx-5"> <i class="fa-solid fa-bath"></i> {{ productDetail.bathrooms }}
                                Bathrooms</p>
                            <p class="card-text"><img src="../../assets/icons/sqft.png" style="width: 30px; height: 30px;"
                                    alt=""> {{ productDetail.size_sqf }} sqft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-2">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-12">
                        <div class="card text-bg-light mb-3 shadow-sm">
                            <div class="card-header">Details</div>
                            <div class="card-body">
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="card-body">
                                            <table class="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">{{ productDetail.property_type }}</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">price</th>
                                                        <td>{{ productDetail?.total_price }} PKR</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bath's</th>
                                                        <td>{{ productDetail.bathrooms }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location</th>
                                                        <td>{{ productDetail?.area?.area }}</td>
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
                                                        <th scope="col">{{ productDetail.size_sqf }} Sqft</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Bed's</th>
                                                        <td>{{ productDetail.bedrooms }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Listed</th>
                                                        <!-- <td>{{ moment(productDetail?.updated_at).startOf(productDetail?.updated_at).fromNow()}}</td> -->
                                                        <td>{{ moment(productDetail?.created_at).startOf('hour').fromNow()
                                                        }} </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Purpose</th>
                                                        <td>For {{ productDetail.R_B_type }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <h5>Description</h5>
                                <p>{{ productDetail?.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card shadow-sm">
                            <div class="card-header">Amenities</div>
                            <div class="card-body">
                                <h5 class="card-title">Main Features</h5>
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
                                        <p>Floor {{ productDetail.floors }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row g-2 my-4">
                            <div class="col-12">
                                <div class="card shadow-sm">
                                    <div class="card-header"><img src="../../assets/icons/location.png" height="30" alt="">
                                        Location</div>
                                    <div class="card-body">

                                        <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px"
                                            :center="center" :zoom="15">
                                            <Marker :options="markerOptions" />
                                        </GoogleMap>
                                        <!-- https://goo.gl/maps/wz1RtcpA2V5Bsw7R9 -->
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                                            width="500" height="330" allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>

                                </div>
                            </div>
                            <div class="col-12">
                                <RouterLink to="/agentprofile" class="text-decoration-none">
                                    <div class="card shadow-sm">
                                        <div class="card-header">Agent Info</div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-4">
                                                    <img src="https://github.com/mdo.png" alt="" width="200" height="200"
                                                        class="rounded-circle border border-2 border-primary p-1">
                                                </div>
                                                <div>
                                                    <h5 class="card-title text-muted">{{ productDetail?.agent?.name }}</h5>
                                                    <p class="card-text text-wrap">Sales and Leasing Consultant at Edwards
                                                        and Towers Real
                                                        Estate Brokers
                                                        (304 properties) </p>
                                                    <p class="card-text">Speaks {{ productDetail?.agent?.languages }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row sticky-top">
                    <div class="col-12">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h5 class="card-title">PKR {{ productDetail.total_price }}</h5>
                            </div>
                            <div class="card-body text-center">
                                <button class="mainBtnColor bg-white me-2"><i class="fas fa-phone fa-lg"></i> Call</button>
                                <button class="mainBtnColor bg-white"><i class="fa-brands fa-whatsapp fa-xl"></i>
                                    WhatsApp</button>
                                <div class="mt-2">
                                    <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                        class="rounded-circle border border-2 border-primary p-1">
                                    <p class="card-text">{{ productDetail?.agent?.name }}</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated {{
                                        moment(productDetail?.updated_at).startOf('day').fromNow() }}</small></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="my-3">
            <vue-picture-swipe :items="[
                { src: 'https://www.propertyfinder.ae/property/78721e7b589%E2%80%A679/856/550/MODE/de47c7/9907514-a55cdo.webp?ctr=ae', thumbnail: 'http://example.org/sm1.jpg', w: 1200, h: 900, title: 'Will be used for caption' },
                { src: 'https://www.propertyfinder.ae/property/78721e7b589%E2%80%A679/856/550/MODE/de47c7/9907514-a55cdo.webp?ctr=ae', thumbnail: 'http://example.org/sm1.jpg', w: 1200, h: 900 }
            ]"></vue-picture-swipe>
        </div> -->
    </div>
    <Footer />
</template>