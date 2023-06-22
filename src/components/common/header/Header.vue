<template>
    <div class="header">
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
                                <RouterLink class="nav-link" to="/Listing/?Buy=buy">Buy</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/Listing/?Rent=rent">Rent</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/Listing/?Commercial=commercial">Commercial</RouterLink>
                            </li>
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