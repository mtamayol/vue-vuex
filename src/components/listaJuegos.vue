<template>
    <div>
        <h1>SOY LISTA DE JUEGOS</h1>
        <ul style="width:50%;">
            <li v-for="(juego, clave) in juegos" :key="clave" :style="{background:juego.color}">

                <label v-text="juego.codigo"></label> |
                <label v-text="juego.nombre"></label> |
                <label v-text="juego.stock"></label> |
                <label v-text="juego.precio"></label> |
                <label v-text="juego.color"></label> |
                <label v-text="juego.destacado"></label>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'lista-juegos'
    }


</script>