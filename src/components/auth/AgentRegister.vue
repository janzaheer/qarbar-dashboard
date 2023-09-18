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

            successMessage: "",
            errorMessage: "",

            passErrorMessage: '',
            firstErrorMessage: '',
            lastErrorMessage: '',
            emailErrorMessage: '',
            usernameErrorMessage: '',
            phoneErrorMessage: '',
            nameError: '',
            whatsapp_numError:'',
            bioError:'',
            nationalityError:'',
            languagesError:'',
            areasError:'',
            experience_sinceError:'',
            dobError:'',
            cityError:'',
            countryError:'',
            addressError:'',
            showPasswordError: true,
            showFirstNameError: true,
            showLastNameError: true,
            showEmailError: true,
            showUserNameNameError: true,
            showConfirmError: true,
            showPhoneError: true,
            showName:true,
            showWhatsapp:true,
            showBio:true,
            showNationality:true,
            showLanguages:true,
            showAreas:true,
            showExperience:true,
            showDob:true,
            showCity:true,
            showCOuntry:true,
            showAddress:true
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            first_name: { required, minLength: minLength(2), maxLength: maxLength(20), alpha },
            last_name: { required, minLength: minLength(2), maxLength: maxLength(50), alpha },
            username: { required, minLength: minLength(5), maxLength: maxLength(20), alpha },
            email: { required, email },
            phone_number: { required, numeric, maxLength: maxLength(15) }, // Assuming phone_number should be numeric
            password: { required, minLength: minLength(8), maxLength: maxLength(19), },
            name: {required,maxLength:maxLength(25)},
            whatsapp_num: { required, numeric, maxLength: maxLength(15)},
            bio:{ required, minLength: minLength(5)},
            nationality: {required,minLength:minLength(3),alpha},
            languages: { required, minLength: minLength(2), maxLength: maxLength(80), alpha },
            areas: { required, minLength: minLength(5), maxLength: maxLength(50), },
            experience_since: { required },
            dob: { required },
            city: { required, minLength: minLength(2), maxLength: maxLength(10), alpha },
            country: { required, minLength: minLength(2), maxLength: maxLength(20), alpha },
            address:  { required, minLength: minLength(2), maxLength: maxLength(70) }      
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.first_name || theModel == 'all') { this.v$.first_name.$touch() }
            if (theModel == this.last_name || theModel == 'all') { this.v$.last_name.$touch() }
            if (theModel == this.email || theModel == 'all') { this.v$.email.$touch() }
            if (theModel == this.username || theModel == 'all') { this.v$.username.$touch() }
            if (theModel == this.phone_number || theModel == 'all') { this.v$.phone_number.$touch() }
            if (theModel == this.password || theModel == 'all') { this.v$.password.$touch() }
            if (theModel == this.name || theModel == 'all') { this.v$.name.$touch() }
            if (theModel == this.whatsapp_num || theModel == 'all') { this.v$.whatsapp_num.$touch() }
            if (theModel == this.bio || theModel == 'all') { this.v$.bio.$touch() }
            if (theModel == this.nationality || theModel == 'all') { this.v$.nationality.$touch() }
            if (theModel == this.languages || theModel == 'all') { this.v$.languages.$touch() }
            if (theModel == this.areas || theModel == 'all') { this.v$.areas.$touch() }
            if (theModel == this.experience_since || theModel == 'all') { this.v$.experience_since.$touch() }
            if (theModel == this.dob || theModel == 'all') { this.v$.dob.$touch() }
            if (theModel == this.city || theModel == 'all') { this.v$.city.$touch() }
            if (theModel == this.country || theModel == 'all') { this.v$.country.$touch() }
            if (theModel == this.address || theModel == 'all') { this.v$.address.$touch() }

        },
        handleFirstName() {
            this.setTouched('all')
        },
        handleLastName() {
            this.setTouched('all')
        },
        handleEmail() {
            this.setTouched('all')
        },
        handleUserName() {
            this.setTouched('all')
        },
        handlePhone() {
            this.setTouched('all')
        },
        handlePassword() {
            this.setTouched('all')
        },
        handleName() {
            this.setTouched('all')
        },
        handleWhatsapp() {
            this.setTouched('all')
        },
        handleBio() {
            this.setTouched('all')
        },
        handleNationality() {
            this.setTouched('all')
        },
        handleLanguages() {
            this.setTouched('all')
        },
        handleAreas() {
            this.setTouched('all')
        },
        handleExperience() {
            this.setTouched('all')
        },
        handleDob() {
            this.setTouched('all')
        },
        handleCity() {
            this.setTouched('all')
        },
        handleCountry() {
            this.setTouched('all')
        },
        handleAddress() {
            this.setTouched('all')
        },
       

        async handleSignUp(e) {
            e.preventDefault();
            // this.$v.$touch(); // Trigger validatio
            const payload = {
                userprofile: {
                    phone_number: "",
                    dob: this.dob,
                    city: this.city,
                    country: this.country,
                    address: this.address
                },
                user: {
                    username: this.username,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    password: this.password,
                    email: this.email,
                },
                name: this.name,
                whatsapp_num: this.whatsapp_num,
                phone_number: this.phone_number,
                bio: this.bio,
                nationality: this.nationality,
                languages: this.languages,
                areas: this.areas,
                experience_since: this.experience_since
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
                    this.successMessage = "Registration successful!";
                    this.errorMessage = "";
                })
                .catch((error) => {
                    // Handle errors here
                    if (error.response) {
                        if (error.response.status === 400) {
                            const errorData = error.response.data;
                            const newError = error.response
                            console.log('newError', newError)
                            this.errorMessage = "Registration failed due to validation errors."; // Set error message
                            this.successMessage = ""; // Clear any previous success message
                            if (errorData.areas) {
                                console.log('Area is required.');
                                this.areasError = errorData.areas
                            }
                            if (errorData.bio) {
                                console.log('Bio is required.');
                                this.bioError = errorData.bio
                            }
                            if (errorData.experience_since) {
                                console.log('experience is required.');
                                this.experience_sinceError = errorData.experience_since
                            }
                            if (errorData.user.username) {
                                console.log('username is required.');
                                this.usernameErrorMessage = errorData.user.username
                            }
                            if (errorData.phone_number) {
                                console.log('Phone Number is required.');
                                this.phoneErrorMessage = errorData.phone_number
                            }
                            if (errorData.user.password) {
                                console.log('Password is required.');
                                this.passErrorMessage = errorData.user.password
                            }
                            if (errorData.languages) {
                                console.log('langua is required.');
                                this.languagesError = errorData.languages
                            }
                            if (errorData.name) {
                                console.log('name is required.');
                                this.nameError = errorData.name
                            }
                            if (errorData.nationality) {
                                console.log('nat is required.');
                                this.nationalityError = errorData.nationality
                            }

                        } else {
                            // Handle other errors (e.g., server errors)
                            this.errorMessage = "Registration failed due to a server error."; // Set error message
                            this.successMessage = ""; // Clear any previous success message
                            console.log('Registration failed:', error.response.data);
                        }
                    } else {
                        this.errorMessage = "Registration failed due to a network error."; // Set error message
                        this.successMessage = ""; // Clear any previous success message
                        console.log('Registration failed:', error.message);
                    }
                });

            // console.log('payload', payload)
        },
        hideErrorMessagePassword() {
            this.showPasswordError = false
        },
        hideBio() {
            this.showBio = false
        },
        HideAreas() {
            this.showAreas = false
        },
        hideExperience() {
            this.showExperience = false
        },
        hideErrorMessageUserName() {
            this.showUserNameNameError = false
        },
        hideErrorMessagePhone() {
            this.showPhoneError = false
        },
        hideLanguages(){
            this.showLanguages = false
        },
        hideName(){
            this.showName = false
        },
        hideNationality(){
            this.showNationality = false
        }

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
                                <div className="mb-5">
                                    <h3>Welcome to Qaarbar! Please Agent Register Now.</h3>
                                </div>
                                <form className="row g-2 " ref="handleSignUp" @submit.prevent="handleSignUp"
                                    autoComplete="off">
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputFirstName"
                                            name='first_name' placeholder='Enter FirstName' v-model="this.first_name"
                                            :class="v$.first_name.$error ? 'is-invalid' : ''"
                                            @focus="hideErrorMessageFirstName" @input="handleFirstName" />
                                        <label htmlFor="floatingInputFirstName" className='ms-3'>FirstName</label>
                                        <div v-for="error of v$.first_name.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showFirstNameError">{{ this.firstErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputLastName" name='last_name'
                                            placeholder='Enter LastName' v-model="this.last_name" @input="handleLastName"
                                            @focus="hideErrorMessageLastName"
                                            :class="v$.last_name.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputLastName" className='ms-3'>Last Name</label>
                                        <div v-for="error of v$.last_name.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showLastNameError">{{ this.lastErrorMessage }}</div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control"
                                            id="floatingInputUserName validationServer03" placeholder='Enter UserName'
                                            v-model="this.username" @input="handleUserName"
                                            @focus="hideErrorMessageUserName"
                                            :class="v$.username.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputUserName" className='ms-3'>User Name</label>
                                        <div v-for="error of v$.username.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showUserNameNameError">{{ this.usernameErrorMessage
                                        }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="email" class="form-control"
                                            id="floatingInputUserEmail validationServer07" placeholder='Enter email'
                                            name='email' v-model="this.email" @input="handleEmail"
                                            @focus="hideErrorMessageEmail" :class="v$.email.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputUserEmail" className='ms-3'>User Email</label>
                                        <div v-for="error of v$.email.$errors" class="invalid-feedback" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showEmailError">{{ this.emailErrorMessage }}</div> -->
                                    </div>
                                    <div class="col-md-4 form-floating">
                                        <input type="password" class="form-control" id="floatingInputPassword"
                                            placeholder="password" v-model="this.password" @focus="hideErrorMessagePassword"
                                            @input="handlePassword" name="password"
                                            :class="v$.password.$error ? 'is-invalid' : ''">
                                        <label for="floatingInputPassword">Password</label>
                                        <div v-for="error of v$.password.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showPasswordError">{{ this.passErrorMessage }}</div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="number" class="form-control"
                                            id="floatingInputPhoneNumber validationServer04" placeholder='PhoneNumber'
                                            v-model="this.phone_number" @input="handlePhone" @focus="hideErrorMessagePhone"
                                            :class="v$.phone_number.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputPhoneNumber" className='ms-3'>Phone Number</label>
                                        <div v-for="error of v$.phone_number.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showPhoneError">{{ this.phoneErrorMessage }}</div>
                                    </div>


                                    <!-- simple  -->
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputName validationServer06"
                                            placeholder='Enter ConfirmPassword' name='name' v-model="this.name"
                                            @input="handleName" :class="v$.name.$error ? 'is-invalid' : ''" 
                                            @focus="hideName"  />
                                        <label htmlFor="floatingInputName" class='ms-3'>Name</label>
                                        <div v-for="error of v$.name.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showName">{{ this.nameError }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="number" class="form-control"
                                            id="floatingInputWhatsapp validationServer06"
                                            placeholder='Enter ConfirmPassword' name='whatsapp_num'
                                            v-model="this.whatsapp_num" @input="handleWhatsapp" 
                                            :class="v$.whatsapp_num.$error ? 'is-invalid' : ''"/>
                                        <label htmlFor="floatingInputWhatsapp" class='ms-3'>WhatsApp Number</label>
                                        <div v-for="error of v$.whatsapp_num.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputBio validationServer06"
                                            placeholder='Enter ConfirmPassword' name='bio' v-model="this.bio"
                                            @input="handleBio" :class="v$.bio.$error ? 'is-invalid' : ''" @focus="hideBio" />
                                        <label htmlFor="floatingInputBio" class='ms-3'>Bio</label>
                                        <div v-for="error of v$.bio.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showBio">{{ this.bioError }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control"
                                            id="floatingInputNationality validationServer06"
                                            placeholder='Enter ConfirmPassword' name='nationality'
                                            v-model="this.nationality" @input="handleNationality"
                                             :class="v$.nationality.$error ? 'is-invalid' : ''" @focus="hideNationality" />
                                        <label htmlFor="floatingInputNationality" class='ms-3'>Nationality</label>
                                        <div v-for="error of v$.nationality.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showNationality">{{ this.nationalityError }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control"
                                            id="floatingInputLanguages validationServer06"
                                            placeholder='Enter ConfirmPassword' name='languages' v-model="this.languages"
                                            @input="handleLanguages" :class="v$.languages.$error ? 'is-invalid' : ''" @focus="hideLanguages" />
                                        <label htmlFor="floatingInputLanguages" class='ms-3'>Languages</label>
                                        <div v-for="error of v$.languages.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showLanguages">{{ this.languagesError }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputAreas validationServer06"
                                            placeholder='Enter ConfirmPassword' name='areas' v-model="this.areas"
                                            @input="handleAreas" :class="v$.areas.$error ? 'is-invalid' : ''" 
                                            @focus="HideAreas" />
                                        <label htmlFor="floatingInputAreas" class='ms-3'>Areas</label>
                                        <div v-for="error of v$.areas.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showAreas">{{ this.areasError }}
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="date" class="form-control"
                                            id="floatingInputExperience validationServer06"
                                            placeholder='Enter ConfirmPassword' name='experience_since'
                                            v-model="this.experience_since" @input="handleExperience"
                                            :class="v$.experience_since.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputExperience" class='ms-3'>Experience Since</label>
                                        <div v-for="error of v$.experience_since.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showExperience">{{ this.experience_sinceError }}
                                        </div>
                                    </div>
                                    <!--  -->

                                    <!-- userprofile -->

                                    <div className="col-md-4 form-floating">
                                        <input type="date" class="form-control" id="floatingInputDob validationServer06"
                                            placeholder='Enter ConfirmPassword' name='dob' v-model="this.dob"
                                            @input="handleDob" :class="v$.dob.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputDob" className='ms-3'>DOB</label>
                                        <div v-for="error of v$.dob.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputCity validationServer06"
                                            placeholder='Enter ConfirmPassword' name='city' v-model="this.city"
                                            @input="handleCity" :class="v$.city.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputCity" className='ms-3'>City</label>
                                        <div v-for="error of v$.city.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputCountry validationServer06"
                                            placeholder='Enter ConfirmPassword' name='country' v-model="this.country"
                                            @input="handleCountry" :class="v$.country.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputCountry" className='ms-3'>Country</label>
                                        <div v-for="error of v$.country.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" class="form-control" id="floatingInputAddress validationServer06"
                                            placeholder='Enter ConfirmPassword' name='address' v-model="this.address"
                                            @input="handleAddress" :class="v$.address.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputAddress" className='ms-3'>Address</label>
                                        <div v-for="error of v$.address.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <!-- <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div> -->
                                    </div>
                                    <div className="col-12">
                                        <button class="btn btn-warning mt-2" type="submit">Agent Register Now</button>
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