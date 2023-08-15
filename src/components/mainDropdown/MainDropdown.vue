<template>
    <div class="container">
        <div class="card p-2 p-md-3 maindropdownwidth">
            <div class="d-flex my-1 my-md-2 justify-content-center">
                <button
                    :class="sellChecked ? 'selectedButtonColor ButtonColor me-2' : 'unSelectedButtonColor ButtonColor me-2'"
                    v-on:click="handleSellView">
                    <i class="fa-solid fa-house-circle-check"></i> Sell</button>
                <button :class="rentChecked ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                    v-on:click="handleRentView">
                    <i class="fa-solid fa-house-lock"></i> Rent</button>
                    
            </div>
            <div class="row g-1">
                <div class="col-9 col-md-12 col-lg-6 ">
                    <!-- <Multiselect v-model="selectedCities" mode="tags" :close-on-select="false" :searchable="true"
                        :create-option="true" placeholder='Select Location' :options="cityOptions" /> -->
                    <Cities @childToParentEvent="handleCityData" />
                </div>
                <div class="d-none d-md-block col-6 col-md-3 col-lg-3 mt-sm-1 mt-lg-1 ">
                    <div class="">
                        <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                            aria-expanded="false">Property Type</button>
                        <ul class="dropdown-menu propertyTypeDp">
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('house')">House</li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('flat')">Flat</li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('room')">Room</li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('upper_portion')">Uper Portion
                            </li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('lower_portion')">Lower Portion
                            </li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('farm_house')">Farm House</li>
                            <li class="dropdown-item" v-on:click="handleHomePropertyTypes('pent_house')">Pent House</li>
                            <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('residetial_plot')">Residential
                                Plot
                            </li>
                            <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('commercial_plot')">Commercial
                                Plot
                            </li>
                            <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('agricultural_land')">Agricultural
                                Land</li>
                            <li class="dropdown-item" v-on:click="handlePropertyTypes('Industrial_land')">Industrial Land
                            </li>
                            <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('plot_file')">Plot File</li>
                            <li class="dropdown-item" v-on:click="handlePlotPropertyTypes('plot_form')">Plot Form</li>
                            <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('office')">Office</li>
                            <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('shop')">Shop</li>
                            <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('warehouse')">WareHouse</li>
                            <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('factory')">Factory</li>
                            <li class="dropdown-item" v-on:click="handleCommercialPropertyTypes('building')">Building</li>
                        </ul>
                    </div>
                </div>
                <div class="d-none d-md-block col-6 col-md-3 col-lg-2 mt-lg-1 mt-1">
                    <!-- <div class="">
                        <button class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                            Beds & Baths
                        </button>
                        <ul class="dropdown-menu">
                            <li class="bedBathDropdown">
                                <h6 class="ms-2">bathrooms</h6>
                                <div class="m-2 d-flex">
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"
                                                v-on:click="handleSelectedBath(1, $event)"><span>1</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="2"
                                                v-on:click="handleSelectedBath(2, $event)"><span>2</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="3"
                                                v-on:click="handleSelectedBath(3, $event)"><span>3</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="4"
                                                v-on:click="handleSelectedBath(4, $event)"><span>4</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="5"
                                                v-on:click="handleSelectedBath(5, $event)"><span>5</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="6"
                                                v-on:click="handleSelectedBath(6, $event)"><span>6</span>
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
                                            <input type="checkbox" value="1"
                                                v-on:click="handleSelectedBed(1, $event)"><span>1</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="2"
                                                v-on:click="handleSelectedBed(2, $event)"><span>2</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="3"
                                                v-on:click="handleSelectedBed(3, $event)"><span>3</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="4"
                                                v-on:click="handleSelectedBed(4, $event)"><span>4</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="5"
                                                v-on:click="handleSelectedBed(5, $event)"><span>5</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="6"
                                                v-on:click="handleSelectedBed(6, $event)"><span>6</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="7"
                                                v-on:click="handleSelectedBed(7, $event)"><span>7</span>
                                        </label>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div> -->


                    <BedsBaths @childToParentEventSelectedBeds="handleBadsData" @childToParentEventSelectedBaths="handleBathsData"  />

                </div>
                <div class="col-2 col-md-1 col-lg-1 mt-lg-1 mt-1">
                    <button class="SearchBtnColor" v-on:click="handleValue">Find </button>

                </div>
            </div>
            <div class="mt-2">
                <div class="collapse" id="collapseExample">
                    <div class="row g-1">
                        <div class="col-6 col-md-3">

                            <div class="">
                                <div class="dropdown">
                                    <button class="mainDropBtn dropdown-toggle  w-100" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Min (Price) - Max (Price)
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <div class="menuBox">
                                            <div class="row g-3">
                                                <div class="col-6">
                                                    <div class="lableText">Min Price</div>
                                                    <input v-model="minPrice" type="number" class="form-control h-100"
                                                        placeholder=" Min Price" aria-label="First name" name="minPrice">
                                                </div>
                                                <div class="col-6">
                                                    <div class="lableText">Max Price</div>
                                                    <input v-model="maxPrice" type="number" class="form-control h-100"
                                                        placeholder=" Max Price" aria-label="First name" name="maxPrice">
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                            <!-- <div class="">
                                <div class="dropdown">
                                    <button class="mainDropBtn dropdown-toggle w-100" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Min (Price) & Max (Price)
                                    </button>

                                    <div class="dropdown-menu">
                                        <div class="dropdown-menu-item-boxPrice" role="listbox">
                                            <div class="row g-2">
                                                <div class="col-6">
                                                    <div role="listbox" class="dropdown-menu-item-box2">
                                                        <div class="mt-2 mb-4">
                                                            <label for="exampleFormControlInput3"
                                                                class="form-label lableText">Min Price</label>
                                                            <input type="text" class="form-control"
                                                                id="exampleFormControlInput3" placeholder="Min Price">
                                                        </div>
                                                        <button aria-label="All" class="dropdownSelectBtnPrice">0</button>
                                                        <button aria-label="1"
                                                            class="dropdownSelectBtnPrice">100000</button>
                                                        <button aria-label="2"
                                                            class="dropdownSelectBtnPrice">200000</button>
                                                        <button aria-label="3"
                                                            class="dropdownSelectBtnPrice">300000</button>
                                                        <button aria-label="4"
                                                            class="dropdownSelectBtnPrice">400000</button>
                                                        <button aria-label="5"
                                                            class="dropdownSelectBtnPrice">500000</button>
                                                        <button aria-label="6"
                                                            class="dropdownSelectBtnPrice">600000</button>
                                                        <button aria-label="7"
                                                            class="dropdownSelectBtnPrice">700000</button>
                                                        <button aria-label="8"
                                                            class="dropdownSelectBtnPrice">800000</button>
                                                        <button aria-label="9"
                                                            class="dropdownSelectBtnPrice">900000</button>
                                                        <button aria-label="10+"
                                                            class="dropdownSelectBtnPrice">1000000+</button>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div role="listbox" class="dropdown-menu-item-box2">
                                                        <div class="mt-2 mb-4">
                                                            <label for="exampleFormControlInput4"
                                                                class="form-label lableText">Max Price</label>
                                                            <input type="text" class="form-control"
                                                                id="exampleFormControlInput4" placeholder="Max Price">
                                                        </div>
                                                        <button aria-label="All" class="dropdownSelectBtnPrice">0</button>
                                                        <button aria-label="1"
                                                            class="dropdownSelectBtnPrice">100000</button>
                                                        <button aria-label="2"
                                                            class="dropdownSelectBtnPrice">200000</button>
                                                        <button aria-label="3"
                                                            class="dropdownSelectBtnPrice">300000</button>
                                                        <button aria-label="4"
                                                            class="dropdownSelectBtnPrice">400000</button>
                                                        <button aria-label="5"
                                                            class="dropdownSelectBtnPrice">500000</button>
                                                        <button aria-label="6"
                                                            class="dropdownSelectBtnPrice">600000</button>
                                                        <button aria-label="7"
                                                            class="dropdownSelectBtnPrice">700000</button>
                                                        <button aria-label="8"
                                                            class="dropdownSelectBtnPrice">800000</button>
                                                        <button aria-label="9"
                                                            class="dropdownSelectBtnPrice">900000</button>
                                                        <button aria-label="10+"
                                                            class="dropdownSelectBtnPrice">1000000+</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="dropdownCloseBox">
                                                <button class="dropdownCloseBtn" aria-label="Close">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="">
                                <div class="dropdown">
                                    <button class="mainDropBtn dropdown-toggle  w-100" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Min (Area) - Max (Area)
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

                            <!-- <div class="">
                                <div class="dropdown">
                                    <button class="mainDropBtn dropdown-toggle w-100" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Area
                                    </button>
                                    <div class="dropdown-menu">
                                        <div class="dropdown-menu-item-boxPrice" role="listbox">
                                            <div class="text-center bg-light mb-1">
                                                change area (unit)
                                            </div>
                                            <div class="row g-2">
                                                <div class="col-6">
                                                    <div role="listbox" class="dropdown-menu-item-box2">
                                                        <div class="mt-2 mb-4">
                                                            <label for="exampleFormControlInput1"
                                                                class="form-label lableText">Min Area</label>
                                                            <input type="text" class="form-control"
                                                                id="exampleFormControlInput1" placeholder="Min Area">
                                                        </div>
                                                        <button aria-label="All" class="dropdownSelectBtnPrice">0</button>
                                                        <button aria-label="1" class="dropdownSelectBtnPrice">10</button>
                                                        <button aria-label="2" class="dropdownSelectBtnPrice">20</button>
                                                        <button aria-label="3" class="dropdownSelectBtnPrice">30</button>
                                                        <button aria-label="4" class="dropdownSelectBtnPrice">40</button>
                                                        <button aria-label="5" class="dropdownSelectBtnPrice">50</button>
                                                        <button aria-label="6" class="dropdownSelectBtnPrice">60</button>
                                                        <button aria-label="7" class="dropdownSelectBtnPrice">70</button>
                                                        <button aria-label="8" class="dropdownSelectBtnPrice">80</button>
                                                        <button aria-label="9" class="dropdownSelectBtnPrice">90</button>
                                                        <button aria-label="10+" class="dropdownSelectBtnPrice">10</button>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div role="listbox" class="dropdown-menu-item-box2">
                                                        <div class="mt-2 mb-4">
                                                            <label for="exampleFormControlInput2"
                                                                class="form-label lableText">Max Area</label>
                                                            <input type="text" class="form-control"
                                                                id="exampleFormControlInput2" placeholder="Max Area">
                                                        </div>
                                                        <button aria-label="All" class="dropdownSelectBtn">0</button>
                                                        <button aria-label="1" class="dropdownSelectBtnPrice">10</button>
                                                        <button aria-label="2" class="dropdownSelectBtnPrice">20</button>
                                                        <button aria-label="3" class="dropdownSelectBtnPrice">30</button>
                                                        <button aria-label="4" class="dropdownSelectBtnPrice">40</button>
                                                        <button aria-label="5" class="dropdownSelectBtnPrice">50</button>
                                                        <button aria-label="6" class="dropdownSelectBtnPrice">60</button>
                                                        <button aria-label="7" class="dropdownSelectBtnPrice">70</button>
                                                        <button aria-label="8" class="dropdownSelectBtnPrice">80</button>
                                                        <button aria-label="9" class="dropdownSelectBtnPrice">90</button>
                                                        <button aria-label="10+" class="dropdownSelectBtnPrice">10</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="dropdownCloseBox">
                                                <button class="dropdownCloseBtn" aria-label="Close">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
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
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control h-100" placeholder=" Search any property..."
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
import Multiselect from '@vueform/multiselect'
import axios from 'axios';
import { BASE_URL, API_VERSION, CITY_END_POINT, PROPERTY_END_POINT } from '../../utils/api';
import Cities from './Cities.vue';
import BedsBaths from './BedsBaths.vue';

export default {
    mode: 'tags',
    components: {
        Multiselect,
        Cities,
        BedsBaths,
    },
    data() {
        return {
            value: [],
            sellChecked: true,
            rentChecked: false,
            // selectedCities: [], // Holds the selected cities
            // cityOptions: [], // Holds the city options for the Multiselect
            minPrice: '',
            maxPrice: '',
            minArea: '',
            maxArea: '',
            selectedOption: '',
            // selectedBeds: [],
            // selectedBaths: [],
            searchValue: '',
            unitMeter: 'marla',
            selectedPropertyType: '',
            selectedCommercialPropertyType: '',
            selectedPlotPropertyType: '',
            receivedCitiesData: [],
            receivedBedsData: [],
            receivedBathsData: [],


        }
    },
    methods: {
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
        },
        handleRentView() {
            this.sellChecked = false;
            this.rentChecked = true;
        },
        // async handleCity() {
        //     try {
        //         let finalUrl = BASE_URL + API_VERSION() + CITY_END_POINT();
        //         let res = await axios.get(finalUrl);
        //         this.cityOptions = res.data.map(city => ({
        //             value: city.city_name,
        //             label: city.city_name
        //         }));
        //     } catch (error) {
        //         console.error('Error fetching city data:', error);
        //     }

        // },
        handleBathsData(data){
            this.receivedBathsData = data

        },
        handleBadsData(data) {
            this.receivedBedsData = data
        },
        handleSelectedBath(val, event) {
            console.log('e', event.target.checked)
            if (event.target.checked) {
                this.selectedBaths.push(val)
            } else {
                const index = this.selectedBaths.indexOf(val)
                this.selectedBaths.splice(index, 1)
            }
        },
        handleSelectedBed(val, event) {
            console.warn('e', event.target.checked)
            if (event.target.checked) {
                this.selectedBeds.push(val)
            } else {
                const index = this.selectedBeds.indexOf(val)
                this.selectedBeds.splice(index, 1)
            }
        },
        handleSearchTerm(e) {
            if (e.key == 'Enter') {
                let value = e.target.value
                console.log('search', value)
                this.searchValue = value
            }

        },
        handleMeterUnit(e) {
            let val = e.target.value;
            console.log('----', val)
            this.unitMeter = val
        },
        handleValue() {
            const params = new URLSearchParams()
            if (this.searchValue) {
                params.append("search", this.searchValue)
            }
            if (this.minPrice) {
                params.append("min_price", this.minPrice)
            }
            if (this.maxPrice) {
                params.append("max_price", this.maxPrice)
            }
            if (this.minArea) {
                params.append("min_size", this.minArea)
            }
            if (this.maxArea) {
                params.append("max_size", this.maxArea)
            }
            // if (this.selectedBeds) {
            //     this.selectedBeds.forEach((s_bed) => params.append("beds", s_bed))
            // }
            // if (this.selectedBaths) {
            //     this.selectedBaths.forEach((s_bath) => params.append("baths", s_bath))
            // }
            if (this.receivedBedsData) {
                this.receivedBedsData.forEach((s_bed) => params.append("beds", s_bed))
            }
            if (this.receivedBathsData) {
                this.receivedBathsData.forEach((s_bath) => params.append("baths", s_bath))
            }
            if (this.receivedCitiesData) {
                this.receivedCitiesData.forEach((s_cities) => params.append("cities", s_cities))
            }
            // if (this.selectedCities) {
            //     this.selectedCities.forEach((s_cities) => params.append("cities", s_cities))
            // }
            if (this.rentChecked) {
                params.append("rent_sale_type", 'rent')
            }
            if (this.sellChecked) {
                params.append("rent_sale_type", 'sale')
            }
            if (this.selectedPropertyType) {
                params.append("home_types", this.selectedPropertyType)
            }
            if (this.selectedCommercialPropertyType) {
                params.append("commercial_types", this.selectedCommercialPropertyType)
            }
            if (this.selectedPlotPropertyType) {
                params.append("plot_types", this.selectedPlotPropertyType)
            }
            console.log(params.toString())
            // const query = params.toString();
            // const listing = { name: 'AboutUs', query: params.toString() };

            // this.$router.push(listing);
            // this.$router.push({ name: 'AboutUs', query: params.toString() });

            // this.$refs.handleValue.reset();

            const listingRoute = {
                name: 'Listing', // Assuming 'listing' is the name of your route

                // query: params.toString()
                query: {
                    params: params.toString()
                }
            };
            this.$router.push(listingRoute);
            // this.$router.push(listingRoute);
        },
        handleHomePropertyTypes(val) {
            this.selectedPropertyType = val
            console.warn('home', this.selectedPropertyType = val)
        },
        handleCommercialPropertyTypes(val) {
            this.selectedCommercialPropertyType = val
            console.warn('commercial', this.selectedCommercialPropertyType = val)
        },
        handlePlotPropertyTypes(val) {
            this.selectedPlotPropertyType = val
            console.warn('plot', this.selectedPlotPropertyType = val)
        },
        handleCityData(data) {
            this.receivedCitiesData = data;
        }

    },
    mounted() {
        // this.handleCity();
        // console.log(this.receivedData)
    },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
@import './mainDropDown.css';

.active {
    background-color: #007bff;
    color: #fff;
}
</style>
