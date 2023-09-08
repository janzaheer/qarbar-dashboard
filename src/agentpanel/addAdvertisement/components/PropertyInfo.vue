<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
export default {
    name: 'PropertyInfo',
    props: {

    },
    data() {
        return {
            title: '',
            description: ''
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            title: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            description: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(200)
            }
        }
    },
    methods: {
        setTouched(theModel) {
            // if (theModel == 'name' || theModel == 'all') { this.v$.name.$touch() }
            if (theModel == this.title || theModel == 'all') { this.v$.title.$touch() }
            if (theModel == this.description || theModel == 'all') { this.v$.description.$touch() }
        },
        handleTitle() {
            this.title
            this.setTouched('all')
            this.$emit("ChildToParentTitleData", this.title)
        },
        handleDesc() {
            this.description
            this.setTouched('all')
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
                    <input type="text" class="form-control" id="inputTitle" v-model="title" @input="handleTitle"
                        :class="v$.title.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.title.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"
                        @input="handleDesc" :class="v$.description.$error ? 'is-invalid' : ''"></textarea>
                    <div v-for="error of v$.description.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>