<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container headerCLass">
                <div class="d-flex justify-content-end">
                    <RouterLink class="navbar-brand" to="/agentpanel">
                        <img src="../../../assets//logo.svg" class="" alt="" style="height: 30px;">
                    </RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/agentDashboard">DashBoard</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="btn btn-outline-warning btn-sm mt-1" to="/login">Login Here</RouterLink>
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
.headerCLass {
    display: flex !important;
    flex-wrap: inherit !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>