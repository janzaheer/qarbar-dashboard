<template>
    <div>
        <RouterLink :to="'/agentprofile/' + productDetail?.agent?.id"  class="text-decoration-none">
            <div class="card shadow-sm">
                <div class="card-header">Agent Info</div>
                <div class="card-body">
                    <div class="d-flex justify-content-start align-items-center">
                        <div class="mx-5">
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                class="rounded-circle border border-2 border-primary p-0" width="200" height="200" alt="...">
                        </div>
                        <div>
                            <h5 class="card-title text-muted">{{ productDetail?.agent?.name }}</h5>
                            <p class="card-text text-wrap">{{ productDetail?.agent?.bio }} </p>
                            <p class="card-text">Speaks {{ productDetail?.agent?.languages }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style></style>

<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'AgentInfo',
    props: {
        productDetail: Object
    }
}
</script>