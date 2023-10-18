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
      this.$router.push('/');
    },
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
          <h4>Portfolio</h4>
        </RouterLink>
        <RouterLink class="nav-link text-decoration-underline" to="/">Go to Qarbar.com</RouterLink>
        <div class="btn-group dropstart">
          <RouterLink to="#"  class="dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">
            {{ this.user }}
          </RouterLink>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{{ this.user }}</a></li>
            <li><RouterLink class="dropdown-item" to="/profile">My Account & Profile</RouterLink></li>
            <li><a class="dropdown-item" href="#" v-on:click="logout">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>