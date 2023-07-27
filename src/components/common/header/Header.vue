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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <RouterLink class="btn btn-outline-danger btn-sm mt-1" to="/agentpanel">Add Property
                    </RouterLink>
                    <RouterLink class="btn btn-outline-warning btn-sm mt-1" to="/login">Login</RouterLink>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Action</a></li>
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

</script>
<style>
/* .header {
    margin-bottom: 80px;
} */
.headerCLass {
    display: flex !important;
    flex-wrap: inherit !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>