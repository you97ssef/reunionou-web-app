<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p v-for="member in this.members" :key="member.id">
                        <span class="title is-6">
                            <span
                                class="has-text-link"
                                v-if="member.user_id === null"
                                >{{ member.pseudo }} (Guest)</span
                            >
                            <span class="has-text-link" v-else>{{
                                member.pseudo
                            }}</span>
                        </span>
                        -
                        <span class="has-text-info" v-if="member.status === -1"
                            >pas repondu</span
                        >
                        <span
                            class="has-text-danger"
                            v-else-if="member.status === 0"
                            >a dit non</span
                        >
                        <span class="has-text-success" v-else
                            >sera présent</span
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: [],
        };
    },
    created() {
        this.$api
            .get("events/" + this.$route.params.id + "/members")
            .then((response) => {
                this.members = response.data.member;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style></style>
