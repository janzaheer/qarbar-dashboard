<script>
import { RouterLink } from 'vue-router';
export default{
  name: 'AgentDashboardHeader',
  data(){
    return{
      user: '',
            agent_id:'',
            user_id: ''
    }
  },
  methods:{
    logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('agent_id');
            localStorage.removeItem('id');
            this.$router.push('/login');
        },
  },
  mounted(){
    this.user = localStorage.getItem('user');
        this.agent_id = localStorage.getItem('agent_id');
        this.user_id = localStorage.getItem('id')
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
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ this.user }}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"> {{ this.user }}</a></li>
            <li><a class="dropdown-item" href="#">My Account & Profile</a></li>
            <li><a class="dropdown-item" href="#" v-on:click="logout">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>