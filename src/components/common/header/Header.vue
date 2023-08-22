<template>
    <div class="header">
        <div class="bg-secondary d-flex py-2">
            <div class="mx-4">
                <h6 class="text-white"><i class="fa-solid fa-phone"></i> +92-346-123456</h6>
            </div>
            <div>
                <h6 class="text-white"><i class="fa-solid fa-envelope"></i> support@qarbar.com</h6>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid mx-5">
                <RouterLink class="navbar-brand" to="/">
                    <img src="../../../assets/logo.svg" class="" alt="" style="height: 30px;">
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <!-- <RouterLink class="nav-link" :to="'/Listing/buy?rent_sale_type=sale'">Buy</RouterLink> -->
                            <!-- <a href="/Listing/?rent_sale_type=sale" class="nav-link">Buy</a> -->
                            <a class="nav-link" href="/listing/?params=rent_sale_type=sale" v-on:click="generateLink()">Buy</a>
                        </li>
                        <li class="nav-item">
                            <!-- <RouterLink class="nav-link" to="/Listing/rent?rent_sale_type=rent">Rent</RouterLink> -->
                            <!-- <a href="/Listing/?rent_sale_type=rent" class="nav-link">Rent</a> -->
                            <!-- <router-link class="nav-link"
                                :to="{ name: 'AboutUs', query: { params: 'rent_sale_type=rent' } }">Rent</router-link> -->
                                <a class="nav-link" href="/listing/?params=rent_sale_type=rent" v-on:click="generateLinkRent()">Rent</a>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/newProjectsList">New projects</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/agentsList">Find agent</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/aboutus">About Us</RouterLink>
                        </li>
                    </ul>
                    <RouterLink class="addPropertyBtnColor mt-1 mx-2" to="/agentDashboard">Add Property
                    </RouterLink>
                    <ul class="navbar-nav me-md-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="fa-solid fa-circle-user fa-2xl"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-white">
                                <li>
                                    <RouterLink class="dropdown-item btn btn-outline-warning btn-sm mt-1" to="/login">Login
                                    </RouterLink>
                                </li>
                                <li><a class="dropdown-item" href="#">Add Property</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- <nav class="navbar navbar-expand-lg">
            <div class="container d-flex justify-content-center">
                <div class="d-flex justify-content-end">
                    <RouterLink class="navbar-brand" to="/">
                        <img src="../../../assets/logo.svg" class="" alt="" style="height: 30px;">
                    </RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="'/Listing/?R_B_type=sale'">Buy</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/Listing/?R_B_type=rent">Rent</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/newProjectsList">New projects</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/agentsList">Find agent</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/aboutus">About Us</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="btn btn-outline-danger btn-sm mt-1" to="/agentpanel">Add Property
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="btn btn-outline-warning btn-sm mt-1" to="/login">Login</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav> -->
    </div>
    <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'Header',
    methods: {
        generateLink() {
            const listingRoute = {
                name: 'Listing', // Assuming 'listing' is the name of your route

                // query: params.toString()
                query: {
                    params: 'rent_sale_type=sale'
                }
            };
            this.$router.push(listingRoute);
        },
        generateLinkRent(){
            const listingRoute = {
                name: 'Listing', // Assuming 'listing' is the name of your route

                // query: params.toString()
                query: {
                    params: 'rent_sale_type=rent'
                }
            };
            this.$router.push(listingRoute);
        }
    }
}

</script>
<style>
/* .header {
    margin-bottom: 80px;
} */
/* a:active {
    color: yellow;
} */

.addPropertyBtnColor {
    color: rgb(255, 69, 0);
    border: 1px solid rgb(255, 69, 0);
    border-radius: 10px;
    padding: 5px 20px;
    text-decoration: none;
}

.addPropertyBtnColor:hover {
    color: rgb(221, 221, 221);
    border: 1px solid rgb(221, 221, 221);
}</style>