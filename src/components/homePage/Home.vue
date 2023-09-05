<template>
    <div class="container mt-5">
        <div class="row g-2">
            <h5>Recent properties for {{ propertiesList[0]?.rent_sale_type }}</h5>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-md-block" v-for="item in propertiesList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type?.home_types || item?.property_type?.plot_types || item?.property_type?.commercial_types }}</span>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                            <small class="text-body-secondary">{{ item?.title.substring(0, 15) }}</small>

                            <div class="d-flex">
                                <p class="card-text">{{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">{{ item?.amenties?.bathrooms }}<i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size }} {{ item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink :to="{ name: 'Listing', query: { params: 'rent_sale_type=rent' } }" class="mainBtnColor text-decoration-none">view more</RouterLink>
            </div>
            <!-- <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge text-bg-secondary card-title">Dubai</span>
                            <p class="card-text text-white">Downtown</p>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <p class="card-text">108 new properties for rent.</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge text-bg-secondary card-title">Dubai</span>
                            <p class="card-text text-white">The Palm jumeriah</p>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <p class="card-text">45 new properties for rent.</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge text-bg-secondary card-title">Abu Dhabi</span>
                            <p class="card-text text-white">AL Reem Island</p>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <p class="card-text">151 new properties for rent.</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge text-bg-secondary card-title">Dubai</span>
                            <p class="card-text text-white">Business Bey</p>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <p class="card-text">76 new properties for rent.</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/detailPage" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge text-bg-secondary card-title">Abu Dhabi</span>
                            <p class="card-text text-white">Jumeriah Village</p>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <p class="card-text">75 new properties for rent.</p>
                        </div>
                    </div>
                </RouterLink>
            </div> -->
        </div>
        <div class="row mt-4 g-2">
            <h5>Recent properties for {{ propertiesSaleList[0]?.rent_sale_type }}</h5>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-md-block" v-for="item in propertiesSaleList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type?.home_types || item?.property_type?.plot_types || item?.property_type?.commercial_types}}</span>
                            <!-- <span class="badge badgeColor card-title">{{ handlePropertyType(item.property_type?.home_types, item.property_type?.plot_types, item.property_type?.commercial_types) || 'Unknown' }}</span> -->
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                            <small class="text-body-secondary"> {{ item?.title.substring(0, 15) }}</small>
                            <div class="d-flex">
                                <p class="card-text">
                                    {{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">
                                    {{ item?.amenties?.bathrooms }}<i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size }} {{ item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink :to="{ name: 'Listing', query: { params: 'rent_sale_type=sale' } }" class="mainBtnColor text-decoration-none">view more</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT,API_VERSION } from '../../utils/api'; 
export default {
    name: 'Home',
    data() {
        return {
            propertiesList: [],
            propertiesSaleList: [],
        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {
        async getPropertiesRent() {
            let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() +`?rent_sale_type=rent`;
            let res = await axios.get(finalUrl)
            this.propertiesList = res.data.results
            console.log('t',res.data.results)
        },
        async getPropertiesSale() {
            let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() +`?rent_sale_type=sale`;
            let res = await axios.get(finalUrl)
            this.propertiesSaleList = res.data.results
        },
        async handlePropertyType(home_types, plot_types, commercial_types){
            if (home_types == 'flat') {
                return 'flat'
             }
             if (home_types == 'house') {
                 return 'house'
             }
             if (home_types == 'villa') {
                 return 'villa'
             }
             if (home_types == 'room') {
                 return 'room'
            }
            if (home_types == 'upper') {
                return 'upperPortion'
             }
             if (home_types == 'lower') {
                return 'lower'
             }
             if (home_types == 'farm') {
                return 'farm'
             }
            if (home_types == 'penthouse') {
                return 'penthouse'
             }
             if (commercial_types == 'office') {
                return 'office'
             }
             if (commercial_types == 'shop') {
                return 'shop'
             }
             if (commercial_types == 'wherehouse') {
                return 'wherehouse'
             }
             if (commercial_types == 'building') {
                 return 'building'
             }
             if (commercial_types == 'factory') {
                 return 'factory'
             }
             if (plot_types == 'residential') {
                 return 'residential'
             }
             if (plot_types == 'commercial') {
                 return 'commercial'
             }
             if (plot_types == 'industiral') {
                 return 'industiral'
            }
             if (plot_types == 'agricultural') {
                 return 'agricultural'
             }
            if (plot_types == 'plotFile') {
                 return 'plotFile'
             }
             if (plot_types == 'plotFarm') {
                 return 'plotFarm'
             }
           
           
            return 'Unknown';
                // if (h) {
                //     console.log('home',h)
                   
                // }
                // if (p) {
                //     console.log('p',p)
                   
                // }
                // if (c) {
                //     console.log('c',c)
                   
                // }

        }
    },
    mounted() {
        this.getPropertiesSale();
        this.getPropertiesRent();
    }
}
</script>
<style>
.badgeColor{
    background-color: orangered;
}
p,
.p {
    margin-bottom: 0 !important;
}

h6,
.h6 {
    font-size: 1rem;
    margin-bottom: 0 !important;
}

.productBg {
    cursor: pointer;
}

.productBg:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.title-text{
    font-weight: 300;
}
</style>
