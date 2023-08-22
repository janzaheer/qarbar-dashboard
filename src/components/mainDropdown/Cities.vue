<script>
import Multiselect from '@vueform/multiselect'
import { BASE_URL, API_VERSION, CITY_END_POINT } from '../../utils/api';
import axios from 'axios';
export default {
    name: 'Cities',
    props: {
        cityType: String
    },
    components: {
        Multiselect
    },
    data() {
        return {
            selectedCities: [], // Holds the selected cities
            cityOptions: [], // Holds the city options for the Multiselect
        }
    },
    methods: {
        sendDataToParent() {

            this.$emit("childToParentEvent", this.selectedCities);
        },
        async handleCity() {
            try {
                let finalUrl = BASE_URL + API_VERSION() + CITY_END_POINT();
                let res = await axios.get(finalUrl);
                this.cityOptions = res.data.map(city => ({
                    value: city.city_name,
                    label: city.city_name
                }));
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        },
    },
    watch: {
        cityType: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.selectedCities.push(newValue);
                }
            },
        },
    },
    mounted() {
        this.handleCity();
    }

}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style></style>

<template>
    <div>
        <Multiselect v-model="selectedCities" mode="tags" :close-on-select="false" :searchable="true" :create-option="true"
            placeholder='Select Location' :options="cityOptions" v-on:click="sendDataToParent" />
    </div>
</template>