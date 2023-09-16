<script>
import axios from 'axios';
import AWSS3UploadAshClient from "aws-s3-upload-ash";
import { VueSpinnerFacebook } from 'vue3-spinners';
export default {
    name: 'UploadImages',
    components: {
        VueSpinnerFacebook,

    },
    props: {

    },
    data() {
        return {
            loading: false,
            filesSelected: [],
            imageUrls: [],
            ImageData: [],
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
        }
    },
    methods: {
        async onChangeFiles(event) {
            // Get the selected files as an array
            const selectedFiles = Array.from(event.target.files);
            // Prepare file previews and store them in the filesSelected array
            this.filesSelected = await selectedFiles.map((file) => ({
                name: file.name,
                type: file.type,
                preview: URL.createObjectURL(file),
                file: file,
            }));
        },
        isImage(fileType) {
            // Function to check if a file is an image based on its MIME type
            return fileType.startsWith("image/");
        },
        async handleSendFiles() {
            const promises = [];
            const uploadedImages = [];
            // Loop through the selected files and upload each one
            for (const fileData of this.filesSelected) {
                const S3CustomClient = new AWSS3UploadAshClient(this.config);
                const uploadPromise = S3CustomClient.uploadFile(
                    fileData.file,
                    fileData.type,
                    undefined,
                    fileData.name,
                    "public-read"
                )
                    .then((data) => {
                        console.log(data);
                        console.log(data.location);
                        this.imageUrls.push(data.location); // Store the URL of the uploaded image or video
                        // Create an object with image type and S3 URL
                        const imageInfo = {
                            media_type: fileData.type,
                            image_url: data.location
                        };
                        uploadedImages.push(imageInfo); // Add the image info to the array
                    })
                    .catch((err) => console.error(err));
                promises.push(uploadPromise);
            }
            // Wait for all uploads to finish before proceeding
            try {
                this.loading = true
                await Promise.all(promises);
                
                this.ImageData = uploadedImages
                console.log('Uploaded Images:', this.ImageData);
                this.$emit('ChildToParentImageUploadedData', this.ImageData);
                console.log("All files uploaded successfully");
            } catch (error) {
                console.error("Error uploading files", error);
            } finally {
                this.loading = false
            }
        },

    },
}
</script>

<style>
</style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-images fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Property Images Upload</h5>
            </div>
            <div class="col-6">
                <div class="text-center m-2" v-if="loading">
                   wait plz media is uploading... <VueSpinnerFacebook size="50" color="rgb(255, 69, 0)" />
                </div>
                <button @click="handleSendFiles" class="uploadBtn me-1">Upload Files</button>
                <input type="file" ref="imageInput" class="btn btn-outline-primary" multiple @change="onChangeFiles" />
                <div class="row ">
                    <div class="col-6 col-md-12">
                        <div class="d-flex flex-wrap my-2">
                            <div v-for="(file, index) in filesSelected" :key="index" class="file-preview">
                                <img v-if="isImage(file.type)" :src="file.preview" alt="Image Preview" width="70" />
                                <video v-else :src="file.preview" controls="controls" width="200"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
