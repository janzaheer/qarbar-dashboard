<script>

</script>

<style></style>
<template>
    <div class='payment-box p-5 bg-white rounded shadow'>
        <h3 class='mb-3'>Quota and Credits</h3>
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        Listing Quota
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">REfresh
                        Property</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                        type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">

                        Hot Listing
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
                        type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">
                        Super Hot

                    </button>
                </li>
            </ul>
            <div class="tab-content mt-4" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                    tabIndex="0">
                    <p>You can pay cash to your courier when you received the good at your doorstep.</p>
                    <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni!</p>
                    <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur provident dolor animi.
                    </p>
                    <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                </div>
                <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                    tabIndex="0">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!</p>
                    <button class='btn btn-outline-warning w-20'>Confirm Order</button>

                </div>

            </div>

        </div>

    </div>
</template>