<template>
    <div id="app">
        <div id="nav">
            
                <router-link :to="{name: 'inicio'}">Inicio</router-link> |
                <router-link :to="{name: 'busquedas'}">Busquedas</router-link> |
                <router-link :to="{name: 'ventas'}">Ventas</router-link> |
                <router-link :to="{name: 'total'}">Total</router-link> |
            
            <transition name="vista">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
