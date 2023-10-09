<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'AgentDashboardHeader',
  data() {
    return {
      user: '',
      agent_id: '',
      user_id: ''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('agent_id');
      localStorage.removeItem('user_id');
      this.$router.push('/login');
    },
    // handleUser(){
    //   if (this.agent_id) {
    //     return console.log('agent-iddd',this.agent_id)
    //   } else {
    //     return console.log('user-idddddddd',this.user_id)
    //   }
    // }
  },
  mounted() {
    this.user = localStorage.getItem('user');
    this.agent_id = localStorage.getItem('agent_id');
    this.user_id = localStorage.getItem('user_id')
  }
}
</script>

<style></style>

<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container">
        <RouterLink class="navbar-brand" to="/agentDashboard">
          <!-- <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"> -->
          <h4>Portfolio</h4>
        </RouterLink>
        <RouterLink class="nav-link text-decoration-underline" to="/">Go to Qarbar.com</RouterLink>
        <div class="btn-group dropstart">
          <RouterLink to="#"  class="dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">
            {{ this.user }}
          </RouterLink>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{{ this.user }}</a></li>
            <li><a class="dropdown-item" href="#"> {{ this.user_id }}My Account & Profile {{ this.agent_id }}</a></li>
            <li><a class="dropdown-item" href="#" v-on:click="logout">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>