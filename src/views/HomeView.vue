<script setup>
import Home from '../components/homePage/Home.vue';
import Slider from '../components/mainSlide/Slider.vue';
import Agent from '../components/agent/Agent.vue';
import Advertise from '../components/advertise/Advertise.vue';
import Blog from '../components/newsBlog/Blog.vue';
import Popular from '../components/popularArea/Popular.vue';
import NewProject from '../components/newProject/NewProject.vue';
import HomeSearch from '../components/HomeSearch/HomeSearch.vue';
import Header from '../components/common/header/Header.vue';
import Footer from '../components/common/footer/Footer.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <body>
    <Header/>
    <!-- <RouterView/> -->
    <Slider/>
    <NewProject/>
    <Home/>
    <HomeSearch/>
    <Agent/>
    <Advertise/>
    <Blog/>
    <Popular/>
    <Footer/>
  </body>
</template>
