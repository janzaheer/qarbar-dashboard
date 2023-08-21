<script>
export default {
    name: 'Amenities',
    props: {

    },
    data() {
        return {
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
            lobby_in_building:false,
            floor: '',
            kitchen: '',
            // rooms
            study_room: false,
            laundry_room:false,
            maid_room:false,
            store_room:false,
            drawing_room:false,
            lounge_sitting_area:false,
            gym: false,
            // community
            kids_play_area:false,
            mosque:false,
            community_lawn_garden:false,
            // healthcare
            medical_center:false,
            swimming_pool:false,
            // near Location
            near_by_school:false,
            near_by_hospital:false,
            near_by_shopping_mall:false,
            other_nearby_palces: '',
            distance_from_airport: '',
            other_description: '',
        }
    },
    methods: {
        handleSaveAmenities(){
            console.log(this.built_in_year, this.built_in_wardrobes, this.security, this.kitchen_appliances, this.balcony,
            this.Farmhouse, this.lower_portion, this.electricity_backup, this.internet, this.parking_space, this.furnished_unfurnished, this.lobby_in_building,
            this.floor, this.kitchen, this.study_room, this.laundry_room, this.maid_room, this.store_room, this.drawing_room, this.lounge_sitting_area, this.gym,
            this.kids_play_area, this.mosque, this.community_lawn_garden, this.medical_center, this.near_by_school, this.near_by_hospital, this.near_by_shopping_mall,
            this.other_nearby_palces, this.distance_from_airport, this.other_description)
        },

    }
}
</script>

<style></style>

<template>
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
                                <label for="exampleFormControlInput1" class="form-label">built_in_year</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="1947" v-model="built_in_year" v-on:change="handleYear">
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="built_in_wardrobes" v-on:change="handleWhereHouse">
                                <label class="form-check-label" for="flexCheckDefault">
                                    built_in_wardrobes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="security" v-on:change="handleSecurity">
                                <label class="form-check-label" for="flexCheckDefault">
                                    security
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="kitchen_appliances" v-on:change="handleKitchenAppliance">
                                <label class="form-check-label" for="flexCheckDefault">
                                    kitchen_appliances
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="balcony" v-on:change="handleBalcony">
                                <label class="form-check-label" for="flexCheckDefault">
                                    balcony
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="Farmhouse" v-on:change="handleFarmHouse">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Farmhouse
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="lower_portion" v-on:change="handleLower">
                                <label class="form-check-label" for="flexCheckDefault">
                                    lower_portion
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="electricity_backup" v-on:change="handleElectricityBackup">
                                <label class="form-check-label" for="flexCheckDefault">
                                    electricity_backup
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="internet" v-on:change="handleInternet">
                                <label class="form-check-label" for="flexCheckDefault">
                                    internet
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="parking_space" v-on:change="handleParkingSpace">
                                <label class="form-check-label" for="flexCheckDefault">
                                    parking_space
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="furnished_unfurnished" v-on:change="handleFurnishedUnFurnished">
                                <label class="form-check-label" for="flexCheckDefault">
                                    furnished_unfurnished
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="lobby_in_building" v-on:change="handleLobbySitting">
                                <label class="form-check-label" for="flexCheckDefault">
                                    lobby_in_building
                                </label>
                            </div>
                            <div class="">
                                <label for="exampleFormControlInput1" class="form-label">Floor</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" v-model="floor" v-on:change="handleFloor">
                            </div>
                            <div class="">
                                <label for="exampleFormControlInput1" class="form-label">Kitchen</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    placeholder="enter number of kitchen" v-model="kitchen" v-on:change="handleKitchen">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  v-model="study_room" v-on:change="handleStudy">
                                <label class="form-check-label" for="flexCheckDefault">
                                    study_room
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="laundry_room" v-on:change="handleLaundry">
                                <label class="form-check-label" for="flexCheckDefault">
                                    laundry_room
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="maid_room" v-on:change="handleMaidRoom">
                                <label class="form-check-label" for="flexCheckDefault">
                                    maid_room
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="store_room" v-on:change="handleStoreRoom">
                                <label class="form-check-label" for="flexCheckDefault">
                                    store_room
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="drawing_room" v-on:change="handleDrawing">
                                <label class="form-check-label" for="flexCheckDefault">
                                    drawing_room
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="lounge_sitting_area" v-on:change="handleLoungeSitting">
                                <label class="form-check-label" for="flexCheckDefault">
                                    lounge_sitting_area
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="gym" v-on:change="handleGym">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="kids_play_area" v-on:change="handleKidsPlay">
                                <label class="form-check-label" for="flexCheckDefault">
                                    kids_play_area
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="mosque" v-on:change="handleMosque">
                                <label class="form-check-label" for="flexCheckDefault">
                                    mosque
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="community_lawn_garden" v-on:change="handleCommunityLawnGarden">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="medical_center" v-on:change="handleMedicalCenter">
                                <label class="form-check-label" for="flexCheckDefault">
                                    medical_center
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="swimming_pool" v-on:change="handleSwimmingPool">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="near_by_school" v-on:change="handleNearSchool">
                                <label class="form-check-label" for="flexCheckDefault">
                                    near_by_school
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="near_by_hospital" v-on:change="handleNearHospital">
                                <label class="form-check-label" for="flexCheckDefault">
                                    near_by_hospital
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="near_by_shopping_mall" v-on:change="handleNearShoppingMall">
                                <label class="form-check-label" for="flexCheckDefault">
                                    near_by_shopping_mall
                                </label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">other_nearby_palces</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" v-model="other_nearby_palces" v-on:change="handleOtherPalces"></textarea>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label">distance_from_airport</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="10km etc" v-model="distance_from_airport" v-on:change="handleAirport">
                            </div>
                            <div class="">
                                <label for="exampleFormControlTextarea1" class="form-label">other_description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" v-model="other_description" v-on:change="handleOtherDesc"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" v-on:click="handleSaveAmenities">save</button>
        </div>
    </div>
</template>
