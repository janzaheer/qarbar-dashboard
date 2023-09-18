<script>
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { BASE_URL,API_VERSION, AGENT_POINT,PROPERTY_END_POINT } from '../../utils/api';
export default {
    name: 'AgentProfile',
    components: {
        Header,
        Footer,
       
    },
    data(){
        return {
            agentDetail: []
        }
    },
    methods:{
       async getAgent(){
        let finalUrl = BASE_URL + API_VERSION() + AGENT_POINT() + this.$route.params.id + `/`
        let res = await axios.get(finalUrl)
        this.agentDetail = res.data
         console.log('singleAgent',res.data)
       }
    },
    async getAgentProperties(){
        let FinalURL = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + `agent_properties/`
        let res = await axios.get(`https://apidev.qarbar.com/api/v1/properties/agent_properties/`)
        console.log('agentProperty',res.data)
    },
    mounted() {
        console.log('idddddd',this.$route.params.id)
         this.getAgent()
        //  this.getAgentProperties();
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
                <div class="card mb-3" style="">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://github.com/mdo.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 class="card-title">{{ agentDetail?.name }}</h4>
                                <p class="card-text">Owner Real Estate</p>
                                <p class="card-text"><small class="text-muted">Language {{ agentDetail?.languages }}</small></p>
                                <div class="d-flex">
                                    <p class="card-text me-5">200 for Sale</p>
                                    <p class="card-text">141 for Rent</p>
                                </div>
                                <p class="card-text" >Experience ({{ agentDetail?.experience_since }})</p>
                                <p class="card-text" >Bio {{ agentDetail?.bio }}</p>
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
                            <button class="btn btn-success">WhatsApp</button>
                            <button class="btn btn-primary mx-2">Call</button>
                            <button class="btn btn-danger">Email</button>
                        </div>
                        <div>
                            <p class="card-text"><b>{{ agentDetail?.name }}</b> usually respond within 10 minutes</p>
                        </div>
                        <hr>
                        <div class="">
                            <p class="card-text">INSIGHT PROPERTIES L.L.C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <hr>
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-title">Properties By {{ agentDetail?.name }} Real Estate & Builders</h5>
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
        </div>

        <div class="row">
            <div class="col-md-8">
                <hr>
                <div class="card">
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
                                                <th scope="row">BRN#</th>
                                                <td>123154</td>
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
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-title">About {{ agentDetail?.name }} Real Estate & Builders</h5>
                        <p class="card-text">Buying and selling real estate signifies a time of change. Whether making an
                            investment for capital gains or for personal or business use, the process can be challenging for
                            any consumer. For people who have never set foot in dealings, investments and buying or selling
                            property and are unsure of what to expect in the market it can be a daunting task , sometimes
                            even the more experienced people fail to make their investment count because they are unaware of
                            the shifting landscape and modern requirements.This is where our Estate Agency can make a
                            difference and provide you the most beneficial and profitable deal. Trust, honesty and
                            transparency are pillars of our dealings with the clients and are well versed in all kind of
                            real estate needs. Please contact us with your real estate requirements and let us take care of
                            everything else.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-8">
                <hr>
            </div>
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
            <div class="col-md-8">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                        class="img-fluid rounded-start h-100" alt="...">
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
            <div class="col-md-8">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                        class="img-fluid rounded-start h-100" alt="...">
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
            <div class="col-md-8">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                        class="img-fluid rounded-start h-100" alt="...">
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
            <div class="col-md-8">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                        class="img-fluid rounded-start h-100" alt="...">
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
            <div class="col-md-8">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card mb-3 listPageHover">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card h-100">
                                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                        class="img-fluid rounded-start h-100" alt="...">
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

            <div class="my-4">
                <button class="btn btn-primary me-2">Previous</button>
                <button class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
    <Footer />
</template>
