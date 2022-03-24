<template>
    <div class="m-5 box">
        <h2 class="title is-2 has-text-centered">Créer un evenement</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="title">Titre</label>
                <input
                    id="title"
                    class="input"
                    type="text"
                    required
                    placeholder="Titre"
                />
            </div>
            <div class="field">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    rows="3"
                    class="input"
                    type="text"
                    required
                    placeholder="Description"
                ></textarea>
            </div>
            <div class="field">
                <label for="name">Spot</label>
                <input
                    id="name"
                    class="input"
                    type="text"
                    required
                    placeholder="nom"
                />
            </div>
            <div class="field">
                <!-- Adresse -->
                <input
                    class="input"
                    type="text"
                    required
                    placeholder="Adresse"
                />
            </div>
            <div class="field">
                <!-- Map -->
            </div>
            <div class="field">
                <button class="button is-success">Créer Evenement</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        validation() {},
    },
};
</script>

<style></style>
