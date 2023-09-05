<script>
export default {
    name: 'Installment',
    props: {
        productDetail: Object
    }
}
</script>

<style></style>

<template>
    <div>
        <div class="card shadow-sm">
            <div class="card-header">Installments Plans</div>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-evenly">
                    <div class="">
                        <h6 class="my-3">Advance Amount Rs {{ productDetail?.installment?.advance_amount }}</h6>
                        <h6>No Of Installment {{ productDetail?.installment?.no_of_inst }}</h6>
                    </div>
                    <div class="">
                        <h6 class="my-3">Monthly Installment Rs {{ productDetail?.installment?.monthly_inst }}</h6>
                        <h6>Ready For Possession {{ productDetail?.installment?.ready_for_possession }}</h6>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
