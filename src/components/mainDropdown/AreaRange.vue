<script>
export default {
    name: 'AreaRange',
    data() {
        return {
            minArea: '',
            maxArea: '',
        }
    },
    methods: {
        handleMaxArea() {
            this.$emit("childToParentEventMaxArea", this.maxArea);
        },
        handleMinArea() {
            this.$emit("childToParentEventMinArea", this.minArea);
        }
    }
}
</script>

<style></style>

<template>
    <div>
          <!-- Modal -->
          <div class="modal fade" id="areaModal" tabindex="-1" aria-labelledby="areaModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-center" id="areaModalLabel">Change Area</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <select class="form-select" aria-label="Default select example" v-on:change="handleMeterUnit"
                                :value="unitMeter">
                                <option value="marla" selected>Marla</option>
                                <option value="sqft">Sq.Ft</option>
                                <option value="sqm">Sq.M</option>
                                <option value="sqyd">Sq.Yd</option>
                                <option value="kanal">Kanal</option>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
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