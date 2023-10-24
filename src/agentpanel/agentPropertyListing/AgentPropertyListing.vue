<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="active-member">
                            <div class="table-responsive">
                                <table class="table table-xs mb-0">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Views</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="data in agentProperties" :key="data?.id">
                                            <td><img :src="data?.media[0]?.image_url" height="40" class="mr-3" alt=""></td>
                                            <td>{{ data?.title }}</td>
                                            <td><span>Pkr {{ data?.total_price }}</span></td>
                                            <td><button class="btn btn-outline-success btn-sm"
                                                v-on:click="handleStatus(data?.id)"
                                                    v-if="data.available === true">Available</button>
                                                <button class="btn btn-outline-warning btn-sm"
                                                v-on:click="handleStatus(data?.id)"
                                                v-else>DisAvailable</button>
                                            </td>
                                            <td><i class="fa-regular fa-eye"></i> {{ data?.views_count }}</td>
                                            <td>
                                                <RouterLink :to="'/updateAdvertisement/' + data.id" class="btn btn-outline-success btn-sm">Update</RouterLink>
                                                <RouterLink :to="'/detailPage/' + data.id" class="btn btn-outline-info ms-1 btn-sm">View</RouterLink>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { AgentDetail } from '../../utils/Agent_Service';
import { PropertyStatus } from '../../utils/Properties_Service';
export default {
    name: 'AgentPropertyListing',
    data() {
        return {
            agent_id: '',
            user: '',
            agentProperties: [],
            error: null, // data not found check
            status: true, // Initial value
        }
    },
    methods: {
        async getAgent() {
            if (!this.agent_id) {
                // Handle the case where agent_id is not set
                return;
            }
            let id = this.agent_id
            let respData = await AgentDetail(id)
            if (respData.results.properties.length === 0) {
                this.agentProperties = [],
                    this.error = "Data not found.";
            } else {
                this.agentProperties = respData.results.properties
                // this.nextUrlPage = res?.data?.next
                // this.preUrlPage = res?.data?.previous
            }
        },
        async handleStatus(id) {
            let ids = id
            try {
                let res = await PropertyStatus(ids)
                this.getAgent();
            } catch (error) {
                console.log('status while error', error)
            }
        },
    },
    mounted: async function () {
        this.user = localStorage.getItem('user');
        this.agent_id = localStorage.getItem('agent_id');
        if (this.agent_id) {
            await this.getAgent();
        }
    }
}
</script>

<style></style>
