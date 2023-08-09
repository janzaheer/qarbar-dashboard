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
                    <Multiselect v-model="selectedCities" mode="tags" :close-on-select="false" :searchable="true"
                        :create-option="true" placeholder='Select Location' :options="cityOptions" />
                </div>
                <div class="d-none d-md-block col-6 col-md-3 col-lg-3 mt-sm-1 mt-lg-1 ">
                    <div class="">
                        <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                            aria-expanded="false">Property Type</button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Home Type</li>
                            <li class="dropdown-item"> Commercial Type</li>
                            <li class="dropdown-item">Plot Type </li>
                        </ul>
                    </div>
                </div>
                <div class="d-none d-md-block col-6 col-md-3 col-lg-2 mt-lg-1 mt-1">
                    <div class="">
                        <button class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                            Beds & Baths
                        </button>
                        <ul class="dropdown-menu">
                            <li class="bedBathDropdown">
                                <h6 class="ms-2">bathrooms</h6>
                                <div class="m-2 d-flex">
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1" v-on:click="selectedBed('bath 1')"><span>1</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="2" v-on:click="selectedBed('bath 2')"><span>2</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="3" v-on:click="selectedBed('bath 3')"><span>3</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="4" v-on:click="selectedBed('bath 4')"><span>4</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="5" v-on:click="selectedBed('bath 5')"><span>5</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="6" v-on:click="selectedBed('bath 6')"><span>6</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="7" v-on:click="selectedBed('bath 7')"> <span>7</span>
                                        </label>
                                    </div>

                                </div>
                                <h6 class="ms-2">bedrooms</h6>
                                <div class=" m-2 d-flex">
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>1</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>2</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>3</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>4</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>5</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>6</span>
                                        </label>
                                    </div>
                                    <div class="cat action">
                                        <label>
                                            <input type="checkbox" value="1"><span>7</span>
                                        </label>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>




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
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select area unit</option>
                                                <option value="1">Marla</option>
                                                <option value="2">Square feet</option>
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
                            <!-- <input type="text" class="form-control h-100" placeholder=" Search any property..."
                                aria-label="First name"> -->
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    {{ selectedOption }}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#" @click="selectOption('Option 1')">Option 1</a>
                                    <a class="dropdown-item" href="#" @click="selectOption('Option 2')">Option 2</a>
                                    <a class="dropdown-item" href="#" @click="selectOption('Option 3')">Option 3</a>
                                </div>
                            </div>
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

export default {
    mode: 'tags',
    components: {
        Multiselect,
    },
    data() {
        return {
            // areaUnit: [],
            value: [],
            sellChecked: true,
            rentChecked: false,
            selectedCities: [], // Holds the selected cities
            cityOptions: [], // Holds the city options for the Multiselect
            minPrice: null,
            maxPrice: null,
            minArea: null,
            maxArea: null,
            selectedOption: '',
            selectedBeds: '',


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
        async handleCity() {
            try {
                let finalUrl = BASE_URL + API_VERSION() + CITY_END_POINT();
                let res = await axios.get(finalUrl);
                this.cityOptions = res.data.map(city => ({
                    value: city.city_name,
                    label: city.city_name
                }));
                console.log('city')
            } catch (error) {
                console.error('Error fetching city data:', error);
            }

        },
        selectedBed(v){
            this.selectedBeds = v
            console.log('value',this.selectedBeds = v)
        },
        selectOption(option) {
            this.selectedOption = option;
            console.log('value',this.selectedOption = option)
        },
        // async handleAreaUnit() {
        //     let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT();
        //     try {
        //         let res = await axios.get(finalUrl);
        //         console.log('=============================')
        //         console.log(res.data)
        //         console.log('=============================')
        //     } catch (error) {
        //         console.error('Error fetching area data:', error);
        //     }
        // },
        handleValue() {
            console.log('----')
            console.log('click')
            console.log(this.minArea, this.maxArea, this.minPrice, this.maxPrice, this.selectedCities)
            this.$refs.handleValue.reset();
        },
        // handleSearch2() {
        //     // Handle your search logic here, if needed
        // },
        // handleCityChange() {
        //     console.log('Selected Cities:', this.selectedCities);
        // },
        // handlePriceChange() {
        //     console.log('Min Price:', this.minPrice);
        //     console.log('Max Price:', this.maxPrice);
        // },
        // handleAreaChange() {
        //     console.log('Min Area:', this.minArea);
        //     console.log('Max Area:', this.maxArea);
        // },

    },
    mounted() {
        // this.handleAreaUnit();
        this.handleCity();
    },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.cat {
    margin: 4px;
    background-color: darkgray;
    border-radius: 4px;
    border: 1px solid #fff;
    overflow: hidden;
    /* float: left; */
}

.cat label {
    /* float: left; */
    /* line-height: 3.0em; */
    /* width: 8.0em;
   height: 3.0em; */
    /* padding: 6px 9px; */
    width: 50px;
}

.cat label span {
    text-align: center;
    padding: 3px 0;
    display: block;
}

.cat label input {
    position: absolute;
    display: none;
    color: #fff !important;
}

/* selects all of the text within the input element and changes the color of the text */
.cat label input+span {
    color: #fff;
}

/* This will declare how a selected input will look giving generic properties */
.cat input:checked+span {
    color: #ffffff;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
}

.action input:checked+span {
    background-color: #F75A1B;
}


.mainDropBtn {
    color: darkgray;
    border: 1px solid rgb(210, 208, 208);
    background-color: #ffffff;
    padding: 8px 0;
    border-radius: 5px;
    text-align: start;
    padding-left: 10px;

}

.mainDropBtn:hover {
    color: #888;
    border: 1px solid #888;
}

@media screen and (max-width: 1024px) {
    .maindropdownwidth {
        margin: 0 50px;
    }
}

@media screen and (min-width: 1080px) {
    .maindropdownwidth {
        margin: 0 150px;
    }
}

@media screen and (max-width: 420px) {
    .maindropdownwidth {
        margin: -5px;
    }
}

.SearchBtnColor {
    padding: 8px 20px;
    border-radius: 5px;
    border: 1px solid rgb(255, 69, 0);
    background-color: rgb(255, 69, 0);
    color: white;
}

.SearchBtnColor:hover {
    color: rgb(255, 69, 0);
    background-color: white;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px;
}

.dropdown:hover .dropdown-content {
    display: block;
}

input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.bedBathDropdown {
    background-color: #fff;
    height: 10rem;
    width: 350px;
}

.menuBox {
    /* position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 4;
    margin-top: 0.2rem; */
    padding: 10px;
    /* -webkit-box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    -webkit-box-sizing: border-box;
    box-sizing: border-box; */
    /* border-radius: 0.5rem; */
    background-color: #fff;
    height: 7rem;
    width: 350px;
}

.dropdown-menu-item-box {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 4;
    margin-top: 0.2rem;
    padding: 1rem;
    -webkit-box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: #fff;
}

.dropdown-menu-item-box2 {
    max-height: 14rem;
    overflow-y: scroll;
    overflow-x: hidden;
}

/* button */
.dropdownSelectBtn {
    min-height: 2.5rem;
    width: 100%;
    border-radius: 0;
    font-size: 1.0rem;
    display: block;
    margin-top: 5px;
    text-align: center;
    color: #222;
    border: 1px solid #dedede;
    border-radius: 0.4rem;
    background-color: #fff;
}

.dropdownSelectBtn:hover {
    background-color: rgb(213, 220, 218);
}

/* button */
/* close button */
.dropdownCloseBox {
    margin-left: auto;
    margin-top: 0.9rem;
    display: flex;
    justify-content: center;
}

.dropdownCloseBtn {
    font-size: 0.7rem;
    padding: 0.1rem 0.6rem;
    color: #ffffff;
    border: none;
    border-radius: 0.4rem;
    background-color: rgb(255, 69, 0);
}

/* close button */
.dropdown-menu-item-boxPrice {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 4;
    margin-top: 0.2rem;
    padding: 10px;
    -webkit-box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, .25);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: #fff;
    width: 200px;
}

.dropdownSelectBtnPrice {
    min-height: 2rem;
    width: 100%;
    font-size: 14px;
    display: block;
    margin-top: 5px;
    text-align: center;
    color: #222;
    border: 1px solid #dedede;
    border-radius: 0.4rem;
    background-color: #fff;
}

.dropdownSelectBtnPrice:hover {
    background-color: rgb(213, 220, 218)
}

.lableText {
    font-size: 16px;
    color: rgb(255, 69, 0);
    text-align: center;
    margin-bottom: 0 !important;
}

::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
