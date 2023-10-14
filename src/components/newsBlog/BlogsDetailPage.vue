<template>
    <Header />
    <div class="container detailPage">
        <div>
            <h2 class="mt-5">{{ BlogsDetail?.title }}</h2>
            <hr>
            <div v-if="BlogsDetail" class="mb-5">
                <div v-html="BlogsDetail.description"></div>
            </div>
            <div v-else>
                Loading...
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';
import { BLogsDetail } from '../../utils/Blogs_service';
export default {
    name: 'BlogsDetailPage',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            BlogsDetail: null
        }
    },
    mounted() {
        this.BlogDetail()
    },
    methods: {
        async BlogDetail() {
            let id = this.$route.params.id 
            try {
                let respData = await BLogsDetail(id)
                this.BlogsDetail = respData
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>