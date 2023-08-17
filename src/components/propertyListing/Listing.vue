<template>
    <Header />

    <div class="container listingPage">

        <div class="border-bottom border-top p-2 mt-2 sticky-top">
            <div class="row g-1">
                <div class="col-4">
                    <input type="text" class="form-control h-100" placeholder="search Community ot building ..."
                        aria-label="First name" v-on:keyup="(e) => handleSearchTerm(e)">
                </div>
                <div class="col">
                    <PropertyTypes @childToParentDataHomeType="handleHomeData" @childToParentDataPlotType="handlePlotData"
                        @childToParentDataCommercialType="handleCommercialData" :h_type="h_type" :p_type="p_type" :c_type="c_type" />
                </div>
                <div class="col">
                    <BedsBaths @childToParentEventSelectedBeds="handleBadsData"
                        @childToParentEventSelectedBaths="handleBathsData" :beds_type="beds_type" :baths_type="baths_type" />
                </div>
                <div class="col">

                    <PriceRange @childToParentEventMaxPrice="handleMaxPriceData"
                        @childToParentEventMinPrice="handleMinPriceData" :maxPrice_type="maxPrice_type" :minPrice_type="minPrice_type" />
                </div>
                <div class="col">
                    <button class="SearchBtnColor" v-on:click="handleValue">Find</button>
                </div>
            </div>
        </div>
        <div class="row g-0 mt-4">

            <div class="d-flex justify-content-between">
                <div>
                    <h6>Properties for {{ properties[0]?.rent_sale_type }} in Turkiye</h6>
                    <!-- <div>beds {{ beds_type }} baths {{ baths_type }}</div> -->
                    <p>{{ this.propertiesCount.count }} results <span class="badge rounded-pill text-bg-danger">2344
                            new</span></p>
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
        </div>
        <div class="text-center m-5" v-if="loading">
            <VueSpinnerHourglass size="100" color="rgb(255, 69, 0)" />
        </div>
        <div class="row g-2 my-2 mx-lg-2">
            <div class="col-12 col-md-9">
                <div class="row">
                    <div class="col-12" v-for="items in properties" :key="items.id">
                        <RouterLink :to="'/detailPage/' + items.id" class="text-decoration-none">
                            <div class="card mb-3 listPageHover">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <img :src="items?.media[0]?.image_url" class="img-fluid rounded-start cardImage"
                                                alt="...">
                                            <div class="card-img-overlay">
                                                <div v-if="items.agent">
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
                                                    <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                                    <span class="badge text-bg-secondary card-title">{{
                                                        items?.property_type?.home_types }}</span>
                                                    <h4>{{ items?.total_price }} Rs </h4>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <a type="button" className="text-success" data-bs-toggle="popover"
                                                        :title="items?.agent?.name" data-bs-content=""><img
                                                            v-if="items.agent" src="https://github.com/mdo.png" alt=""
                                                            width="60" height="60" class="rounded-circle"></a>

                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <p class="card-text">
                                                    <i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
                                                    {{ items?.area.area }}
                                                </p>
                                            </div>
                                            <div class="d-flex ">
                                                <p class="card-text">
                                                    {{ items?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                                    Bedroom
                                                </p>
                                                <p class="card-text mx-2">
                                                    {{ items?.amenties?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                                    Bathrooms
                                                </p>
                                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                        style="width: 30px; height: 30px;" alt=""> {{
                                                            items?.property_type?.size_sqf }} {{ items?.property_type?.unit_types }}
                                                </p>
                                            </div>
                                            <div class="mb-2">
                                                <small class="text-body-secondary">Added: {{
                                                    moment(items?.created_at).startOf('hour').fromNow()
                                                }} ({{ moment(items?.updated_at).startOf('day').fromNow() }})</small>
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
                                                    <img v-if="items.company_agent"
                                                        src="https://media.zameen.com/thumbnails/204332890-240x180.webp"
                                                        style="width: 60px; height: 60px;" alt="">
                                                    <div class="dropdown-content">
                                                        <img v-if="items.company_agent"
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
                </div>
            </div>
            <div class="d-none d-sm-block col-md-3">
                <Advertise />
            </div>
        </div>
        <div class="my-4 text-center">
            <button class="mainBtnColor bg-white me-2" :disabled="preUrlPage === null"
                v-on:click="handleNextPage(preUrlPage)">Previous</button>
            <button class="mainBtnColor bg-white" :disabled="nextUrlPage === null"
                v-on:click="handleNextPage(nextUrlPage)">Next</button>
        </div>
        <ScrollButton />
    </div>
    <Footer />
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import Advertise from '../advertise/Advertise.vue'
import moment from 'moment'
import axios from 'axios';
import { BASE_URL, PROPERTY_END_POINT, changeUrl, API_VERSION } from '../../utils/api';
import { VueSpinner, VueSpinnerHourglass } from 'vue3-spinners';
import ScrollButton from '../../scrollComponent/ScrollButton.vue';
import PropertyTypes from '../mainDropdown/PropertyTypes.vue';
import BedsBaths from '../mainDropdown/BedsBaths.vue';
import PriceRange from '../mainDropdown/PriceRange.vue';
export default {
    name: 'Listing',
    components: {
        Header,
        Footer,
        Advertise,
        VueSpinner,
        VueSpinnerHourglass,
        ScrollButton,
        PropertyTypes,
        BedsBaths,
        PriceRange
    },
    data() {
        return {
            properties: [],
            propertiesCount: [],
            loading: false,
            nextUrlPage: null,
            preUrlPage: null,
            receivedHomeData: '',
            receivedPlotData: '',
            receivedCommercialData: '',
            receivedBedsData: [],
            receivedBathsData: [],
            receivedMaxPrice: '',
            receivedMinPrice: '',
            searchValue: '',
            unitType: '',
            r_s_type: '',
            h_type: '',
            p_type: '',
            c_type: '',
            beds_type: [],
            baths_type: [],
            minPrice_type: '',
            maxPrice_type: ''

        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {

        async getProperties() {
            const queryParams = new URLSearchParams(window.location.search);
            // let category_name = queryParams.get("rent_sale_type");
            let category_name = queryParams.get("params");

            if (!category_name) {
                category_name = ''
            }

            try {
                // category_name = ''
                this.loading = true;
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + `?${category_name}`
                let res = await axios.get(finalUrl);
                console.log(res.data);
                const apiRes = [...this.properties, ...res.data.results]
                this.properties = apiRes
                this.propertiesCount = res.data
                this.nextUrlPage = res?.data?.next
                this.preUrlPage = res?.data?.previous
                console.log(category_name)
                // Extract unit_type value from the category_name parameter
                const unitTypeParam = new URLSearchParams(category_name);
                this.unitType = unitTypeParam.get("unit_type");
                this.r_s_type = unitTypeParam.get("rent_sale_type")
                this.h_type = unitTypeParam.get("home_types");
                this.p_type = unitTypeParam.get("plot_types");
                this.c_type = unitTypeParam.get("commercial_types")
                this.beds_type = unitTypeParam.get("beds");
                this.baths_type = unitTypeParam.get("baths");
                this.maxPrice_type = unitTypeParam.get("max_price");
                this.minPrice_type = unitTypeParam.get("min_price")
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                this.loading = false;
            }
        },
        async handleNextPage(url) {
            url = url.replace(changeUrl(), BASE_URL);
            window.scrollTo(0, 0);
            return await axios.get(url)
                .then((res) => {
                    this.properties = res.data.results
                    this.nextUrlPage = res?.data?.next
                    this.preUrlPage = res?.data?.previous
                })
                .catch((err) => console.log(err))
        },
        handleSearchTerm(e) {
            if (e.key == 'Enter') {
                let value = e.target.value
                console.log('search', value)
                this.searchValue = value
            }
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
        handleBathsData(data) {
            this.receivedBathsData = data

        },
        handleBadsData(data) {
            this.receivedBedsData = data
        },
        handleMaxPriceData(data) {
            this.receivedMaxPrice = data
        },
        handleMinPriceData(data) {
            this.receivedMinPrice = data
        },


        async handleValue() {
            console.log('-----click------')
            const params = new URLSearchParams()
            if (this.searchValue) {
                params.append("search", this.searchValue)
            }
            if (this.receivedMinPrice) {
                params.append("min_price", this.receivedMinPrice)
            }
            if (this.receivedMaxPrice) {
                params.append("max_price", this.receivedMaxPrice)
            }
            if (this.receivedBedsData) {
                this.receivedBedsData.forEach((s_bed) => params.append("beds", s_bed))
            }
            if (this.receivedBathsData) {
                this.receivedBathsData.forEach((s_bath) => params.append("baths", s_bath))
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
            console.log(params.toString())
            try {
                this.loading = true;
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + `?${params.toString()}`;
                let res = await axios.get(finalUrl);
                // ... Handle the API response as needed
                // const apiRes = [...this.properties, ...res.data.results]
                this.properties = res.data.results
                this.propertiesCount = res.data
                this.nextUrlPage = res?.data?.next
                this.preUrlPage = res?.data?.previous
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                this.loading = false;
            }

        },

    },
    mounted() {
        this.getProperties();
        console.log(this.$route.query.unit_type)
    }
}
</script>

<style>
@import './ListStyle.css';
</style>
