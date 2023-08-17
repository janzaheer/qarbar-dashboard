<script>
export default {
    name: 'BedsBaths',
    props:{
        beds_type:Array,
        baths_type:Array,
    },
    data() {
        return {
            selectedBeds: [],
            selectedBaths: [],
        }
    },
    methods: {
        handleSelectedBath(val, event) {
            console.log('e', event.target.checked)
            if (event.target.checked) {
                this.selectedBaths.push(val)
            } else {
                const index = this.selectedBaths.indexOf(val)
                this.selectedBaths.splice(index, 1)
            }
            this.$emit("childToParentEventSelectedBaths", this.selectedBaths);
        },
        handleSelectedBed(val, event) {
            console.warn('e', event.target.checked)
            if (event.target.checked) {
                this.selectedBeds.push(val)
            } else {
                const index = this.selectedBeds.indexOf(val)
                this.selectedBeds.splice(index, 1)
            }
            this.$emit("childToParentEventSelectedBeds", this.selectedBeds);
        },
        ValueSelectedBed(){
            if (this.selectedBeds) {
                return this.selectedBeds.toString()
            }
            if (this.beds_type) {
                return this.beds_type
            }
            return ''
        },
        ValueSelectedBaths(){
            if (this.selectedBaths) {
                return this.selectedBaths.toString()
            }
            if (this.baths_type) {
                return this.baths_type.toString()
            }
            return ''
        },
    }
}

</script>

<style></style>

<template>
    <div>
        <div class="">
            <button class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                Bed{{ ValueSelectedBed() }} & Bath{{ ValueSelectedBaths() }}
            </button>
            <ul class="dropdown-menu">
                <li class="bedBathDropdown">
                    <h6 class="ms-2">bathrooms</h6>
                    <div class="m-2 d-flex">
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="1" v-on:click="handleSelectedBath(1, $event)"><span>1</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="2" v-on:click="handleSelectedBath(2, $event)"><span>2</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="3" v-on:click="handleSelectedBath(3, $event)"><span>3</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="4" v-on:click="handleSelectedBath(4, $event)"><span>4</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="5" v-on:click="handleSelectedBath(5, $event)"><span>5</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="6" v-on:click="handleSelectedBath(6, $event)"><span>6</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="7" v-on:click="handleSelectedBath(7, $event)">
                                <span>7</span>
                            </label>
                        </div>

                    </div>
                    <h6 class="ms-2">bedrooms</h6>
                    <div class=" m-2 d-flex">
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="1" v-on:click="handleSelectedBed(1, $event)"><span>1</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="2" v-on:click="handleSelectedBed(2, $event)"><span>2</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="3" v-on:click="handleSelectedBed(3, $event)"><span>3</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="4" v-on:click="handleSelectedBed(4, $event)"><span>4</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="5" v-on:click="handleSelectedBed(5, $event)"><span>5</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="6" v-on:click="handleSelectedBed(6, $event)"><span>6</span>
                            </label>
                        </div>
                        <div class="cat action">
                            <label>
                                <input type="checkbox" value="7" v-on:click="handleSelectedBed(7, $event)"><span>7</span>
                            </label>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
