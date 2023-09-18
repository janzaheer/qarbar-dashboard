<template>
    <div class="signUp">
        <div class="card text-bg-dark">
            <!-- <img src="https://qarbar.netlify.app/assets/img/qarbar-background.jpg" class="card-img" alt="..."> -->
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
                                    <h3>Welcome to Qarbar Please Register Now.</h3>
                                </div>
                                <form className="row g-2 " ref="handleSignUp" @submit.prevent="handleSignUp"
                                    autoComplete="off">
                                    <div className="col-md-6 form-floating">
                                        <input type="text" class="form-control" id="floatingInputFirstName"
                                            name='first_name' placeholder='Enter FirstName' v-model="this.first_name"
                                            :class="v$.first_name.$error ? 'is-invalid' : ''"
                                            @focus="hideErrorMessageFirstName" @input="handleFirstName" />
                                        <label htmlFor="floatingInputFirstName" className='ms-3'>FirstName</label>
                                        <div v-for="error of v$.first_name.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showFirstNameError">{{ this.firstErrorMessage }}
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="text" class="form-control" id="floatingInputLastName" name='last_name'
                                            placeholder='Enter LastName' v-model="this.last_name" @input="handleLastName"
                                            @focus="hideErrorMessageLastName"
                                            :class="v$.last_name.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputLastName" className='ms-3'>Last Name</label>
                                        <div v-for="error of v$.last_name.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showLastNameError">{{ this.lastErrorMessage }}</div>
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
                                        <div class="text-danger" v-if="showEmailError">{{ this.emailErrorMessage }}</div>
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
                                    <div class="col-md-6 form-floating">
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
                                    <div className="col-md-6 form-floating">
                                        <input type="password" class="form-control"
                                            id="floatingInputConfirmPassword validationServer06"
                                            placeholder='Enter ConfirmPassword' name='confirm_password'
                                            v-model="this.confirm_password" @input="handleConfirmPassword"
                                            @focus="hideErrorMessageConfirm"
                                            :class="v$.confirm_password.$error ? 'is-invalid' : ''" />
                                        <label htmlFor="floatingInputConfirmPassword" className='ms-3'>Confirm
                                            Password</label>
                                        <div v-for="error of v$.confirm_password.$errors" class="invalid-feedback"
                                            :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                        <div class="text-danger" v-if="showConfirmError">{{ this.confirmErrorMessage }}
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <button class="btn btn-warning mt-2" type="submit">Register Now</button>
                                        <RouterLink to="/agentRegister" class="btn btn-warning ms-2 mt-2">Apply for Agent
                                            Registration</RouterLink>
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
<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
import { BASE_URL, API_VERSION, SIGNUP_POINT } from '../../utils/api';
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import { RouterLink } from 'vue-router';
export default {
    name: 'SignUp',
    data() {
        return {

            first_name: "",             // required
            last_name: "",                 // required
            username: "",          // required
            password: "",            // required
            confirm_password: "",    // required
            email: "",        // required
            phone_number: "",

            successMessage: "",
            errorMessage: "",

            passErrorMessage: '',
            firstErrorMessage: '',
            lastErrorMessage: '',
            emailErrorMessage: '',
            usernameErrorMessage: '',
            confirmErrorMessage: '',
            phoneErrorMessage: '',
            showPasswordError: true,
            showFirstNameError: true,
            showLastNameError: true,
            showEmailError: true,
            showUserNameNameError: true,
            showConfirmError: true,
            showPhoneError: true,
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {

            first_name: { required, minLength: minLength(2), maxLength: maxLength(20), alpha },
            last_name: { required, minLength: minLength(2), maxLength: maxLength(50) },
            username: { required, minLength: minLength(5), maxLength: maxLength(20) },
            email: { required, email },
            phone_number: { required, numeric, maxLength: maxLength(15) }, // Assuming phone_number should be numeric
            password: { required, minLength: minLength(8), maxLength: maxLength(19), },
            confirm_password: { required, sameAsPassword: sameAs(this.password) },
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
            if (theModel == this.confirm_password || theModel == 'all') { this.v$.confirm_password.$touch() }
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
        handleConfirmPassword() {
            this.setTouched('all')
        },
        async handleSignUp(e) {
            e.preventDefault();
            // this.$v.$touch(); // Trigger validatio
            const payload = {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                phone_number: this.phone_number
            };
            const headers = {
                'Content-Type': 'application/json', // Indicate that you're sending JSON data
            };
            let finalUrl = BASE_URL + API_VERSION() + SIGNUP_POINT()
            await axios.post(finalUrl, payload, { headers })
                .then((response) => {
                    // Handle the response here
                    console.log(response);
                    if (response.status === 200) {
                        createToast(`Registration successful!`, {
                            type: 'success',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    // Reset the form
                    this.$router.push('/login');
                    this.$refs.handleSignUp.reset();
                    // this.first_name = "",
                    // this.last_name = "",
                    // this.username = "",
                    // this.password = "",
                    // this.confirm_password = "",
                    // this.email = "",
                    // this.phone_number = ""


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
                            if (errorData.first_name) {
                                console.log('First Name is required.');
                                this.firstErrorMessage = errorData.first_name
                            }
                            if (errorData.last_name) {
                                console.log('Last Name is required.');
                                this.lastErrorMessage = errorData.last_name
                            }
                            if (errorData.email) {
                                console.log('Email is required.');
                                this.emailErrorMessage = errorData.email
                            }
                            if (errorData.username) {
                                console.log('username is required.');
                                this.usernameErrorMessage = errorData.username
                            }
                            if (errorData.phone_number) {
                                console.log('Phone Number is required.');
                                this.phoneErrorMessage = errorData.phone_number
                            }
                            if (errorData.password) {
                                console.log('Password is required.');
                                this.passErrorMessage = errorData.password
                            }
                            if (errorData.confirm_password) {
                                console.log('Confirm Password is required.');
                                this.confirmErrorMessage = errorData.confirm_password
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
        },
        hideErrorMessagePassword() {
            this.showPasswordError = false
        },
        hideErrorMessageFirstName() {
            this.showFirstNameError = false
        },
        hideErrorMessageLastName() {
            this.showLastNameError = false
        },
        hideErrorMessageEmail() {
            this.showEmailError = false
        },
        hideErrorMessageUserName() {
            this.showUserNameNameError = false
        },
        hideErrorMessagePhone() {
            this.showPhoneError = false
        },
        hideErrorMessageConfirm() {
            this.showConfirmError = false
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
    /* margin-top: -80px; */
    /* z-index: 9; */
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