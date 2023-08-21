<script>
export default {
    name: 'PropertyInfo',
    props:{
        
    },
    data(){
        return {
            title: '',
            description: ''
        }
    },
    methods:{
        handleTitle(){
            this.title
            this.$emit("ChildToParentTitleData", this.title)
        },
        handleDesc(){
            this.description
            this.$emit("ChildToParentDescData", this.description)
        }
    }
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-clipboard-list fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Property Information</h5>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="inputTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="inputTitle" v-model="title" v-on:change="handleTitle">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description" v-on:change="handleDesc"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>