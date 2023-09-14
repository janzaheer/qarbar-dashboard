<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from 'axios';
export default {
    name: 'CityLocationArea',
    components: {
        vSelect,
    },
    props: {
        errorLocation: String,
        errorAreaNumber: String
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            selectCity: '',
            selectLocation: '',
            selectArea: '',
            selectedCities: '', // Holds the selected cities
            cityOptions: [],
            //////////////
            showLocationError: true,
            showAreaNumberError: true,
        }
    },
    validations() {
        return {

            selectLocation: {
                required,
            },
            selectArea: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(20),
            }
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.selectArea || theModel == 'all') { this.v$.selectArea.$touch() }
            if (theModel == this.selectLocation || theModel == 'all') { this.v$.selectLocation.$touch() }
        },
        handleLocation() {
            this.setTouched('all')
            this.$emit("ChildToParentSelectLocation", this.selectLocation)
        },
        handleArea() {
            this.setTouched('all')
            this.$emit("ChildToParentSelectArea", this.selectLocation)
        },
        async handleCity() {
            try {
                let finalUrl = 'https://apidev.qarbar.com/api/v1/area/';
                let res = await axios.get(finalUrl);
                this.cityOptions = res.data.map(area => {
                    if (area && area.city) {
                        return {
                            id: area.id,
                            value: area.city.city_name,
                            label: area.city.city_name
                        };
                    }
                    return `null`;
                })
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        },
        handleSelectCity() {
            console.log('handleSelectCity called');
            if (this.selectedCities) {
                const cityId = this.selectedCities.id;
                console.log('city-id', cityId)
                this.$emit("ChildToParentSelectedCity", cityId);
            }
        },
        hideLocationErrorMessage() {
            this.showLocationError = false;
        },
        showLocationErrorMessage() {
            this.showLocationError = true;
        },
        hideAreaNumberErrorMessage() {
            this.showAreaNumberError = false;
        },
        showEAreaNumberErrorMessage() {
            this.showAreaNumberError = true;
        },
    },
     mounted() {
        this.handleCity();
    }
}
</script>
<style></style>

<template>
    <div>
        <div class="my-4">
            <v-select v-model="selectedCities" :options="cityOptions" placeholder="Search and select city"
            @change="handleSelectCity" />
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="abcdef" v-model="selectLocation"
                @focus="hideLocationErrorMessage" v-on:change="handleLocation"
                :class="v$.selectLocation.$error ? 'is-invalid' : ''">
            <label for="floatingInput">Location</label>
            <div v-for="error of v$.selectLocation.$errors" class="invalid-feedback" :key="error.$uid">
                {{ error.$message }}
            </div>
            <div class="text-danger" v-if="showLocationError">{{ errorLocation }}</div>
        </div>
        <div class="mb-3">
            <div class="card">
                <div class="card-body">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951033925!2d74.16958104254596!3d31.482834783890713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690373876865!5m2!1sen!2s"
                        width="570" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="plot" v-model="selectArea"
                @focus="hideAreaNumberErrorMessage" v-on:change="handleArea"
                :class="v$.selectArea.$error ? 'is-invalid' : ''">
            <label for="floatingInput">Enter Plot number eg 122 A</label>
            <div v-for="error of v$.selectArea.$errors" class="invalid-feedback" :key="error.$uid">
                {{ error.$message }}
            </div>
            <div class="text-danger" v-if="showAreaNumberError">{{ errorAreaNumber }}</div>
        </div>
    </div>
</template>
