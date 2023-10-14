<script>
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from 'moment'
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { BASE_URL, API_VERSION, AGENT_POINT, PROPERTY_END_POINT, changeUrl } from '../../utils/api';
export default {
    name: 'AgentProfile',
    components: {
        Header,
        Footer,

    },
    data() {
        return {
            agentDetail: [],
            agentProperties: [],
            nextUrlPage: null,
            preUrlPage: null,
            error: null, // data not found check
        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {
        async getAgent() {
            let finalUrl = BASE_URL + API_VERSION() + AGENT_POINT() + this.$route.params.id + `/detail_agent/`
            let res = await axios.get(finalUrl)
            this.agentDetail = res.data.results
            if (res.data.results.properties.length === 0) {
                this.agentProperties = [],
                    this.error = "Data not found.";
            } else {
                this.agentProperties = res.data.results.properties
                this.nextUrlPage = res?.data?.next
                this.preUrlPage = res?.data?.previous
            }

            console.log('singleAgent', res.data)
        },
        async handleNextPage(url) {
            url = url.replace(changeUrl(), BASE_URL);
            window.scrollTo(0, 0);
            return await axios.get(url)
                .then((res) => {
                    this.agentProperties = res.data.results.properties
                    this.nextUrlPage = res?.data?.next
                    this.preUrlPage = res?.data?.previous
                })
                .catch((err) => console.log(err))
        },
        redirectToWhatsApp(number) {
            const whatsappUrl = `https://wa.me/+92${number}`;
            window.location.href = whatsappUrl;
            console.log('click whatsapp', number)
        },
        redirectToGmail(email) {
            const gmailUrl = `mailto:${email}`;
            window.location.href = gmailUrl;
        },
        myFunction() {
            // Get the text field using a ref
            const copyText = this.$refs.myInput;
            // Create a range and select the text
            const range = document.createRange();
            range.selectNode(copyText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            // Copy the selected text to the clipboard
            try {
                document.execCommand('copy');
                createToast('Copied Number: ' + copyText.textContent, {
                            type: 'success',
                            position: 'top-right',
                            timeout: 8000,
                        });
            } catch (err) {
                console.error('Unable to copy text: ', err);
            }
            // Clear the selection
            window.getSelection().removeAllRanges();
        },
    },
    mounted() {
        console.log('idddddd', this.$route.params.id)
        this.getAgent();
    }
};
</script>

<style>
.agentprofile {
    min-height: 100vh;
}
</style>

<template>
    <Header />
    <div class="container agentprofile">
        <div class="row g-2 mt-5">
            <div class="col-md-8">
                <div class="card mb-3 shadow" style="">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mt-4 ms-5">
                                <h4 class="card-title">{{ agentDetail?.name }}</h4>
                                <p class="card-text">Property Consultant</p>
                                <div>
                                    <span class="badge text-bg-secondary card-title">
                                        <img src="../../assets/tropyBadgeIcon/pngegg.png" class="" style="height: 15px;"
                                            alt=""> SUPERAGENT</span>
                                </div>
                                <p class="card-text">Company Name {{ agentDetail?.company_name }}</p>
                                <!-- <p class="card-text"><small class="text-muted">Language {{ agentDetail?.languages }}</small>
                                </p> -->
                                <div class="d-flex">
                                    <p class="card-text me-5">{{ agentDetail?.sale_count }} for Sale</p>
                                    <p class="card-text">{{ agentDetail?.rent_count }} for Rent</p>
                                </div>
                                <p class="card-text">Experience ({{ agentDetail?.experience_since }})</p>
                                <!-- <p class="card-text">Bio {{ agentDetail?.bio }}</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">Contact our Agent</h6>
                        <div class="text-center p-2">
                                <button @click="redirectToWhatsApp(agentDetail?.whatsapp_num)" class="mainBtnColor bg-white mt-1"><i class="fa-brands fa-whatsapp fa-xl"></i>
                                    WhatsApp
                                </button>

                            <button type="button" class="mainBtnColor bg-white me-lg-2" data-bs-toggle="modal" data-bs-target="#modalId"><i class="fas fa-phone"></i>
                                Call
                            </button>
                            <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalTitleId">Contact us</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div>
                                                <h6 class="me-2"><i class="fas fa-phone" style="color: coral;"></i></h6>
                                            </div>
                                            <div>
                                                <h6 id="myInput" ref="myInput">{{ agentDetail?.phone_number }}</h6>
                                            </div>
                                            <div>
                                                <h6 class="ms-2" v-on:click="myFunction()"><i class="fa-regular fa-copy" style="color: coral;"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <div class="text-center">
                                            <p>{{ agentDetail?.name }}</p>
                                            <p>Pakistan Property Leaders</p>
                                            <p>when calling us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="redirectToGmail(agentDetail?.user?.email)"
                            class=" mainBtnColor bg-white me-lg-2"><i class="fa-regular fa-envelope fa-xl"></i>
                             Email</button>
                        </div>  
                        <div>
                            <p class="card-text"><b>{{ agentDetail?.user?.username }}</b> usually respond within 10 minutes
                            </p>
                        </div>
                        <hr>
                        <div class="">
                            <p class="card-text">INSIGHT PROPERTIES L.L.C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-md-8">
                <hr>
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-title">Properties By {{ agentDetail?.user?.username }} Real Estate & Builders</h5>
                        <div class="row g-2 mt-2">
                            <div class="col-md-6">
                                <h6 class="card-title">200 Properties for Sale</h6>
                                <div class="d-flex justify-content-center">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-text">120</div>
                                            <div class="card-text">Houses</div>
                                        </div>
                                    </div>
                                    <div class="card mx-2">
                                        <div class="card-body">
                                            <div class="card-text">50</div>
                                            <div class="card-text">Buildings</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-text">30</div>
                                            <div class="card-text">Commercial</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6 class="card-title">141 Properties for Rent</h6>
                                <div class="d-flex justify-content-center">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-text">41</div>
                                            <div class="card-text">Houses</div>
                                        </div>
                                    </div>
                                    <div class="card ms-2">
                                        <div class="card-body">
                                            <div class="card-text">100</div>
                                            <div class="card-text">Buildings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-8">
                <hr>
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Personal Information</h5>
                        <div class="row g-1">
                            <div class="col-6">
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nationality</th>
                                                <th scope="col">{{ agentDetail?.nationality }}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">NTN#</th>
                                                <td>{{ agentDetail?.company_ntn }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Languages</th>
                                                <td>{{ agentDetail?.languages }}</td>
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
                                                <th scope="col">Listed</th>
                                                <th scope="col">
                                                    5 hours ago</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Area</th>
                                                <td>{{ agentDetail?.areas }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <hr>
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="text-title">About {{ agentDetail?.name }} Real Estate & Builders</h5>
                        <p class="card-text">{{ agentDetail?.bio }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-8">
                <hr>
            </div>
            <div class="text-center m-5" v-if="error">
                <h1 class="text-danger">Properties not found.</h1>
            </div>
            <div v-else>
                <div class="d-flex my-4">
                    <div class="me-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected value="1">Property Type</option>
                            <option value="2">Rent</option>
                            <option value="3">Buy</option>
                            <option value="4">Commercial Rent</option>
                            <option value="5">Commercial Buy</option>
                        </select>
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
                <div class="col-md-8" v-for="agentList in agentProperties" :key="agentList?.id">
                    <RouterLink :to="'/detailPage/' + agentList.id" class="text-decoration-none">
                        <div class="card mb-3 listPageHover">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <div class="card">
                                        <img :src="agentList?.media[0]?.image_url" class="img-fluid rounded-start cardImage"
                                            alt="...">
                                        <div class="card-img-overlay">
                                            <div v-if="agentList.agent">
                                                <span class="badge text-bg-secondary card-title">
                                                    <img src="../../assets/tropyBadgeIcon/pngegg.png" class=""
                                                        style="height: 15px;" alt=""> SUPERAGENT</span> </div>
                                            <span v-if="agentList?.available == false" class="badge bg-secondary card-text ms-md-1">Sold</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body bg-white rounded">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                                <span class="badge text-bg-secondary card-title">{{
                                                    agentList?.property_type?.home_types }}</span>
                                                <h4>{{ agentList?.total_price }} Rs </h4>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <a type="button" className="text-success" data-bs-toggle="popover"
                                                    :title="agentList?.agent?.name" data-bs-content=""><img
                                                        v-if="agentList.agent"
                                                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                                        alt="" width="60" height="60" class="rounded-circle"></a>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <p class="card-text">
                                                <i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
                                                {{ agentList?.area?.area }}
                                            </p>
                                        </div>
                                        <div class="d-flex ">
                                            <p class="card-text">
                                                {{ agentList?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                                Bedroom
                                            </p>
                                            <p class="card-text mx-2">
                                                {{ agentList?.amenties?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                                Bathrooms
                                            </p>
                                            <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                    style="width: 30px; height: 30px;" alt=""> {{
                                                        agentList?.property_type?.size
                                                    }} {{ agentList?.property_type?.unit_types }}
                                            </p>
                                        </div>
                                        <div class="mb-2">
                                            <small class="text-body-secondary">Added: {{
                                                moment(agentList?.created_at).startOf('hour').fromNow() }} ({{
        moment(agentList?.updated_at).startOf('day').fromNow() }})</small>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="">
                                                <button class="iconBtn">
                                                    <i class="fas fa-phone fa-lg"></i>
                                                </button>
                                                <button class="iconBtn mx-2">
                                                    <i class="fas fa-message fa-lg"></i>
                                                </button>
                                                <button class="iconBtn">
                                                    <i class="fa-brands fa-whatsapp fa-lg"></i>
                                                </button>
                                            </div>
                                            <div class="dropdown-image">
                                                <img v-if="agentList.company_agent"
                                                    src="https://media.zameen.com/thumbnails/204332890-240x180.webp"
                                                    style="width: 60px; height: 60px;" alt="">
                                                <div class="dropdown-content">
                                                    <img v-if="agentList.company_agent"
                                                        src="https://media.zameen.com/thumbnails/204332890-240x180.webp"
                                                        alt="Cinque Terre" width="300" height="200">
                                                    <div class="desc">company agent name</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="my-4 text-center">
                    <button class="mainBtnColor bg-white me-2" :disabled="preUrlPage === null"
                        v-on:click="handleNextPage(preUrlPage)">Previous</button>
                    <button class="mainBtnColor bg-white" :disabled="nextUrlPage === null"
                        v-on:click="handleNextPage(nextUrlPage)">Next</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
