<script>
export default {
    name: 'AreaRange',
    data(){
        return {
            minArea: '',
            maxArea: '',
        }
    },
    methods: {
        handleMaxArea(){
            this.$emit("childToParentEventMaxArea", this.maxArea);
        },
        handleMinArea(){
            this.$emit("childToParentEventMinArea", this.minArea);
        }
    }
}
</script>

<style></style>

<template>
    <div>
        <div class="">
            <div class="dropdown">
                <button class="mainDropBtn dropdown-toggle  w-100" data-bs-toggle="dropdown" aria-expanded="false">
                    Min (Area) - Max (Area)
                </button>
                <ul class="dropdown-menu ">
                    <div class="menuBox">
                        <div class=" text-center unitMeterCLass">
                            <!-- {{ this.unitMeter }} -->unitMeter
                        </div>
                        <div class="row g-3">
                            <div class="col-6">
                                <div class="lableText">Min Area</div>
                                <input type="number" class="form-control h-100" placeholder=" Min Area"
                                    aria-label="First name" name="minArea" v-model="minArea" v-on:keyup="handleMinArea">
                            </div>
                            <div class="col-6">
                                <div class="lableText">Max Area</div>
                                <input v-model="maxArea" type="number" class="form-control h-100" placeholder=" Max Area"
                                    aria-label="First name" name="maxArea" v-on:keyup="handleMaxArea">
                            </div>
                        </div>


                    </div>
                    <div class="dropdownCloseBox">
                        <button class="dropdownCloseBtn" data-bs-toggle="modal" data-bs-target="#areaModal">Change Area
                            unit</button>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>