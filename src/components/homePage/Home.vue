<template>
    <div class="container mt-5">
        <div class="row g-2">
            <h5>Exclusive properties for {{ propertiesList[0]?.rent_sale_type }}</h5>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-md-block" v-for="item in propertiesList.slice(0, 6)"
                :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ handlePropertyType(item.property_type?.home_types,
                                item.property_type?.plot_types, item.property_type?.commercial_types) }}</span>
                                 <span v-if="item?.available == false" class="badge bg-secondary card-text ms-md-1">Sold</span>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                                <span class="textSizeClass"><i class="fa-regular fa-eye fa-xs"></i> {{ item?.agent?.views_count }}</span>
                            </div>
                            <small class="text-body-secondary">{{ item?.title.substring(0, 15) }}</small>
                            <div class="d-flex textSizeClass">
                                <p class="card-text">{{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">{{ item?.amenties?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size }} {{
                                            item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink :to="{ name: 'Listing', query: { params: 'rent_sale_type=rent' } }"
                    class="mainBtnColor text-decoration-none">view more</RouterLink>
            </div>
        </div>
        <div class="row mt-4 g-2">
            <h5>Exclusive properties for {{ propertiesSaleList[0]?.rent_sale_type }}</h5>
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-md-block"
                v-for="item in propertiesSaleList.slice(0, 6)" :key="item.id">
                <RouterLink :to="'/detailPage/' + item.id" class="text-decoration-none">
                    <div class="card text-dark productBg">
                        <img :src="item?.media[0].image_url" class="card-img w-100" width="180" height="180" alt="...">
                        <div class="card-img-overlay">
                            <span class="badge badgeColor card-title">{{ handlePropertyType(item.property_type?.home_types,
                                item.property_type?.plot_types, item.property_type?.commercial_types) }}</span>
                                <span v-if="item?.available == false" class="badge bg-secondary card-text ms-md-1">Sold</span>
                        </div>
                        <div class="card-body bg-white text-dark rounded">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="card-text">Rs {{ item?.total_price }}</h6>
                                <span class="textSizeClass"><i class="fa-regular fa-eye fa-xs"></i> {{ item?.agent?.views_count }}</span>
                            </div>
                            <small class="text-body-secondary"> {{ item?.title.substring(0, 15) }}</small>
                            <div class="d-flex textSizeClass">
                                <p class="card-text">
                                    {{ item?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                </p>
                                <p class="card-text mx-1">
                                    {{ item?.amenties?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 20px;" alt="">{{ item?.property_type?.size }} {{
                                            item?.property_type?.unit_types }}</p>
                            </div>
                            <small class="text-body-secondary">Added:
                                {{ moment(item?.created_at).startOf('hour').fromNow() }}</small>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <RouterLink :to="{ name: 'Listing', query: { params: 'rent_sale_type=sale' } }"
                    class="mainBtnColor text-decoration-none">view more</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL, PROPERTY_END_POINT, API_VERSION } from '../../utils/api';
import { RentPropertiesList, SalePropertiesList } from '../../utils/Properties_Service'
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
            let value = `?rent_sale_type=rent`
            let respData = await RentPropertiesList(value)
            this.propertiesList = respData.results
        },
        async getPropertiesSale() {
            let value = `?rent_sale_type=sale`
            try {
                const respData = await SalePropertiesList(value)
                this.propertiesSaleList = respData.results
            } catch (error) {
                console.log(error)
            }
        },
        handlePropertyType(home_types, plot_types, commercial_types) {
            if (home_types == 'flat') {
                return 'Flat'
            }
            if (home_types == 'house') {
                return 'House'
            }
            if (home_types == 'villa') {
                return 'Villa'
            }
            if (home_types == 'room') {
                return 'Room'
            }
            if (home_types == 'upper_portion') {
                return 'Upper-Portion'
            }
            if (home_types == 'lower_portion') {
                return 'Lower-Portion'
            }
            if (home_types == 'farm_house') {
                return 'Farm-House'
            }
            if (home_types == 'pent_house') {
                return 'PentHouse'
            }
            if (commercial_types == 'office') {
                return 'Office'
            }
            if (commercial_types == 'shop') {
                return 'Shop'
            }
            if (commercial_types == 'warehouse') {
                return 'Wardrobe'
            }
            if (commercial_types == 'building') {
                return 'Building'
            }
            if (commercial_types == 'factory') {
                return 'Factory'
            }
            if (plot_types == 'residetial_plot') {
                return 'Residential-Plot'
            }
            if (plot_types == 'commercial_plot') {
                return 'Commercial-Plot'
            }
            if (plot_types == 'industrial_land') {
                return 'Industrial-Land'
            }
            if (plot_types == 'agricultural_land') {
                return 'Agricultural-Land'
            }
            if (plot_types == 'plot_file') {
                return 'Plot-File'
            }
            if (plot_types == 'plot_form') {
                return 'Plot-Form'
            }
            return 'Unknown';
        },
    },
    mounted() {
        this.getPropertiesSale();
        this.getPropertiesRent();
    }
}
</script>
<style>
.badgeColor {
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

.title-text {
    font-weight: 300;
}

.textSizeClass {
    font-size: 12px;
    margin-top: 5px;
}
</style>
