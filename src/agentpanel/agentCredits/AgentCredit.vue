<script>
import axios from 'axios';
import { BASE_URL, API_VERSION } from '../../utils/api';
export default {
    name: 'AgentCredit',
    data() {
        return {
            token: '',
            graphData: '',
        }
    },
    methods: {
        async getAgentGraphNumber() {
            let Api = `https://apidev.qarbar.com/api/v1/properties/agent-dashboard/`
            let finalURL  =  Api
            axios.get(finalURL, {
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Token ${this.token}`
                }
            }).then((res) => {
                this.graphData = res.data
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.token = localStorage.getItem('token');
        this.getAgentGraphNumber();
    }
}
</script>

<style></style>
<template>
    <div class=''>
        <div class="row">
            <div class="col-lg-3 col-sm-6 my-2 my-md-block my-lg-0">
                <div class="card bg-success shadow">
                    <div class="card-body">
                        <h3 class="card-title text-white">Properties Sold</h3>
                        <div class="d-inline-block">
                            <h2 class="text-white">{{ graphData?.total_properties_sold }}</h2>
                            <p class="text-white mb-0">Jan - March 2020</p>
                        </div>
                        <span class="ms-3 display-5 opacity-5"><i class="fa-solid fa-building"
                                style="color: #ffffff;"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card bg-info shadow">
                    <div class="card-body">
                        <h3 class="card-title text-white">Views</h3>
                        <div class="d-inline-block">
                            <h2 class="text-white">{{ graphData?.total_views_on_agent_properties }}</h2>
                            <p class="text-white mb-0">Jan - March 2019</p>
                        </div>
                        <span class="ms-3 display-5 opacity-5"><i class="fa-solid fa-eye"
                                style="color: #ffffff;"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 my-2 my-md-block my-lg-0">
                <div class="card bg-warning shadow">
                    <div class="card-body">
                        <h3 class="card-title text-white">Rent Properties</h3>
                        <div class="d-inline-block">
                            <h2 class="text-white">{{ graphData?.total_rent_properties }}</h2>
                            <p class="text-white mb-0">Jan - March 2019</p>
                        </div>
                        <span class="ms-3 display-5 opacity-5"><i class="fa fa-users" style="color: #ffffff;"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card bg-primary shadow">
                    <div class="card-body">
                        <h3 class="card-title text-white">Sale Properties</h3>
                        <div class="d-inline-block">
                            <h2 class="text-white">{{ graphData?.total_sale_properties }}</h2>
                            <p class="text-white mb-0">Jan - March 2019</p>
                        </div>
                        <span class="ms-3 display-5 opacity-5"><i class="fa fa-heart" style="color: #ffffff;"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>