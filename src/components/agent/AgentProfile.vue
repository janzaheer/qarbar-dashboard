<template>
    <Header />
    <div class="container agentprofile">
        <div class="row g-2 mt-5">
            <div class="col-md-8">
                <div class="card mb-3 shadow" style="">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img v-if="agentDetail.image" :src="agentDetail.image"
                                class="img-fluid rounded-start w-100" alt="...">
                            <img v-else src="../../assets/user1.png"
                                class="img-fluid rounded-start w-100" alt="...">
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
                                <div class="d-flex">
                                    <p class="card-text me-5">{{ agentDetail?.sale_count }} for Sale</p>
                                    <p class="card-text">{{ agentDetail?.rent_count }} for Rent</p>
                                </div>
                                <p class="card-text">Experience ({{ agentDetail?.experience_since }})</p>
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
                                <button @click="redirectToWhatsApp(agentDetail?.whatsapp_num)" class="mainBtnColor bg-white me-2 mt-1"><i class="fa-brands fa-whatsapp fa-xl"></i>
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
                    <Card :data="agentList" />
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

<script>
import moment from 'moment'
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { BASE_URL, changeUrl } from '../../utils/api';
import { AgentDetail } from '../../utils/Agent_Service';
import Card from '../cardData/Card.vue';
export default {
    name: 'AgentProfile',
    components: {
        Header,
        Footer,
        Card

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
            let id = this.$route.params.id 
            let res = await AgentDetail(id)
            this.agentDetail = res.results
            if (res.results.properties.length === 0) {
                this.agentProperties = [],
                    this.error = "Data not found.";
            } else {
                this.agentProperties = res.results.properties
                this.nextUrlPage = res?.next
                this.preUrlPage = res?.previous
            }
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
        this.getAgent();
    }
};
</script>

<style>
.agentprofile {
    min-height: 100vh;
}
</style>