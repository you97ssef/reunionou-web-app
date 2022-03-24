<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.jpg" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Login</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    class="input"
                    type="email"
                    required
                    placeholder="Email"
                    v-model="email"
                />
            </div>
            <div class="field">
                <label for="password">Mot de passe</label>
                <input
                    id="password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                    v-model="password"
                />
            </div>
            <div class="field">
                <button class="button is-success">Se connecter</button>
            </div>
        </form>
        <div>
            <router-link class="m-3" to="register">Créer compte</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "test@mail.fr",
            password: "hellomalek",
        };
    },
    methods: {
        validation() {
            // this.$usersApi
            //     .post(
            //         "auth",
            //         {},
            //         {
            //             auth: {
            //                 username: this.email,
            //                 password: this.password,
            //             },
            //         }
            //     )
            //     .then((response) => {
            //         console.log(response); //TODO see what it can be done after login (get user data or JWT data)
            this.$store.commit(
                "setToken",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            );
            this.$store.commit("setUser", { username: "hello", id: "idid" });
            this.$router.push("/");
            //         // this.$store.commit("setToken", response.data.token);
            //         // this.$store.commit("setMember", response.data.member);
            //         // this.$router.push("/");
            //     })
            //     .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
