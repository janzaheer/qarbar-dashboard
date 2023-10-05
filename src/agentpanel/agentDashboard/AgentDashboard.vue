<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue';
import AgentCredit from '../agentCredits/AgentCredit.vue';
import Add from '../addAdvertisement/Add.vue';
import AgentPropertyListing from '../agentPropertyListing/AgentPropertyListing.vue';
import Social from '../socialMedia/Social.vue';
import OneGraph from '../graph/OneGraph.vue';
import TwoGraph from '../graph/TwoGraph.vue';
export default {
    name: 'AgentDashboard',
    components: {
        AgentDashboardHeader,
        AgentDashboardFooter,
        AgentCredit,
        Add,
        AgentPropertyListing,
        Social,
        OneGraph,
        TwoGraph
    }
}
</script>

<style>
.AgentDashboardHeight {
    min-height: 100vh !important;
}
</style>

<template>
    <AgentDashboardHeader />
    <div class="container AgentDashboardHeight">
        <div class="my-3">
            <h3 class="text-center"><i class="fa-solid fa-user fa-xl"></i> Agent dashboard page</h3>
        </div>
        <div class="my-3">
            <AgentCredit />
        </div>
        <div class="my-3">
            <Add />
        </div>
        <div class="my-3">
            <OneGraph />
        </div>

        <!-- <div class="my-3">
            <TwoGraph />
        </div> -->
        <div class="my-5">
            <AgentPropertyListing />
        </div>
        <div class="my-5">
            <Social />
        </div>
    </div>
    <AgentDashboardFooter />
</template>
