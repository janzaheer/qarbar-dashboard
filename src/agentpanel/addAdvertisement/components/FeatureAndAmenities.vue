<script>
import Amenities from './Amenities.vue'
export default {
    name: 'FeatureAndAmenities',
    components:{
        Amenities
    },
    props: {

    },
    data() {
        return {
            bedRoom: '',
            bathRoom: '',
        }
    },
    methods: {
        handleBedRoom() {
            this.bedRoom
            this.$emit("ChildToParentBedRoomData", this.bedRoom)
        },
        handleBathRoom() {
            this.bathRoom
            this.$emit("ChildToParentBathRoomData", this.bathRoom)
        },
    },
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
                <div class="mb-3">
                    <h5>Bedrooms</h5>
                    <div class="mb-2">
                        <label for="inputBedroom" class="form-label">Enter Bedroom</label>
                        <input type="number" class="form-control" id="inputBedroom" v-model="bedRoom"
                            v-on:change="handleBedRoom">
                    </div>
                </div>
                <div class="mb-3">
                    <h5>Bathrooms</h5>
                    <div class="mb-2">
                        <label for="inputBathroom" class="form-label">Enter Bathroom</label>
                        <input type="number" class="form-control" id="inputBathroom" v-model="bathRoom"
                            v-on:change="handleBathRoom">
                    </div>
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
                        <Amenities />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger">Save Amenities</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
