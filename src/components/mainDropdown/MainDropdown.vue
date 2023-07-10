<template>
    <div class="container">
        <div class="card p-3">
            <div class="d-flex my-2">
                <button class="btn btn-secondary mx-3">Buy</button><button class="btn btn-secondary">Rent</button>
            </div>
            <div class="row g-1">
                <div class="col-4 col-md-12 col-lg-6 ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <!-- <Multiselect v-model="value" mode="tags" :close-on-select="false" :searchable="true"
                        :create-option="true" :options="[
                            { value: 'batman', label: 'Batman' },
                            { value: 'robin', label: 'Robin' },
                            { value: 'joker', label: 'Joker' },
                        ]" /> -->
                    
                </div>
                <div class="col-2 col-md-3 col-lg-2 mt-sm-1 mt-lg-1 ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Property type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-2 col-md-3 col-lg-2 mt-lg-1 mt-1">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Beds & Baths</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-2 col-md-5 col-lg-1 mt-lg-1 mt-1">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">$1000</option>
                        <option value="2">$2000</option>
                        <option value="3">$4000</option>
                    </select>
                </div>
                <div class="col-2 col-md-1 col-lg-1 mt-lg-1 mt-1">
                    <button class="btn btn-outline-light"><img src="../../assets/searchIcon/icons8-search.gif"
                            class="text-danger" style="height: 20px;" alt="img" /> </button>

                </div>
                <div class="mt-2">
                    <div class="collapse" id="collapseExample">
                        <div class="row g-1">
                            <div class="col-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-1 mx-md-5">
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Show commercial properties only
                        </label>
                    </div>
                </div>
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
            placeholder: 'Select employees',
        }
    }
}
</script>

<style>
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