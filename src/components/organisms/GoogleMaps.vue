<template>
  <section>
    <gmap-map :center="center" :zoom="16" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 38.192279, lng: -84.827336 },
      markers: [
        {
          name: "JB Long and Son Body Shop",
          position: { lat: 38.192279, lng: -84.827336 }
        }
      ],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    /**
     * setPlace.
     */
    setPlace(place) {
      this.currentPlace = place;
    },
    /**
     * addMarker.
     */
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    /**
     * geolocate.
     */
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

// Always set the map height explicitly to define the size of the div element that contains the map.
#map {
  height: 100%;
}

section {
  border-top: 4px solid $red;
}
</style>
