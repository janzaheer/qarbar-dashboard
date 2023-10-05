<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card mb-3 shadow-sm">
                    <div class="card-header">
                        <h5 class="card-title">PKR {{ productDetail.total_price }} </h5>
                    </div>
                    <div class="card-body text-center">
                        <button class="mainBtnColor bg-white me-lg-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fas fa-phone"></i> Call</button>
                        <button @click="redirectToGmail(productDetail?.agent?.user?.email)"
                            class=" mainBtnColor bg-white me-lg-2" data-bs-toggle="modal" data-bs-target="#agentModal"><i
                                class="fa-regular fa-envelope fa-xl"></i> Email</button>
                        <button @click="redirectToWhatsApp(productDetail?.agent?.whatsapp_num)"
                            class="mainBtnColor bg-white mt-1"><i class="fa-brands fa-whatsapp fa-xl"></i>
                            WhatsApp</button>
                        <div class="mt-2">
                            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt=""
                                width="50" height="50" class="rounded-circle border border-2 border-primary p-0">
                            <p class="card-text">{{ productDetail?.agent?.name }}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated {{
                                moment(productDetail?.updated_at).startOf('day').fromNow() }}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Content Us</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <div>
                                <h6 class="me-2"><i class="fas fa-phone" style="color: coral;"></i></h6>
                            </div>
                            <div>
                                <h6>{{ productDetail?.agent?.phone_number }}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <div class="text-center">
                            <p>{{ productDetail?.agent?.name }}</p>
                            <p>Pakistan Property Leaders</p>
                            <p>when calling us.</p>
                        </div>
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
    methods: {
        redirectToWhatsApp(number) {
            const whatsappUrl = `https://wa.me/+92${number}`;
            window.location.href = whatsappUrl;
            console.log('click whatsapp', number)
        },
        redirectToGmail(email) {
            // Replace with the appropriate Gmail URL
            const gmailUrl = `mailto:${email}`;
            window.location.href = gmailUrl;
        },
    }
}
</script>