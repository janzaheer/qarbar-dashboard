<template>
    <div class="header">
        <div class="bg-secondary d-flex py-2">
            <div class="mx-4">
                <h6 class="text-white" ><i class="fa-solid fa-phone"></i> +92-346-123456</h6>
            </div>
            <div>
                <h6 class="text-white"><i class="fa-solid fa-envelope"></i> support@qarbar.com</h6>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container headerCLass">
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
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="'/Listing/?R_B_type=sale' ">Buy</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/Listing/?R_B_type=rent">Rent</RouterLink>
                            </li>
                            <!-- <li class="nav-item">
                                <RouterLink class="nav-link" to="/Listing/?Commercial=commercial">Commercial</RouterLink>
                            </li> -->
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/newProjectsList">New projects</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/agentsList">Find agent</RouterLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Property price
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">House Price</a></li>
                                    <li><a class="dropdown-item" href="#">Buy vs Rent Calculator</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Explore
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Building Reviews</a></li>
                                    <li><a class="dropdown-item" href="#">Community Guides</a></li>
                                    <li><a class="dropdown-item" href="#">Property Blog</a></li>
                                    <li><a class="dropdown-item" href="#">Renter's Guide</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Buyer's Guide</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/aboutus">About Us</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="btn btn-outline-warning btn-sm mt-1" to="/login" >Login</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </div>
    <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
export default {
    name: 'Header',
    data() {
        return {
            list: [],
            saleList: [],
        }
    },
    methods: {
        async getProductRent(){
            let res = await axios.get('http://13.127.231.16/api/v1/properties/?R_B_type=rent')
            // console.log(res.data.results)
            // this.list = res.data.results
        },
        async getProductSell(){
            let res = await axios.get('http://13.127.231.16/api/v1/properties/?R_B_type=sale')
            // console.log('sale-------------------',res.data.results[0]?.R_B_type)
              this.saleList = res.data.results[0]?.R_B_type
            //   console.log('-11111111111111111-----------')
            //   console.log('--------33333-------------')
        },
    },
    mounted() {
        this.getProductRent();
        this.getProductSell();
    }
}
</script>
<style>
/* .header {
    margin-bottom: 80px;
} */
.headerCLass{
    display: flex !important;
    flex-wrap: inherit !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>