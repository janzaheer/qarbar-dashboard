<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue';
import HomePropertyType from '../addAdvertisement/components/HomePropertyType.vue';
import PlotPropertyType from '../addAdvertisement/components/PlotPropertyType.vue';
import CommercialPropertyType from '../addAdvertisement/components/CommercialPropertyType.vue';
import PropertyInfo from '../addAdvertisement/components/PropertyInfo.vue';
import ContactInfo from '../addAdvertisement/components/ContactInfo.vue';
import PriceAndArea from '../addAdvertisement/components/PriceAndArea.vue';
import Installment from '../addAdvertisement/components/Installment.vue';
import CityLocationArea from '../addAdvertisement/components/CityLocationArea.vue';
import FeatureAndAmenities from '../addAdvertisement/components/FeatureAndAmenities.vue';
import UploadImages from '../addAdvertisement/components/UploadImages.vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
import { BASE_URL, API_VERSION, PROPERTY_END_POINT, PROPERTY_DETAIL_END_POINT } from '../../utils/api';
export default {
    name: 'UpdateAdvertisement',
    components: {
        AgentDashboardHeader,
        AgentDashboardFooter,
        HomePropertyType,
        PlotPropertyType,
        CommercialPropertyType,
        PropertyInfo,
        ContactInfo,
        PriceAndArea,
        Installment,
        CityLocationArea,
        FeatureAndAmenities,
        UploadImages,
    },
    data() {
        return {
            agent_id: '',
            user_id: '',
            title: '',
            receivedHomePropertyVal: '',
            receivedPlotPropertyVal: null,
            receivedCommercialPropertyVal: null,
            //....................
            sellChecked: true,
            rentChecked: false,
            sellvalue: '',
            rentvalue: '',
            //....................
            propertyType: 'home',
            //....................
            buyCHecked: true,
            loanCHecked: false,
            //....................
            receivedSelectedCity: '',
            receivedSelectedLocation: '',
            receivedSelectedArea: '',
            // Price and Area
            receivedAreaUnit: '',
            receivedAreaTypes: '',
            ReceivedTotalPrice: '',
            // Installment section
            receivedAdvanceAmount: 0,
            receivedNofInstallments: 0,
            receivedMonthlyInstallments: 0,
            receivedReadyPossession: false,
            // Feature & Amenities
            receivedBedRooms: '',
            receivedBathRooms: '',
            // Property Information
            receivedTitle: '',
            receivedDescription: '',
            // Property Images Upload
            receivedUploadedImage: '',
            // Contact Information
            receivedEmailAddress: '',
            receivedMobileNumber: '',
            receivedLandlineNumber: '',
            receivedSecondaryNumber: '',
            isCHecked: false, // for Plot check
            // amenities
            receivedBuilt_in_year: '',
            receivedBuilt_in_wardrobes: '',
            receivedSecurity: '',
            receivedKitchen_appliances: '',
            receivedBalcony: '',
            receivedFarmhouse: '',
            receivedLower_portion: '',
            receivedElectricity_backup: '',
            receivedCoverParking: '',
            receivedInternet: '',
            receivedParking_space: '',
            receivedFurnished_unfurnished: '',
            receivedLobby_in_building: '',
            receivedFloor: '',
            receivedKitchen: '',
            // rooms
            receivedStudy_room: '',
            receivedLaundry_room: '',
            receivedMaid_room: '',
            receivedStore_room: '',
            receivedDrawing_room: '',
            receivedLounge_sitting_area: '',
            receivedGym: '',
            // community
            receivedKids_play_area: '',
            receivedMosque: '',
            receivedCommunity_lawn_garden: '',
            // healthcare
            receivedMedical_center: '',
            receivedSwimming_pool: '',
            // near Location
            receivedNear_by_school: '',
            receivedNear_by_hospital: '',
            receivedNear_by_shopping_mall: '',
            receivedOther_nearby_palces: '',
            receivedDistance_from_airport: 0,
            receivedOther_description: '',
            ////////////////////////////
            selectedPropertyType: null,
            errorMsg: '',
            errorDesc: '',
            errorEmail: '',
            errorMob: '',
            errorLand: '',
            errorSec: '',
            errorAreaSize: '',
            errorPrice: '',
            errorAdvanceAmount: '',
            errorNofInstallment: '',
            errorMOinstallment: '',
            errorLocation: '',
            errorAreaNumber: '',
            errorBeds: '',
            errorBaths: '',
            errorKitchen: '',
            errorFloor: '',

        };
    },
    created() {
        this.getProperty(); // Call the API request when the component is created
    },
    methods: {
        async getProperty() {
            try {
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + this.$route.params.id + `${PROPERTY_DETAIL_END_POINT()}`
                let res = await axios.get(finalUrl)
                console.log('update', res.data)
                // info
                this.receivedTitle = res.data.title
                this.receivedDescription = res.data.description
                // Area city
                this.receivedAreaUnit = res.data.property_type.size
                this.receivedAreaTypes = res.data.property_type.unit_types
                this.ReceivedTotalPrice = res.data.total_price
                this.receivedSelectedCity = res.data.area.city.city_name
                // contact
                this.receivedEmailAddress = res.data.email
                this.receivedMobileNumber = res.data.phone
                this.receivedLandlineNumber = res.data.landline
                this.receivedSecondaryNumber = res.data.secondry_phone
                // installment
                this.receivedAdvanceAmount = res.data.installment.advance_amount
                this.receivedNofInstallments = res.data.installment.no_of_inst
                this.receivedMonthlyInstallments = res.data.installment.monthly_inst
                this.receivedReadyPossession = res.data.installment.ready_for_possession
                // Amenities
                this.receivedBathRooms = res.data.amenties.bathrooms
                this.receivedBedRooms = res.data.amenties.bedrooms
                this.receivedKitchen = res.data.amenties.kitchen
                this.receivedFloor = res.data.amenties.floors
                this.receivedBuilt_in_wardrobes = res.data.amenties.built_in_wardrobes
                this.receivedBuilt_in_year = res.data.amenties.built_in_year
                this.receivedCommunity_lawn_garden = res.data.amenties.community_lawn_garden
                this.receivedCoverParking = res.data.amenties.covered_parking
                this.receivedDistance_from_airport = res.data.amenties.distance_from_airport
                this.receivedDrawing_room = res.data.amenties.drawing_room
                this.receivedElectricity_backup = res.data.amenties.electricity_backup
                this.receivedFarmhouse = res.data.amenties.Farmhouse
                this.receivedFurnished_unfurnished = res.data.amenties.furnished_unfurnished
                this.receivedGym = res.data.amenties.gym
                this.receivedInternet = res.data.amenties.internet
                this.receivedKids_play_area = res.data.amenties.kids_play_area
                this.receivedKitchen_appliances = res.data.amenties.kitchen_appliances
                this.receivedLaundry_room = res.data.amenties.laundry_room
                this.receivedLobby_in_building = res.data.amenties.lobby_in_building
                this.receivedLounge_sitting_area = res.data.amenties.lounge_sitting_area
                this.receivedLower_portion = res.data.amenties.lower_portion
                this.receivedMaid_room = res.data.amenties.maid_room
                this.receivedMedical_center = res.data.amenties.medical_center
                this.receivedMosque = res.data.amenties.mosque
                this.receivedNear_by_school = res.data.amenties.near_by_school
                this.receivedNear_by_hospital = res.data.amenties.near_by_hospital
                this.receivedNear_by_shopping_mall = res.data.amenties.near_by_shopping_mall
                this.receivedOther_description = res.data.amenties.other_description
                this.receivedOther_nearby_palces = res.data.amenties.other_nearby_palces
                this.receivedParking_space = res.data.amenties.parking_space
                this.receivedSecurity = res.data.amenties.security
                this.receivedStore_room = res.data.amenties.store_room
                this.receivedStudy_room = res.data.amenties.study_room
                this.receivedSwimming_pool = res.data.amenties.swimming_pool
                // Property Type
                this.receivedHomePropertyVal = res.data.property_type.home_types
                this.CommercialPropertyType = res.data.property_type.commercial_types
                this.PlotPropertyType = res.data.property_type.plot_types
               this.receivedUploadedImage = res.data.media
                this.updateForm = res.data
            } catch (error) {
                console.log(error)
            }

        },
        async update() {
            const payload = {
                media: this.receivedUploadedImage,
                title: this.receivedTitle,
                phone: this.receivedMobileNumber,
                landline: this.receivedLandlineNumber,
                secondry_phone: this.receivedSecondaryNumber,
                email: this.receivedEmailAddress,
                rent_sale_type: this.R_S_Value(),
                area: this.receivedSelectedCity, // area-id
                agent: 1102, // remaining agent id is here after login agent
                amenties: {
                    other_nearby_palces: this.receivedOther_nearby_palces,
                    bedrooms: this.receivedBedRooms,
                    distance_from_airport: this.receivedDistance_from_airport,
                    built_in_year: this.receivedBuilt_in_year,
                    bathrooms: this.receivedBathRooms,
                    kitchen: this.receivedKitchen,
                    floors: this.receivedFloor,
                    maid_room: this.receivedMaid_room,
                    built_in_wardrobes: this.receivedBuilt_in_wardrobes,
                    kitchen_appliances: this.receivedKitchen_appliances,
                    balcony: this.receivedBalcony,
                    lower_portion: this.receivedLower_portion,
                    Farmhouse: this.receivedFarmhouse,
                    electricity_backup: this.receivedElectricity_backup,
                    furnished_unfurnished: this.receivedFurnished_unfurnished,
                    covered_parking: this.receivedCoverParking,
                    lobby_in_building: this.receivedLobby_in_building,
                    security: this.receivedSecurity,
                    parking_space: this.receivedParking_space,
                    drawing_room: this.receivedDrawing_room,
                    study_room: this.receivedStudy_room,
                    laundry_room: this.receivedLaundry_room,
                    store_room: this.receivedStore_room,
                    gym: this.receivedGym,
                    lounge_sitting_area: this.receivedLounge_sitting_area,
                    internet: this.receivedInternet,
                    swimming_pool: this.receivedSwimming_pool,
                    mosque: this.receivedMosque,
                    kids_play_area: this.receivedKids_play_area,
                    medical_center: this.receivedMedical_center,
                    community_lawn_garden: this.receivedCommunity_lawn_garden,
                    near_by_school: this.receivedNear_by_school,
                    near_by_hospital: this.receivedNear_by_hospital,
                    near_by_shopping_mall: this.near_by_shopping_mall,
                    other_description: this.receivedOther_description,
                },
                property_type: this.checkValueH(),
                property_location: {
                    latitude: 25.123456, // remaining
                    longitude: 67.987654 // remaining
                },
                installment: {
                    advance_amount: this.receivedAdvanceAmount,
                    no_of_inst: this.receivedNofInstallments,
                    monthly_inst: this.receivedMonthlyInstallments,
                    ready_for_possession: this.receivedReadyPossession,
                },
                available: true,
                description: this.receivedDescription,
                total_price: this.ReceivedTotalPrice,
            }
            try {
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + this.$route.params.id
                let res = await axios.patch(finalUrl, payload)
                console.log('update.form', res)
            } catch (error) {
                console.log(error)
            }
            console.log('payload', payload)
            // console.log('update-data', this.title.title)
        },
        handleHomePropertyVal(data) {
            this.receivedHomePropertyVal = data
        },
        handlePropertyVal(data) {
            this.receivedPlotPropertyVal = data
        },
        handleCommercialPropertyVal(data) {
            this.receivedCommercialPropertyVal = data
        },
        handleCItyData(data) {
            this.receivedSelectedCity = data
        },
        handleAreaData(data) {
            this.receivedSelectedArea = data
        },
        handleLocationData(data) {
            this.receivedSelectedLocation = data
        },
        handleImageUploaded(data) {
            this.receivedUploadedImage = data;
            console.log('img', this.receivedUploadedImage)
        },
        handleBedRoomData(data) {
            this.receivedBedRooms = data
        },
        handleBathRoomData(data) {
            this.receivedBathRooms = data
        },
        handleTitleData(data) {
            this.receivedTitle = data
        },
        handleDescData(data) {
            this.receivedDescription = data
        },
        handleEmailData(data) {
            this.receivedEmailAddress = data
        },
        handleMobNumData(data) {
            this.receivedMobileNumber = data
        },
        handleLandNumData(data) {
            this.receivedLandlineNumber = data
        },
        handleSecondNumData(data) {
            this.receivedSecondaryNumber = data
        },
        handleAreaUnitData(data) {
            this.receivedAreaUnit = data
        },
        handleAreaTypeData(data) {
            this.receivedAreaTypes = data
        },
        handlePriceData(data) {
            this.ReceivedTotalPrice = data
        },
        handleAdvanceAmount(data) {
            this.receivedAdvanceAmount = data
        },
        handleNoOfInstallmentData(data) {
            this.receivedNofInstallments = data
        },
        handleMonthlyInstallment(data) {
            this.receivedMonthlyInstallments = data
        },
        handleRpData(data) {
            this.receivedReadyPossession = data
        },
        R_S_Value() {
            if (this.sellvalue) {
                return this.sellvalue
            }
            if (this.rentvalue) {
                return this.rentvalue
            }
            return 'sale';
        },
        checkValueH() {
            // Determine the selected property type (home, plot, commercial)
            const selectedPropertyType = this.selectedPropertyType; // You need to implement this function
            // Create an object based on the selected property type
            let propertyTypeObject = {};

            if (selectedPropertyType === 'home') {
                propertyTypeObject.home_types = this.receivedHomePropertyVal;
            } else if (selectedPropertyType === 'plot') {
                propertyTypeObject.plot_types = this.receivedPlotPropertyVal;
            } else if (selectedPropertyType === 'commercial') {
                propertyTypeObject.commercial_types = this.receivedCommercialPropertyVal;
            }
            // Add other common properties
            propertyTypeObject.unit_types = this.receivedAreaTypes;
            propertyTypeObject.size = this.receivedAreaUnit;
            propertyTypeObject.other_description = "Property type description here"; // remaining
            console.log('t', propertyTypeObject)
            console.log('h', this.receivedHomePropertyVal)
            return propertyTypeObject;
        },
        selectPropertyType(type) {
            // Set the selected property type
            this.selectedPropertyType = type;
        },
        toastSuccess() {
            createToast('Submit Successfully',
                {
                    type: 'success',
                    transition: 'zoom',
                })
        },
        toastNetworkError() {
            createToast('network-error',
                {
                    type: 'danger',
                    transition: 'zoom',
                })
        },
        ////////////////////////////////
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
            if (this.sellChecked = true) {
                this.isCHecked = false
            }
            if (this.sellChecked = true) {
                this.sellvalue = 'sale'
            }
        },
        handleRentView() {
            this.rentChecked = true;
            this.sellChecked = false;
            if (this.rentChecked = true) {
                this.isCHecked = true
            }
            if (this.rentChecked = true) {
                this.rentvalue = 'rent'
            }
        },
        handleBuiltYear(data) {
            this.receivedBuilt_in_year = data
        },
        handleBuiltInWhaedrobes(data) {
            this.receivedBuilt_in_wardrobes = data
        },
        handleSecurity(data) {
            this.receivedSecurity = data
        },
        handleKitchenAppliance(data) {
            this.receivedKitchen_appliances = data
        },
        handleBalcony(data) {
            this.receivedBalcony = data
        },
        handleFarmHouse(data) {
            this.receivedFarmhouse = data
        },
        handleLowerPortion(data) {
            this.receivedLower_portion = data
        },
        handleElectricityBackup(data) {
            this.receivedElectricity_backup = data
        },
        handleCoveredParking(data) {
            this.receivedCoverParking = data
        },
        handleInternet(data) {
            this.receivedInternet = data
        },
        handleParkingSpace(data) {
            this.receivedParking_space = data
        },
        handleFurnished(data) {
            this.receivedFurnished_unfurnished = data
        },
        handleLobbyBuilding(data) {
            this.receivedLobby_in_building = data
        },
        handleFloor(data) {
            this.receivedFloor = data
        },
        handleKitchen(data) {
            this.receivedKitchen = data
        },
        handleStudyRoom(data) {
            this.receivedStudy_room = data
        },
        handleLaundryRoom(data) {
            this.receivedLaundry_room = data
        },
        handleMaidRoom(data) {
            this.receivedMaid_room = data
        },
        handleStoreRoom(data) {
            this.receivedStore_room = data
        },
        handleDrawingRoom(data) {
            this.receivedDrawing_room = data
        },
        handleLoungeArea(data) {
            this.receivedLounge_sitting_area = data
        },
        handleGym(data) {
            this.receivedGym = data
        },
        handleKidsPlayArea(data) {
            this.receivedKids_play_area = data
        },
        handleMosque(data) {
            this.receivedMosque = data
        },
        handleCommunityLawnGarden(data) {
            this.receivedCommunity_lawn_garden = data
        },
        handleMedicalCenter(data) {
            this.receivedMedical_center = data
        },
        handleSwimmingPool(data) {
            this.receivedSwimming_pool = data
        },
        handleNearSchool(data) {
            this.receivedNear_by_school = data
        },
        handleNearHospital(data) {
            this.receivedNear_by_hospital = data
        },
        handleNearShoppingMall(data) {
            this.receivedNear_by_shopping_mall = data
        },
        handleOtherPalces(data) {
            this.receivedOther_nearby_palces = data
        },
        handleDistanceAirport(data) {
            this.receivedDistance_from_airport = data
        },
        handleOtherDesc(data) {
            this.receivedOther_description = data
        },
        // async simple() {
        //     const headers = {
        //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODA2NjU1ZGI1ZDVkZGM5OTVkNDc4OGRjMTE0ZDdjYmY2MjAxNjg4MTk5NDlhNmZmZDQ1ZjgxMDhhMWMyNTQzMzNjNDk3MmE5YzYwMWI2ZWIiLCJpYXQiOjE2OTcwMTc2NjEuMDAzODQ2LCJuYmYiOjE2OTcwMTc2NjEuMDAzODUyLCJleHAiOjE3Mjg2NDAwNjAuOTgxMTA4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LkiqtbhPm2n38mokxv0qir5WSRcIHmzQnF4tO3-iMOl2UVOtiU-jiCaSv2kHXa6JmD01utIiAySC1UkxP21RSvMkaHvQMM6kmqifig02b75SQR_btoAvJo5kw54ehg_s1XmOML3_Kb97FfBqsoShZpf_sMGdVkEhSLPv3vLHSelNmbnf2qY08cPvYx6SjmquNo8Nv9kJpDHgjjiLJ8Kar-XxmXAFryNnegyIQJSUoESkudpfayfad6W74n6OQxWYjoD0-4BB11X7yur8FSbwYzsHVALCqiYh-qqDlB99SLNKmNyBOL68IJ7qtVyT0s-KwbKfOGrbsJjxOAuU1uowJO_HemkHPLSfz775xFajnjMG2OhhUG48Glk9eu6j9dc3SY-4AUzAipuY2SbFpytr6XM0VZjtI4viACcxMd5s2lsTj2PE09zxMWK3PF-Fqz4-NKHFsp-jJgeXFYePvY8b8LuAVDC6ADno0PN_BSCS2IquCJ9dLam32sEpHsy6tsujrklvpplAPvImFQkv-3j7fzIU5WPQzwrNqmy1K5axMLE_N91c6C46aZL2WkvfV7mwjfFuE_Vkj54J5j-AiTfLQZituGnfuK-1liAi8CZ9YwW26ztC9wn21ffEDaso4b7pd1ACFQVfhJ2g1uzhOuMKYwPMkVeJAMq5sUTs95vgmJE"
        //     };
        //     try {
        //         let res = await axios.get("http://34.67.187.197/api/agents?page=1&size=2&ipaddress=192.168.1.121-192.168.1.123&city=Karachi&organization=Slogr&",
        //             { headers })
        //         console.log('data', res)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
    },
    mounted() {
        // console.log(this.$route.params.id)
        // console.log(this.$route.params.id)
        this.agent_id = localStorage.getItem('agent_id');
        this.user_id = localStorage.getItem('user_id')
        // this.simple()
        // console.log('image',this.receivedUploadedImage)
    }
}
</script>

<style></style>

<template>
    <AgentDashboardHeader />
    <div class="container-fluid AgentDashboardHeight">
        <div class="my-2">
            <img src="../../assets/webBanner1.jpg" class="img-thumbnail" alt="...">
        </div>
        <div class="container my-5">
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <p>{{ this.receivedAreaUnit }}</p>
                    <br>
                    <p>{{ this.receivedAreaTypes }}</p>
                    <br>
                    <p>{{ this.ReceivedTotalPrice }}</p>
                    <p>{{ this.receivedSelectedCity }}</p>
                    <p>{{ this.receivedHomePropertyVal }}</p>
                    <input type="text" class="form-control" name="title" v-model="receivedTitle">
                    <div class="row d-flex justify-content-around">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-house-circle-check fa-2xl" style="color: rgb(255, 69, 0);"></i>
                            <h5 class="mt-2">Select Purpose And Location</h5>
                        </div>
                        <div class="col-6">
                            <button
                                :class="sellChecked ? 'selectedButtonColor ButtonColor me-2' : 'unSelectedButtonColor ButtonColor me-2'"
                                v-on:click="handleSellView">
                                <i class="fa-solid fa-house-circle-check"></i> Sell</button>
                            <button
                                :class="rentChecked ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                                v-on:click="handleRentView">
                                <i class="fa-solid fa-house-lock"></i> Rent</button>
                            <div class="my-3">
                                <h4>Select Property Type</h4>
                                <div>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane" type="button" role="tab"
                                                aria-controls="home-tab-pane" aria-selected="true"
                                                @click="selectPropertyType('home')">
                                                Home
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                                aria-controls="profile-tab-pane" aria-selected="false"
                                                @click="selectPropertyType('plot')">
                                                Plot
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                                aria-controls="contact-tab-pane" aria-selected="false"
                                                @click="selectPropertyType('commercial')">
                                                Commercial
                                            </button>
                                        </li>
                                    </ul>
                                    <div class="tab-content mt-4" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabIndex="0">
                                            <HomePropertyType @childDataHomePropertyTypeVal="handleHomePropertyVal"
                                                :initialHome="receivedHomePropertyVal" />
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabIndex="0">
                                            <div>
                                                <PlotPropertyType @childDataPlotPropertyTypeVal="handlePropertyVal"
                                                    :isCHecked="isCHecked" />
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                            aria-labelledby="contact-tab" tabIndex="0">
                                            <div>
                                                <CommercialPropertyType
                                                    @childDataCommercialPropertyTypeVal="handleCommercialPropertyVal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CityLocationArea @ChildToParentSelectedCity="handleCItyData"
                                    @ChildToParentSelectLocation="handleLocationData"
                                    @ChildToParentSelectArea="handleAreaData" :errorLocation="this.errorLocation"
                                    :errorAreaNumber="this.errorAreaNumber" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PriceAndArea @ChildToParentAreaUnitData="handleAreaUnitData"
                    @ChildToParentAreaTypeData="handleAreaTypeData" @ChildToParentTotalPriceData="handlePriceData"
                    :errorAreaSize="this.errorAreaSize" :errorPrice="this.errorPrice"
                    :initialAreaTypeData="receivedAreaTypes" :initialAreaUnitData="receivedAreaUnit.toString()"
                    :initialTotalPriceData="ReceivedTotalPrice.toString()" />
                <div class="" v-if="sellChecked == true">
                    <Installment @ChildToParentAdvanceAmountData="handleAdvanceAmount"
                        @ChildToParentNofInstallmentsData="handleNoOfInstallmentData"
                        @ChildToParentMonthlyInstallmentsData="handleMonthlyInstallment"
                        @ChildToParentReadyForPossessionData="handleRpData" :errorAdvanceAmounts="this.errorAdvanceAmount"
                        :errorNofInstallments="this.errorNofInstallment" :errorMOinstallments="this.errorMOinstallment"
                        :initialAdvance="receivedAdvanceAmount.toString()"
                        :initialNoInst="receivedNofInstallments.toString()"
                        :initialMonthly="receivedMonthlyInstallments.toString()"
                        :initialRtP="receivedReadyPossession.toString()" />
                </div>
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <FeatureAndAmenities @ChildToParentBedRoomData="handleBedRoomData"
                    @ChildToParentBathRoomData="handleBathRoomData" @childDataBuiltInYear="handleBuiltYear"
                    @childDataBuiltInWhaedrobes="handleBuiltInWhaedrobes" @childDataSecurity="handleSecurity"
                    @childDataKitchenAppliance="handleKitchenAppliance" @childDataBalcony="handleBalcony"
                    @childDataFarmHouse="handleFarmHouse" @childDataLowerPortion="handleLowerPortion"
                    @childDataElectricityBackup="handleElectricityBackup" @childDataCoveredParking="handleCoveredParking"
                    @childDataInternet="handleInternet" @childDataParkingSpace="handleParkingSpace"
                    @childDataFurnished="handleFurnished" @childDataLobbyBuilding="handleLobbyBuilding"
                    @childDataFloor="handleFloor" @childDataKitchen="handleKitchen" @childDataStudyRoom="handleStoreRoom"
                    @childDataLaundryRoom="handleLaundryRoom" @childDataMaidRoom="handleMaidRoom"
                    @childDataStoreRoom="handleStoreRoom" @childDataDrawingRoom="handleDrawingRoom"
                    @childDataLoungeArea="handleLoungeArea" @childDataGym="handleGym"
                    @childDataKidsPlayArea="handleKidsPlayArea" @childDataMosque="handleMosque"
                    @childDataCommunityLawnGarden="handleCommunityLawnGarden" @childDataMedicalCenter="handleMedicalCenter"
                    @childDataSwimmingPool="handleSwimmingPool" @childDataNearSchool="handleNearSchool"
                    @childDataNearHospital="handleNearHospital" @childDataNearShoppingMall="handleNearShoppingMall"
                    @childDataOtherPalces="handleOtherPalces" @childDataDistanceAirport="handleDistanceAirport"
                    @childDataOtherDesc="handleOtherDesc" :errorBaths="this.errorBaths" :errorBeds="this.errorBeds"
                    :errorKitchen="this.errorKitchen.toString()" :errorFloor="this.errorFloor.toString()"
                    :initialBath="receivedBathRooms.toString()" :initialBed="receivedBedRooms.toString()"
                    :initialKitchen="receivedKitchen.toString()" :initialFloor="receivedFloor.toString()"
                    :initialWard="receivedBuilt_in_wardrobes.toString()" :initialYear="receivedBuilt_in_year.toString()"
                    :initialCommunity="receivedCommunity_lawn_garden.toString()"
                    :initialCover="receivedCoverParking.toString()"
                    :initialAirport="receivedDistance_from_airport.toString()"
                    :initialDrawing="receivedDrawing_room.toString()"
                    :initialElecBekup="receivedElectricity_backup.toString()" :initialFarm="receivedFarmhouse"
                    :initialFur="receivedFurnished_unfurnished" :initialGym="receivedGym.toString()"
                    :initialInter="receivedInternet.toString()" :initialKids="receivedKids_play_area.toString()"
                    :initialKitApliance="receivedKitchen_appliances.toString()"
                    :initialLaoundry="receivedLaundry_room.toString()"
                    :initailLounge="receivedLounge_sitting_area.toString()" :initialLower="receivedLower_portion.toString()"
                    :initialMaid="receivedMaid_room.toString()" :initialMedical="receivedMedical_center.toString()"
                    :initialMos="receivedMosque.toString()" :initialHos="receivedNear_by_hospital.toString()"
                    :initialSchool="receivedNear_by_school.toString()"
                    :initialMall="receivedNear_by_shopping_mall.toString()" :initialODesc="receivedOther_description"
                    :initialPlace="receivedOther_nearby_palces" :initialParSpace="receivedParking_space.toString()"
                    :initialSecu="receivedSecurity.toString()" :initialStore="receivedStore_room.toString()"
                    :initialStudy="receivedStudy_room" :initialSwim="receivedSwimming_pool.toString()"
                    :initialLobby="receivedLobby_in_building.toString()" />
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PropertyInfo @ChildToParentTitleData="handleTitleData" @ChildToParentDescData="handleDescData"
                    :titleError="this.errorMsg" :descError="this.errorDesc" :initialTitle="receivedTitle"
                    :initialDescription="receivedDescription" />
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <UploadImages @ChildToParentImageUploadedData="handleImageUploaded" 
                :uploadedImages="receivedUploadedImage" />
            </div>
            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <ContactInfo @ChildToParentEmailData="handleEmailData" @ChildToParentMobNumData="handleMobNumData"
                    @ChildToParentLandNumData="handleLandNumData" @ChildToParentSecondNumData="handleSecondNumData"
                    :emailError="this.errorEmail" :mobError="this.errorMob" :landError="this.errorLand"
                    :secError="this.errorSec" :initialEmail="receivedEmailAddress" :initialPhone="receivedMobileNumber"
                    :initialLand="receivedLandlineNumber" :initialSecondary="receivedSecondaryNumber" />
            </div>
            <div class="my-1 text-center">
                <button v-on:click="update" class="adversBtn">Update Advertisement</button>
        </div>
    </div>
</div>
<AgentDashboardFooter /></template>