<template>
    <div>
        <div class="row sticky-top">
            <div class="col-12">
                <div class="card mb-3 shadow-sm">
                    <div class="card-header">
                        <h5 class="card-title">PKR {{ productDetail.total_price }} </h5>
                    </div>
                    <div class="card-body text-center">

                        <div class="dropdown-center">
                            <button class="mainBtnColor bg-white me-lg-2" data-bs-toggle="dropdown" aria-expanded="false"><i
                                    class="fas fa-phone fa-lg"></i> Call</button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><i class="fas fa-phone"></i> {{ productDetail?.agent?.phone_number }}</li>
                            </ul>
                        </div>
                        <button @click="redirectToGmail" class=" mainBtnColor bg-white me-lg-2" data-bs-toggle="modal"
                            data-bs-target="#agentModal"><i class="fa-regular fa-envelope fa-xl"></i> Email</button>
                        <button @click="redirectToWhatsApp(productDetail?.agent?.whatsapp_num)" class="mainBtnColor bg-white mt-1"><i
                                class="fa-brands fa-whatsapp fa-xl"></i>
                            WhatsApp</button>
                        <div class="mt-2">
                            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" width="50" height="50"
                                class="rounded-circle border border-2 border-primary p-0">
                            <p class="card-text">{{ productDetail?.agent?.name }}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated {{
                                moment(productDetail?.updated_at).startOf('day').fromNow() }}</small></p>
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
            console.log('click whatsapp',number)
        },
        redirectToGmail() {
            // Replace with the appropriate Gmail URL
            const gmailUrl = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
            window.location.href = gmailUrl;
        },
    }
}
</script>