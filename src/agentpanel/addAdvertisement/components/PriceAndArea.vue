<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
export default {
    name: 'PriceAndArea',
    components: {

    },
    props: {

    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            areaUnit: '',
            AreaType: '',
            totalPrice: '',
            // form: {
            // name: "",
            // }


        }
    },
    validations() {
        return {
            // form: {
            // name: {
            //     required,
            //     alpha,
            //     minLength: minLength(3),
            //     maxLength: maxLength(9)
            // },
            totalPrice: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(19),
                numeric,
            },
            areaUnit: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(10),
                numeric,
            }

            // }


        }
    },
    methods: {
        setTouched(theModel) {
            // if (theModel == 'name' || theModel == 'all') { this.v$.name.$touch() }
            if (theModel == this.totalPrice || theModel == 'all') { this.v$.totalPrice.$touch() }
            if (theModel == this.areaUnit || theModel == 'all') { this.v$.areaUnit.$touch() }
        },
        handleAreaUnit() {
            this.areaUnit
            this.areaUnit = this.areaUnit.replace(/[^0-9]/g, "");
            this.setTouched('all')
            this.$emit("ChildToParentAreaUnitData", this.areaUnit)
        },
        handleAreaType() {
            console.log(this.AreaType)
            this.$emit("ChildToParentAreaTypeData", this.AreaType)
        },
        handlePrice() {
            this.totalPrice
            //  this.totalPrice = this.totalPrice.replace(/[^0-9]/g, "");
            this.setTouched('all')
            this.$emit("ChildToParentTotalPriceData", this.totalPrice)
        },
        // async onSubmit(event) {
        //     event.preventDefault()
        //     this.setTouched('all')
        //     if (!this.v$.$invalid) {
        //         alert('good')
        //     } else {

        //     }
        // }

    },
    mounted() {

    }
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-hand-holding-dollar fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Price & Area</h5>
            </div>
            <div class="col-6">
                <div class="row mb-3">
                    <div class="col-8">
                        <div class="mb-1">
                            <label for="exampleAreaUnitControlInput1" class="form-label">Enter Area Size</label>
                            <input type="text" class="form-control" id="exampleAreaUnitControlInput1"
                                placeholder="Enter Area Unit" v-model="areaUnit" @input="handleAreaUnit"
                                :class="v$.areaUnit.$error ? 'is-invalid' : ''">
                            <div v-for="error of v$.areaUnit.$errors" class="invalid-feedback" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mt-2">
                        <label for="form-select">Area Type</label>
                        <select class="form-select" aria-label="Default select example" v-model="AreaType"
                            v-on:change="handleAreaType">
                            <option value="marla">Marla</option>
                            <option value="sqft">Square Ft</option>
                            <option value="sqm">Square M</option>
                            <option value="sqyd">Square Yd</option>
                            <option value="kanal">Kanal</option>
                        </select>
                    </div>
                </div>
                <div class="mb-1">
                    <label for="examplePriceControlInput1" class="form-label">Enter Price</label>
                    <input type="text" class="form-control" id="examplePriceControlInput1" placeholder="price"
                        v-model="totalPrice" @input="handlePrice" :class="v$.totalPrice.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.totalPrice.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
                <!-- <div>
                    <form @submit="onSubmit">
                        <div class="mb-3">
                            <label for="exampleNameControlInput1" class="form-label">Enter name</label>
                            <input type="text" class="form-control" id="exampleNameControlInput1" placeholder="name"
                                v-model.trim="name" @input="$event => setTouched('name')" :class="v$.name.$error ? 'is-invalid' : ''">
                            <div v-for="error of v$.name.$errors" class="invalid-feedback" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div> -->
            </div>
        </div>
    </div>
</template>
