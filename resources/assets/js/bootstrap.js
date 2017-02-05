import jquery from 'jquery/dist/jquery';
import materialize from 'materialize-css/dist/js/materialize';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueFire from 'vuefire';

window.$ = window.jQuery = jquery;

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueFire);
window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};



/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
