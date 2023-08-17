<script>
export default {
    name: 'PropertyType',
    props: {
        h_type:String,
        p_type:String,
        c_type:String,

    },
    data() {
        return {
            selectedPropertyType: '',
            selectedCommercialPropertyType: '',
            selectedPlotPropertyType: '',
            selectedType: '', // Initially no type is selected
        }
    },
    methods: {
        handleHomePropertyTypes(val) {
            this.selectedType = val; // Update the selected type
            this.selectedPropertyType = val
            this.$emit("childToParentDataHomeType", this.selectedPropertyType)
        },
        handleCommercialPropertyTypes(val) {
            this.selectedType = val; // Update the selected type
            this.selectedCommercialPropertyType = val
            this.$emit("childToParentDataCommercialType", this.selectedCommercialPropertyType)
        },
        handlePlotPropertyTypes(val) {
            this.selectedType = val; // Update the selected type
            this.selectedPlotPropertyType = val
            this.$emit("childToParentDataPlotType", this.selectedPlotPropertyType)
        },
        ValueFunction() {
            if (this.selectedPropertyType) {
                return this.selectedPropertyType
            }
            if (this.selectedPlotPropertyType) {
                return this.selectedPlotPropertyType
            }
            if (this.selectedCommercialPropertyType) {
                return this.selectedCommercialPropertyType
            }
            if (this.h_type) {
                return this.h_type
            }
            if (this.p_type) {
                return this.p_type
            }
            if (this.c_type) {
                return this.c_type
            }
            return 'Property Type'
        },
    }

}
</script>

<style>
.dropdown-item.active {
    background-color: orangered !important;
}
</style>

<template>
    <div>
        <div class="">
            <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                aria-expanded="false">{{ ValueFunction() }}</button>
            <ul class="dropdown-menu propertyTypeDp">
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'house' }" v-on:click="handleHomePropertyTypes('house')">House</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'flat' }" v-on:click="handleHomePropertyTypes('flat')">Flat</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'room' }" v-on:click="handleHomePropertyTypes('room')">Room</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'upper_portion' }" v-on:click="handleHomePropertyTypes('upper_portion')">Uper Portion
                </li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'lower_portion' }" v-on:click="handleHomePropertyTypes('lower_portion')">Lower Portion
                </li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'farm_house' }" v-on:click="handleHomePropertyTypes('farm_house')">Farm House</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'pent_house' }" v-on:click="handleHomePropertyTypes('pent_house')">Pent House</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'residetial_plot' }" v-on:click="handlePlotPropertyTypes('residetial_plot')">Residential
                    Plot
                </li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'commercial_plot' }" v-on:click="handlePlotPropertyTypes('commercial_plot')">Commercial
                    Plot
                </li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'agricultural_land' }" v-on:click="handlePlotPropertyTypes('agricultural_land')">Agricultural
                    Land</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'Industrial_land' }" v-on:click="handlePropertyTypes('Industrial_land')">Industrial Land
                </li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'plot_file' }" v-on:click="handlePlotPropertyTypes('plot_file')">Plot File</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'plot_form' }" v-on:click="handlePlotPropertyTypes('plot_form')">Plot Form</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'office' }" v-on:click="handleCommercialPropertyTypes('office')">Office</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'shop' }" v-on:click="handleCommercialPropertyTypes('shop')">Shop</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'warehouse' }" v-on:click="handleCommercialPropertyTypes('warehouse')">WareHouse</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'factory' }" v-on:click="handleCommercialPropertyTypes('factory')">Factory</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'building' }" v-on:click="handleCommercialPropertyTypes('building')">Building</li>
            </ul>
        </div>
    </div>
</template>