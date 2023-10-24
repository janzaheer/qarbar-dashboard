<template>
    <div class="container">
        <h2 class="display-6 text-center mb-4">News from the Qarbar blog</h2>
        <div class="table-responsive">
            <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-start align-items-center" v-for="items in blogData" :key="items.id">
                    {{ moment(items?.created_at).startOf('days').fromNow()}}
                  <RouterLink :to="'/blogsDetailPage/' + items.id" class="text-decoration-none text-dark">
                    <span class="rounded-pill ms-5">{{ items?.title }}</span>
                  </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import moment from 'moment';
import { BLogsList } from '../../utils/Blogs_service';
export default {
    name: 'Blog',
    data(){
        return {
            blogData:[]
        }
    },
    mounted(){
        this.getBlogs();
    },
    methods:{
        async getBlogs(){
            const repData = await BLogsList()
            this.blogData = repData.results
        }
    },
    created: function () {
        this.moment = moment;
    },
}
</script>

<style></style>