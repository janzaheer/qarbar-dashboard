<template>
    <div>
        <div class="row sticky-top">
            <div class="col-12">
                <div class="card mb-3 shadow-sm">
                    <div class="card-header">
                        <h5 class="card-title">PKR {{ productDetail.total_price }}</h5>
                    </div>
                    <div class="card-body text-center">
                        <button class="mainBtnColor bg-white me-2" data-bs-toggle="modal" data-bs-target="#agentModal"><i
                                class="fas fa-phone fa-lg"></i> Call</button>
                        <button class="mainBtnColor bg-white me-lg-2" data-bs-toggle="modal" data-bs-target="#agentModal"><i
                                class="fas fa-phone fa-lg"></i> Email</button>
                        <button class="mainBtnColor bg-white mt-1"><i class="fa-brands fa-whatsapp fa-xl"></i>
                            WhatsApp</button>
                        <div class="mt-2">
                            <img src="https://github.com/mdo.png" alt="" width="50" height="50"
                                class="rounded-circle border border-2 border-primary p-1">
                            <p class="card-text">{{ productDetail?.agent?.name }}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated {{
                                moment(productDetail?.updated_at).startOf('day').fromNow() }}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="agentModal" tabindex="-1" aria-labelledby="agentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="agentModalLabel">Contact Us</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <i class="fas fa-phone fa-lg"></i>
                                +92 3456 678900
                                <i class="fa-regular fa-copy"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <small>Please quote property reference when calling us.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
import moment from 'moment';
export default {
    name: 'AgentNumber',
    props: {
        productDetail: Object
    },
    created: function () {
        this.moment = moment;
    },
}
</script>