<template>
    <div class="loginPage">
        <div class="card text-bg-dark">
            <!-- <img src="https://qarbar.netlify.app/assets/img/qarbar-background.jpg" class="card-img" alt="..."> -->
            <div class="card-img loginImage"></div>
            <div class="card-img-overlay">
                <section className="login">
                    <div class="container py-2">
                        <div class="row d-flex justify-content-start align-items-center">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card shadow-2-strong shadow">
                                    <div class="card-body p-5 text-center">
                                        <form ref="LoginForm" @submit.prevent="loginForm" autoComplete="on">
                                            <div class="mb-2">
                                                <RouterLink class="" to="/">
                                                    <img src="../../assets/LoogQ.png" class="" alt=""
                                                        style="height: 30px;">
                                                </RouterLink>
                                            </div>
                                            <div class="mb-5 mt-2">
                                                <h3>Welcome to Qarbar Please login.</h3>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control"
                                                    id="floatingInputUserName validationServer03"
                                                    placeholder='Enter UserName' v-model="this.username"
                                                    @input="handleUserName" @focus="hideErrorMessageUserName"
                                                    :class="v$.username.$error ? 'is-invalid' : ''" />
                                                <label htmlFor="floatingInputUserName" className='ms-3'>User Name</label>
                                                <div v-for="error of v$.username.$errors" class="invalid-feedback"
                                                    :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                                <div class="text-danger" v-if="showUserNameNameError">{{
                                                    this.usernameErrorMessage
                                                }}
                                                </div>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input type="password" class="form-control" id="floatingInputPassword"
                                                    placeholder="password" v-model="this.password"
                                                    @focus="hideErrorMessagePassword" @input="handlePassword"
                                                    name="password" :class="v$.password.$error ? 'is-invalid' : ''">
                                                <label for="floatingInputPassword">Password</label>
                                                <div v-for="error of v$.password.$errors" class="invalid-feedback"
                                                    :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                                <div class="text-danger" v-if="showPasswordError">{{ this.passErrorMessage
                                                }}</div>
                                            </div>
                                            <button class="btn btn-success w-50" type="submit">Login</button>
                                            <!-- <button class="btn btn-danger w-50" @click="logout">Logout</button> -->
                                            <hr class="my-3" />
                                            <RouterLink to='/signUp' class='btn btn-success w-100'>Register Now</RouterLink>
                                            <hr class="my-3" />
                                            <div class="d-flex mt-2">
                                                <button class="btn btn-primary me-2 w-50">Facebook</button>
                                                <button class="btn btn-danger w-50">Google</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
// import the library
import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators';
import { BASE_URL, API_VERSION, LOGIN_POINT } from '../../utils/api';
// import { localStorage } from 'vue';
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            passErrorMessage: '',
            usernameErrorMessage: '',
            showUserNameNameError: true,
            showPasswordError: true,
            isAuthenticated: false, // Add an authentication state variable
            token: '',
            user: '',
            agent_id: '',
            user_id: ''

        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            username: { required, minLength: minLength(5), maxLength: maxLength(20) },
            password: { required, minLength: minLength(8), maxLength: maxLength(19), },
        }
    },
    mounted() {
        if (this.isAuthenticated) {
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', this.user);
            localStorage.setItem('agent_id', this.agent_id)
            localStorage.setItem('user_id', this.user_id)
        }
    },
    methods: {
        setTouched(theModel) {
            if (theModel == this.username || theModel == 'all') { this.v$.username.$touch() }
            if (theModel == this.password || theModel == 'all') { this.v$.password.$touch() }
        },
        handleUserName() {
            this.setTouched('all')
        },
        handlePassword() {
            this.setTouched('all')
        },
        hideErrorMessageUserName() {
            this.showUserNameNameError = false
        },
        hideErrorMessagePassword() {
            this.showPasswordError = false
        },
        async loginForm(e) {
            e.preventDefault()
            const payload = {
                username: this.username,
                password: this.password,
            };
            const headers = {
                'Content-Type': 'application/json', // Indicate that you're sending JSON data
            };
            let finalUrl = BASE_URL + API_VERSION() + LOGIN_POINT()
            await axios.post(finalUrl, payload, { headers })
                .then((response) => {
                    // Handle the response here
                    console.log(response);
                    if (response.status === 200) {
                        // const token = response.data.token;
                        // localStorage.setItem('token', token)
                        this.token = response.data.token;
                        this.user = response.data.user.username;
                        this.agent_id = response.data.user.agent_id;
                        this.user_id = response.data.user.user_id
                        console.log('Token:', this.token);
                        console.log('User:', this.user);
                        console.log('AGent-id', this.agent_id)
                        console.log('user-id', this.user_id)
                        localStorage.setItem('token', this.token);
                        localStorage.setItem('user', this.user);
                        localStorage.setItem('agent_id',this.agent_id)
                        localStorage.setItem('user_id',this.user_id)
                        this.isAuthenticated = true
                        createToast(`login successful!`, {
                            type: 'success',
                            timeout: 8000, // Adjust timeout as needed
                        });
                    }
                    this.$router.push('/');
                    // Reset the form
                    this.$refs.LoginForm.reset();
                    this.successMessage = "login successful!";
                    this.errorMessage = "";
                })
                .catch((error) => {
                    // Handle errors here
                    if (error.response) {
                        if (error.response.status === 400) {
                            const errorData = error.response.data;
                            const newError = error.response
                            console.log('newError', newError)
                            createToast('Unable to log in with provided credentials.', {
                                type: 'danger',
                                timeout: 8000, // Adjust timeout as needed
                            });
                            this.errorMessage = "Registration failed due to validation errors."; // Set error message
                            this.successMessage = ""; // Clear any previous success message
                            if (errorData.username) {
                                this.usernameErrorMessage = errorData.username
                            }
                            if (errorData.password) {
                                this.passErrorMessage = errorData.password
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
        logout() {
            // localStorage.removeItem('token')
            // this.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            createToast(`Logout successful!`, {
                type: 'warning',
                timeout: 8000,
            });
        }
    },
}
</script>

<style>
.loginPage {
    min-height: 100vh;
}

.login {
    margin-top: 140px !important;
    margin-bottom: 100px !important;
    /* height: 900px; */
    min-height: 45vh;
    opacity: 0.9;
    margin-right: 140px;
}

.loginImage {
    background: url("https://qarbar.netlify.app/assets/img/qarbar-background.jpg") top center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    position: relative;
    /* margin-top: -80px; */
    /* z-index: 9; */
}

@media screen and (max-width: 420px) {
    .login {
        margin: 0;
    }

    .loginImage {
        background: url("./Mobile3.png") top center;
        width: 100%;
        height: 100vh;
        background-size: cover;
        position: relative;
    }
}
</style>