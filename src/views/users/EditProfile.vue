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
                <label for="new_password">Nouveau mot de passe</label>
                <input
                    id="new_password"
                    v-model="user.new_password"
                    class="input"
                    type="password"
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <label for="new_password_confirm">Confirmer mot de passe</label>
                <input
                    id="new_password_confirm"
                    v-model="user.new_password_confirm"
                    class="input"
                    type="password"
                    placeholder="Mot de passe"
                />
            </div>
            <div class="field">
                <button class="button is-warning">Modifer Profile</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                fullname: this.$store.state.user.user_fullname,
                email: this.$store.state.user.user_email,
                username: this.$store.state.user.user_username,
                old_password: "",
                new_password: "",
                new_password_confirm: "",
            },
        };
    },
    methods: {
        validation() {
            if (this.user.new_password !== this.user.new_password_confirm) {
                this.flashMessage.error({
                    message: "Les nouveaux mots de passe ne correspondent pas.",
                });
            } else {
                this.$api
                    .put("users/" + this.$store.state.user.user_id, this.user)
                    .then(() => {
                        this.flashMessage.success({
                            message: "Compte modifié.",
                        });

                        this.$store.commit("setEditUser", this.user);

                        this.$router.push("/");
                    })
                    .catch((err) =>
                        this.flashMessage.error({
                            message: "Impossible de modifier le compte.",
                        })
                    );
            }
        },
    },
};
</script>

<style></style>
