<script>
import { RouterLink } from 'vue-router';
</script>

<style></style>

<template>
    <div class="bg-body-tertiary p-3">
        <div class="container bg-body-tertiary">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <RouterLink to="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        Qarbar
                    </RouterLink>
                    <span class="mb-3 mb-md-0 text-muted">© 2024 Powered by Qarbar.com</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#">
                        <i class="fa-brands fa-facebook fa-lg"></i>
                            </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <i class="fa-brands fa-google fa-lg"></i>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <i class="fa-brands fa-instagram fa-lg"></i>
                    </a></li>
                    <li class="ms-3"><a class="text-muted" href="#">
                        <i class="fa-brands fa-twitter fa-lg"></i>
                    </a></li>
                </ul>
            </footer>
        </div>
    </div>
</template>