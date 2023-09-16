<template>
    <div class="container-fluid my-3 d-none d-md-block bg-light shadow">
        <div class="container">
            <div class="row g-2 bg-light">
                <div class="col-md-6">
                    <div class="ms-5 textCLas">
                        <h2>Get The App</h2>
                        <p class="text-wrap">
                            Search hundreds of thousands of up to date listings with powerful filters to find your perfect
                            home and real estate investment.</p>
                        <p> Find properties and opportunities exclusive and unique to Qarbar.com.</p>
                        <div class="mt-1">
                            <button class="btn btn-success">Google Play <i
                                    class="fa-brands fa-google-play fa-beat"></i></button>
                            <button class="btn btn-success mx-3">App Store <i
                                    class="fa-brands fa-app-store fa-beat"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <img src="../../assets/mob.png" alt="" class="mobImage">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.textCLas{
   margin-top: 110px;
}
.mobImage {
    height: 470px;
}
@media (max-width: 1199.98px) {

    @media (max-width: 768px) {
        .mobImage {
            height: 380px;
        }
    }
}
</style>
