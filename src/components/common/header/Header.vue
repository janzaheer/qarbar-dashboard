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
                    <img src="../../../assets/LoogQ.png" class="" alt="" style="height: 30px;">
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
                        <li class="nav-item mx-md-1">
                            <RouterLink class="nav-link" to="/buyPage/?params=rent_sale_type=sale">Buy</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/rentPage/?params=rent_sale_type=rent">Rent</RouterLink>
                        </li>
                        <li class="nav-item mx-md-1">
                            <RouterLink class="nav-link" to="/newProjectsList">New projects</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/agentsList">Find agent</RouterLink>
                        </li>
                        <li class="nav-item mx-md-1">
                            <RouterLink class="nav-link" to="#">Blogs</RouterLink>
                        </li>
                        <li class="nav-item mx-md-1">
                            <RouterLink class="nav-link" to="/aboutus">About Us</RouterLink>
                        </li>
                    </ul>
                    <RouterLink class="addPropertyBtnColor mt-1 mx-2" v-if="isLoggedIn" to="/agentDashboard">Add Property
                    </RouterLink>
                    <router-link class="addPropertyBtnColor mt-1 mx-2" v-else to="/login">Add Property</router-link>

                    <ul class="navbar-nav NV">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="fa-solid fa-circle-user fa-2xl"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-white">
                                <li v-if="!isLoggedIn">
                                    <RouterLink class="dropdown-item btn btn-outline-warning btn-sm mt-1" to="/login">Login
                                    </RouterLink>
                                </li>
                                <li v-else>
                                    <a class="dropdown-item" href="#" @click="logout">Logout</a>
                                </li>

                                <li><a class="dropdown-item" href="#">{{ user_id }} //{{ agent_id }} {{ user }}</a></li>
                                <li><a class="dropdown-item" href="#">Add Property</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'Header',
    data() {
        return {
            user: '',
            agent_id:'',
            user_id: ''
        };
    },
    methods: {
        generateLink() {
            const listingRoute = {
                path: 'Listing',
                query: {
                    params: 'rent_sale_type=sale'
                }
            };
            this.$router.push(listingRoute);
        },
        generateLinkRent() {
            const listingRoute = {
                name: 'Listing',
                query: {
                    params: 'rent_sale_type=rent'
                }
            };
            this.$router.push(listingRoute);
        },
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('agent_id');
            localStorage.removeItem('id');
            this.$router.push('/login');
        },
    },
    mounted() {
        this.user = localStorage.getItem('user');
        this.agent_id = localStorage.getItem('agent_id');
        this.user_id = localStorage.getItem('id')
    },
    computed: {
        isLoggedIn() {
            return localStorage.getItem('token') !== null;
        },
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
.NV{
 margin-right: 80px;
}
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
}
</style>