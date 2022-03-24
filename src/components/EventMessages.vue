<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <p v-for="message in this.messages" :key="message.id">
                <span class="title is-6 has-text-link">
                    {{ message.created_at }} - username!
                </span>
                -
                {{ message.content }}
            </p>
            <form @submit.prevent="send()" class="mt-4">
                <div class="field">
                    <textarea
                        class="textarea is-link"
                        v-model="newMessage"
                        rows="2"
                        placeholder="Hello world"
                    ></textarea>
                </div>
                <div class="field">
                    <button type="submit" class="button is-link">
                        Envoyer message
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newMessage: "",
            messages: [
                {
                    id: "a1ee6624-01b7-4c5d-8628-450e43a4378e",
                    content:
                        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
                    member_id: "7c8236f6-16f7-4322-bb71-c2cde9c4bee4",
                    event_id: "e95302fb-a2b9-4602-8f45-f5ad0da0c76f",
                    media: {
                        img: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
                        link: "http://dummyimage.com/212x100.png/dddddd/000000",
                    },
                    created_at: "2021-12-29 04:52:29",
                    updated_at: "2021-12-03 00:52:25",
                },
                {
                    id: "474e0465-424b-46b2-b4a7-83e0e84a8e1d",
                    content:
                        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
                    member_id: "6fce731d-b79d-418c-8689-2a79b21efe27",
                    event_id: "0f8b6cbe-a912-4410-9009-75543133a9c4",
                    media: {
                        img: "http://dummyimage.com/181x100.png/cc0000/ffffff",
                        link: "http://dummyimage.com/142x100.png/dddddd/000000",
                    },
                    created_at: "2022-02-27 03:25:53",
                    updated_at: "2021-07-22 18:09:22",
                },
                {
                    id: "b1a62a3c-9fb3-4d35-bbf0-b23d674f74de",
                    content:
                        "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
                    member_id: "00ff2bb1-fd5d-4ed1-b0f8-89a4f3b4c232",
                    event_id: "2988b9d5-6472-4aa3-ac62-109df8f05952",
                    media: {
                        img: "http://dummyimage.com/132x100.png/cc0000/ffffff",
                        link: "http://dummyimage.com/214x100.png/cc0000/ffffff",
                    },
                    created_at: "2021-09-03 06:58:07",
                    updated_at: "2021-04-04 12:39:12",
                },
                {
                    id: "a652730b-7be5-4aa9-bf36-e440dd7ad487",
                    content:
                        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
                    member_id: "7d3ee899-a40d-4054-9e20-615474aa06ec",
                    event_id: "aeeb1261-8aa2-43a1-9bfc-f02eda403d69",
                    media: {
                        img: "http://dummyimage.com/135x100.png/cc0000/ffffff",
                        link: "http://dummyimage.com/143x100.png/dddddd/000000",
                    },
                    created_at: "2021-05-24 03:41:07",
                    updated_at: "2021-07-25 05:49:57",
                },
                {
                    id: "1313dd8e-741b-49f7-9607-8619df91a787",
                    content:
                        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                    member_id: "314fc1b2-a413-481e-b570-c9c2c52e9e07",
                    event_id: "f61960c7-9817-4bc4-a02a-43af3ebb3d41",
                    media: {
                        img: "http://dummyimage.com/232x100.png/dddddd/000000",
                        link: "http://dummyimage.com/119x100.png/dddddd/000000",
                    },
                    created_at: "2021-12-04 07:09:24",
                    updated_at: "2021-08-07 07:23:28",
                },
            ],
        };
    },
    methods: {
        send() {
            console.log(this.message);
            /*this.$api.post('channels/' + this.$route.params.id + '/posts',{
                member_id: this.member_id,
                message: this.message
            }).then(response => {
                this.messages.push(response.data)
                this.message = ""
            })*/
        },
    },
    created() {
        // this.$eventsApi.get('events/' + this.$route.params.id + "/messages")
        // .then(response => {
        // this.messages = response.data
        // })
        // .catch((err) => {
        //console.log(err)
        // });
    },
};
</script>

<style></style>
