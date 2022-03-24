<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p v-for="member in this.members" :key="member.id">
                        <span class="title is-6">
                            <span class="has-text-link" v-if="member.is_guest"
                                >{{ member.username }} (Guest)</span
                            >
                            <span class="has-text-link" v-else>{{
                                member.username
                            }}</span>
                        </span>
                        - 
                        <span class="has-text-info" v-if="member.status === -1">pas repondu</span>
                        <span class="has-text-danger" v-else-if="member.status === 0">a dit non</span>
                        <span class="has-text-success" v-else>sera présent</span>
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
            members: [
                {
                    id: "f752fdfc-cc0d-4916-8d09-65a884a27247",
                    username: "fwoolstenholmes1g",
                    status: -1,
                    is_guest: false,
                    event_id: "9fc0c8f1-c4a0-40cb-9053-fa403b70ad18",
                    created_at: "2021-12-13 00:53:35",
                    updated_at: "2021-06-26 21:31:19",
                },
                {
                    id: "38516638-cdf4-496a-8783-fc45285269b0",
                    username: "lvandrill28",
                    status: -1,
                    is_guest: false,
                    event_id: "23dff0ed-a3e4-4a55-b26c-64a39523577a",
                    created_at: "2021-04-01 03:46:02",
                    updated_at: "2021-12-20 18:07:41",
                },
                {
                    id: "5ce25c68-b334-42a2-9fa8-71308f20be11",
                    username: "mswin2i",
                    status: 0,
                    is_guest: false,
                    event_id: "3fa3a722-7a10-429d-86a9-8af7a25d104d",
                    created_at: "2022-01-10 08:03:18",
                    updated_at: "2021-09-05 10:07:14",
                },
                {
                    id: "f6a10d5d-539c-4340-b603-32cb11c4580e",
                    username: "glamzed17",
                    status: 0,
                    is_guest: true,
                    event_id: "bbbd366e-94b1-4197-beed-cb1fa94f39f5",
                    created_at: "2022-01-22 07:21:34",
                    updated_at: "2021-08-22 23:09:01",
                },
                {
                    id: "747fbc92-21ab-4df1-aa9f-745b76a09c60",
                    username: "kglanvill18",
                    status: 1,
                    is_guest: true,
                    event_id: "dcc070c2-383d-46c1-8562-313bc3962550",
                    created_at: "2021-08-19 21:33:25",
                    updated_at: "2022-02-10 14:52:29",
                },
                {
                    id: "53c0d3fe-cdf7-4b87-bb32-899b33320f73",
                    username: "ahardwin19",
                    status: 1,
                    is_guest: true,
                    event_id: "30be9b14-dad3-442d-991c-53c05ee82e1e",
                    created_at: "2021-10-14 10:09:25",
                    updated_at: "2021-07-09 06:29:58",
                },
            ],
        };
    },
    created() {
        // this.$eventsApi.get('events/' + this.$route.params.id + "/members")
        // .then(response => {
        // this.members = response.data
        // })
        // .catch((err) => {
        //console.log(err)
        // });
    },
};
</script>

<style></style>
