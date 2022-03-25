<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <router-link class="media" :to="'events/' + event.id">
                <div class="media-left"></div>
                <div class="media-content">
                    <p class="title is-4 has-text-link">
                        {{ event.title }}
                    </p>
                    <p class="subtitle is-6">
                        {{ event.date }} - {{ event.heure }}
                    </p>
                </div>
            </router-link>
            <div class="content">
                {{ event.description }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["event"],
};
</script>

<style></style>
