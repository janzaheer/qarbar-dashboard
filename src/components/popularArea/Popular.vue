<template>
    <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5 my-5 border-top">
            <div class="col mb-3">
                <h5>POPULAR SEARCHES</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&cities=Lahore" class="nav-link p-0 text-body-secondary font">Properties for rent in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&cities=Lahore" class="nav-link p-0 text-body-secondary font">Properties for sale in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&cities=Islamabad" class="nav-link p-0 text-body-secondary font">Properties for rent in DHA Islamabad</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&cities=Karachi" class="nav-link p-0 text-body-secondary font">Properties for sale in DHA Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&cities=Karachi" class="nav-link p-0 text-body-secondary font">Properties for sale in Bahria Town Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&cities=lahore" class="nav-link p-0 text-body-secondary font">Properties for rent in Bahria Town Lahore</RouterLink></li>
                    <!-- <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary font">Properties for sale in DHA Quetta</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary font">Properties for sale in DHA Peshawar</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary font">Properties for sale in Bahria Town Rawalpindi</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary font">Properties for sale in DHA Multan</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary font">Properties for rent in DHA Multan</a></li> -->
                </ul>
            </div>

            <div class="col mb-3">
                <h5>POPULAR AREAS</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&villa&cities=karachi" class="nav-link p-0 text-body-secondary font">Villa for sale in Bahria Town Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Bungalow&cities=Lahore" class="nav-link p-0 text-body-secondary font">Bungalow for sale DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Apartment&cities=Lahore" class="nav-link p-0 text-body-secondary font">Apartment for sale in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Apartment&cities=Karachi" class="nav-link p-0 text-body-secondary font">Apartment for rent DHA Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&plot_types&cities=Lahore" class="nav-link p-0 text-body-secondary font">Plot for sale in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&plot_types&cities=karachi" class="nav-link p-0 text-body-secondary font">Plot for sale in DHA Karachi</RouterLink></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>TRENDING AREAS</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Bungalow&cities=Karachi" class="nav-link p-0 text-body-secondary font">Bungalow for sale in DHA Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Bungalow&cities=Lahore" class="nav-link p-0 text-body-secondary font">Bungalow for sale in Bahria Town Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Apartment&cities=Karachi" class="nav-link p-0 text-body-secondary font">Apartment for sale in Bahria Town Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Apartment&cities=Karachi" class="nav-link p-0 text-body-secondary font">Apartment for rent in Bahria Town Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Apartment&cities=Lahore" class="nav-link p-0 text-body-secondary font">Apartment for sale in Bahria Town Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Apartment&cities=Karachi" class="nav-link p-0 text-body-secondary font">Apartment for rent in Bahria Town Lahore</RouterLink></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>TRENDING SEARCHES</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Villa&cities=Lahore" class="nav-link p-0 text-body-secondary font">Villa for rent in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/buyPage/?params=rent_sale_type=sale&Villa&cities=Karachi" class="nav-link p-0 text-body-secondary font">Villa for sale in DHA Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Studio&cities=Lahore" class="nav-link p-0 text-body-secondary font">Studio for rent in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&Studio&cities=Karachi" class="nav-link p-0 text-body-secondary font">Studio for rent in DHA Karachi</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&beds=1&cities=Lahore" class="nav-link p-0 text-body-secondary font">1 Bedroom Apartment for rent in DHA Lahore</RouterLink></li>
                    <li class="nav-item mb-2"><RouterLink to="/rentPage/?params=rent_sale_type=rent&cities=Karachi" class="nav-link p-0 text-body-secondary font">Property for rent in Bahria Town Karachi</RouterLink></li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';


</script>
<style>
.font {
    font-size: 14px !important;
}
</style>