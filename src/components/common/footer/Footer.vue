<template>
    <div>
        <div class="container-fluid bg-body-tertiary">
            <footer class="py-3">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3 align-items-center">
                    <li class="nav-item">
                        <img src="../../../assets/LoogQ.png" style="height: 30px;" class="px-2 text-body-secondary" alt="">
                        </li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Terms & Conditions</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Cookies Policy</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">PF Expert</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Careers</a></li>
                    <li class="nav-item"><RouterLink to="/agentDashboard" class="nav-link px-2 text-body-secondary">Agent Hub</RouterLink></li>
                </ul>
                <p class="text-center text-body-secondary">
                    <button class="SearchBtnColor">App Store</button>
                    <button class="SearchBtnColor mx-1">Google Play</button>
                    <button class="SearchBtnColor">App Gallery</button>
                    © 2023  Partum Solutions Company, Inc</p>
            </footer>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>
<style></style>