import Vue from "vue";
import VueRouter from "vue-router";

// Users Views
import Login from "../views/users/Login";
import LoginWithInvite from "../views/users/LoginWithInvite";
import Register from "../views/users/Register";
import EditProfile from "../views/users/EditProfile";

// Events Views
import Events from "../views/events/Events";
import CreateEvent from "../views/events/CreateEvent";
import EditEvent from "../views/events/EditEvent";
import OneEvent from "../views/events/OneEvent";
import Invite from "../views/events/Invite";

import NotFound from "../views/NotFound";

import store from "@/store/index.js";

Vue.use(VueRouter);

// Route Guard checking before getting into the route
function authGuard(to, from, next) {
    if (store.state.user) {
        next(); // allow to enter route
    } else {
        next("/login"); // go to '/login';
    }
}

// Route Guard checking before getting into the route
function authGuardOrGuest(to, from, next) {
    if (store.state.user || store.state.guest) {
        next(); // allow to enter route
    } else {
        next("/login"); // go to '/login';
    }
}

// Route Guard checking before getting into the route
function isAuthGuard(to, from, next) {
    if (!store.state.user) {
        next(); // allow to enter route
    } else {
        next("/"); // go to '/login';
    }
}

const routes = [
    {
        path: "/",
        name: "events",
        component: Events,
        beforeEnter: authGuard,
    },
    {
        path: "/invite/:id",
        name: "invite",
        component: Invite,
    },
    {
        path: "/new-event",
        name: "new-event",
        component: CreateEvent,
        beforeEnter: authGuard,
    },
    {
        path: "/edit-event/:id",
        name: "edit-event",
        component: EditEvent,
        beforeEnter: authGuard,
    },
    {
        path: "/events/:id",
        name: "one-event",
        component: OneEvent,
        beforeEnter: authGuardOrGuest,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter: isAuthGuard,
    },
    {
        path: "/login-with-invite/:id",
        name: "login-with-invite",
        component: LoginWithInvite,
        beforeEnter: isAuthGuard,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/edit-profile",
        name: "edit-profile",
        component: EditProfile,
        beforeEnter: authGuard,
    },
    {
        path: "*",
        name: "not-found",
        component: NotFound,
    },
];

const router = new VueRouter({
    routes,
    mode: "history", // Taking out the hashtag from the link
});

export default router;
