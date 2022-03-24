<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.jpg" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Créer un compte</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="fullname">Nom et Prenom</label>
                <input
                    id="fullname"
                    v-model="user.fullname"
                    class="input"
                    type="text"
                    required
                    placeholder="Nom et Prenom"
                />
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    v-model="user.email"
                    class="input"
                    type="email"
                    required
                    placeholder="Email"
                />
            </div>
            <div class="field">
                <label for="username">Nom d'utilisateur</label>
                <input
                    id="username"
                    v-model="user.username"
                    class="input"
                    type="text"
                    required
                    placeholder="Nom d'utilisateur"
                />
            </div>
            <div class="field">
                <label for="password">Mot de passe</label>
                <input
                    id="password"
                    v-model="user.password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <label for="confirm_password">Confirmer mot de passe</label>
                <input
                    id="confirm_password"
                    v-model="user.confirm_password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <button class="button is-success">Créer compte</button>
            </div>
        </form>
        <div>
            <router-link class="m-3" to="login">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                fullname: "",
                email: "",
                username: "",
                password: "",
                confirm_password: "",
            },
        };
    },
    methods: {
        validation() {
            if (this.password !== this.confirm_password) {
                alert("Passwords does not match!");
            } else {
                // TODO: POST Create user
                // this.$usersApi
                //     .post(
                //         "URI", //TODO URI
                //         {}, //TODO BODY
                //         {} //TODO HEADERS
                //     )
                //     .then((response) => {
                //         console.log(response);
                alert("User created");
                this.$router.push("/login");
                //     })
                //     .catch((err) => console.log(err));
            }
        },
    },
};
</script>

<style></style>
