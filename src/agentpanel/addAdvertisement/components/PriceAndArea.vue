<script>
export default {
    name: 'PriceAndArea'
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-hand-holding-dollar fa-2xl" style="color: #2c4e1d;"></i>
                <h5 class="mt-2">Price & Area</h5>
            </div>
            <div class="col-6">
                <div class="row mb-3">
                    <div class="col-8">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="floatingAreaUnit" placeholder="Enter Area Unit">
                            <label for="floatingAreaUnit">Enter Area Unit</label>
                        </div>
                    </div>
                    <div class="col-4">
                        <select class="form-select" aria-label="Default select example">
                            <option value="1" selected>Marla</option>
                            <option value="2">Square Ft</option>
                            <option value="3">Kanal</option>
                        </select>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="price">
                    <label for="floatingInput">Enter Price</label>
                </div>
                <h4>installment available</h4>
                <div class="mb-3">
                    <label for="exampleAdvanceAmountControlInput1" class="form-label">Advance Amount</label>
                    <input type="number" class="form-control" id="exampleAdvanceAmountControlInput1" placeholder="22222">
                </div>
                <div class="mb-3">
                    <label for="exampleNoInstallmentControlInput1" class="form-label">No of Installments</label>
                    <input type="number" class="form-control" id="exampleNoInstallmentControlInput1" placeholder="0333">
                </div>
                <div class="mb-3">
                    <label for="exampleMonthlyInstallmentControlInput1" class="form-label">Monthly
                        Installments</label>
                    <input type="number" class="form-control" id="exampleMonthlyInstallmentControlInput1" placeholder="035">
                </div>
                <div class="mb-3">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Ready for
                            Possession</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>