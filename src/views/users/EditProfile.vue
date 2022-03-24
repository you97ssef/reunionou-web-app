<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.jpg" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Modifier mon profile</h2>
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
                <label for="old_password">Ancien mot de passe</label>
                <input
                    id="old_password"
                    v-model="user.old_password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <label for="password">Nouveau mot de passe</label>
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
                <button class="button is-warning">Modifer Profile</button>
            </div>
        </form>
        <b class="has-text-danger" v-if="error">{{ error }}</b>
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
                old_password: "",
            },
            error: null,
        };
    },
    methods: {
        validation() {
            if (this.user.password !== this.user.confirm_password) {
                this.error = "Passwords does not match!";
            } else {
                // TODO: PUT Edit user
                // this.$usersApi
                //     .put(
                //         "URI", //TODO URI
                //         {}, //TODO BODY
                //         {} //TODO HEADERS
                //     )
                //     .then((response) => {
                //         console.log(response);
                alert("Profile modified");
                this.$router.push("/");
                //     })
                //     .catch((err) => console.log(err));
            }
        },
    },
};
</script>

<style></style>
