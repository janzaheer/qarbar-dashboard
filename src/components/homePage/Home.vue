<template>
    <div class="container mt-5">
        <h1>Qarbar Projects</h1>
        <div class="row g-2">
            <p>New properties for {{ propertiesList[0]?.R_B_type }}</p>
            <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2" v-for="item in propertiesList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type }}</span>
                            <!-- <p class="card-text text-white">{{ item.property_type }}</p> -->
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <div class="d-flex justify-content-between">
                                <!-- <span class="badge text-bg-secondary">{{ item.property_type }}</span> -->
                                <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                                <small class="text-body-secondary">{{ item?.property_type }}</small>
                            </div>

                            <div class="d-flex">
                                <p class="card-text">
                                    {{ item?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-2">
                                    {{ item?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 30px;" alt=""> {{ item?.size_sqf }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>

            </div>
           
            <div class="d-flex justify-content-center mt-2">
                <RouterLink to="/listing/?R_B_type=rent" class="mainBtnColor text-decoration-none">view more</RouterLink>
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
            <p>New properties for {{ propertiesSaleList[0]?.R_B_type }}</p>
            <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2" v-for="item in propertiesSaleList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ item?.property_type }}</span>
                            <!-- <p class="card-text text-white">{{ item.property_type }}</p> -->
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <div class="d-flex justify-content-between">
                                <!-- <span class="badge text-bg-secondary">{{ item.property_type }}</span> -->
                                <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                                <div>

                                    <small class="text-body-secondary">{{ item?.property_type }}</small>
                                </div>

                            </div>
                            <div class="d-flex">
                                <p class="card-text">
                                    {{ item?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-2">
                                    {{ item?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 30px;" alt=""> {{ item?.size_sqf }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink to="/listing/?R_B_type=sale" class="mainBtnColor text-decoration-none">view more</RouterLink>
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
            let finalUrl = BASE_URL + PROPERTY_END_POINT() +`?R_B_type=rent`;
            let res = await axios.get(finalUrl)
            this.propertiesList = res.data.results
        },
        async getPropertiesSale() {
            let finalUrl = BASE_URL + PROPERTY_END_POINT() +`?R_B_type=sale`;
            let res = await axios.get(finalUrl)
            this.propertiesSaleList = res.data.results
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

</style>