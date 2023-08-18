<script>
export default {
    name: 'ContactInfo'
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-address-card fa-2xl" style="color: #2c4e1d;"></i>
                <h5 class="mt-2">Contact Information</h5>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleMobileControlInput1" class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleMobileControlInput1" placeholder="03332222222">
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Landline Number</label>
                    <input type="number" class="form-control" id="exampleLandlineControlInput1" placeholder="0812444444">
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Secondary Number</label>
                    <input type="number" class="form-control" id="exampleLandlineControlInput1" placeholder="022222399999">
                </div>
            </div>
        </div>
    </div>
</template>