<template>
    <div class="container">
        <div class="card p-3">
            <div class="d-flex my-2 justify-content-center">
                <!-- <button type="button" class="btn btn-outline-secondary mx-2 mainButton">Buy</button>
                <button type="button" class="btn btn-outline-secondary mainButton">Rent</button>
                <button type="button" class="btn btn-outline-secondary ms-2 mainButton">New Projects</button> -->
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off"
                    checked>
                <label class="btn btn-outline-secondary" for="success-outlined">Buy</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                <label class="btn btn-outline-secondary mx-2" for="danger-outlined">Rent</label>
                <!-- <input type="radio" class="btn-check" name="options-outlined" id="warning-outlined" autocomplete="off">
                <label class="btn btn-outline-secondary" for="warning-outlined">New Projects</label> -->
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
                    <button class="btn btn-outline-secondary"><img src="../../assets/searchIcon/icons8-search.gif"
                            class="text-danger" style="height: 20px;" alt="img" /> </button>

                </div>
                <div class="mt-2">
                    <div class="collapse" id="collapseExample">
                        <div class="row g-1">
                            <div class="col-3">
                                
                                <input type="range" class="form-range" id="customRange1">
                                <label for="customRange1" class="form-label">Price range</label>
                            </div>
                            <div class="col-3">
                                  
                                <input type="range" class="form-range" id="customRange2">
                                <label for="customRange2" class="form-label">Area</label>
                            </div>
                            <div class="col-6">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search like a any place"
                                        aria-label="Search">
                                </form>
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
        }
    }
}
</script>


<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.mainButton:focus {
    /* Add your active button styles here */
    background-color: #5C636A;
    color: white;
}

.multiselect-tag.is-user {
    padding: 5px 8px;
    border-radius: 22px;
    background: #35495e;
    margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
    width: 18px;
    border-radius: 50%;
    height: 18px;
    margin-right: 8px;
    border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i:before {
    color: #ffffff;
    border-radius: 50%;
    ;
}

.user-image {
    margin: 0 6px 0 0;
    border-radius: 50%;
    height: 22px;
}
</style>