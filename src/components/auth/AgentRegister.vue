<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
import { BASE_URL, API_VERSION, SIGNUP_POINT } from '../../utils/api';
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import { RouterLink } from 'vue-router';
export default {
    name: 'AgentRegister',
    data() {
        return {

            first_name: "",             // required
            last_name: "",                 // required
            username: "",          // required
            password: "",     // required
            email: "",        // required
            phone_number: "",
            name: '',
            whatsapp_num: '',
            bio: '',
            nationality: '',
            languages: '',
            areas: '',
            experience_since: '',
            phone_number2: '',
            dob: '',
            city: '',
            country: '',
            address: '',
            companyName: '',
            companyNtn: '',
            cnic: '',
            province: '',
            postalCode: '',
            confirmPassword: '',

            successMessage: "",
            errorMessage: "",

            confirmPasswordError: '',
            passErrorMessage: '',
            emailErrorMessage: '',
            phoneErrorMessage: '',
            whatsapp_numError: '',
            areasError: '',
            cityError: '',
            companyNameError: '',
            companyNtnError: '',
            provinceError: '',
            postalCodeError: '',
            cnicError: '',

            showPasswordError: true,
            showEmailError: true,
            showConfirmError: true,
            showPhoneError: true,
            showWhatsapp: true,
            showAreas: true,
            showCity: true,
            showCompany: true,
            showNTN: true,
            showProvince: true,
            showPostal: true,
            showCnic: true
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            companyName: { required, minLength: minLength(2), maxLength: maxLength(20), alpha },
            companyNtn: { required, minLength: minLength(2), maxLength: maxLength(50), numeric },
            email: { required, email },
            phone_number: { required, numeric, maxLength: maxLength(15) }, // Assuming phone_number should be numeric
            password: { required, minLength: minLength(8), maxLength: maxLength(19), },
            confirmPassword: { required, sameAsPassword: sameAs(this.password) },
            whatsapp_num: { required, numeric, maxLength: maxLength(15) },
            areas: { required, minLength: minLength(5), maxLength: maxLength(50), },
            city: { required, minLength: minLength(2), maxLength: maxLength(10), alpha },
            province: { required, minLength: minLength(2), maxLength: maxLength(20), alpha },
            cnic: { required, minLength: minLength(7), maxLength: maxLength(20) },
            postalCode: { required, minLength: minLength(3), maxLength: maxLength(10), numeric },
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.companyName || theModel == 'all') { this.v$.companyName.$touch() }
            if (theModel == this.companyNtn || theModel == 'all') { this.v$.companyNtn.$touch() }
            if (theModel == this.email || theModel == 'all') { this.v$.email.$touch() }
            if (theModel == this.phone_number || theModel == 'all') { this.v$.phone_number.$touch() }
            if (theModel == this.password || theModel == 'all') { this.v$.password.$touch() }
            if (theModel == this.confirmPassword || theModel == 'all') { this.v$.confirmPassword.$touch() }
            if (theModel == this.whatsapp_num || theModel == 'all') { this.v$.whatsapp_num.$touch() }
            if (theModel == this.areas || theModel == 'all') { this.v$.areas.$touch() }
            if (theModel == this.cnic || theModel == 'all') { this.v$.cnic.$touch() }
            if (theModel == this.city || theModel == 'all') { this.v$.city.$touch() }
            if (theModel == this.province || theModel == 'all') { this.v$.province.$touch() }
            if (theModel == this.postalCode || theModel == 'all') { this.v$.postalCode.$touch() }

        },
        handleEmail() {
            this.setTouched('all')
        },
        handlePhone() {
            this.setTouched('all')
        },
        handlePassword() {
            this.setTouched('all')
        },
        handleConfirmPassword() {
            this.setTouched('all')
        },
        handleWhatsapp() {
            this.setTouched('all')
        },
        handleAreas() {
            this.setTouched('all')
        },
        handleCity() {
            this.setTouched('all')
        },
        handleCompanyName() {
            this.setTouched('all')
        },
        handleCompanyNtn() {
            this.setTouched('all')
        },
        handleCnic() {
            this.setTouched('all')
        },
        handlePostalCode() {
            this.setTouched('all')
        },
        handleProvince() {
            this.setTouched('all')
        },


        async handleSignUp(e) {
            e.preventDefault();
            const payload = {
                user: {
                    username: this.email,
                    password: this.password
                },
                whatsapp_num: this.whatsapp_num,
                phone_number: this.phone_number,
                areas: this.areas,
                company_name: this.companyName,
                company_ntn: this.companyNtn,
                cnic: this.cnic,
                city: this.city,
                province: this.province,
                postal_code: this.postalCode
            };
            const headers = {
                'Content-Type': 'application/json', // Indicate that you're sending JSON data
            };
            let finalUrl = BASE_URL + API_VERSION() + `agent/`
            await axios.post(finalUrl, payload, { headers })
                .then((response) => {
                    // Handle the response here
                    console.log(response);
                    if (response.status === 201) {
                        createToast(`Registration successful!`, {
                            type: 'success',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    // Reset the form
                    this.$router.push('/login');
                    this.$refs.handleSignUp.reset();
                })
                .catch((resp) => {
                    // Handle errors here
                    if (resp.response) {
                        const resData = resp.response.data
                        console.warn(resData)
                        this.eroMsg = resData
                        // if (this.email.length == 0) {
                        //     this.emailErrorMessage = 'title-required'
                        // }
                        // if (this.receivedDescription.length == 0) {
                        //     this.errorDesc = 'desc-required'
                        // }
                        // if (this.receivedAreaUnit.length == 0) {
                        //     this.errorAreaSize = 'Area-required'
                        // }
                        // if (this.ReceivedTotalPrice.length == 0) {
                        //     this.errorPrice = 'Price-required'
                        // }
                        // if (this.receivedAdvanceAmount.length == 0) {
                        //     this.errorAdvanceAmount = 'Advance Amount-required'
                        // }
                        // if (this.receivedNofInstallments.length == 0) {
                        //     this.errorPrice = 'No of Installment-required'
                        // }
                        // if (this.receivedMonthlyInstallments.length == 0) {
                        //     this.errorMOinstallment = 'Monthly Installment-required'
                        // }
                        // if (this.receivedEmailAddress.length == 0) {
                        //     this.errorEmail = 'Email-required'
                        // }
                        // if (this.receivedMobileNumber.length == 0) {
                        //     this.errorMob = 'Phone-required'
                        // }

                        if (resp.response) {
                            createToast(`fields-required`, {
                                type: 'danger',
                                position: 'top-right',
                                timeout: 8000, // Adjust timeout as needed
                            });
                        }
                    } else if (resp.request) {
                        console.log('request-error', resp.request)
                    } else {
                        console.log(resp)
                    }
                });

            console.log('payload', payload)
        },


        hideCompany() {
            this.showCompany = false
        },
        hideNTN() {
            this.showNTN = false
        },
        hideEmail() {
            this.showEmailError = false
        },
        hideErrorMessagePassword() {
            this.showPasswordError = false
        },
        hideConfirm() {
            this.showConfirmError = false
        },
        hideErrorMessagePhone() {
            this.showPhoneError = false
        },
        hideWhatsapp() {
            this.showWhatsapp = false
        },
        hideCity() {
            this.showCity = false
        },
        hideProvince() {
            this.showProvince = false
        },
        hideCnic() {
            this.showCnic = false
        },
        HideAreas() {
            this.showAreas = false
        },
        hidePostal() {
            this.showPostal = false
        },


    }
}
</script>
<style>
.signUp {
    min-height: 100vh;
}

.sigupForm {
    margin-right: 150px;
    margin-left: 150px;
}

.sigupImage {
    background: url("https://qarbar.netlify.app/assets/img/qarbar-background.jpg") top center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    position: relative;
}

@media screen and (max-width: 420px) {
    .sigupForm {
        margin: 0;
    }

    .sigupImage {
        background: url("./Mobile3.png") top center;
        width: 100%;
        height: 100vh;
        background-size: cover;
        position: relative;
    }
}
</style>

<template>
    <div class="signUp">
        <div class="card text-bg-dark">
            <div class="card-img sigupImage"></div>
            <div class="card-img-overlay">
                <section className="login">
                    <div class="container py-2">
                        <div className="card shadow-2-strong shadow sigupForm">
                            <div className="card-body p-5 text-center">
                                <div class="mb-2">
                                    <RouterLink class="" to="/">
                                        <img src="../../assets/LoogQ.png" class="" alt="" style="height: 30px;">
                                    </RouterLink>
                                </div>
                                <div className="mb-5">
                                    <h3>Welcome to Qarbar Agent Registration</h3>
                                </div>
                                <form class="row g-2 " ref="handleSignUp" @submit.prevent="handleSignUp"
                                    autoComplete="off">
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputFirstName validationServer06"
                                            name='companyName' placeholder='Enter companyName' v-model="this.companyName"
                                            :class="v$.companyName.$error ? 'is-invalid' : ''"
                                            @focus="hideErrorMessageFirstName" @input="handleCompanyName" required />
                                        <label htmlFor="floatingInputFirstName" className='ms-3'>Company Name</label>
                                        <div v-for="error of v$.companyName.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputLastName validationServer06" name='companyNtn'
                                            placeholder='Enter companyNtn' v-model="this.companyNtn"
                                            @input="handleCompanyNtn" @focus="hideErrorMessageLastName"
                                            :class="v$.companyNtn.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputLastName" className='ms-3'>Company NTN</label>
                                        <div v-for="error of v$.companyNtn.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="email" class="form-control"
                                            id="floatingInputUserEmail validationServer07" placeholder='Enter email'
                                            name='email' v-model="this.email" @input="handleEmail"
                                            @focus="hideErrorMessageEmail" :class="v$.email.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputUserEmail" className='ms-3'>User Email</label>
                                        <div v-for="error of v$.email.$errors" class="invalid-feedback" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showEmailError">{{ this.emailErrorMessage }}</div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="password" class="form-control" id="floatingInputPassword validationServer06"
                                            placeholder="password" v-model="this.password" @focus="hideErrorMessagePassword"
                                            @input="handlePassword" name="password"
                                            :class="v$.password.$error ? 'is-invalid' : ''" required>
                                        <label for="floatingInputPassword">Password</label>
                                        <div v-for="error of v$.password.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showPasswordError">{{ this.passErrorMessage }}</div>
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="password" class="form-control"
                                            id="floatingInputConfirmPassword validationServer06"
                                            placeholder='Enter ConfirmPassword' name='confirmPassword'
                                            v-model="this.confirmPassword" @input="handleConfirmPassword"
                                            @focus="hideErrorMessageConfirm"
                                            :class="v$.confirmPassword.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputConfirmPassword" className='ms-3'>Confirm
                                            Password</label>
                                        <div v-for="error of v$.confirmPassword.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>

                                        <!-- <div class="text-danger" v-if="showUserNameNameError">{{ this.usernameErrorMessage
                                        }}
                                        </div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="number" class="form-control"
                                            id="floatingInputPhoneNumber validationServer04" placeholder='PhoneNumber'
                                            v-model="this.phone_number" @input="handlePhone" @focus="hideErrorMessagePhone"
                                            :class="v$.phone_number.$error ? 'is-invalid' : ''"  required />
                                        <label htmlFor="floatingInputPhoneNumber" className='ms-3'>Phone Number</label>
                                        <div v-for="error of v$.phone_number.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showPhoneError">{{ this.phoneErrorMessage }}</div>
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="number" class="form-control"
                                            id="floatingInputWhatsapp validationServer06"
                                            placeholder='Enter ConfirmPassword' name='whatsapp_num'
                                            v-model="this.whatsapp_num" @input="handleWhatsapp"
                                            :class="v$.whatsapp_num.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputWhatsapp" class='ms-3'>WhatsApp Number</label>
                                        <div v-for="error of v$.whatsapp_num.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputCity validationServer06"
                                            placeholder='Enter city' name='city' v-model="this.city" @input="handleCity"
                                            :class="v$.city.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputCity" className='ms-3'>City</label>
                                        <div v-for="error of v$.city.$errors" class="invalid-feedback" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputBio validationServer06"
                                            placeholder='Enter province' name='province' v-model="this.province"
                                            @input="handleProvince" :class="v$.province.$error ? 'is-invalid' : ''"
                                            @focus="hideBio" required />
                                        <label htmlFor="floatingInputBio" class='ms-3'>province</label>
                                        <div v-for="error of v$.province.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showBio">{{ this.bioError }}
                                        </div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control"
                                            id="floatingInputNationality validationServer06" placeholder='Enter cnic'
                                            name='cnic' v-model="this.cnic" @input="handleCnic"
                                            :class="v$.cnic.$error ? 'is-invalid' : ''" @focus="hideNationality" required />
                                        <label htmlFor="floatingInputNationality" class='ms-3'>Cnic</label>
                                        <div v-for="error of v$.cnic.$errors" class="invalid-feedback" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showNationality">{{ this.nationalityError }}
                                        </div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputAreas validationServer06"
                                            placeholder='Enter ConfirmPassword' name='areas' v-model="this.areas"
                                            @input="handleAreas" :class="v$.areas.$error ? 'is-invalid' : ''"
                                            @focus="HideAreas" required />
                                        <label htmlFor="floatingInputAreas" class='ms-3'>Areas</label>
                                        <div v-for="error of v$.areas.$errors" class="invalid-feedback" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showAreas">{{ this.areasError }}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="text" class="form-control"
                                            id="floatingInputPostalCode validationServer06" placeholder='Enter postalCode'
                                            name='postalCode' v-model="this.postalCode" @input="handlePostalCode"
                                            :class="v$.postalCode.$error ? 'is-invalid' : ''" required />
                                        <label htmlFor="floatingInputPostalCode" class='ms-3'>postalCode</label>
                                        <div v-for="error of v$.postalCode.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showExperience">{{ this.experience_sinceError }}
                                        </div> -->
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-warning mt-2" type="submit">Premium Agent Register
                                            Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>