<template>
    <Header />
    <div class="container detailPage">
        <div>
            blogs <RouterLink to="/">home</RouterLink>
        </div>
        <div class="row g-2 my-5">
            <h1 class="text-center text-muted my-2">Our Blogs</h1>
            <div class="col-md-4" v-for="data in blogs" :key="data.id">
                <div class="card card2" @mouseover="showReadMoreButton" @mouseout="hideReadMoreButton">
                    <img :src="data.news_image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{ data?.title }}.</p>
                        <!-- <button class="read-more-btn" v-show="showButton">Read More</button> -->
                        <RouterLink :to="'/blogsDetailPage/' + data.id" v-show="showButton"
                            class="read-more-btn text-decoration-none">Read More
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import { BLogsList } from '../../utils/Blogs_service';
export default {
    name: 'BlogsListing',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            blogs: [],
            showButton: false
        }
    },
    mounted() {
        this.getBlogs()
    },
    methods: {
        async getBlogs() {
            try {
                const repData = await BLogsList()
                this.blogs = repData.results
            } catch (error) {
                console.log(error)
            }
        },
        showReadMoreButton() {
            this.showButton = true;
        },
        hideReadMoreButton() {
            this.showButton = false;
        },
    }
}
</script>

<style>
.card2 {
    position: relative;
}

.read-more-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    padding: 10px 20px;
    /* background-color: #007bff; */
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    background-color: transparent;

}

.read-more-btn:hover {
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value to control the darkness */
}

.card2:hover {
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value to control the darkness */
}

.card2:hover .read-more-btn {
    display: block;
}
</style>