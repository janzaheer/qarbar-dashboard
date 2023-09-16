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
import Installments from './Installments.vue';
import OverviewPage from './OverviewPage.vue' 
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT, API_VERSION } from '../../utils/api';
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
        GoogleMap, Marker,
        Installments,
        OverviewPage
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
            ThumbnailImages: this.productDetail?.media && this.productDetail?.media[0].image_url, // Replace with your data
        }
    },
    computed: {
        mediaUrl() {
            if (this.ThumbnailImages) {
                return this.ThumbnailImages.image_url;
            } else if (this.productDetail && this.productDetail.media && this.productDetail.media[0]) {
                return this.productDetail.media[0].image_url;
            } else {
                return ''; // Empty URL for no media
            }
        },
        isImage() {
            return Boolean(this.mediaUrl && /\.(jpeg|jpg|png)$/i.test(this.mediaUrl));
        },
        isVideo() {
            return Boolean(this.mediaUrl && /\.(mp4|avi)$/i.test(this.mediaUrl));
        },
    },
    methods: {
        async getSingleProduct() {
            try {
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + this.$route.params.id + `/detail_property/`
                let res = await axios.get(finalUrl)
                this.productDetail = res.data
                // this.singleImage = res.data.media
                this.singleImage = res.data.media.map(item => ({
                    ...item,
                    mediaType: /\.(jpeg|jpg|png)$/i.test(item.image_url) ? 'image' : /\.(mp4|avi)$/i.test(item.image_url) ? 'video' : 'unknown',
                }));
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        },
        selectImage(item) {
            this.ThumbnailImages = item
            console.log('imageSelect', this.ThumbnailImages)
        },
        selectVideo(item) {
            this.ThumbnailImages = item;
            console.log('videoSelect', this.ThumbnailImages);
        },
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getSingleProduct();
    }
};
</script>

<style>
@import './DetailPageStyle.css';
</style>

<template>
    <Header />
    <div class="container detailPage">
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card shadow">
                    <!-- <img :src="ThumbnailImage ? ThumbnailImage.image_url : productDetail?.media && productDetail?.media[0]?.image_url"
                        class="card-img-top thumbnailImage" alt="..."> -->
                    <div>
                        <div v-if="isImage">
                            <img :src="mediaUrl" class="card-img-top thumbnailImage" alt="...">
                        </div>
                        <div v-else-if="isVideo">
                            <video controls :src="mediaUrl" class="card-img-top thumbnailImage" alt="...">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div v-else>
                            No media available.
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-center mt-1">
                            <div class="thumbnail text-center mx-1" v-for="item in singleImage" :key="item.id">
                                <div v-if="item.mediaType === 'image'">
                                    <img :src="item.image_url" class="img-thumbnail" style="height: 50px; width: 60px;"
                                        @click="selectImage(item)" />
                                </div>
                                <div v-else-if="item.mediaType === 'video'">
                                    <!-- <video controls :src="item.image_url" class="img-thumbnail"
                                        style="height: 120px; width: 120px;" @click="selectVideo(item)"></video> -->
                                    <div class="img-thumbnail" style="height: 50px; width: 60px;"
                                        @click="selectVideo(item)"><i
                                            class="fa-solid fa-video fa-fade fa-2xl videoClass"></i></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <OverviewPage :productDetail="productDetail"  />
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
                    <div class="col-12 my-3" v-if="productDetail.rent_sale_type == 'sale'">
                        <Installments :productDetail="productDetail" />
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
