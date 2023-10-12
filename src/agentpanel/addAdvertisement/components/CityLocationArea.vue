<template>
  <div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="City Name"
        v-model="selectedCityName"
        @input="fetchCitySuggestions"
      />
      <label for="floatingInputCity">Select a City</label>
      <ul v-if="citySuggestions.length > 0" class="autocomplete-suggestions">
        <li v-for="(city, index) in citySuggestions" :key="index" @click="selectCity(city)">
          {{ city.place_name }}
        </li>
      </ul>
    </div>
    <div class="mb-3">
      <div class="card">
        <!-- Map container -->
        <div ref="map" style="width: 100%; height: 400px; cursor: crosshair;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

export default {
  name: 'CityLocationArea',
  data() {
    return {
      selectedCityName: '',
      map: null,
      citySuggestions: [],
      selectedCity: null,
      marker: null,
    };
  },
  methods: {
    async fetchCitySuggestions() {
      try {
        const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          this.selectedCityName
        )}.json?access_token=pk.eyJ1Ijoicmh3b3JrcyIsImEiOiJjazBmZmE0bGIwNzh3M25wMjBhOHI2em56In0.317s4zEB48T9QC33pf6sVw#13/46.20721/6.14994
        &type=place&autocomplete=true&country=PK`;
        const response = await axios.get(geocodeUrl);
        this.citySuggestions = response.data.features;
      } catch (error) {
        console.error('Error fetching city suggestions:', error);
      }
    },
    selectCity(city) {
      this.selectedCity = city;
      this.selectedCityName = city.place_name;
      this.citySuggestions = [];
      this.updateMap(city.center);
    },
    updateMap(coordinates) {
      if (this.map) {
        this.map.flyTo({ center: coordinates, zoom: 15 });
        this.addCursorListener();
      }
    },
    addCursorListener() {
      this.map.on('click', (e) => {
        this.reverseGeocode(e.lngLat);
        this.addMarker(e.lngLat);
      });
    },
    reverseGeocode(coordinates) {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=pk.eyJ1Ijoicmh3b3JrcyIsImEiOiJjazBmZmE0bGIwNzh3M25wMjBhOHI2em56In0.317s4zEB48T9QC33pf6sVw#13/46.20721/6.14994
          `
        )
        .then((response) => {
          if (response.data.features.length > 0) {
            const place = response.data.features[0];
            console.log('Place:', place.text);
            console.log('Coordinates:', coordinates);
          }
        })
        .catch((error) => {
          console.error('Error reverse geocoding:', error);
        });
    },
    addMarker(coordinates) {
      if (this.marker) {
        this.marker.setLngLat(coordinates);
      } else {
        this.marker = new mapboxgl.Marker({ element: this.createCustomMarker() })
          .setLngLat(coordinates)
          .addTo(this.map);
      }
    },q
    initMapbox() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoicmh3b3JrcyIsImEiOiJjazBmZmE0bGIwNzh3M25wMjBhOHI2em56In0.317s4zEB48T9QC33pf6sVw#13/46.20721/6.14994';
      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [69.3451, 30.3753],
        zoom: 6,
      });

      this.marker = new mapboxgl.Marker({
        color: '#FFFFFF',
        draggable: true,
      })
        .setLngLat([30.5, 50.5])
        .addTo(this.map);
    },
  },
  mounted() {
    this.initMapbox();
  },
};
</script>