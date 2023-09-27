<template>
    <Header />
    <div class="container newProjectBg">
        <div class="border-bottom border-top p-2 sticky-top mt-2">
            <div class="row g-1">
                <div class="col-md-5">
                    <input type="text" class="form-control h-100" placeholder=" Search any property type..."
                        aria-label="First name" v-on:keyup="(e) => handleSearchTerm(e)">
                </div>
                <div class="col">
                    <PropertyTypes @childToParentDataHomeType="handleHomeData" @childToParentDataPlotType="handlePlotData"
                        @childToParentDataCommercialType="handleCommercialData" :h_type="h_type" :p_type="p_type"
                        :c_type="c_type" />
                </div>
                <!-- <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Beds</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> -->
                <div class="col">
                    <PriceRange @childToParentEventMaxPrice="handleMaxPriceData"
                        @childToParentEventMinPrice="handleMinPriceData" :maxPrice_type="maxPrice_type"
                        :minPrice_type="minPrice_type" />
                </div>
                <div class="col">
                    <NewProjectPropertyStatus @childToParentPropertyStatus="handlePropertyStatus" />
                </div>
                <div class="col">
                    <button class="SearchBtnColor" v-on:click="handleValue">Find</button>
                </div>
            </div>
        </div>
        <h3 class="mt-2">New Project in Karachi</h3>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h6>{{ count?.count }} Projects</h6>
            </div>
            <div>
                <select class="form-select" aria-label="Default select example">
                    <option selected value="1">Delivery date (latest)</option>
                    <option value="2">Delivery date (earliest)</option>
                    <option value="3">Price (low)</option>
                    <option value="4">Price (high)</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4" v-for=" data in newProjects" :key="data?.id">
                <div class="card text-dark">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card">
                                <img :src="data.media && data.media[0]?.image_url" height="350" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="badge text-bg-secondary card-title">{{ data?.project_types
                                            }}</span>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Floor plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6940.621364062964!2d65.97918749545015!3d29.565562450672537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed21b11a9de7ca1%3A0x4b4f7595a43e99ab!2sKilli%20Sharif%20Khan%20Badini%2C%20Nushki%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686139844821!5m2!1sen!2s"
                                        width="650" height="340" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RouterLink class="text-decoration-none" :to="'/newProjectDetails/' + data.id">
                        <div class="card-body bg-white text-dark rounded">
                            <div class="row">
                                <div class="col-md-6">
                                    <span class="badge text-bg-secondary card-title">Delivery Date {{
                                        data?.delivery_date }}</span>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <p class="card-text"><b>Project</b> {{ data?.city?.country?.country_name }}</p>
                                        </div>
                                        <div>
                                            <p class="card-text me-5"><b>Developer</b> {{ data?.developer_name }} Properties
                                                Co.LLC</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="card-text"><img src="../../assets/icons/bed.png"
                                                style="width: 30px; height: 30px;" alt=""> {{ data?.amenities?.bedrooms }}
                                            Beds</p>
                                    </div>
                                    <div>
                                        <p class="card-text"><img src="../../assets/icons/location.png"
                                                style="width: 30px; height: 20px;" alt=""> {{ data?.city.city_name }}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Floor plan</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <div>
                                        <h3>{{ data?.available_units?.layout_type}}</h3>
                                        <img :src="data?.available_units?.floor_plan_img" class="" alt="">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- model -->
                </div>

            </div>
            <div class="my-4 text-center">
                <button class="mainBtnColor bg-white me-2" :disabled="preUrlPage === null"
                    v-on:click="handleNextPage(preUrlPage)">Previous</button>
                <button class="mainBtnColor bg-white" :disabled="nextUrlPage === null"
                    v-on:click="handleNextPage(nextUrlPage)">Next</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style>
.newProjectBg {
    min-height: 100vh;
}
</style>

<script>
import NewProjectPropertyStatus from './NewProjectPropertyStatus.vue';
import PropertyTypes from '../mainDropdown/PropertyTypes.vue';
import PriceRange from '../mainDropdown/PriceRange.vue';
import axios from 'axios';
import Header from '../../components/common/header/Header.vue';
import Footer from '../../components/common/footer/Footer.vue';
import { RouterLink } from 'vue-router';
import { BASE_URL, API_VERSION, NewProject_END_POINT } from '../../utils/api';
export default {
    name: 'NewProjectsList',
    components: {
        Header,
        Footer,
        PropertyTypes,
        PriceRange,
        NewProjectPropertyStatus
    },
    data() {
        return {
            newProjects: [],
            count: '',
            nextUrlPage: null,
            preUrlPage: null,
            searchValue: '',
            h_type: '',
            p_type: '',
            c_type: '',
            minPrice_type: '',
            maxPrice_type: '',
            //////////////
            receivedHomeData: '',
            receivedPlotData: '',
            receivedCommercialData: '',
            searchType: '',
            receivedMaxPrice: '',
            receivedMinPrice: '',
            receivedPropertyStatus: ''
        }
    },
    methods: {
        async handleNextPage(url) {
            url = url.replace(changeUrl(), BASE_URL);
            window.scrollTo(0, 0);
            return await axios.get(url)
                .then((res) => {
                    this.newProjects = res.data.results
                    this.nextUrlPage = res?.data?.next
                    this.preUrlPage = res?.data?.previous
                })
                .catch((err) => console.log(err))
        },
        async getNewProjects() {
            const queryParams = new URLSearchParams(window.location.search);
            let category_name = queryParams.get("params");
            try {
                if (!category_name) {
                    category_name = ''
                }
                let APi = BASE_URL + API_VERSION() + NewProject_END_POINT() + `?${category_name}`
                let res = await axios.get(APi)
                this.count = res.data
                if (res.data.results.length === 0) {
                    this.newProjects = []
                } else {
                    this.newProjects = res.data.results
                    console.log('data', res.data.results)
                    this.nextUrlPage = res?.data?.next
                    this.preUrlPage = res?.data?.previous
                    // const unitTypeParam = new URLSearchParams(category_name);
                    // this.h_type = unitTypeParam.get("home_types");
                    // this.p_type = unitTypeParam.get("plot_types");
                    // this.c_type = unitTypeParam.get("commercial_types");
                    // this.searchType = unitTypeParam.get("search")
                    // this.$router.push({
                    //     query: {
                    //         params: category_name.toString(),
                    //     }
                    // });
                }
            } catch (error) {
                console.log('error', error)
            }

        },
        async handleValue() {
            console.log('-----click------')
            const params = new URLSearchParams()

            if (this.searchValue) {
                params.append("search", this.searchValue)
            }
            if (this.receivedHomeData) {
                params.append("home_types", this.receivedHomeData)
            }
            if (this.receivedCommercialData) {
                params.append("commercial_types", this.receivedCommercialData)
            }
            if (this.receivedPlotData) {
                params.append("plot_types", this.receivedPlotData)
            }
            if (this.receivedMinPrice) {
                params.append("min_price", this.receivedMinPrice)
            }
            if (this.receivedMaxPrice) {
                params.append("max_price", this.receivedMaxPrice)
            }
            if (this.receivedPropertyStatus) {
                params.append("project_types", this.receivedPropertyStatus)
            }
            console.log(params.toString())
            try {
                let finalUrl = BASE_URL + API_VERSION() + NewProject_END_POINT() + `?${params}`;
                let res = await axios.get(finalUrl);
                // if (res.data.results.length === 0) {
                //     this.newProjects = []
                // } else {

                this.newProjects = res.data.results
                this.nextUrlPage = res?.data?.next
                this.preUrlPage = res?.data?.previous
                this.$router.push({
                    query: {
                        params: params.toString(),
                    }
                });

                // }
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        },
        handleSearchTerm(e) {
            // if (e.key == 'Enter') {
            let value = e.target.value
            this.searchValue = value
            // }
        },
        handlePropertyStatus(data) {
            this.receivedPropertyStatus = data
        },
        handleMaxPriceData(data) {
            this.receivedMaxPrice = data
        },
        handleMinPriceData(data) {
            this.receivedMinPrice = data
        },
        handleHomeData(data) {
            this.receivedHomeData = data
        },
        handlePlotData(data) {
            this.receivedPlotData = data
        },
        handleCommercialData(data) {
            this.receivedCommercialData = data
        },
    },
    mounted() {
        this.getNewProjects();
    }
}
</script>