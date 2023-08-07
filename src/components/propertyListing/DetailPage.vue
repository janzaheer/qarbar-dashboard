<script>
// import VueGallerySlideshow from 'vue-gallery-slideshow';
// import VuePictureSwipe from 'vue3-picture-swipe';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import Amenities from './Amenities.vue';
import Details from './Details.vue';
import AgentNumber from './AgentNumber.vue';
import AgentInfo from './AgentInfo.vue';
import Location from './Location.vue';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT,API_VERSION } from '../../utils/api';
import { GoogleMap, Marker } from "vue3-google-map";
export default {
    name: 'DetailPage',
    components: {
        Header,
        Footer,
        Amenities,
        Details,
        AgentNumber,
        AgentInfo,
        Location,
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
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + this.$route.params.id + `/detail_property/`
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
                        <Details :productDetail="productDetail" />
                    </div>
                    <div class="col-12">
                        <Amenities :productDetail="productDetail" />
                    </div>
                    <div class="col-12">
                        <div class="row g-2 my-4">
                            <div class="col-12">
                                <Location />
                            </div>
                            <div class="col-12">
                                <AgentInfo :productDetail="productDetail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="sticky-top">
                    <AgentNumber :productDetail="productDetail" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>