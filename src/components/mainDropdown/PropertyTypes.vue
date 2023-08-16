<script>
export default {
    name: 'PropertyType',
    data() {
        return {
            selectedPropertyType: '',
            selectedCommercialPropertyType: '',
            selectedPlotPropertyType: '',
        }
    },
    methods: {
        handleHomePropertyTypes(val) {
            this.selectedPropertyType = val
            this.$emit("childToParentDataHomeType", this.selectedPropertyType)
        },
        handleCommercialPropertyTypes(val) {
            this.selectedCommercialPropertyType = val
            this.$emit("childToParentDataCommercialType",this.selectedCommercialPropertyType)
        },
        handlePlotPropertyTypes(val) {
            this.selectedPlotPropertyType = val
            this.$emit("childToParentDataPlotType",this.selectedPlotPropertyType)
        },
    }
}
</script>

<style></style>

<template>
    <div>
        <div class="">
            <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                aria-expanded="false">Property Type</button>
            <ul class="dropdown-menu propertyTypeDp">
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('house')">House</li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('flat')">Flat</li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('room')">Room</li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('upper_portion')">Uper Portion
                </li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('lower_portion')">Lower Portion
                </li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('farm_house')">Farm House</li>
                <li class="dropdown-item" v-on:click="handleHomePropertyTypes('pent_house')">Pent House</li>
                <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('residetial_plot')">Residential
                    Plot
                </li>
                <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('commercial_plot')">Commercial
                    Plot
                </li>
                <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('agricultural_land')">Agricultural
                    Land</li>
                <li class="dropdown-item" v-on:click="handlePropertyTypes('Industrial_land')">Industrial Land
                </li>
                <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('plot_file')">Plot File</li>
                <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('plot_form')">Plot Form</li>
                <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('office')">Office</li>
                <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('shop')">Shop</li>
                <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('warehouse')">WareHouse</li>
                <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('factory')">Factory</li>
                <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('building')">Building</li>
            </ul>
        </div>
    </div>
</template>