<script>

import chatscreen from './chatscreen.vue'

export default {
    components: {
        chatscreen
    },
    data() {
        return{
            open: false,
        }
    },
    methods: {
        openChat() {
            this.open = !this.open
        }
    }
}
</script>

<template>

<div>
    <div v-if="!open" class="btn">
        <button @click="openChat">
            <span class="material-symbols-outlined">forum</span>
        </button>
    </div>
    <div v-if="open" class="btn">
        <button @click="openChat">
            <span class="material-symbols-outlined">close</span>
        </button>
    </div>
    <div v-if="open">
        <chatscreen/>
    </div>
</div>

</template>

<style scoped>

.btn {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5em;
}

.btn button {
    background-color: #393535;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
}

.btn span {
    color: white;
    margin: .2em 0 0 0;
}

</style>
