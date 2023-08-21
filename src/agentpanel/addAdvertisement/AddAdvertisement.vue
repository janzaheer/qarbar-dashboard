<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue';
import HomePropertyType from './components/HomePropertyType.vue';
import PlotPropertyType from './components/PlotPropertyType.vue';
import CommercialPropertyType from './components/CommercialPropertyType.vue';
import PropertyInfo from './components/PropertyInfo.vue';
import ContactInfo from './components/ContactInfo.vue';
import PriceAndArea from './components/PriceAndArea.vue';
import Installment from './components/Installment.vue';
import CityLocationArea from './components/CityLocationArea.vue';
import FeatureAndAmenities from './components/FeatureAndAmenities.vue';
import UploadImages from './components/UploadImages.vue'
export default {
    name: 'AddAdvertisement',
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
        UploadImages

    },
    data() {
        return {
            receivedHomePropertyVal: '',
            receivedPlotPropertyVal: '',
            receivedCommercialPropertyVal: '',
            //....................
            sellChecked: true,
            rentChecked: false,
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
            receivedAdvanceAmount: '',
            receivedNofInstallments: '',
            receivedMonthlyInstallments: '',
            receivedReadyPossession: '',
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
            isCHecked: false // for Plot check

        };
    },
    methods: {
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
        handleLocationData() {
            this.receivedSelectedLocation
        },
        handleImageUploaded(data) {
            this.receivedUploadedImage = data;
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
        logCheckboxValues() {
            // console.log('sell Checked:', this.sellChecked);
            // console.log('rent Checked:', this.rentChecked);
            // console.log('---------------------------')

            // console.log('homeType', this.receivedHomePropertyVal)
            // console.log('commercialPropertyVal', this.commercialPropertyVal)
            console.log('rp', this.receivedReadyPossession)
        },
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
            if ( this.sellChecked = true) {
                this.isCHecked = false
            }
        },
        handleRentView() {
            this.rentChecked = true;
            this.sellChecked = false;
            if ( this.rentChecked = true) {
                this.isCHecked = true
            }
        },
    },
}
</script>

<style>
@import './Advertisement.css';
</style>

<template>
    <AgentDashboardHeader />
    <div class="container-fluid AgentDashboardHeight">
        <div class="my-2">
            <img src="https://profolio.zameen.com/images/header-add-property.png" class="img-thumbnail" alt="...">
        </div>
        <div class="container my-5">
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
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
                                                aria-controls="home-tab-pane" aria-selected="true">
                                                Home
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                                aria-controls="profile-tab-pane" aria-selected="false">
                                                Plot</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                                aria-controls="contact-tab-pane" aria-selected="false">
                                                Commercial
                                            </button>
                                        </li>

                                    </ul>
                                    <div class="tab-content mt-4" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabIndex="0">
                                            <HomePropertyType @childDataHomePropertyTypeVal="handleHomePropertyVal" />
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabIndex="0">
                                            <div>
                                                <PlotPropertyType @childDataPlotPropertyTypeVal="handlePropertyVal" :isCHecked="isCHecked" />
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
                                    @ChildToParentSelectArea="handleAreaData" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PriceAndArea @ChildToParentAreaUnitData="handleAreaUnitData"
                    @ChildToParentAreaTypeData="handleAreaTypeData" @ChildToParentTotalPriceData="handlePriceData"/>
                    <div class="" v-if="sellChecked == true">
                        <Installment @ChildToParentAdvanceAmountData="handleAdvanceAmount"
                    @ChildToParentNofInstallmentsData="handleNoOfInstallmentData"
                    @ChildToParentMonthlyInstallmentsData="handleMonthlyInstallment"
                    @ChildToParentReadyForPossessionData="handleRpData"  />
                    </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <FeatureAndAmenities @ChildToParentBedRoomData="handleBedRoomData"
                    @ChildToParentBathRoomData="handleBathRoomData" />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PropertyInfo @ChildToParentTitleData="handleTitleData" @ChildToParentDescData="handleDescData" />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <UploadImages @ChildToParentImageUploadedData="handleImageUploaded" />
            </div>

            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <ContactInfo @ChildToParentEmailData="handleEmailData" @ChildToParentMobNumData="handleMobNumData"
                    @ChildToParentLandNumData="handleLandNumData" @ChildToParentSecondNumData="handleSecondNumData" />
            </div>
            <div class="my-1">
                <button class="adversBtn" v-on:click="logCheckboxValues">Add Submit Advertisement</button>
            </div>
        </div>

    </div>
    <AgentDashboardFooter /></template>
