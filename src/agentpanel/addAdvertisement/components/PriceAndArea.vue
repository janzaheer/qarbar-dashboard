<script>
import Installment from './Installment.vue';

export default {
    name: 'PriceAndArea',
    components: {
        Installment
    },
    props: {

    },
    data() {
        return {
            areaUnit: '',
            AreaType: '',
            totalPrice: '',

        }
    },
    methods: {
        handleAreaUnit() {
            this.areaUnit
            this.$emit("ChildToParentAreaUnitData", this.areaUnit)
        },
        handleAreaType() {
            console.log(this.AreaType)
            this.$emit("ChildToParentAreaTypeData", this.AreaType)
        },
        handlePrice() {
            this.totalPrice
            this.$emit("ChildToParentTotalPriceData", this.totalPrice)
        },
       
    },
    mounted(){
    
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
                        <div class="form-floating">
                            <input type="number" class="form-control" id="floatingAreaUnit" placeholder="Enter Area Unit"
                                v-model="areaUnit" v-on:change="handleAreaUnit">
                            <label for="floatingAreaUnit">Enter Area Size</label>
                        </div>
                    </div>
                    <div class="col-4">
                        <label for="form-select">Select Area Type</label>
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
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="price" v-model="totalPrice"
                        v-on:change="handlePrice">
                    <label for="floatingInput">Enter Price</label>
                </div>
                <!-- <div>
                    <Installment />
                </div> -->
            </div>
        </div>
    </div>
</template>
