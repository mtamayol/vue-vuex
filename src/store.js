import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ocupado: false,
        totalVentas: 0,
        juegos: [
            { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
            { codigo: "0002", nombre: "Fifa 21", stock: "100", precio: "25000", color: "blue", destacado: "false" },
            { codigo: "0003", nombre: "Gears of War 4", stock: "100", precio: "15000", color: "green", destacado: "true" },
            { codigo: "0004", nombre: "Mario Tennis Aces", stock: "100", precio: "35000", color: "yellow", destacado: "false" },
            { codigo: "0005", nombre: "Bloodborne", stock: "100", precio: "10000", color: "blue", destacado: "false" },
            { codigo: "0006", nombre: "Forza Horizon 4", stock: "100", precio: "20000", color: "red", destacado: "true" }
           
        ]
    },
    getters: {
        filtroJuegos: state => filtro => {
            return state.juegos.filter((juego) => {
                return juego.codigo == filtro;
            })
        },
        totalJuegos: state => {
            return state.juegos.length;
        },
        totalStock: state => {
            let suma = 0;
            for (const item of state.juegos) {
                suma = suma + parseInt(item.stock);
            }
            return suma;
        }
    },
    
  mutations: {},
    actions: {}

});

export default store;
