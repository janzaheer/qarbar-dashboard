<script>
export default {
    name: 'OverviewPage',
    props: {
        productDetail: Object
    },
}
</script>

<style></style>

<template>
    <div class="mt-2">
        <h5 class="card-title">Overview</h5>
        <h6 class="card-title">{{ productDetail?.title }}</h6>
        <div class="d-flex align-items-center">
            <p class="card-text"><i class="fa-sharp fa-solid fa-bed"></i> {{
                productDetail?.amenties?.bedrooms }}
                Bedroom</p>
            <p class="card-text mx-5"> <i class="fa-solid fa-bath"></i> {{
                productDetail?.amenties?.bathrooms }}
                Bathrooms</p>
            <p class="card-text"><img src="../../assets/icons/sqft.png" style="width: 30px; height: 30px;" alt=""> {{
                productDetail?.property_type?.size }} {{
        productDetail?.property_type?.unit_types }}</p>
        </div>
    </div>
</template>
