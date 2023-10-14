<script>
import Amenities from './Amenities.vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
export default {
    name: 'FeatureAndAmenities',
    components: {
        Amenities
    },
    props: {
        errorBeds: String,
        errorBaths: String,
        errorKitchen: String,
        errorFloor: String,
        initialBath: String,
        initialBed: String,
        initialKitchen: String,
        initialFloor: String,
        initialWard: String,
        initialYear: String,
        initialCommunity: String,
        initialCover: String,
        initialAirport: String,
        initialDrawing: String,
        initialElecBekup: String,
        initialFarm: Boolean,
        initialFur: Boolean,
        initialGym: String,
        initialInter: String,
        initialKids: String,
        initialKitApliance: String,
        initialLaoundry: String,
        initailLounge: String,
        initialLower: String,
        initialMaid: String,
        initialMedical: String,
        initialMos: String,
        initialHos: String,
        initialSchool: String,
        initialMall: String,
        initialODesc: String,
        initialPlace: String,
        initialParSpace: String,
        initialSecu: String,
        initialStore: String,
        initialStudy: Boolean,
        initialSwim: String,
        initialLobby:String
    },
    watch: {
        initialBath(newBath) {
            this.bathRoom = newBath
        },
        initialBed(newBed) {
            this.bedRoom = newBed
        },
        initialKitchen(n) {
            this.kitchen = n
        },
        initialFloor(n) {
            this.floor = n
        },
        initialWard(n) {
            this.built_in_wardrobes = n
        },
        initialYear(n) {
this.built_in_year = n
        },
        initialCommunity(n) {
this.community_lawn_garden = n
        },
        initialCover(n) {
this.covered_parking = n
        },
        initialAirport(n) {
this.distance_from_airport = n
        },
        initialDrawing(n) {
this.drawing_room = n
        },
        initialElecBekup(n) {
this.electricity_backup = n
        },
        initialFarm(n) {
this.Farmhouse = n
        },
        initialFur(n) {
this.furnished_unfurnished = n
        },
        initialGym(n) {
this.gym = n
        },
        initialInter(n) {
this.internet = n
        },
        initialKids(n) {
this.kids_play_area = n
        },
        initialKitApliance(n) {
this.kitchen_appliances = n
        },
        initialLaoundry(n) {
this.laundry_room = n
        },
        initailLounge(n) {
            this.lounge_sitting_area = n
        },
        initialLower(n) {
            this.lower_portion = n
        },
        initialMaid(n) {
            this.maid_room = n
        },
        initialMedical(n) {
            this.medical_center = n
        },
        initialMos(n) {
            this.mosque = n
        },
        initialHos(n) {
            this.near_by_hospital = n
        },
        initialODesc(n) {
            this.other_description
        },
        initialPlace(n) {
            this.other_nearby_palces = n
        },
        initialParSpace(n) {
            this.parking_space = n
        },
        initialSecu(n) {
            this.security = n
        },
        initialStore(n) {
            this.store_room = n
        },
        initialStudy(n) {
            this.study_room = n
        },
        initialSwim(n) {
            this.swimming_pool = n
        },
        initialLobby(n){
            this.lobby_in_building = n
        }
    },
    data() {
        return {
            bedRoom: '',
            bathRoom: '',
            /////////////////
            built_in_year: '',
            built_in_wardrobes: false,
            security: false,
            kitchen_appliances: false,
            balcony: false,
            Farmhouse: false,
            lower_portion: false,
            electricity_backup: false,
            internet: false,
            parking_space: false,
            furnished_unfurnished: false,
            lobby_in_building: false,
            floor: '',
            kitchen: '',
            covered_parking: false,
            // rooms
            study_room: false,
            laundry_room: false,
            maid_room: false,
            store_room: false,
            drawing_room: false,
            lounge_sitting_area: false,
            gym: false,
            // community
            kids_play_area: false,
            mosque: false,
            community_lawn_garden: false,
            // healthcare
            medical_center: false,
            swimming_pool: false,
            // near Location
            near_by_school: false,
            near_by_hospital: false,
            near_by_shopping_mall: false,
            other_nearby_palces: '',
            distance_from_airport: 0,
            other_description: '',
            ///////////////
            showBathsErrorMessage: true,
            showBedsErrorMessage: true,
            showKitchenErrorMessage: true,
            showFloorErrorMessage: true,
        }
    },
    methods: {
        handleBedRoom() {
            this.bedRoom
            this.bedRoom = this.bedRoom.replace(/[^0-9]/g, "");
            this.$emit("ChildToParentBedRoomData", this.bedRoom)
        },
        handleBathRoom() {
            this.bathRoom
            this.bathRoom = this.bathRoom.replace(/[^0-9]/g, "");
            this.$emit("ChildToParentBathRoomData", this.bathRoom)
        },
        handleKitchen() {
            this.kitchen
            this.kitchen = this.kitchen.replace(/[^0-9]/g, "");
            this.$emit("childDataKitchen", this.kitchen)
        },
        handleFloor() {
            this.floor
            this.floor = this.floor.replace(/[^0-9]/g, "");
            this.$emit("childDataFloor", this.floor)

        },
        handleSaveAmenities() {
            if (this.built_in_year == 0) {
                createToast(`built_in_year-required`, {
                    type: 'danger',
                    timeout: 8000, // Adjust timeout as needed
                });
            }
            if (this.built_in_wardrobes == false) {
                createToast(`built_in_wardrobes-required`, {
                    type: 'danger',
                    timeout: 8000, // Adjust timeout as needed
                });
            }
            this.$emit("childDataBuiltInYear", this.built_in_year)
            this.$emit("childDataBuiltInWhaedrobes", this.built_in_wardrobes)
            this.$emit("childDataSecurity", this.security)
            this.$emit("childDataKitchenAppliance", this.kitchen_appliances)
            this.$emit("childDataBalcony", this.balcony)
            this.$emit("childDataFarmHouse", this.Farmhouse)
            this.$emit("childDataLowerPortion", this.lower_portion)
            this.$emit("childDataElectricityBackup", this.electricity_backup)
            this.$emit("childDataCoveredParking", this.covered_parking)
            this.$emit("childDataInternet", this.internet)
            this.$emit("childDataParkingSpace", this.parking_space)
            this.$emit("childDataFurnished", this.furnished_unfurnished)
            this.$emit("childDataLobbyBuilding", this.lobby_in_building)
            this.$emit("childDataStudyRoom", this.study_room)
            this.$emit("childDataLaundryRoom", this.laundry_room)
            this.$emit("childDataMaidRoom", this.maid_room)
            this.$emit("childDataStoreRoom", this.store_room)
            this.$emit("childDataDrawingRoom", this.drawing_room)
            this.$emit("childDataLoungeArea", this.lounge_sitting_area)
            this.$emit("childDataGym", this.gym)
            this.$emit("childDataKidsPlayArea", this.kids_play_area)
            this.$emit("childDataMosque", this.mosque)
            this.$emit("childDataCommunityLawnGarden", this.community_lawn_garden)
            this.$emit("childDataMedicalCenter", this.medical_center)
            this.$emit("childDataSwimmingPool", this.swimming_pool)
            this.$emit("childDataNearSchool", this.near_by_school)
            this.$emit("childDataNearHospital", this.near_by_hospital)
            this.$emit("childDataNearShoppingMall", this.near_by_shopping_mall)
            this.$emit("childDataOtherPalces", this.other_nearby_palces)
            this.$emit("childDataDistanceAirport", this.distance_from_airport)
            this.$emit("childDataOtherDesc", this.other_description)
        },
        hideBathsError() {
            this.showBathsErrorMessage = false
        },
        hideBedsError() {
            this.showBedsErrorMessage = false
        },
        hideKitchenError() {
            this.showKitchenErrorMessage = false
        },
        hideFloorError() {
            this.showFloorErrorMessage = false
        },
    },
    mounted() {
        this.bathRoom = this.initialBath
        this.bedRoom = this.initialBed
        this.kitchen = this.initialKitchen
        this.floor = this.initialFloor
        this.built_in_wardrobes = this.initialWard
        this.built_in_year = this.initialYear
        this.community_lawn_garden = this.initialCommunity
        this.covered_parking = this.initialCover
        this.distance_from_airport = this.initialAirport
        this.drawing_room = this.initialDrawing
        this.electricity_backup = this.initialElecBekup
        this.Farmhouse = this.initialFarm
        this.furnished_unfurnished = this.initialFur
        this.gym = this.initialGym
        this.internet = this.initialInter
        this.kids_play_area = this.initialKids
        this.kitchen_appliances = this.initialKitApliance
        this.laundry_room = this.initialLaoundry
        this.lobby_in_building = this.initialLobby
        this.lounge_sitting_area = this.initailLounge
        this.lower_portion = this.initialLower
        this.maid_room = this.initialMaid
        this.medical_center = this.initialMedical
        this.mosque = this.initialMos
        this.near_by_hospital = this.initialHos
        this.near_by_school = this.initialSchool
        this.near_by_shopping_mall = this.initialMall
        this.other_description = this.initialODesc
        this.other_nearby_palces = this.initialPlace
        this.parking_space = this.initialParSpace
        this.security = this.initialSecu
        this.store_room = this.initialStore
        this.study_room = this.initialStudy
        this.swimming_pool = this.initialSwim

    }
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-house-circle-exclamation fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Feature & Amenities</h5>
            </div>
            <div class="col-6">
                <div class="mb-2">
                    <label for="inputBedroom" class="form-label">Bedroom</label>
                    <input type="text" class="form-control" id="inputBedroom" v-model="bedRoom" @input="handleBedRoom"
                        @focus="hideBedsError" placeholder="Enter number of BedRoom">
                    <div v-if="showBedsErrorMessage" class="text-danger">{{ errorBeds }}</div>
                </div>
                <div class="mb-2">
                    <label for="inputBathroom" class="form-label">Bathroom</label>
                    <input type="text" class="form-control" id="inputBathroom" v-model="bathRoom" @input="handleBathRoom"
                        @focus="hideBathsError" placeholder="Enter number of BathRoom">
                    <div v-if="showBathsErrorMessage" class="text-danger">{{ errorBaths }}</div>
                </div>
                <div class="mb-2">
                    <label for="inputKitchen" class="form-label">Kitchen</label>
                    <input type="text" class="form-control" id="inputKitchen" placeholder="enter number of kitchen"
                        @focus="hideKitchenError" v-model="kitchen" @input="handleKitchen">
                    <div v-if="showKitchenErrorMessage" class="text-danger">{{ errorKitchen }}</div>
                </div>
                <div class="mb-3">
                    <label for="inputFloor" class="form-label">Floor</label>
                    <input type="text" class="form-control" id="inputFloor" placeholder="Enter Floor example 2"
                        @focus="hideFloorError" v-model="floor" @input="handleFloor">
                    <div v-if="showFloorErrorMessage" class="text-danger">{{ errorFloor }}</div>
                </div>

                <div class="">
                    <h5>Feature and Amenities</h5>
                    <p class="text-muted">Add additional features e.g. parking spaces, waste disposal, internet
                        etc.</p>
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Add
                        Amenities</button>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Feature and Amenities</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="card">
                                <div class="card-body">
                                    <div>
                                        <h6>Main Features</h6>
                                        <div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="mb-2">
                                                    <label for="exampleFormControlInput1"
                                                        class="form-label">built_in_year</label>
                                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                                        placeholder="1947" v-model="built_in_year" v-on:change="handleYear">
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="built_in_wardrobes"
                                                        v-on:change="handleWhereHouse">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        built_in_wardrobes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="security"
                                                        v-on:change="handleSecurity">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        security
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="kitchen_appliances"
                                                        v-on:change="handleKitchenAppliance">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        kitchen_appliances
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="balcony" v-on:change="handleBalcony">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        balcony
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="Farmhouse"
                                                        v-on:change="handleFarmHouse">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Farmhouse
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="lower_portion"
                                                        v-on:change="handleLower">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        lower_portion
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="electricity_backup"
                                                        v-on:change="handleElectricityBackup">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        electricity_backup
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="covered_parking"
                                                        v-on:change="handleCover_Parking">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Covered Parking
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="internet"
                                                        v-on:change="handleInternet">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        internet
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="parking_space"
                                                        v-on:change="handleParkingSpace">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        parking_space
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="furnished_unfurnished"
                                                        v-on:change="handleFurnishedUnFurnished">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        furnished_unfurnished
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="lobby_in_building"
                                                        v-on:change="handleLobbySitting">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        lobby_in_building
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <hr>
                                        </div>
                                        <h6>Rooms</h6>
                                        <div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="study_room"
                                                        v-on:change="handleStudy">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        study_room
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="laundry_room"
                                                        v-on:change="handleLaundry">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        laundry_room
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="maid_room"
                                                        v-on:change="handleMaidRoom">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        maid_room
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="store_room"
                                                        v-on:change="handleStoreRoom">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        store_room
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="drawing_room"
                                                        v-on:change="handleDrawing">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        drawing_room
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="lounge_sitting_area"
                                                        v-on:change="handleLoungeSitting">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        lounge_sitting_area
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="gym" v-on:change="handleGym">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        gym
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <hr>
                                        </div>
                                        <h6>Community Features</h6>
                                        <div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="kids_play_area"
                                                        v-on:change="handleKidsPlay">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        kids_play_area
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="mosque" v-on:change="handleMosque">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        mosque
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="community_lawn_garden"
                                                        v-on:change="handleCommunityLawnGarden">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        community_lawn_garden
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <hr>
                                        </div>
                                        <h6>HeathCare</h6>
                                        <div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="medical_center"
                                                        v-on:change="handleMedicalCenter">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        medical_center
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="swimming_pool"
                                                        v-on:change="handleSwimmingPool">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        swimming_pool
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <hr>
                                        </div>
                                        <h6>Nearby Locations & other Facilities</h6>
                                        <div>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="near_by_school"
                                                        v-on:change="handleNearSchool">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        near_by_school
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="near_by_hospital"
                                                        v-on:change="handleNearHospital">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        near_by_hospital
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="near_by_shopping_mall"
                                                        v-on:change="handleNearShoppingMall">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        near_by_shopping_mall
                                                    </label>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlTextarea1"
                                                        class="form-label">other_nearby_palces</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                                                        v-model="other_nearby_palces"
                                                        v-on:change="handleOtherPalces"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-1">
                                                    <label for="exampleFormControlInput1"
                                                        class="form-label">distance_from_airport from km</label>
                                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                                        placeholder="10km etc" v-model="distance_from_airport"
                                                        v-on:change="handleAirport">
                                                </div>
                                                <div class="">
                                                    <label for="exampleFormControlTextarea1"
                                                        class="form-label">other_description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                                                        v-model="other_description"
                                                        v-on:change="handleOtherDesc"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="handleSaveAmenities">save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
