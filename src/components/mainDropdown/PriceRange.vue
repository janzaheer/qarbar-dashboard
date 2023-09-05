<script>
export default {
    name: 'PriceRange',
    props: {
        maxPrice_type: String,
        minPrice_type: String,
    },
    data() {
        return {
            minPrice: '',
            maxPrice: '',
        }
    },
    methods: {
        handleMaxPrice() {
            this.$emit("childToParentEventMaxPrice", this.maxPrice);
        },
        handleMinPrice() {
            this.$emit("childToParentEventMinPrice", this.minPrice);
        },
        ValuemaxPrice() {
            if (this.maxPrice) {
                return this.maxPrice
            }
            if (this.maxPrice_type) {
                return this.maxPrice_type
            }
            return 'price'
        },
        ValueminPrice() {
            if (this.minPrice) {
                return this.minPrice
            }
            if (this.minPrice_type) {
                return this.minPrice_type
            }
            return 'price'
        },
    }
}
</script>

<style></style>

<template>
    <div>
        <div class="">
            <div class="dropdown">
                <button class="mainDropBtn dropdown-toggle  w-100" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Min ({{ ValueminPrice() }}) - Max ({{ ValuemaxPrice() }})
                </button>
                <ul class="dropdown-menu ">
                    <div class="menuBox">
                        <div class="row g-3">
                            <div class="col-6">
                                <div class="lableText">Min Price</div>
                                <input v-model="minPrice" type="number" class="form-control h-100" placeholder=" Min Price"
                                    aria-label="First name" name="minPrice" v-on:keyup="handleMinPrice">
                            </div>
                            <div class="col-6">
                                <div class="lableText">Max Price</div>
                                <input v-model="maxPrice" type="number" class="form-control h-100" placeholder=" Max Price"
                                    aria-label="First name" name="maxPrice" v-on:keyup="handleMaxPrice">
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>