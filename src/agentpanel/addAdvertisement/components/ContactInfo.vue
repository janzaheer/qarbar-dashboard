<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
export default {
    name: 'ContactInfo',
    props: {
        emailError: String,
        mobError: String,
        landError: String,
        secError: String,
        initialEmail:String,
        initialPhone:String,
        initialLand:String,
        initialSecondary:String
    },
    data() {
        return {
            email: '',
            MobNum: '',
            LandNum: '',
            SecondNum: '',
            showEmailError: true,
            showMobError: true,
            showLandError: true,
            showSecError: true,
        }
    },
    watch: {
        initialEmail(newEmail){
            this.email = newEmail
        },
        initialPhone(newPhone){
            this.MobNum = newPhone
        },
        initialLand(newLand){
            this.LandNum = newLand
        },
        initialSecondary(newSecondNum){
            this.SecondNum = newSecondNum
        },
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            email: {
                required,
                email
            },
            MobNum: {
                required,
                maxLength: maxLength(15),
                minLength: minLength(6),
                numeric
            },
            LandNum: {
                required,
                maxLength: maxLength(15),
                minLength: minLength(6),
                numeric
            },
            SecondNum: {
                required,
                maxLength: maxLength(15),
                minLength: minLength(6),
                numeric
            }
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.email || theModel == 'all') { this.v$.email.$touch() }
            if (theModel == this.MobNum || theModel == 'all') { this.v$.MobNum.$touch() }
            if (theModel == this.LandNum || theModel == 'all') { this.v$.LandNum.$touch() }
            if (theModel == this.SecondNum || theModel == 'all') { this.v$.SecondNum.$touch() }
        },
        handleEmail() {
            this.email
            this.setTouched('all')
            this.$emit("ChildToParentEmailData", this.email)
        },
        handleMobNum() {
            this.MobNum
            this.setTouched('all')
            this.MobNum = this.MobNum.replace(/[^0-9]/g, "")
            this.$emit("ChildToParentMobNumData", this.MobNum)
        },
        handleLandNum() {
            this.LandNum
            this.setTouched('all')
            this.LandNum = this.LandNum.replace(/[^0-9]/g, "")
            this.$emit("ChildToParentLandNumData", this.LandNum)
        },
        handleSecondNum() {
            this.SecondNum
            this.setTouched('all')
            this.SecondNum = this.SecondNum.replace(/[^0-9]/g, "")
            this.$emit("ChildToParentSecondNumData", this.SecondNum)
        },
        hideErrorMessageEmail() {
            this.showEmailError = false;
        },
        hideErrorMessageMob() {
            this.showMobError = false;
        },
        hideErrorMessageLand() {
            this.showLandError = false;
        },
        hideErrorMessageSec() {
            this.showSecError = false;
        },
        
    },
    mounted(){
        this.email = this.initialEmail
        this.MobNum = this.initialPhone
        this.LandNum = this.initialLand
        this.SecondNum = this.initialSecondary
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
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                       @focus="hideErrorMessageEmail" v-model="email" @input="handleEmail" :class="v$.email.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.email.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                    <div class="text-danger" v-if="showEmailError">{{ emailError }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleMobileControlInput1" class="form-label">Mobile Number</label>
                    <input type="text" class="form-control" id="exampleMobileControlInput1" placeholder="+123456789"
                       @focus="hideErrorMessageMob" v-model="MobNum" @input="handleMobNum" :class="v$.MobNum.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.MobNum.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                    <div class="text-danger" v-if="showMobError">{{ mobError }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Landline Number</label>
                    <input type="text" class="form-control" id="exampleLandlineControlInput1" placeholder="+1234567"
                       @focus="hideErrorMessageLand" v-model="LandNum" @input="handleLandNum" :class="v$.LandNum.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.LandNum.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                    <div class="text-danger" v-if="showLandError">{{ landError }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleLandlineControlInput1" class="form-label">Secondary Number</label>
                    <input type="text" class="form-control" id="exampleLandlineControlInput1" placeholder="+1234567890"
                       @focus="hideErrorMessageSec" v-model="SecondNum" @input="handleSecondNum" :class="v$.SecondNum.$error ? 'is-invalid' : ''">
                    <div v-for="error of v$.SecondNum.$errors" class="invalid-feedback" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                    <div class="text-danger" v-if="showSecError">{{ secError }}</div>
                </div>
            </div>
        </div>
    </div>
</template>