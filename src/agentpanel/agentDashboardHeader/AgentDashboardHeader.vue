<script>
import { RouterLink } from 'vue-router';
</script>

<style></style>

<template>
    <div>
        <nav class="navbar bg-light">
  <div class="container">
    <RouterLink class="navbar-brand" to="/agentDashboard">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
    </RouterLink>
    <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Atif Badini
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Atif Badini</a></li>
            <li><a class="dropdown-item" href="#">My Account & Profile</a></li>
            <li><a class="dropdown-item" href="#">Sign Out</a></li>
          </ul>
        </div>
  </div>
</nav>
    </div>
</template>