<script>
export default {
    name: 'NewProjectAmenities',
    props: {
        newProjectDetails: Object
    }
}
</script>

<style></style>

<template>
    <div class="">
        <h5>Amenities.</h5>
        <div class="d-flex justify-content-around align-items-center">
            <div>
                <p v-if="newProjectDetails?.amenities?.childerns_play_area">Children Playing Area</p>
                <p v-if="newProjectDetails?.amenities?.infinity_pool">Infinity Pool</p>
                <p v-if="newProjectDetails?.amenities?.leisure_lounge"> Leisure Lounge</p>
                <p v-if="newProjectDetails?.amenities?.near_by_hospital">Near By Hospital</p>
                <p v-if="newProjectDetails?.amenities?.near_by_school">Near By School</p>
                <p v-if="newProjectDetails?.amenities?.near_by_shpping_mall">Near By Shopping Mall</p>
            </div>
            <div>
                <p v-if="newProjectDetails?.amenities?.gymnasium">Gymnasium</p>
                <p v-if="newProjectDetails?.amenities?.restaurant">Restaurant</p>
                <p v-if="newProjectDetails?.amenities?.retial_shop_outlet">Retail Shop Outlet</p>
                <p v-if="newProjectDetails?.amenities?.swimming_pool">Swimming Pool</p>
                <p v-if="newProjectDetails?.amenities?.near_by_super_market">Near By Super Market</p>
            </div>
        </div>
    </div>
</template>
