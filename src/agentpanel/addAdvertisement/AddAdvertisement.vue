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
// import Vue3Dropzone from 'vue3-dropzone';
// import 'vue3-dropzone/dist/vue3Dropzone.css';
// import s3 from '../../aws/aws.js';
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
            receivedHomePropertyVal: null,
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
            selectedImages: [],
            media: [],
            selectedPropertyType: null,
        };
    },
    methods: {
        async handleSuccess(files, responses) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const response = responses[i];
                const imageKey = `images/${file.name}`;

                const params = {
                    Bucket: 'YOUR_BUCKET_NAME',
                    Key: imageKey,
                    Body: file,
                };

                try {
                    await s3.upload(params).promise();
                    console.log(`Image ${file.name} uploaded successfully`);
                } catch (error) {
                    console.error(`Error uploading image ${file.name}:`, error);
                }
            }
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

            return propertyTypeObject;


        },
        selectPropertyType(type) {
            // Set the selected property type
            this.selectedPropertyType = type;
        },
        async logCheckboxValues() {
            this.media = this.selectedImages.map((media) => ({
                image_url: media.url,
                // media_type: "image",
                media_type: media.media_type,
            }));

            const payload = {
                media: this.media,
                title: this.receivedTitle,
                phone: this.receivedMobileNumber,
                landline: this.receivedLandlineNumber,
                secondry_phone: this.receivedSecondaryNumber,
                email: this.receivedEmailAddress,
                rent_sale_type: this.R_S_Value(),
                area: this.receivedSelectedCity, // area-id
                agent: 1100, // remaining agent id is here after login agent
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
                        createToast(`Title-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedDescription.length == 0) {
                        createToast(`Desc-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedBathRooms.length == 0) {
                        createToast(`Baths-required`, {
                            type: 'danger',
                            position: 'top-center',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedBedRooms.length == 0) {
                        createToast(`Beds-required`, {
                            type: 'danger',
                            position: 'top-center',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedBuilt_in_year.length == 0) {
                        createToast(`Built In Year-required`, {
                            type: 'danger',
                            position: 'top-center',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedFloor.length == 0) {
                        createToast(`Floor-required`, {
                            type: 'danger',
                            position: 'top-center',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedKitchen.length == 0) {
                        createToast(`Kitchen-required`, {
                            type: 'danger',
                            position: 'top-center',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedAreaUnit.length == 0) {
                        createToast(`Area Size-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedDescription.length == 0) {
                        createToast(`Total Price-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedEmailAddress.length == 0) {
                        createToast(`Email-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedMobileNumber.length == 0) {
                        createToast(`phone-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedLandlineNumber.length == 0) {
                        createToast(`LandLine Number-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.receivedSecondaryNumber.length == 0) {
                        createToast(`SecondaryNumber-required`, {
                            type: 'danger',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    if (this.media.length == 0) {
                        createToast(`media-required`, {
                            type: 'danger',
                            position: 'top-left',
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
            // this.$refs.logCheckboxValues.reset();
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
        handleImageUpload(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const mediaType = file.type.startsWith('image/') ? 'image' : 'video';
                const mediaUrl = URL.createObjectURL(file);
                this.selectedImages.push({ url: mediaUrl, media_type: mediaType, file });
            }
            event.target.value = ""; // Clear the input field to allow selecting more images
        },

    },
}
</script>

<style>
@import './Advertisement.css';
/* .active {
    background-color: #ebebeb !important;
    color: #fff;
} */
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
                    @childDataOtherDesc="handleOtherDesc" />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <PropertyInfo @ChildToParentTitleData="handleTitleData" @ChildToParentDescData="handleDescData" />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <!-- <UploadImages @ChildToParentImageUploadedData="handleImageUploaded" /> -->
                <div class="card-body ">
                    <div class="row d-flex justify-content-around">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-images fa-2xl" style="color: rgb(255, 69, 0);"></i>
                            <h5 class="mt-2">Property Images Upload</h5>
                        </div>
                        <div class="col-6">
                            <input type="file" ref="imageInput" class="btn btn-primary" multiple
                                @change="handleImageUpload" />
                            <div class="row ">
                                <div class="col-6 col-md-12">
                                    <div class="d-flex flex-wrap my-2">
                                        <div v-for="(media, index) in selectedImages" :key="index">
                                            <img class="mx-1" v-if="media.media_type === 'image'" :src="media.url"
                                                alt="Selected Image" :height="60" />
                                            <video class="mt-1 ms-1" v-else :src="media.url" controls width="100"
                                                height="60">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <ContactInfo @ChildToParentEmailData="handleEmailData" @ChildToParentMobNumData="handleMobNumData"
                    @ChildToParentLandNumData="handleLandNumData" @ChildToParentSecondNumData="handleSecondNumData" />
            </div>
            <div class="my-1">
                <button v-on:click="logCheckboxValues" class="adversBtn">Add Submit Advertisement</button>
            </div>
        </div>
    </div>
<AgentDashboardFooter /></template>
