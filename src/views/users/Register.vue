<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.png" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Créer un compte</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="fullname">Nom et Prénom</label>
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
                <label for="password_confirm">Confirmer le mot de passe</label>
                <input
                    id="password_confirm"
                    v-model="user.password_confirm"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <button class="button is-success">Créer un compte</button>
            </div>
        </form>
        <div>
            <router-link class="m-3" to="login">Se connecter</router-link>
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
                password_confirm: "",
            },
        };
    },
    methods: {
        validation() {
            if (this.user.password.length < 8) {
                this.flashMessage.error({
                    message: "le mot de passe est trés court.",
                });
            } else if (this.user.password !== this.user.password_confirm) {
                this.flashMessage.error({
                    message: "Les mots de passe ne correspondent pas.",
                });
            } else {
                this.$api
                    .post("users", this.user)
                    .then(() => {
                        this.flashMessage.success({
                            message: "Compte créé.",
                        });
                        this.$router.push("/login");
                    })
                    .catch(() =>
                        this.flashMessage.error({
                            message: "Impossible de créer le compte.",
                        })
                    );
            }
        },
    },
};
</script>

<style></style>
