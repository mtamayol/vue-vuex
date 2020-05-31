<template>
    <div>
        <h3>B&uacute;squeda de Juegos</h3>
        Cantidad de juegos: {{totalJuegos}}<br />
        Stock total: {{totalStock}}<br />
        Buscar por c&oacute;digo: <input v-model="filtro" id="input" /><br />
        <ul style="width:50%;">
            <li v-for="(juego, clave) in filtroJuegos" :key="clave" :style="{background:juego.color}" >
                
                <label v-text="juego.codigo"></label> |
                <label v-text="juego.nombre"></label> |
                <label v-text="juego.stock"></label> |
                <label v-text="juego.precio"></label> |
                <label v-text="juego.color"></label> |
                <label v-text="juego.destacado"></label>
            </li>
        </ul>
        <lista-juegos></lista-juegos>
    </div>
</template>
<script>
    //import {mapState} from 'vuex'
    export default {
        data: function () {
            return {
                filtro: ""
            }
        },
        
        computed: {
            totalJuegos() {
                return this.$store.getters.totalJuegos
            },
            totalStock() {
                return this.$store.getters.totalStock
            },
            filtroJuegos() {
                return this.$store.getters.filtroJuegos(this.filtro)
            }
        }
    }
</script>