<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'NewProject',
    methods: {
        handleViewNewProjects() {
            this.$router.push('/newProjectsList');
        }
    }
}
</script>
<style>
.banner_container {
    background-image: linear-gradient(90deg, #5745a0, rgba(87, 69, 160, 0.5));
}

.cardClass {
    color: brown !important;
    cursor: pointer;
}
</style>
<template>
    <div class="container my-4">
        <div class="cardClass" @click="handleViewNewProjects">
            <div class="card text-dark" style="height: 12rem;">
                <img src="https://static.rdc.moveaws.com/images/sell/sell-landing-hero/sell-hero-1440.webp" class="card-img"
                    height="190px" alt="...">
                <div class="card-img-overlay text-dark">
                    <div class="my-md-5 ms-5">
                        <h2 class="card-title text-white">New Projects in Karachi</h2>
                        <p class="card-text text-white">New projects, verified by our quality control teams.</p>
                    </div>
                    <!-- <div class="mt-3 mt-md-5"> -->
                    <!-- <RouterLink to="/newProjectsList" class="text-decoration-none">View new projects</RouterLink> -->
                    <!-- <router-link :to="{ path: '/newProjectsList' }"><button>View new projects</button></router-link> -->
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
