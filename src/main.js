import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ListaJuegos from './components/listaJuegos'

Vue.config.productionTip = false

new Vue({
  store,
    router,
    render: h => h(App),
    components: {
        'lista-juegos': ListaJuegos
    }
}).$mount('#app')
