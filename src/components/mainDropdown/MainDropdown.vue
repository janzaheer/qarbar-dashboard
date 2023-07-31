<template>
    <div class="container">
        <div class="card p-3">
            <div class="d-flex my-2 justify-content-center">
                <button
                    :class="sellChecked ? 'selectedButtonColor ButtonColor me-2' : 'unSelectedButtonColor ButtonColor me-2'"
                    v-on:click="handleSellView">
                    <i class="fa-solid fa-house-circle-check"></i> Sell</button>
                <button :class="rentChecked ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                    v-on:click="handleRentView">
                    <i class="fa-solid fa-house-lock"></i> Rent</button>
            </div>
            <div class="row g-1">
                <div class="col-4 col-md-12 col-lg-6 ">
                    <Multiselect v-model="value" mode="tags" :close-on-select="false" :searchable="true"
                        :create-option="true" placeholder='Select Location' :options="[
                            { value: 'Quetta', label: 'Quetta' },
                            { value: 'Islamabad', label: 'Islamabad' },
                            { value: 'Lahore', label: 'Lahore' },
                            { value: 'Karachi', label: 'Karachi' },
                            { value: 'Nushki', label: 'Nushki' },
                        ]" />
                </div>
                <div class="col-2 col-md-3 col-lg-3 mt-sm-1 mt-lg-1 ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Property type</option>
                        <option value="1">Apartment</option>
                        <option value="2">Villa</option>
                        <option value="3">Penthouse</option>
                        <option value="4">Duplex</option>
                        <option value="5">Land</option>
                        <option value="6">Bungalow</option>
                    </select>
                </div>
                <div class="col-2 col-md-3 col-lg-2 mt-lg-1 mt-1">
                    <div class="">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle w-100"
                            data-bs-toggle="dropdown" aria-expanded="false">
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
                <!-- <div class="col-2 col-md-5 col-lg-1 mt-lg-1 mt-1">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">$1000</option>
                        <option value="2">$2000</option>
                        <option value="3">$4000</option>
                    </select>
                </div> -->
                <div class="col-2 col-md-1 col-lg-1 mt-lg-1 mt-1 text-center">
                    <button class="SearchBtnColor">Find </button>

                </div>
                <div class="mt-2">
                    <div class="collapse" id="collapseExample">
                        <div class="row g-1">
                            <div class="col-3">
                                <div class="">
                                    <button type="button" class="btn btn-outline-secondary dropdown-toggle w-100"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Price 0 to Any
                                    </button>

                                    <ul class="dropdown-menu">
                                        <li class="dropdown-items">
                                        
                                               
                                                    <div class="m-2">
                                                        <!-- <div class="d-flex form-inputs">
                                                            <input class="form-control" type="text"
                                                                placeholder="Min Price(PKR)" />
                                                        </div> -->
                                                        <h6>"Min Price(PKR)</h6>
                                                        <button class="btn btn-secondary">10,000</button>
                                                        <button class="btn btn-secondary mx-1">20,000</button>
                                                        <button class="btn btn-secondary">30,000</button>
                                                        <button class="btn btn-secondary mx-1">40,000</button>
                                                        <button class="btn btn-secondary">50,000</button>
                                                        <button class="btn btn-secondary ms-1">60,000</button>
                                                        
                                                    </div>
                                             
                                                
                                                    <div class=" m-2">
                                                        <h6>"Max Price(PKR)</h6>
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
                            <div class="col-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Area</option>
                                    <option value="1">$1000</option>
                                    <option value="2">$2000</option>
                                    <option value="3">$4000</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <div class="d-flex form-inputs">
                                    <input class="form-control" type="text" placeholder="Search any product..."
                                        v-on:keyup="(e) => handleSearch(e)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-1 mx-md-5">
                <!-- <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Show commercial properties only
                        </label>
                    </div>
                </div> -->
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
.SearchBtnColor {
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
    border: 1px solid rgb(255, 69, 0);
    background-color: rgb(255, 69, 0);
    color: white;
}
</style>