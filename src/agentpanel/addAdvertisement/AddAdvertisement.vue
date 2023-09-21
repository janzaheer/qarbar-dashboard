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
import UploadImages from './components/UploadImages.vue';
import { BASE_URL, API_VERSION, PROPERTY_END_POINT, CREATE_PROPERTY_END_POINT } from '../../utils/api';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
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
        UploadImages,
    },
    data() {
        return {
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
        handleLocationData(data) {
            this.receivedSelectedLocation = data
        },
        handleImageUploaded(data) {
            this.receivedUploadedImage = data;
            console.log('img',this.receivedUploadedImage)
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
        async logCheckboxValues() {
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
            console.log('payload', payload)
            let finallURL = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + CREATE_PROPERTY_END_POINT()

            try {
                await axios.post(finallURL, payload)
                    .then((resp) => {
                        console.log(resp.ok)
                        this.toastSuccess()
                        this.$router.push('/agentDashboard')
                    })
            } catch (resp) {
                if (resp.response) {
                    const resData = resp.response.data
                    console.warn(resData)
                    this.eroMsg = resData
                    if (this.receivedTitle.length == 0) {
                        this.errorMsg = 'title-required'
                    }
                    if (this.receivedDescription.length == 0) {
                        this.errorDesc = 'desc-required'
                    }
                    if (this.receivedAreaUnit.length == 0) {
                        this.errorAreaSize = 'Area-required'
                    }
                    if (this.ReceivedTotalPrice.length == 0) {
                        this.errorPrice = 'Price-required'
                    }
                    if (this.receivedAdvanceAmount.length == 0) {
                        this.errorAdvanceAmount = 'Advance Amount-required'
                    }
                    if (this.receivedNofInstallments.length == 0) {
                        this.errorPrice = 'No of Installment-required'
                    }
                    if (this.receivedMonthlyInstallments.length == 0) {
                        this.errorMOinstallment = 'Monthly Installment-required'
                    }
                    if (this.receivedEmailAddress.length == 0) {
                        this.errorEmail = 'Email-required'
                    }
                    if (this.receivedMobileNumber.length == 0) {
                        this.errorMob = 'Phone-required'
                    }
                    if (this.receivedLandlineNumber.length == 0) {
                        this.errorLand = 'LandLine Number-required'
                    }
                    if (this.receivedSecondaryNumber.length == 0) {
                        this.errorSec = 'Secondary Number-required'
                    }
                    if (this.receivedSelectedArea.length == 0) {
                        this.errorAreaNumber = 'Area-required'
                    }
                    if (this.receivedSelectedLocation.length == 0) {
                        this.errorLocation = 'Location-required'
                    }
                    if (this.receivedBedRooms.length == 0) {
                        this.errorBeds = 'Bedrooms-required'
                    }
                    if (this.receivedBathRooms.length == 0) {
                        this.errorBaths = 'Bathrooms-required'
                    }
                    if (this.receivedKitchen.length == 0) {
                        this.errorKitchen = 'Kitchen-required'
                    }
                    if (this.receivedFloor.length == 0) {
                        this.errorFloor = 'Floor-required'
                    }
                    if (resp.response) {
                        createToast(`fields-required`, {
                            type: 'danger',
                            position: 'top-right',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                } else if (resp.request) {
                    console.log('request-error', resp.request)
                    this.toastNetworkError()
                } else {
                    console.log(resp)
                }
            }
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
            <img src="../../assets/webBanner1.jpg" class="img-thumbnail" alt="...">
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
                                    @ChildToParentSelectArea="handleAreaData" 
                                    :errorLocation="this.errorLocation" :errorAreaNumber="this.errorAreaNumber" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PriceAndArea @ChildToParentAreaUnitData="handleAreaUnitData"
                    @ChildToParentAreaTypeData="handleAreaTypeData" @ChildToParentTotalPriceData="handlePriceData"
                    :errorAreaSize="this.errorAreaSize" :errorPrice="this.errorPrice" />
                <div class="" v-if="sellChecked == true">
                    <Installment @ChildToParentAdvanceAmountData="handleAdvanceAmount"
                        @ChildToParentNofInstallmentsData="handleNoOfInstallmentData"
                        @ChildToParentMonthlyInstallmentsData="handleMonthlyInstallment"
                        @ChildToParentReadyForPossessionData="handleRpData" :errorAdvanceAmounts="this.errorAdvanceAmount"
                        :errorNofInstallments="this.errorNofInstallment" :errorMOinstallments="this.errorMOinstallment" />
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
                    :errorKitchen="this.errorKitchen" :errorFloor="this.errorFloor" />
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PropertyInfo @ChildToParentTitleData="handleTitleData" @ChildToParentDescData="handleDescData"
                    :titleError="this.errorMsg" :descError="this.errorDesc" />
            </div>
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <UploadImages @ChildToParentImageUploadedData="handleImageUploaded" />
            </div>
            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <ContactInfo @ChildToParentEmailData="handleEmailData" @ChildToParentMobNumData="handleMobNumData"
                    @ChildToParentLandNumData="handleLandNumData" @ChildToParentSecondNumData="handleSecondNumData"
                    :emailError="this.errorEmail" :mobError="this.errorMob" :landError="this.errorLand"
                    :secError="this.errorSec" />
            </div>
            <div class="my-1 text-center">
                <button v-on:click="logCheckboxValues" class="adversBtn">Add Submit Advertisement</button>
            </div>
        </div>
    </div>
    <AgentDashboardFooter />
</template>
