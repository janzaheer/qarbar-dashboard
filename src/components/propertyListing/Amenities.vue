<template>
    <div>
        <div class="card shadow-sm">
            <div class="card-header">Amenities</div>

            <div class="card-body">
                <h5 class="card-title">Features Of Apartment</h5>
                <div class="row g-2">
                    <div class="col-12 col-md-6">
                        <p v-if="productDetail?.amenties?.built_in_year">Build In Year {{
                            productDetail.amenties.built_in_year }}</p>
                        <p v-if="productDetail?.amenties?.furnished_unfurnished == false">Unfurnished</p>
                        <p v-if="productDetail?.amenties?.furnished_unfurnished == true">Furnished</p>
                        <p v-if="productDetail?.amenties?.built_in_wardrobes">Built in Wardrobes</p>
                        <p v-if="productDetail?.amenties?.kids_play_area">Children's Play Area</p>
                        <p v-if="productDetail?.amenties?.covered_parking">Covered Parking</p>
                        <p v-if="productDetail?.amenties?.security">Security</p>
                        <p v-if="productDetail?.amenties?.Farmhouse">FarmHouse</p>
                        <p v-if="productDetail?.amenties?.community_lawn_garden">Community lawn garden</p>
                        <p v-if="productDetail?.amenties?.covered_parking">Parking</p>
                        <p v-if="productDetail?.amenties?.distance_from_airport">AirPort Distance {{
                            productDetail.amenties.distance_from_airport }} </p>
                        <p v-if="productDetail?.amenties?.drawing_room">Drawing Room</p>
                        <p v-if="productDetail?.amenties?.electricity_backup">Electric Backup</p>
                        <p v-if="productDetail?.amenties?.gym">Gym</p>
                        <p v-if="productDetail?.amenties?.near_by_shopping_mall">Near By Shopping Mall</p>
                        <p v-if="productDetail?.amenties?.parking_space">Parking Space</p>
                        <p v-if="productDetail?.amenties?.swimming_pool">Swimming Pool</p>
                        <p v-if="productDetail?.amenties?.study_room">Study Room</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <p v-if="productDetail?.amenties?.balcony">Balcony</p>
                        <p v-if="productDetail?.amenties?.internet">Internet</p>
                        <p v-if="productDetail?.amenties?.lower_portion">Lower Portion</p>
                        <p v-if="productDetail?.amenties?.floors">Floor {{ productDetail.floors
                        }}</p>
                        <p v-if="productDetail?.amenties?.kitchen">Kitchen {{ productDetail.amenties.kitchen
                        }}</p>
                        <p v-if="productDetail?.amenties?.kitchen_appliances">kitchen Appliances</p>
                        <p v-if="productDetail?.amenties?.laundry_room">Laundry Room</p>
                        <p v-if="productDetail?.amenties?.lobby_in_building">Lobby in Building</p>
                        <p v-if="productDetail?.amenties?.lounge_sitting_area">Lounge Sitting Area</p>
                        <p v-if="productDetail?.amenties?.maid_room">Maid Room</p>
                        <p v-if="productDetail?.amenties?.medical_center">Medical Center</p>
                        <p v-if="productDetail?.amenties?.mosque">Mosque</p>
                        <p v-if="productDetail?.amenties?.near_by_hospital">Near By Hospital</p>
                        <p v-if="productDetail?.amenties?.near_by_school">Near By School</p>
                        <p v-if="productDetail?.amenties?.store_room">Store Room</p>
                        <p v-if="productDetail?.amenties?.other_nearby_palces">{{
                            productDetail.amenties.other_nearby_palces }}</p>
                        <p v-if="productDetail?.amenties?.other_description">{{
                            productDetail.amenties.other_description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
export default {
    name: 'Amenities',
    props: {
        productDetail: Object
    }
}
</script>