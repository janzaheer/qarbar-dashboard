<script>
export default {
    name: 'ContactInfo',
    props:{
        
    },
    data(){
        return {
            email: '',
            MobNum: '',
            LandNum: '',
            SecondNum:''
        }
    },
    methods:{
        handleEmail(){
            this.email
            this.$emit("ChildToParentEmailData", this.email)
        },
        handleMobNum(){
            this.MobNum
            this.$emit("ChildToParentMobNumData", this.MobNum)
        },
        handleLandNum(){
            this.LandNum
            this.$emit("ChildToParentLandNumData", this.LandNum)
        },
        handleSecondNum(){
            this.SecondNum
            this.$emit("ChildToParentSecondNumData", this.SecondNum)
        }
    }
}
</script>

<style></style>

<template>
    <div class="card-body ">
        <div class="row d-flex justify-content-around">
            <div class="col-4 text-center">
                <i class="fa-solid fa-address-card fa-2xl" style="color: rgb(255, 69, 0);"></i>
                <h5 class="mt-2">Contact Information</h5>
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email" v-on:change="handleEmail">
                </div>
                <div class="mb-3">
                    <label for="exampleMobileControlInput1" class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleMobileControlInput1" placeholder="+123456789" v-model="MobNum" v-on:change="handleMobNum">
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Landline Number</label>
                    <input type="number" class="form-control" id="exampleLandlineControlInput1" placeholder="+1234567" v-model="LandNum" v-on:change="handleLandNum">
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Secondary Number</label>
                    <input type="number" class="form-control" id="exampleLandlineControlInput1" placeholder="+1234567890" v-model="SecondNum" v-on:change="handleSecondNum">
                </div>
            </div>
        </div>
    </div>
</template>