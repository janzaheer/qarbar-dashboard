<script setup>
 import Header from './components/common/header/Header.vue';
import HomeView from './views/HomeView.vue';
import AgentView from './views/AgentView.vue';
// import Footer from '../src/components/common/footer/Footer.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="">
      <!-- <router-view name="agentPanel"></router-view> -->
      <router-view></router-view>
       <!-- Default view -->
    
    <!-- <router-view name="userPanel"></router-view> -->
     <!-- User panel view -->
    <!-- Admin panel view -->
      <!-- <HomeView/> -->
      <!-- <AgentView/> -->
<!-- <Header/> -->
    </div>
    <!-- <Footer/> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

</style>
