<template>
    <div class="container">
        <div class="card p-2 p-md-3 maindropdownwidth">
            <div class="d-flex my-1 my-md-2 justify-content-center">
                <button :class="sellChecked ? 'R_S_button me-2' : 'R_S_button_Un_Select me-2'" v-on:click="handleSellView">
                    <i class="fa-solid fa-house-circle-check"></i> Buy</button>
                <button :class="rentChecked ? 'R_S_button' : 'R_S_button_Un_Select'" v-on:click="handleRentView">
                    <i class="fa-solid fa-house-lock"></i> Rent</button>
                <div class="mt-md-2 ms-2">
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                            v-model="showCommercialValue" v-on:change="handleShowCOmmercialValue">
                        <label class="form-check-label" for="flexCheckDefault">
                            Show commercial properties only......
                        </label>
                    </div>
                </div>
            </div>
            <div class="row g-1">
                <div class="col-9 col-md-4 col-lg-6 ">
                    <Cities @childToParentEvent="handleCityData" />
                </div>
                <div class="d-none d-md-block col-6 col-md-3 col-lg-3 mt-sm-1 mt-lg-1">
                    <PropertyTypes @childToParentDataHomeType="handleHomeData" @childToParentDataPlotType="handlePlotData"
                        @childToParentDataCommercialType="handleCommercialData" />
                </div>
                <div v-if="showCommercialValue == false" class="d-none d-md-block col-6 col-md-3 col-lg-2 mt-lg-1 mt-1">
                    <BedsBaths @childToParentEventSelectedBeds="handleBadsData"
                        @childToParentEventSelectedBaths="handleBathsData" />
                </div>
                <div class="col-2 col-md-1 col-lg-1 mt-lg-1 mt-1">
                    <button class="SearchBtnColor" v-on:click="handleValue">Find </button>
                </div>
            </div>
            <div class="mt-2">
                <div class="collapse" id="collapseExample">
                    <div class="row g-1">
                        <div class="col-6 col-md-4">

                            <PriceRange @childToParentEventMaxPrice="handleMaxPriceData"
                                @childToParentEventMinPrice="handleMinPriceData" />
                        </div>
                        <div class="col-6 col-md-4">
                            <div class="">
                                <div class="dropdown">
                                    <button class="mainDropBtn dropdown-toggle  w-100" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Min ({{ ValueminArea() }}) - Max ({{ ValuemaxArea() }})
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <div class="menuBox">
                                            <div class=" text-center unitMeterCLass">
                                                {{ this.unitMeter }}
                                            </div>
                                            <div class="row g-3">
                                                <div class="col-6">
                                                    <div class="lableText">Min Area</div>
                                                    <input type="number" class="form-control h-100" placeholder=" Min Area"
                                                        aria-label="First name" name="minArea" v-model="minArea">
                                                </div>
                                                <div class="col-6">
                                                    <div class="lableText">Max Area</div>
                                                    <input v-model="maxArea" type="number" class="form-control h-100"
                                                        placeholder=" Max Area" aria-label="First name" name="maxArea">
                                                </div>
                                            </div>


                                        </div>
                                        <div class="dropdownCloseBox">
                                            <button class="dropdownCloseBtn" data-bs-toggle="modal"
                                                data-bs-target="#areaModal">Change Area unit</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="areaModal" tabindex="-1" aria-labelledby="areaModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 text-center" id="areaModalLabel">Change Area</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <select class="form-select" aria-label="Default select example"
                                                v-on:change="handleMeterUnit" :value="unitMeter">
                                                <option value="marla" selected>Marla</option>
                                                <option value="sqft">Sq.Ft</option>
                                                <option value="sqm">Sq.M</option>
                                                <option value="sqyd">Sq.Yd</option>
                                                <option value="kanal">Kanal</option>
                                            </select>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success w-100"
                                                data-bs-dismiss="modal">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <input type="text" class="form-control h-100" placeholder=" Search any property type..."
                                aria-label="First name" v-on:keyup="(e) => handleSearchTerm(e)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-1 mx-md-5">
                <div>
                    <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        Show more search options
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cities from './Cities.vue';
import BedsBaths from './BedsBaths.vue';
import PriceRange from './PriceRange.vue';
import PropertyTypes from './PropertyTypes.vue';

export default {
    mode: 'tags',
    components: {
        Cities,
        BedsBaths,
        PriceRange,
        PropertyTypes,
    },
    data() {
        return {
            value: [],
            sellChecked: true,
            rentChecked: false,
            minArea: '',
            maxArea: '',
            // selectedOption: '',
            searchValue: '',
            unitMeter: 'marla',
            receivedCitiesData: [],
            receivedBedsData: [],
            receivedBathsData: [],
            receivedMaxPrice: '',
            receivedMinPrice: '',
            receivedHomeData: '',
            receivedPlotData: '',
            receivedCommercialData: '',
            showCommercialValue: false


        }
    },
    methods: {
        handleShowCOmmercialValue() {
            this.showCommercialValue
            console.log('value', this.showCommercialValue)
        },
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
        },
        handleRentView() {
            this.sellChecked = false;
            this.rentChecked = true;
        },
        handleSearchTerm(e) {
            // if (e.key == 'Enter') {
            let value = e.target.value
            console.log('search', value)
            this.searchValue = value
            // }
        },
        handleMeterUnit(e) {
            let val = e.target.value;
            console.log('----', val)
            this.unitMeter = val
        },
        ValuemaxArea() {
            if (this.maxArea) {
                return this.maxArea
            } else {
                return 'Area'
            }
        },
        ValueminArea() {
            if (this.minArea) {
                return this.minArea
            } else {
                return 'Area'
            }
        },

        handleValue() {
            const params = new URLSearchParams()
            if (this.searchValue) {
                params.append("search", this.searchValue)
            }
            if (this.receivedMinPrice) {
                params.append("min_price", this.receivedMinPrice)
            }
            if (this.receivedMaxPrice) {
                params.append("max_price", this.receivedMaxPrice)
            }
            if (this.minArea) {
                params.append("min_size", this.minArea)
            }
            if (this.maxArea) {
                params.append("max_size", this.maxArea)
            }
            if (this.unitMeter) {
                params.append("unit_type", this.unitMeter)
            }
            if (this.receivedBedsData) {
                this.receivedBedsData.forEach((s_bed) => params.append("beds", s_bed))
            }
            if (this.receivedBathsData) {
                this.receivedBathsData.forEach((s_bath) => params.append("baths", s_bath))
            }
            if (this.receivedCitiesData) {
                this.receivedCitiesData.forEach((s_cities) => params.append("cities", s_cities))
            }
            if (this.rentChecked) {
                params.append("rent_sale_type", 'rent')
            }
            if (this.sellChecked) {
                params.append("rent_sale_type", 'sale')
            }
            if (this.receivedHomeData) {
                params.append("home_types", this.receivedHomeData)
            }
            if (this.receivedCommercialData) {
                params.append("commercial_types", this.receivedCommercialData)
            }
            if (this.receivedPlotData) {
                params.append("plot_types", this.receivedPlotData)
            }
            console.log(params.toString())

            // this.$refs.handleValue.reset();

            const listingRoute = {
                name: 'Listing',
                query: {
                    params: params.toString(),
                }
            };
            this.$router.push(listingRoute);
        },

        handleCityData(data) {
            this.receivedCitiesData = data;
        },
        handleMaxPriceData(data) {
            this.receivedMaxPrice = data
        },
        handleMinPriceData(data) {
            this.receivedMinPrice = data
        },
        handleHomeData(data) {
            this.receivedHomeData = data
        },
        handlePlotData(data) {
            this.receivedPlotData = data
        },
        handleCommercialData(data) {
            this.receivedCommercialData = data
        },
        handleBathsData(data) {
            this.receivedBathsData = data

        },
        handleBadsData(data) {
            this.receivedBedsData = data
        },
    },
    mounted() {
    },
}
</script>

<style>
@import './mainDropDown.css';
</style>
