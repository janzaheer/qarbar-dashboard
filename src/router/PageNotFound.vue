<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-12">
                <div className="w-full mb-6"><img src="https://anasaraid.me/assets/404.gif" alt='img' className="h-36" />
                </div>
            </div>
            <div class="col-12">
                <div>
                    <h1>404 - Page Not Found</h1>
                    <RouterLink to="/" class="btn btn-primary">back to home</RouterLink>
                </div>

            </div>
        </div>


        <!-- Add any additional content or styling here -->
    </div>
</template>
  
<script>
import { RouterLink } from 'vue-router';
export default {
    // You can also add any necessary script logic for the 404 page here
}
</script>
<style>

</style>