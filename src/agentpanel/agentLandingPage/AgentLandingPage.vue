<template>
    <AgentHeader />
    <div class="agentLandingPage">
        <AgentSlider />
        <div class="container text-center my-5">
            <h2>Join Qaarbar to profit from over 14 million page views every month, with more than 400,000 quality
                leads sent to real estate brokers and developers in the Turkiye.</h2>
            <ul class="list-group list-group-flush my-5">
                <li class="list-group-item">Tools to help you plan your marketing strategy</li>
                <li class="list-group-item">Free lead tracker app that helps your agents stay on top of all leads</li>
                <li class="list-group-item">A dedicated Account Manager</li>
                <li class="list-group-item">Full training for your staff, in-house and online</li>
                <li class="list-group-item">Exclusive member benefits</li>
            </ul>
        </div>
    </div>
    <AgentFooter />
</template>

<style>
.agentLandingPage {
    min-height: 100vh;
}
</style>

<script setup>
import AgentHeader from '../commons/agentHeader/AgentHeader.vue';
import AgentFooter from '../commons/agentFooter/AgentFooter.vue';
import AgentSlider from '../agentSlider/AgentSlider.vue';
</script>