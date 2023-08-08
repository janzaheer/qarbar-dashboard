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
                    <Multiselect v-model="value" mode="tags" :close-on-select="false" :searchable="true"
                        :create-option="true" placeholder='Select Location' :options="[
                            { value: 'Quetta', label: 'Quetta' },
                            { value: 'Islamabad', label: 'Islamabad' },
                            { value: 'Lahore', label: 'Lahore' },
                            { value: 'Karachi', label: 'Karachi' },
                            { value: 'Nushki', label: 'Nushki' },
                        ]" />
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
                        <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Beds & Baths
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-items">
                                <div class="m-2">
                                    <h6>bathrooms</h6>
                                    <button class="btn btn-secondary">1</button>
                                    <button class="btn btn-secondary mx-1">2</button>
                                    <button class="btn btn-secondary">3</button>
                                    <button class="btn btn-secondary mx-1">4</button>
                                    <button class="btn btn-secondary">5</button>
                                    <button class="btn btn-secondary ms-1">6+</button>
                                </div>
                                <div class=" m-2">
                                    <h6>bedrooms</h6>
                                    <button class="btn btn-secondary">1</button>
                                    <button class="btn btn-secondary mx-1">2</button>
                                    <button class="btn btn-secondary">3</button>
                                    <button class="btn btn-secondary mx-1">4</button>
                                    <button class="btn btn-secondary">5</button>
                                    <button class="btn btn-secondary ms-1">6+</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-2 col-md-1 col-lg-1 mt-lg-1 mt-1 text-center">
                    <button class="SearchBtnColor">Find </button>

                </div>
            </div>
            <div class="mt-2">
                <div class="collapse" id="collapseExample">
                    <div class="row g-1">
                        <div class="col-6 col-md-3">
                            <div class="">
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
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="">
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
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control h-100" placeholder=" Search any property..."
                                aria-label="First name" v-on:keyup="(e) => handleSearch(e)">
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

export default {
    mode: 'tags',
    components: {
        Multiselect,
    },
    data() {
        return {
            value: [],
            sellChecked: true,
            rentChecked: false
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
        handleSearch(e) {
            // e.preventDefault();
            e.preventDefault();
            /* eslint eqeqeq: 0 */
            if (e.key == 'Enter') {
                let value = e.target.value
                //   navigate(`/search/?search=${value}`)
                // this.$router.push({ path: '/listing/?search=', query: { search: value } });
                console.log('-------------------------------------')
                console.log('search-value', value)
                console.log('-------------------------------------')
            }
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.mainDropBtn {
    color: darkgray;
    border: 1px solid darkgray;
    background-color: #ffffff;
    padding: 8px 0;
    border-radius: 5px;
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
.SearchBtnColor:hover{
    color: rgb(255, 69, 0);
    background-color: white;
}

/* .dropdown {
    position: relative;
    display: inline-block;
    width: 100%;
} */

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    /* height: 100px; */
    /* min-height: 100px;
    overflow-y: auto; */
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
    font-size: 13px;
    color: orangered;
    /* margin-left: 5px; */
    margin: 0 10px;
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
}</style>
