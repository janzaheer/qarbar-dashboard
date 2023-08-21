<script>
export default {
    name: 'UploadImages',
    props: {

    },
    data() {
        return {
            selectedImage: '',
        }
    },
    methods: {
        handleImageUpload(event) {
            this.selectedImage = event.target.files[0];
            this.$emit('ChildToParentImageUploadedData', this.selectedImage);
        },
    },
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-images fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Property Images Upload</h5>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Upload image here</label>
                    <input class="form-control" type="file" id="formFile" v-on:change="handleImageUpload">
                </div>
            </div>
        </div>
    </div>
</template>
