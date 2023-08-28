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
            receivedDistance_from_airport: '',
            receivedOther_description: '',

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
            // console.log('rp', this.receivedReadyPossession)
            // console.log('sale',this.sellvalue)
            // console.log('rent',this.rentvalue)
            const payload = {
                media: [
                    {
                        image_url: "https://media.zameen.com/thumbnails/230702002-400x300.webp",
                        media_type: "image"
                    }
                ],
                title: "Quetta Beautiful House for Rent",
                phone: "123456789",
                landline: "987654321",
                secondry_phone: "9876543210",
                email: "example@example.com",
                rent_sale_type: "rent",
                area: 1105,
                agent: 1100,
                amenties: {
                    other_nearby_palces: "Park, Supermarket",
                    bedrooms: 3,
                    distance_from_airport: 10,
                    built_in_year: 2005,
                    bathrooms: 2,
                    kitchen: 1,
                    floors: 2,
                    maid_room: false,
                    built_in_wardrobes: true,
                    kitchen_appliances: true,
                    balcony: true,
                    lower_portion: false,
                    Farmhouse: false,
                    electricity_backup: true,
                    furnished_unfurnished: true,
                    covered_parking: true,
                    lobby_in_building: false,
                    security: true,
                    parking_space: true,
                    drawing_room: true,
                    study_room: false,
                    laundry_room: true,
                    store_room: true,
                    gym: false,
                    lounge_sitting_area: true,
                    internet: true,
                    swimming_pool: false,
                    mosque: true,
                    kids_play_area: true,
                    medical_center: true,
                    community_lawn_garden: false,
                    near_by_school: true,
                    near_by_hospital: true,
                    near_by_shopping_mall: true,
                    other_description: "Additional amenities description here"
                },
                property_type: {
                    plot_types: null,
                    home_types: null,
                    commercial_types: "office",
                    unit_types: "sqft",
                    size: 2000,
                    other_description: "Property type description here"
                },
                property_location: {
                    latitude: 25.123456,
                    longitude: 67.987654
                },
                installment: {
                    advance_amount: 50000,
                    no_of_inst: 12,
                    monthly_inst: 10000,
                    ready_for_possession: true
                },
                available: true,
                description: "This is a beautiful house for sale with modern amenities.",
                total_price: 1500000
            }
            console.log('payload', payload)
        },
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
                                    @ChildToParentSelectArea="handleAreaData" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PriceAndArea @ChildToParentAreaUnitData="handleAreaUnitData"
                    @ChildToParentAreaTypeData="handleAreaTypeData" @ChildToParentTotalPriceData="handlePriceData" />
                <div class="" v-if="sellChecked == true">
                    <Installment @ChildToParentAdvanceAmountData="handleAdvanceAmount"
                        @ChildToParentNofInstallmentsData="handleNoOfInstallmentData"
                        @ChildToParentMonthlyInstallmentsData="handleMonthlyInstallment"
                        @ChildToParentReadyForPossessionData="handleRpData" />
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <FeatureAndAmenities @ChildToParentBedRoomData="handleBedRoomData"
                    @ChildToParentBathRoomData="handleBathRoomData" @childDataBuiltInYear="handleBuiltYear"
                    @childDataBuiltInWhaedrobes="handleBuiltInWhaedrobes" @childDataSecurity="handleSecurity"
                    @childDataKitchenAppliance="handleKitchenAppliance" @childDataBalcony="handleBalcony"
                    @childDataFarmHouse="handleFarmHouse" @childDataLowerPortion="handleLowerPortion"
                    @childDataElectricityBackup="handleElectricityBackup" @childDataInternet="handleInternet"
                    @childDataParkingSpace="handleParkingSpace" @childDataFurnished="handleFurnished"
                    @childDataLobbyBuilding="handleLobbyBuilding" @childDataFloor="handleFloor"
                    @childDataKitchen="handleKitchen" @childDataStudyRoom="handleStoreRoom"
                    @childDataLaundryRoom="handleLaundryRoom" @childDataMaidRoom="handleMaidRoom"
                    @childDataStoreRoom="handleStoreRoom" @childDataDrawingRoom="handleDrawingRoom"
                    @childDataLoungeArea="handleLoungeArea" @childDataGym="handleGym"
                    @childDataKidsPlayArea="handleKidsPlayArea" @childDataMosque="handleMosque"
                    @childDataCommunityLawnGarden="handleCommunityLawnGarden" @childDataMedicalCenter="handleMedicalCenter"
                    @childDataSwimmingPool="handleSwimmingPool" @childDataNearSchool="handleNearSchool"
                    @childDataNearHospital="handleNearHospital" @childDataNearShoppingMall="handleNearShoppingMall"
                    @childDataOtherPalces="handleOtherPalces" @childDataDistanceAirport="handleDistanceAirport"
                    @childDataOtherDesc="handleOtherDesc" />
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
    <AgentDashboardFooter />
</template>
