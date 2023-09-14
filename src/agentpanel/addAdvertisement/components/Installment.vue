<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
export default {
    name: 'Installment',
    props: {
        errorAdvanceAmounts: String,
        errorNofInstallments: String,
        errorMOinstallments: String
    },
    data() {
        return {
            AdvanceAmount: '',
            NofInstallments: '',
            MonthlyInstallments: '',
            readyForPossession: false, // Initial value
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            AdvanceAmount: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            NofInstallments: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(20)
            },
            MonthlyInstallments: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.AdvanceAmount || theModel == 'all') { this.v$.AdvanceAmount.$touch() }
            if (theModel == this.NofInstallments || theModel == 'all') { this.v$.NofInstallments.$touch() }
            if (theModel == this.MonthlyInstallments || theModel == 'all') { this.v$.MonthlyInstallments.$touch() }
        },
        handleAdvanceAmount() {
            this.AdvanceAmount
            this.setTouched('all')
            this.AdvanceAmount = this.AdvanceAmount.replace(/[^0-9]/g, "");
            this.$emit("ChildToParentAdvanceAmountData", this.AdvanceAmount)
        },
        handleNoOfInstallment() {
            this.NofInstallments
            this.setTouched('all')
            this.NofInstallments = this.NofInstallments.replace(/[^0-9]/g, "");
            this.$emit("ChildToParentNofInstallmentsData", this.NofInstallments)
        },
        handleMonthlyInstallment() {
            this.MonthlyInstallments
            this.setTouched('all')
            this.MonthlyInstallments = this.MonthlyInstallments.replace(/[^0-9]/g, "");
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
                        <input type="text" class="form-control" id="exampleAdvanceAmountControlInput1" placeholder="Enter Advance Amount"
                            v-model="AdvanceAmount" @input="handleAdvanceAmount"
                            :class="v$.AdvanceAmount.$error ? 'is-invalid' : ''">
                        <div v-for="error of v$.AdvanceAmount.$errors" class="invalid-feedback" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                        <div class="text-danger" v-if="errorAdvanceAmounts">{{ errorAdvanceAmounts }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleNoInstallmentControlInput1" class="form-label">No of Installments</label>
                        <input type="text" class="form-control" id="exampleNoInstallmentControlInput1" placeholder="Enter No of Installment"
                            v-model="NofInstallments" @input="handleNoOfInstallment"
                            :class="v$.NofInstallments.$error ? 'is-invalid' : ''">
                        <div v-for="error of v$.NofInstallments.$errors" class="invalid-feedback" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                        <div class="text-danger" v-if="errorNofInstallments">{{ errorNofInstallments }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleMonthlyInstallmentControlInput1" class="form-label">Monthly
                            Installments</label>
                        <input type="text" class="form-control" id="exampleMonthlyInstallmentControlInput1"
                            placeholder="Enter Monthly Installment" v-model="MonthlyInstallments" @input="handleMonthlyInstallment"
                            :class="v$.MonthlyInstallments.$error ? 'is-invalid' : ''">
                        <div v-for="error of v$.MonthlyInstallments.$errors" class="invalid-feedback" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                        <div class="text-danger" v-if="errorMOinstallments">{{ errorMOinstallments }}</div>
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
    </div></template>
