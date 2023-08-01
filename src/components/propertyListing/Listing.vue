<template>
    <Header />

    <div class="container listingPage">
        <div class="border-bottom border-top p-2 sticky-top">
            <div class="row g-1">
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="search Community ot building ..."
                        aria-label="First name">
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="1">Buy</option>
                        <option value="2">Rent</option>
                        <option value="3">Commercial for Rent</option>
                        <option value="4">Commercial for Sale</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Property type</option>
                        <option value="1">Apartment</option>
                        <option value="2">VIlla</option>
                        <option value="3">Penthhouse</option>
                        <option value="4">Townhouse</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Beds & Baths</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Price</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> More Filters</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
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
                    <h6>Properties for {{ properties[0]?.R_B_type }} in Turkiye</h6>
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
        <div v-if="loading">Loading...</div>
        <div class="row g-2 my-2 mx-5">
            <div class="col-md-12">
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
                                                    <span class="badge text-bg-secondary card-title">{{ items?.property_type
                                                    }}</span>
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
                                                    {{ items?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i> Bedroom
                                                </p>
                                                <p class="card-text mx-2">
                                                    {{ items?.bathrooms }} <i class="fa-solid fa-bath"></i> Bathrooms
                                                </p>
                                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                                        style="width: 30px; height: 30px;" alt=""> {{ items?.size_sqf }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <small class="text-body-secondary">Added: {{
                                                    moment(items?.created_at).startOf('hour').fromNow()
                                                }} ({{ moment(items?.updated_at).startOf('day').fromNow() }})</small>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="">
                                                    <button class="btn btn-outline-success btn-sm">
                                                        <i class="fas fa-phone fa-lg"></i>
                                                    </button>
                                                    <button class="btn btn-outline-success btn-sm mx-2">
                                                        <i class="fas fa-message fa-lg"></i>
                                                    </button>
                                                    <button class="btn btn-outline-success btn-sm">
                                                        <i class="fa-brands fa-whatsapp fa-lg"></i>
                                                    </button>
                                                    <!-- <button class="btn btn-outline-secondary btn-sm mx-2">

                                                        <i class="fas fa-heart fa-lg"></i>
                                                    </button> -->
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
            <!-- <div class="col-md-3">
                <div class="row">
                    <div class="col-12 d-md-none d-lg-block">
                        <div class="">
                            <div class="card text-dark">
                                <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp"
                                    class="card-img" alt="...">
                                <div class="card-img-overlay text-dark">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-wrap">This is a wider card with supporting text below as a
                                        natural lead-in
                                        to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small>Enquire Now</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="my-4">
            <button class="mainBtnColor bg-white me-2">Previous</button>
            <button class="mainBtnColor bg-white">Next</button>
        </div>
    </div>
    <Footer />
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import moment from 'moment'
import axios from 'axios';
export default {
    name: 'Listing',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            properties: [],
            propertiesCount: [],
            loading: false,
        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {

        async getProperties() {
            const queryParams = new URLSearchParams(window.location.search);
            let category_name = queryParams.get("R_B_type");

            if (!category_name) {
                category_name = ''
            }

            try {
                this.loading = true;
                let res = await axios.get(`https://apidev.qarbar.com/api/v1/properties/?R_B_type=${category_name}`);
                // console.log(res.data.results);
                this.properties = res.data.results
                this.propertiesCount = res.data
                console.log(category_name)
                // console.log('Query parameter search:', searchValue)
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                this.loading = false;
            }
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
.cardImage {
    height: 30vh !important;
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
</style>