<template>
    <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @click="changePlacement"
    >
        <l-tile-layer :url="url"> </l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import axios from "axios";

export default {
    props: ["event"],
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    created() {
        this.center = this.markerLatLng = [
            this.event.location.latitude,
            this.event.location.longitude,
        ];
        axios
            .get("http://ip-api.com/json/")
            .then((response) => {
                this.center = this.markerLatLng = [
                    response.data.lat,
                    response.data.lon,
                ];
            })
            .catch((error) => {
                console.log(error);
            });
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
        changePlacement(marker) {
            this.markerLatLng = marker.latlng;
            axios
                .get(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.markerLatLng.lat}&lon=${this.markerLatLng.lng}`
                )
                .then((response) => {
                    this.event.location.name = response.data.display_name;
                    this.event.location.latitude = this.markerLatLng.lat;
                    this.event.location.longitude = this.markerLatLng.lng;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        changePlacementByAddress(latlng){
            this.markerLatLng = this.center = latlng;
        }
    },
};
</script>

<style>
.map {
    min-height: 500px;
    overflow: hidden;
}
</style>
