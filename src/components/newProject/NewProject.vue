<template>
    <div class="container my-4">
        <div class="card text-dark" style="height: 12rem;" >
            <img src="../../assets/banner/banner.jpg" class="card-img" height="190px" alt="...">
            <div class="card-img-overlay text-dark">
                <div class="">
                    <h2 class="card-title">New Projects in UAE</h2>
                    <p class="card-text">New projects, verified by our quality control teams.</p>
                </div>
                <div class="mt-5">
                    <a href="/newProjectsList" class="btn btn-light"> View new projects</a>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { RouterLink } from 'vue-router'
</script>
<style>
.banner_container {
    background-image: linear-gradient(90deg, #5745a0, rgba(87, 69, 160, .5));
}
</style>