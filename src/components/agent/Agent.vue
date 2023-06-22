<template>
    <div class="container my-5">
        <h1>Meet the SuperAgents</h1>
        <p class="my-4">Learn more about SuperAgent</p>
        <div class="row text-center g-2">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Atif Badini</h4>
                            <p class="card-text">Owner Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Ali Akbar</h4>
                            <p class="card-text">Co Owner Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Shehroz Jan</h4>
                            <p class="card-text">Manager Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Shaid Kha Kan</h4>
                            <p class="card-text">Employee Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Jamal ud Din</h4>
                            <p class="card-text">Employee Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card text-center border-0 agentBg">
                        <div class="card-body">
                            <img src="https://github.com/mdo.png" alt="" width="150" height="150"
                                class="rounded-circle border border-2 border-primary p-1">
                            <h4 class="card-title mt-2">Kamal Khan</h4>
                            <p class="card-text">Employee Real Estate</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>
<style>
.agentBg {
    cursor: pointer;
}

.agentBg:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>