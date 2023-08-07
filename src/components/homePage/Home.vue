<template>
    <div class="container mt-5">
        <!-- <h1>Qarbar Projects</h1> -->
        <div class="row g-2">
            <h5>Recent properties for {{ propertiesList[0]?.rent_sale_type }}</h5>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-md-block" v-for="item in propertiesList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type?.home_types }}</span>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                            <small class="text-body-secondary">{{ item?.title.substring(1, 15) }}</small>

                            <div class="d-flex">
                                <p class="card-text">{{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">{{ item?.amenties?.bathrooms }}<i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size_sqf }} {{ item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>

            </div>
           
            <div class="d-flex justify-content-center mt-2">
                <RouterLink to="/listing/?rent_sale_type=rent" class="mainBtnColor text-decoration-none">view more</RouterLink>
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
            <div class="col-12 col-sm-6 col-md-4 col-lg-2" v-for="item in propertiesSaleList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type?.commercial_types }}</span>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                            <small class="text-body-secondary"> {{ item?.title.substring(1, 15) }}</small>
                            <div class="d-flex">
                                <p class="card-text">
                                    {{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">
                                    {{ item?.amenties?.bathrooms }}<i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size_sqf }} {{ item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink to="/listing/?rent_sale_type=sale" class="mainBtnColor text-decoration-none">view more</RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT } from '../../utils/api'; 
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
            let finalUrl = BASE_URL + PROPERTY_END_POINT() +`?rent_sale_type=rent`;
            let res = await axios.get(finalUrl)
            this.propertiesList = res.data.results
            console.log('-----------------------------------')
            console.log(res.data.results)
            console.log('-----------------------------------')
        },
        async getPropertiesSale() {
            let finalUrl = BASE_URL + PROPERTY_END_POINT() +`?rent_sale_type=sale`;
            let res = await axios.get(finalUrl)
            this.propertiesSaleList = res.data.results
            console.log('-------------11111-----------------')
            console.log(res.data.results)
            console.log('------------1111111---------------')
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