<script>
import { RouterLink } from 'vue-router';
</script>

<style></style>
<template>
    <div class='payment-box p-3 bg-white rounded shadow'>
        <h3 class='mb-3'>Looking to Sell or Rent Your Property?</h3>
        <div>
            <div class="card text-center border-light">
                <div class="card-body">
                    <h5 class="card-title">Post now on qarbar.com to reach millions of users!</h5>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;" ></i> Get Better Price</p>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;"></i> Connect With Real Buyers</p>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;"></i> Realtime Stats</p>
                    <RouterLink class="btn btn-secondary mt-3" to="/addAdvertisement">Add Advertisement</RouterLink>
                </div>
            </div>
        </div>

    </div>
</template>