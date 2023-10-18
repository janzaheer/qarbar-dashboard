<template>
    <AgentDashboardHeader />
    <div class="container AgentDashboardHeight">
        <div class="card shadow my-5">
            <div class="d-flex justify-content-center align-items-center my-5">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <img v-if="agentDetail.image" :src="agentDetail.image" alt="Avatar" class="avatar me-4">
                        <img v-else src="../../assets/user1.png" alt="Avatar" class="avatar me-4">
                    </div>
                    <div>
                        <h5>{{ agentDetail?.name }}</h5>
                        <span>{{ agentDetail?.user?.email }}</span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-body">
                <form class="row g-3 mx-5" @submit.prevent="handleAgentUpdate">
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputName4" name="name" v-model="name">
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" name="email" v-model="email" disabled>
                    </div>
                    <div class="col-md-6">
                        <label for="inputMob4" class="form-label">Mobile</label>
                        <input type="text" class="form-control" id="inputMob4" name="phone" v-model="phone"
                            @input="handleMobNum">
                    </div>
                    <div class="col-md-6">
                        <label for="inputLandline4" class="form-label">Landline</label>
                        <input type="text" class="form-control" id="inputLandline4" name="landline" v-model="landline"
                            @input="handleLandlineNum">
                    </div>
                    <div class="col-md-6">
                        <label for="inputWhatsapp4" class="form-label">Whatsapp</label>
                        <input type="text" class="form-control" id="inputWhatsapp4" name="whatsapp" v-model="whatsapp"
                            @input="handlewhatsNum">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address"
                            v-model="address">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCountry" class="form-label">Country</label>
                        <input type="text" class="form-control" id="inputCountry" name="country" v-model="country">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" name="city" v-model="city">
                    </div>

                    <div class="col-6 d-flex align-items-center justify-content-start">
                        <label class="form-label" for="customFile">Upload a Picture</label>
                        <input type="file" class="form-control" id="customFile" @change="onChangeFiles" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" name="checkValue"
                                v-model="checkValue">
                            <label class="form-check-label" for="gridCheck">
                                Update details in all property listings
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="adversBtn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <AgentDashboardFooter />
</template>

<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue';
import { AgentDetail } from '../../utils/Agent_Service';
import axios from 'axios';
import { BASE_URL, API_VERSION, AGENT_POINT, AGENT_UPDATE_ENDPOINT } from '../../utils/api'
import AWSS3UploadAshClient from "aws-s3-upload-ash";
export default {
    name: 'Profile',
    components: {
        AgentDashboardHeader,
        AgentDashboardFooter
    },
    data() {
        return {
            name: '',
            email: '',
            phone: '+92',
            landline: '+92',
            whatsapp: '+92',
            address: '',
            country: 'Pakistan',
            city: '',
            image: '',
            checkValue: false,
            agentDetail: '',
            agent_id: '',
            config: {
                bucketName: process.env.NODE_ENV == 'development' ? `meditech-products` : `cosemedicos-prod`,
                // dirName:
                //     "media" /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */,
                region: "ap-northeast-1",
                accessKeyId: 'AKIA2GGOXYXVJBADABN5',
                secretAccessKey: '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',
                Key: `media`,
                s3Url: "https://meditech-products.s3-ap-northeast-1.amazonaws.com/",
            },
            filesSelected: [],
            imageUrls: [],
            ImageData: [],

        }
    },
    async mounted() {
        this.agent_id = localStorage.getItem('agent_id');
        if (this.agent_id) {
            await this.handleAgentDetail();
        }

    },
    methods: {
        async handleAgentUpdate(event) {
            event.preventDefault()
            const payload = {
                agent: {
                    id: this.agent_id,
                    image: this.ImageData,
                    name: this.name,
                    whatsapp_num: this.whatsapp,
                    phone_number: this.phone,
                    landline_number: this.landline,
                    user: {
                        email: this.email
                    },
                    userprofile: {
                        country: this.country,
                        address: this.address
                    }
                }
            }
            // console.log('payload', payload)
            let id = this.agent_id
            try {
                let finallURL = BASE_URL + API_VERSION() + AGENT_POINT() + id + AGENT_UPDATE_ENDPOINT()
                let res = await axios.put(finallURL, payload)
                console.log('update-agent-form', res)
                this.$router.push('/agentDashboard')
            } catch (error) {
                console.log('update-agent-error', error)
            }
            console.log('Login clicked');
        },
        async handleAgentDetail() {
            let id = this.agent_id
            try {
                let respData = await AgentDetail(id)
                console.log('agent-detail', respData)
                this.agentDetail = respData.results
                this.email = respData.results.user.email
                this.name = respData.results.name
                this.phone = respData.results.phone_number
                this.whatsapp = respData.results.whatsapp_num
                this.city = respData.results.city
            } catch (error) {
                console.log(error)
            }
        },
        handleMobNum() {
            this.phone = this.phone.replace(/[^0-9+]/g, "");
        },
        handleLandlineNum() {
            this.landline = this.landline.replace(/[^0-9+]/g, "");
        },
        handlewhatsNum() {
            this.whatsapp = this.whatsapp.replace(/[^0-9+]/g, "");
        },
        async onChangeFiles(event) {
            event.preventDefault();
            const selectedFile = event.target.files[0]; // Get the first selected file

            if (selectedFile) {
                const S3CustomClient = new AWSS3UploadAshClient(this.config);
                try {
                    const data = await S3CustomClient.uploadFile(
                        selectedFile,
                        selectedFile.type,
                        undefined,
                        selectedFile.name,
                        "public-read"
                    );
                    console.log(data);
                    console.log(data.location);
                    this.ImageData = data.location
                    console.log('Uploaded Image:', this.ImageData);
                    console.log("File uploaded successfully");
                } catch (error) {
                    console.error("Error uploading file", error);
                }
            } else {
                console.error("No file selected for upload");
            }
        },
        isImage(fileType) {
            // Function to check if a file is an image based on its MIME type
            return fileType.startsWith("image/");
        },
    }
}
</script>

<style>
.avatar {
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>