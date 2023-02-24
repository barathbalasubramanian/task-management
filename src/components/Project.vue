<script>
export default {
    name: "Project",
    props: {
        name: String,
        created: Number
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        goToProjectView() {
            this.$router.push({
                name: 'project',
                params: {
                    projectName: this.name
                }
            })
        }
    }
}
</script>

<template>

<div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div class="project-card">
        {{ this.name }}
        <span class="material-symbols-outlined floater text-3xl" @click="goToProjectView" style="margin-top:2px">
            arrow_forward
        </span>
    </div>
</div>

</template>

<style scoped>
.project-card {
    max-width: 50vw;
    padding: 0 1.2rem 0 1.2rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1em;
    background-color: #393535;
    padding: .5em ;
    border-radius: 12px;
    margin: 0.3rem 1rem 0.3rem 1rem;
    width: 100vw;
}

.material-symbols-outlined {
    font-variation-settings:
    'FILL' 220,
    'wght' 900,
    'GRAD' 0,
    'opsz' 48
}

.floater {
    margin-left: auto;
    margin-right: 2rem;

}

@media  only screen and (max-width: 600px) {
	.project-card {
        min-width: 80vw;
    }
}

</style>
