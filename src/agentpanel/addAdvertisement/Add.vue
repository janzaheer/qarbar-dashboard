<script>
import { RouterLink } from 'vue-router';
</script>

<style>
.adversBtn{
    color:  rgb(255, 69, 0);
    border: 1px solid rgb(255, 69, 0);
    background-color: white;
    border-radius: 5px;
    padding: 7px 20px;
    text-decoration: none;
}
.adversBtn:hover{
    border: 1px solid gray;
    color: gray;
}
</style>
<template>
    <div class='card payment-box p-3 bg-white rounded shadow'>
        <h3 class='mb-3'>Looking to Sell or Rent Your Property?</h3>
        <div>
            <div class="card text-center border-light">
                <div class="card-body">
                    <h5 class="card-title">Post now on qarbar.com to reach millions of users!</h5>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;" ></i> Get Better Price</p>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;"></i> Connect With Real Buyers</p>
                    <p class="card-text"><i class="fa-solid fa-circle-check" style="color: #177321;"></i> Realtime Stats</p>
                    <div class="mt-3">
                        <RouterLink class="adversBtn" to="/addAdvertisement">Add Advertisement</RouterLink>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>