<template>
    <Header />

    <div class="container listingPage">
    
        <div class="border-bottom border-top p-2 mt-2 sticky-top">
            <div class="row g-1">
                <div class="col-4">
                    <input type="text" class="form-control h-100" placeholder="search Community ot building ..."
                        aria-label="First name">
                </div>
                <div class="col">
                    <select class=" mainDropBtn h-100" aria-label="Default select example">
                        <option selected value="1">Buy</option>
                        <option value="2">Rent</option>
                        <option value="3">Commercial for Rent</option>
                        <option value="4">Commercial for Sale</option>
                    </select>
                </div>
                <div class="col">
                    <div class="">
                        <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                            aria-expanded="false">Property Type</button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Home Type</li>
                            <li class="dropdown-item"> Commercial Type</li>
                            <li class="dropdown-item">Plot Type </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Beds & Baths
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-items">
                                <div class="m-2">
                                    <h6>bathrooms</h6>
                                    <button class="btn btn-secondary">1</button>
                                    <button class="btn btn-secondary mx-1">2</button>
                                    <button class="btn btn-secondary">3</button>
                                    <button class="btn btn-secondary mx-1">4</button>
                                    <button class="btn btn-secondary">5</button>
                                    <button class="btn btn-secondary ms-1">6+</button>
                                </div>
                                <div class=" m-2">
                                    <h6>bedrooms</h6>
                                    <button class="btn btn-secondary">1</button>
                                    <button class="btn btn-secondary mx-1">2</button>
                                    <button class="btn btn-secondary">3</button>
                                    <button class="btn btn-secondary mx-1">4</button>
                                    <button class="btn btn-secondary">5</button>
                                    <button class="btn btn-secondary ms-1">6+</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <div class="dropdown">
                            <button class="mainDropBtn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Min (Price) & Max (Price)
                            </button>

                            <div class="dropdown-menu">
                                <div class="dropdown-menu-item-boxPrice" role="listbox">
                                    <div class="row g-2">
                                        <div class="col-6">
                                            <div role="listbox" class="dropdown-menu-item-box2">
                                                <div class="mt-2 mb-4">
                                                    <label for="exampleFormControlInput3" class="form-label lableText">Min
                                                        Price</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput3"
                                                        placeholder="Min Price">
                                                </div>
                                                <button aria-label="All" class="dropdownSelectBtnPrice">0</button>
                                                <button aria-label="1" class="dropdownSelectBtnPrice">100000</button>
                                                <button aria-label="2" class="dropdownSelectBtnPrice">200000</button>
                                                <button aria-label="3" class="dropdownSelectBtnPrice">300000</button>
                                                <button aria-label="4" class="dropdownSelectBtnPrice">400000</button>
                                                <button aria-label="5" class="dropdownSelectBtnPrice">500000</button>
                                                <button aria-label="6" class="dropdownSelectBtnPrice">600000</button>
                                                <button aria-label="7" class="dropdownSelectBtnPrice">700000</button>
                                                <button aria-label="8" class="dropdownSelectBtnPrice">800000</button>
                                                <button aria-label="9" class="dropdownSelectBtnPrice">900000</button>
                                                <button aria-label="10+" class="dropdownSelectBtnPrice">1000000+</button>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div role="listbox" class="dropdown-menu-item-box2">
                                                <div class="mt-2 mb-4">
                                                    <label for="exampleFormControlInput4" class="form-label lableText">Max
                                                        Price</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput4"
                                                        placeholder="Max Price">
                                                </div>
                                                <button aria-label="All" class="dropdownSelectBtnPrice">0</button>
                                                <button aria-label="1" class="dropdownSelectBtnPrice">100000</button>
                                                <button aria-label="2" class="dropdownSelectBtnPrice">200000</button>
                                                <button aria-label="3" class="dropdownSelectBtnPrice">300000</button>
                                                <button aria-label="4" class="dropdownSelectBtnPrice">400000</button>
                                                <button aria-label="5" class="dropdownSelectBtnPrice">500000</button>
                                                <button aria-label="6" class="dropdownSelectBtnPrice">600000</button>
                                                <button aria-label="7" class="dropdownSelectBtnPrice">700000</button>
                                                <button aria-label="8" class="dropdownSelectBtnPrice">800000</button>
                                                <button aria-label="9" class="dropdownSelectBtnPrice">900000</button>
                                                <button aria-label="10+" class="dropdownSelectBtnPrice">1000000+</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="dropdownCloseBox">
                                        <button class="dropdownCloseBtn" aria-label="Close">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <button class="SearchBtnColor">Find</button>
                </div>
            </div>
            <!-- <div class="d-flex my-2">
                <div class="form-check form-switch me-4">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"><img
                            src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;" alt="" /> Verified</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault"><img
                            src="../../assets/tropyBadgeIcon/pngegg.png" style="height: 15px;" alt="" /> SuperAgent</label>
                </div>
            </div> -->
        </div>
        <div class="row g-0 mt-4">

            <div class="d-flex justify-content-between">
                <div>
                    <h6>Properties for {{ properties[0]?.rent_sale_type }} in Turkiye</h6>
                    <p>{{ this.propertiesCount.count }} results <span class="badge rounded-pill text-bg-danger">2344
                            new</span></p>
                    <!-- <button class="btn btn-outline-info me-2"><img src="../../assets/icons/location.png"
                            style="width: 30px; height: 20px;" alt=""> Map view</button>
                    <button class="btn btn-outline-info">save Search</button> -->
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
            <div class="col-12 col-md-8">
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
                                                <!-- <div class="">
                                        <span class="badge text-bg-success card-title">
                                            <img src="../../assets/tropyBadgeIcon/verified.png" style="height: 15px;"
                                                alt="" /> VERIFIED</span>
                                    </div> -->
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
            <div class="d-none d-sm-block col-md-4">
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
export default {
    name: 'Listing',
    components: {
        Header,
        Footer,
        Advertise,
        VueSpinner,
        VueSpinnerHourglass,
        ScrollButton,
    },
    data() {
        return {
            properties: [],
            propertiesCount: [],
            loading: false,
            nextUrlPage: null,
            preUrlPage: null,

        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {

        async getProperties() {
            const queryParams = new URLSearchParams(window.location.search);
            let category_name = queryParams.get("rent_sale_type");

            if (!category_name) {
                category_name = ''
            }

            try {
                this.loading = true;
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + `?rent_sale_type=${category_name}`
                let res = await axios.get(finalUrl);
                console.log(res.data);
                const apiRes = [...this.properties, ...res.data.results]
                // this.properties = res.data.results
                this.properties = apiRes
                this.propertiesCount = res.data
                this.nextUrlPage = res?.data?.next
                this.preUrlPage = res?.data?.previous
                console.log(category_name)
                // console.log('Query parameter search:', searchValue)
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

        // async getSearch() {
        //      const searchValue = this.$route.query.search;
        //     try {
        //         let res = await axios.get(`http://13.127.231.16/api/v1/properties/?search=${searchValue}` );
        //         // console.log(res.data.results);
        //         this.properties = res.data.results
        //         this.propertiesCount = res.data
        //         // console.log(category_name)
        //         console.log('Query parameter search:', searchValue)
        //     } catch (error) {
        //         console.error('Error fetching properties:', error);
        //     }
        // },

    },
    mounted() {
        // this.getCategory();
        // this.handleProfile();
        this.getProperties();
        // this.getSearch();
        // const searchValue = this.$route.query.search;
        // console.log('Query parameter search:', searchValue);
        // console.log(category_name)
        // console.log(this.$route.params.id)

    }

}
</script>

<style>
.iconBtn {
    color: rgb(255, 69, 0);
    border: 1px solid rgb(255, 69, 0);
    background-color: white;
    border-radius: 5px;
    padding: 3px 9px;
}

.iconBtn:hover {
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    color: darkgray;
}

button:disabled,
button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}

.cardImage {
    height: 225px !important;
}

.card-images {
    height: 50vh !important;
}

.listingPage {
    min-height: 100vh;
}

.listPageHover {
    cursor: pointer;
}

.listPageHover:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.dropdown-image {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-image:hover .dropdown-content {
    display: block;
}

.desc {
    padding: 15px;
    text-align: center;
}

@media screen and (min-width: 1080px) {
    .cardImage {
        height: 200px;
    }
}

@media screen and (min-width: 768px) {
    .cardImage {
        height: 50px;
    }
}
</style>