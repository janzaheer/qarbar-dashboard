<template>

<div class="container detailPage">
    <h2 class="display-6 text-center mb-4">News from the Qarbar blog</h2>
    <div class="table-responsive">
        <ul class="list-group" v-for="details in blogs" :key="details.id">
            <li class="list-group-item d-flex justify-content-start align-items-center"> 20 May <span class="rounded-pill ms-5"> <RouterLink :to="'/blogsDetailPage/'+ details?.id" class="nav-link p-0 text-body-read-more-btn text-decoration-none">
                <p class="card-text">{{ details?.title }}.</p>
            </RouterLink></span></li>
        </ul>
        <table class="table text-center"></table>
    </div>
</div>
</template>

<script>
import {
    RouterLink
} from 'vue-router';
import {
    BLogsList
} from '../../utils/Blogs_service';
export default {
    name: 'blog',
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.getBlogs()
    },
    methods: {
        async getBlogs() {
            let id = this.$route.params.id
            try {
                const repData = await BLogsList(id)
                this.blogs = repData.results
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>

<style></style>
