<template>
    <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
    >
        <l-tile-layer :url="url"> </l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            center: [0, 0],
            markerLatLng: [0, 0],
            zoom: 16,
        };
    },
    methods: {
        zoomUpdated(zoom) {
            this.zoom = zoom;
        },
        centerUpdated(center) {
            this.center = center;
        },
        changeLocation(latlng) {
            //Changing location credentials
            this.markerLatLng = this.center = latlng;
        },
    },
};
</script>

<style>
.map {
    min-height: 500px;
    overflow: hidden;
}
</style>
