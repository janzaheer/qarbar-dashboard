<template>
    <div>
        <RouterLink :to="'/detailPage/' + data.id" class="text-decoration-none">
            <div class="card mb-3 listPageHover">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div class="card">
                            <img :src="data?.media[0]?.image_url" class="img-fluid rounded-start cardImage" alt="...">
                            <div class="card-img-overlay">
                                <div v-if="data.agent">
                                    <span class="badge text-bg-secondary card-title">
                                        <img src="../../assets/tropyBadgeIcon/pngegg.png" class="" style="height: 15px;"
                                            alt=""> SUPERAGENT</span>
                                </div>
                                <span v-if="data?.available == false"
                                    class="badge bg-secondary card-text ms-md-1">Sold</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body bg-white rounded">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span class="badge text-bg-warning card-title me-1">PREMIUM</span>
                                    <span class="badge text-bg-secondary card-title">{{
                                        data?.property_type?.home_types }}</span>
                                        <span class="badge text-bg-secondary card-title ms-2"><i class="fa-regular fa-eye fa-xs"></i> {{ data?.agent?.views_count }}</span>
                                                            <span v-if="data?.available == false" class="badge bg-secondary card-text ms-md-1">Sold</span>
                                    <h4>{{ data?.total_price }} Rs </h4>
                                </div>
                                <div class="d-flex align-items-center">
                                    <a type="button" className="text-success" data-bs-toggle="popover"
                                        :title="data?.agent?.name" data-bs-content="">
                                        <img v-if="data.agent && data.agent.image" :src="data.agent.image" alt=""
                                            width="60" height="60" class="rounded-circle">
                                        <img v-else src="../../assets/user1.png" alt="" width="60" height="60"
                                            class="rounded-circle"></a>
                                </div>
                            </div>
                            <div class="mb-2">
                                <p class="card-text">
                                    <i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
                                    {{ data?.area?.area }}
                                </p>
                            </div>
                            <div class="d-flex ">
                                <p class="card-text">
                                    {{ data?.amenties?.bedrooms }} <i class="fa-sharp fa-solid fa-bed"></i>
                                    Bedroom
                                </p>
                                <p class="card-text mx-2">
                                    {{ data?.amenties?.bathrooms }} <i class="fa-solid fa-bath"></i>
                                    Bathrooms
                                </p>
                                <p class="card-text"><img src="../../assets/icons/sqft.png"
                                        style="width: 30px; height: 30px;" alt=""> {{
                                            data?.property_type?.size
                                        }} {{ data?.property_type?.unit_types }}
                                </p>
                            </div>
                            <div class="mb-2">
                                <small class="text-body-secondary">Added: {{
                                    moment(data?.created_at).startOf('hour').fromNow() }} ({{
        moment(data?.updated_at).startOf('day').fromNow() }})</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">
                                    <button class="iconBtn">
                                        <i class="fas fa-phone fa-lg"></i>
                                    </button>
                                    <button class="iconBtn mx-2">
                                        <i class="fas fa-message fa-lg"></i>
                                    </button>
                                    <button class="iconBtn">
                                        <i class="fa-brands fa-whatsapp fa-lg"></i>
                                    </button>
                                </div>
                                <div class="dropdown-image">
                                    <img v-if="data.company_agent"
                                        src="https://media.zameen.com/thumbnails/204332890-240x180.webp"
                                        style="width: 60px; height: 60px;" alt="">
                                    <div class="dropdown-content">
                                        <img v-if="data.company_agent"
                                            src="https://media.zameen.com/thumbnails/204332890-240x180.webp"
                                            alt="Cinque Terre" width="300" height="200">
                                        <div class="desc">company agent name</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import moment from 'moment'
import { RouterLink } from 'vue-router';
export default {
    name: 'Card',
    props: {
        data: Object
    },
    created: function () {
        this.moment = moment;
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>