import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style.css';
import Logo from './logo.png';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});