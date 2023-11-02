<template>
    <div>
      <div class="card shadow-sm">
        <div class="card-header">
          <img src="../../assets/icons/location.png" height="30" alt=""> Location
        </div>
        <div class="card-body">
          <div ref="map" style="height: 400px;"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import mapboxgl from 'mapbox-gl';
  
  export default {
    name: 'Location',
    props: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    mounted() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoicmh3b3JrcyIsImEiOiJjazBmZmE0bGIwNzh3M25wMjBhOHI2em56In0.317s4zEB48T9QC33pf6sVw#13/46.20721/6.14994';
  
      // Create a map using the provided latitude and longitude
      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.longitude, this.latitude],
        zoom: 15,
      });
  
      new mapboxgl.Marker()
        .setLngLat([this.longitude, this.latitude])
        .addTo(this.map);
    },
  };
  </script>
  