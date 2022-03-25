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
        <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
    props: ["event"],
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    created(){
        this.center = this.markerLatLng = [this.event.location.latitude, this.event.location.longitude]
    },
    data() {
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            center: [],
            markerLatLng: [],
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
    },
};
</script>

<style>
.map {
    min-height: 500px;
    overflow: hidden;
}
</style>
