<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow';
// import VuePictureSwipe from 'vue3-picture-swipe';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT } from '../../utils/api';
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
                let finalUrl = BASE_URL + PROPERTY_END_POINT() + this.$route.params.id + `/detail_property/`
                let res = await axios.get(finalUrl)
                this.productDetail = res.data
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

.iframeCLass {
    width: 800px;
    height: 500px;
}

.thumbnailImage {
    height: 600px;
}

@media screen and (max-width: 1080px) {
    .iframeCLass {
        width: 590px;
        height: 400px;
    }

    .thumbnailImage {
        height: 500px;
    }
}

@media screen and (max-width: 420px) {
    .iframeCLass {
        width: 340px;
        height: 200px;
    }

    .thumbnailImage {
        height: 300px;
    }
}
</style>

<template>
    <Header />
    <div class="container detailPage">
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card shadow">
                    <img :src="ThumbnailImage ? ThumbnailImage.image_url : productDetail?.media && productDetail?.media[0]?.image_url"
                        class="card-img-top thumbnailImage" alt="...">
                    <div class="card-body">
                        <div class="d-flex justify-content-center mt-1">
                            <div class="thumbnail text-center mx-1" v-for="item in singleImage">
                                <img :src="item.image_url" class="img-thumbnail" style="height: 50px; width: 60px;"
                                    v-on:click="selectimage(item)" />
                            </div>
                        </div>
                        <h5 class="card-title">Overview</h5>
                        <h6 class="card-title">{{ productDetail?.title }}</h6>
                        <div class="d-flex align-items-center">
                            <p class="card-text"><i class="fa-sharp fa-solid fa-bed"></i> {{
                                productDetail?.amenties?.bedrooms }}
                                Bedroom</p>
                            <p class="card-text mx-5"> <i class="fa-solid fa-bath"></i> {{
                                productDetail?.amenties?.bathrooms }}
                                Bathrooms</p>
                            <p class="card-text"><img src="../../assets/icons/sqft.png" style="width: 30px; height: 30px;"
                                    alt=""> {{ productDetail?.property_type?.size_sqf }} {{
                                        productDetail?.property_type?.unit_types }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-2">
            <div class="col-12 col-lg-8">
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
                                                        <th scope="col">property type</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">price</th>
                                                        <td>{{ productDetail?.total_price }} PKR</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bath's</th>
                                                        <td>{{ productDetail?.amenties?.bathrooms }}</td>
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
                                                        <th scope="col">{{ productDetail?.property_type?.size_sqf }} {{
                                                            productDetail?.property_type?.unit_types }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Bed's</th>
                                                        <td>{{ productDetail?.amenties?.bedrooms }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Listed</th>
                                                        <!-- <td>{{ moment(productDetail?.updated_at).startOf(productDetail?.updated_at).fromNow()}}</td> -->
                                                        <td>{{ moment(productDetail?.created_at).startOf('hour').fromNow()
                                                        }} </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Purpose</th>
                                                        <td>For {{ productDetail.rent_sale_type }}</td>
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
                                <h5 class="card-title">Features Of Apartment</h5>
                                <div class="row g-2">
                                    <div class="col-12 col-md-6">
                                        <p v-if="productDetail?.amenties?.built_in_year">Build In Year {{
                                            productDetail.amenties.built_in_year }}</p>
                                        <p v-if="productDetail?.amenties?.furnished_unfurnished == false">Unfurnished</p>
                                        <p v-if="productDetail?.amenties?.furnished_unfurnished == true">Furnished</p>
                                        <p v-if="productDetail?.amenties?.built_in_wardrobes">Built in Wardrobes</p>
                                        <p v-if="productDetail?.amenties?.kids_play_area">Children's Play Area</p>
                                        <p v-if="productDetail?.amenties?.covered_parking">Covered Parking</p>
                                        <p v-if="productDetail?.amenties?.security">Security</p>
                                        <p v-if="productDetail?.amenties?.Farmhouse">FarmHouse</p>
                                        <p v-if="productDetail?.amenties?.community_lawn_garden">Community lawn garden</p>
                                        <p v-if="productDetail?.amenties?.covered_parking">Parking</p>
                                        <p v-if="productDetail?.amenties?.distance_from_airport">AirPort Distance {{
                                            productDetail.amenties.distance_from_airport }} </p>
                                        <p v-if="productDetail?.amenties?.drawing_room">Drawing Room</p>
                                        <p v-if="productDetail?.amenties?.electricity_backup">Electric Backup</p>
                                        <p v-if="productDetail?.amenties?.gym">Gym</p>
                                        <p v-if="productDetail?.amenties?.near_by_shopping_mall">Near By Shopping Mall</p>
                                        <p v-if="productDetail?.amenties?.parking_space">Parking Space</p>
                                        <p v-if="productDetail?.amenties?.swimming_pool">Swimming Pool</p>
                                        <p v-if="productDetail?.amenties?.study_room">Study Room</p>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <p v-if="productDetail?.amenties?.balcony">Balcony</p>
                                        <p v-if="productDetail?.amenties?.internet">Internet</p>
                                        <p v-if="productDetail?.amenties?.lower_portion">Lower Portion</p>
                                        <p v-if="productDetail?.amenties?.other_description">Floor {{ productDetail.floors
                                        }}</p>
                                        <p v-if="productDetail?.amenties?.kitchen">Kitchen {{ productDetail.amenties.kitchen
                                        }}</p>
                                        <p v-if="productDetail?.amenties?.kitchen_appliances">kitchen Appliances</p>
                                        <p v-if="productDetail?.amenties?.laundry_room">Laundry Room</p>
                                        <p v-if="productDetail?.amenties?.lobby_in_building">Lobby in Building</p>
                                        <p v-if="productDetail?.amenties?.lounge_sitting_area">Lounge Sitting Area</p>
                                        <p v-if="productDetail?.amenties?.maid_room">Maid Room</p>
                                        <p v-if="productDetail?.amenties?.medical_center">Medical Center</p>
                                        <p v-if="productDetail?.amenties?.mosque">Mosque</p>
                                        <p v-if="productDetail?.amenties?.near_by_hospital">Near By Hospital</p>
                                        <p v-if="productDetail?.amenties?.near_by_school">Near By School</p>
                                        <p v-if="productDetail?.amenties?.store_room">Store Room</p>
                                        <p v-if="productDetail?.amenties?.other_nearby_palces">{{
                                            productDetail.amenties.other_nearby_palces }}</p>
                                        <p v-if="productDetail?.amenties?.other_description">{{
                                            productDetail.amenties.other_description }}</p>
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

                                        <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px"
                                            :center="center" :zoom="15">
                                            <Marker :options="markerOptions" />
                                        </GoogleMap> -->

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                            class="iframeCLass"></iframe>

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
            <div class="col-12 col-lg-4">
                <div class="row sticky-top">
                    <div class="col-12">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h5 class="card-title">PKR {{ productDetail.total_price }}</h5>
                            </div>
                            <div class="card-body text-center">
                                <button class="mainBtnColor bg-white me-2" data-bs-toggle="modal"
                                    data-bs-target="#agentModal"><i class="fas fa-phone fa-lg"></i> Call</button>
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
                <!-- Modal -->
                <div class="modal fade" id="agentModal" tabindex="-1" aria-labelledby="agentModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="agentModalLabel">Contact Us</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <!-- <div class="d-flex justify-content-between">
                                    <div>
                                        <i class="fas fa-phone fa-lg"></i>
                                    </div>
                                    <div>
                                        <p>+92 3456 678900</p>
                                    </div>
                                    <div class="d-flex">
                                        <i class="fa-regular fa-copy"></i>
                                        <p class="ms-1">Copy</p>
                                    </div>
                                </div> -->
                               
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <i class="fas fa-phone fa-lg"></i>
                                            +92 3456 678900
                                            <i class="fa-regular fa-copy"></i>
                                        </li>
                                    </ul>
                            </div>
                            <div class="modal-footer">
                                <small>Please quote property reference when calling us.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>