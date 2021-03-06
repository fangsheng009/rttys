// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US';
import VueContextMenu from '@xunlei/vue-context-menu'

Vue.config.productionTip = false

Vue.use(iView, { locale });
Vue.use(iView);
Vue.use(VueContextMenu)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: (h)=>h(App)
});
