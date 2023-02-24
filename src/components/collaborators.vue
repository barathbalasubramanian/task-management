<script>
export default {
    name: 'collaborators',
    data() {
        return {
            members : false,
            projectName: this.$route.params.projectName
        }
    },
    methods: {
        groupStatus() {
            this.members = !this.members
    },
    }
}
</script>

<template>
<div>
    <div class="collaborators">
      <router-link to="/" style=" text-decoration: none; color: wheat;">
        <div style="font-size: 24px;">
          {{ this.projectName }}
        </div>
      </router-link>
      <div class="group" @click="groupStatus"> 
        <div> <span class="material-symbols-outlined" style="margin-top: 7px;">group</span> </div> 
        <div> collaborators </div> 
      </div>
    </div>

    <!-- Group members -->
    <div class="members" v-if="this.members">
      <div>
        <div class="member">
          <div class="name">Kavin</div>
          <div class="status"><span class="material-symbols-outlined">check_circle</span></div>
        </div>
        <div class="role">Owner</div>
      </div>
      <div>
        <div class="member">
          <div class="name">Barath</div>
          <div class="status"><span class="material-symbols-outlined">check_circle</span></div>
        </div>
        <div class="role">Developer</div>
      </div>
      <div>
        <div class="member">
          <div class="name">Pravin</div>
          <div class="status"><span class="material-symbols-outlined">check_circle</span></div>
        </div>
        <div class="role">UI designer</div>
      </div>
      <div>
        <div class="member">
          <div class="name">Balaji</div>
          <div class="status_"><span class="material-symbols-outlined">no_accounts</span></div>
        </div>
        <div class="role">Schema Developer</div>
      </div>
    </div>
</div>
</template>

<style scoped>

.collaborators {
    position: fixed;
    top: 0;
    padding: 1em 1.5em 1em .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 92vw;
}

.group {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
}

.members {
  background-color: #242424;
  position: fixed;
  top: 2.5em;
  right: 0;
  padding: 1em;
  margin: .5em 0em 0 0;
  row-gap: 3px;
  display: flex;
  flex-direction: column;
  opacity: 999;
}

.member{
    display: flex;
    gap: .5em;
}

.member .name {
  font-size: 20px;
}

.members .role {
  font-size: 12px;
  margin-top: -5px;
}

.member span {
  margin-top: 5px;
  color: green;
  font-size: 20px;
}

.member .status_ span {
  color: red;
}

@media only screen and (max-width: 600px) {
    .collaborators {
      width: 100%;
    }
}

</style>

