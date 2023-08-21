<script>
export default {
    name: 'Installment',
    props: {

    },
    data() {
        return {
            AdvanceAmount: '',
            NofInstallments: '',
            MonthlyInstallments: '',
            readyForPossession: false, // Initial value
        }
    },
    methods: {
        handleAdvanceAmount() {
            this.AdvanceAmount
            this.$emit("ChildToParentAdvanceAmountData", this.AdvanceAmount)
        },
        handleNoOfInstallment() {
            this.NofInstallments
            this.$emit("ChildToParentNofInstallmentsData", this.NofInstallments)

        },
        handleMonthlyInstallment() {
            this.MonthlyInstallments
            this.$emit("ChildToParentMonthlyInstallmentsData", this.MonthlyInstallments)
        },
        handlePossession() {
            this.readyForPossession
            this.$emit("ChildToParentReadyForPossessionData", this.readyForPossession)
        },
    } 
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-sack-dollar fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">installment available</h5>
            </div>
            <div class="col-6">
                <div>
                    <h4>installment available</h4>
                    <div class="mb-3">
                        <label for="exampleAdvanceAmountControlInput1" class="form-label">Advance Amount</label>
                        <input type="number" class="form-control" id="exampleAdvanceAmountControlInput1" placeholder="22222"
                            v-model="AdvanceAmount" v-on:change="handleAdvanceAmount">
                    </div>
                    <div class="mb-3">
                        <label for="exampleNoInstallmentControlInput1" class="form-label">No of Installments</label>
                        <input type="number" class="form-control" id="exampleNoInstallmentControlInput1" placeholder="0333"
                            v-model="NofInstallments" v-on:change="handleNoOfInstallment">
                    </div>
                    <div class="mb-3">
                        <label for="exampleMonthlyInstallmentControlInput1" class="form-label">Monthly
                            Installments</label>
                        <input type="number" class="form-control" id="exampleMonthlyInstallmentControlInput1"
                            placeholder="035" v-model="MonthlyInstallments" v-on:change="handleMonthlyInstallment">
                    </div>
                    <div class="mb-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                v-model="readyForPossession" v-on:change="handlePossession">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Ready for
                                Possession</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
