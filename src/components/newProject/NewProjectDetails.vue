<script>
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import NewProjectAmenities from './NewProjectAmenities.vue';
import DeveloperName from './DeveloperName.vue';
import axios from 'axios';
import { BASE_URL, API_VERSION, NewProject_END_POINT } from '../../utils/api';
export default {
    name: 'NewProjectDetails',
    components: {
        Header,
        Footer,
        NewProjectAmenities,
        DeveloperName
    },
    data() {
        return {
            newProjectDetails: [],
            singleImage: [],
            ThumbnailImages: this.newProjectDetails?.media && this.newProjectDetails?.media[0].image_url, // Replace with your data
        }
    },
    computed: {
        mediaUrl() {
            if (this.ThumbnailImages) {
                return this.ThumbnailImages.image_url;
            } else if (this.newProjectDetails && this.newProjectDetails.media && this.newProjectDetails.media[0]) {
                return this.newProjectDetails.media[0].image_url;
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
        async getNewProjectDetail() {
            try {
                let APi = BASE_URL + API_VERSION() + NewProject_END_POINT() + `${this.$route.params.id}/`
                let res = await axios.get(APi)
                this.newProjectDetails = res.data
                this.singleImage = res.data.media.map(item => ({
                    ...item,
                    mediaType: /\.(jpeg|jpg|png)$/i.test(item.image_url) ? 'image' : /\.(mp4|avi)$/i.test(item.image_url) ? 'video' : 'unknown',
                }));
            } catch (error) {
                console.log(error)
            }
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
    mounted() {
        this.getNewProjectDetail()
    }
}
</script>

<style></style>

<template>
    <Header />
    <div class="container detailPage">
        <div class="row my-5">
            <div class="col-md-8">
                <div class="card shadow-sm">
                    <!-- <img :src="newProjectDetails.media && newProjectDetails.media[0]?.image_url" alt="" height="500" /> -->
                    <div>
                        <div v-if="isImage">
                            <img :src="mediaUrl" class="card-img-top" alt="...">
                        </div>
                        <div v-else-if="isVideo">
                            <video controls :src="mediaUrl" class="card-img-top" alt="...">
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
                                    <div class="img-thumbnail" style="height: 50px; width: 60px;"
                                        @click="selectVideo(item)"><i
                                            class="fa-solid fa-video fa-fade fa-2xl videoClass"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-2 ms-2 text-danger">PKR {{ newProjectDetails.total_price }}</div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <img :src="newProjectDetails?.available_units?.floor_plan_img" alt="" class="card-img"
                                height="200">
                            <div class="card-img-overlay text-center ">
                                <p class="card-text"> <button class="btn btn-light" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">Floor plans</button></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-2">
                        <div class="card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                                width="410" height="280" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <DeveloperName :newProjectDetails="newProjectDetails" />
        </div>
        <hr>
        <div class="container">
            <div class="">
                <h5>Description</h5>
                <p>{{ newProjectDetails?.description }}</p>
            </div>
        </div>
        <hr>
        <div class="container mb-5">
            <NewProjectAmenities :newProjectDetails="newProjectDetails" />
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
                        <h3>{{ newProjectDetails?.available_units?.layout_type }}</h3>
                        <img :src="newProjectDetails?.available_units?.floor_plan_img" class="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- model -->
    <Footer />
</template>
