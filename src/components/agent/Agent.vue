<template>
    <div class="container my-5">
        <h1>Meet the Agents</h1>
        <p class="my-4">Learn more about Agent</p>
        <div class="row text-center g-1">
            <Carousel :autoplay="4000" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="user in userList" :key="user?.id">
                    <div class="carousel__item p-1">
                        <RouterLink :to="'/agentprofile/' + user.id" class="text-decoration-none">
                            <div class="card text-center border-0 agentBg">
                                <div class="card-body">
                                    <img v-if="user.image" :src="user.image" width="150" height="150"
                                        class="rounded-circle border border-2 border-primary p-1">
                                    <img v-else src="../../assets/user1.png" alt="" width="150" height="150"
                                        class="rounded-circle border border-2 border-primary p-1">
                                    <h6 class="card-title mt-2">{{ user?.user?.username }}</h6>
                                    <p class="card-text">{{ user?.bio?.substring(0, 20) }}</p>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { RouterLink } from 'vue-router';
import { AgentList } from '../../utils/Agent_Service';
export default {
    name: 'Agent',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            userList: [],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                },
                // 1224 and up
                1224: {
                    itemsToShow: 6.1,
                    snapAlign: 'start',
                },
            },
        };
    },
    methods: {
        async getUsers() {
            let res = await AgentList()
            this.userList = res
        },
    },
    mounted() {
        this.getUsers()
    }
}
</script>
<style>
.agentBg {
    cursor: pointer;
}

.agentBg:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>