<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from 'axios';
export default {
    name: 'CityLocationArea',
    components: {
        vSelect
    },
    props: {

    },
    data() {
        return {
            selectCity: '',
            selectLocation: '',
            selectArea: '',
            selectedCities: null, // Holds the selected cities
            cityOptions: [],
        }
    },
    methods: {
        async handleSelectCity() {
            // this.selectCity = val;
            // this.selectCity.push(val)
            if (this.selectedCities) {
            const cityId = this.selectedCities.id;
            console.log('city-id', cityId)
            this.$emit("ChildToParentSelectedCity", cityId);
          }
            // this.$emit("ChildToParentSelectedCity", this.selectCity)
        },
        handleLocation() {
            this.$emit("ChildToParentSelectLocation", this.selectLocation)
        },
        handleArea() {
            this.$emit("ChildToParentSelectArea", this.selectLocation)
        },
        async handleCity() {
            try {
                let finalUrl = 'https://apidev.qarbar.com/api/v1/area/';
                let res = await axios.get(finalUrl);
                // this.cityOptions = res.data.map(area => ({
                //     value: area.city.city_name,
                //     label: area.city.city_name
                // }));
                this.cityOptions = res.data.map(area => {
                    if (area && area.city) {
                        return {
                            id: area.id,
                            value: area.city.city_name,
                            label: area.city.city_name
                        };
                    }
                    return 'null'; // Or handle missing data
                });
                console.log('------------------------------')
                console.log('area', res.data)
                console.log('------------------------------')
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        },
    },
    mounted() {
        this.handleCity();
    }
}
</script>
<!-- <style src="@vueform/multiselect/themes/default.css"></style> -->
<style></style>

<template>
    <div>
        <div class="my-4">
            <v-select v-model="selectedCities" :options="cityOptions" placeholder="Search and select city" v-on:change="handleSelectCity" />
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="abcdef" v-model="selectLocation"
                v-on:change="handleLocation">
            <label for="floatingInput">Location</label>
        </div>
        <div class="mb-3">
            <div class="card">
                <div class="card-body">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951033925!2d74.16958104254596!3d31.482834783890713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690373876865!5m2!1sen!2s"
                        width="570" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="plot" v-model="selectArea"
                v-on:change="handleArea">
            <label for="floatingInput">Enter Plot number eg 122 A</label>
        </div>
    </div>
</template>