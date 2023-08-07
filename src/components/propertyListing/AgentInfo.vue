<template>
    <div>
        <RouterLink to="/agentprofile" class="text-decoration-none">
            <div class="card shadow-sm">
                <div class="card-header">Agent Info</div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="me-4">
                            <img src="https://github.com/mdo.png" alt="" width="200" height="200"
                                class="rounded-circle border border-2 border-primary p-1">
                        </div>
                        <div>
                            <h5 class="card-title text-muted">{{ productDetail?.agent?.name }}</h5>
                            <p class="card-text text-wrap">Sales and Leasing Consultant at Edwards
                                and Towers Real
                                Estate Brokers
                                (304 properties) </p>
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