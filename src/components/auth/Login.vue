<template>
    <div class="loginPage">
        <div class="card text-bg-dark">
            <img src="https://qarbar.netlify.app/assets/img/qarbar-background.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
                <section className="login">
                    <div class="container py-2">
                        <div class="row d-flex justify-content-start align-items-center">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card shadow-2-strong shadow">
                                    <div class="card-body p-5 text-center">
                                        <form ref="LoginForm" @submit.prevent="loginForm" autoComplete="on">
                                            
                                            <div class="mb-5 mt-2">
                                                <h3>Welcome to Qaarbar! Please login.</h3>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput"
                                                    placeholder="email" name='email' v-model="email" required />
                                                <label htmlFor="floatingInput">User@email.com</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input type="password" class="form-control" id="floatingPassword"
                                                    placeholder="Password" name='password' v-model="password" required />
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                            <button class="btn btn-success w-50" type="submit">Login</button>
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
        <!-- <section className=" login">
            <div class="container py-2">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong shadow">
                            <div class="card-body p-5 text-center">
                                <form ref="LoginForm" @submit.prevent="loginForm" autoComplete="on">
                                    <div class="mb-5 mt-2">
                                        <h3>Welcome to Qaarbar! Please login.</h3>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="email" name='email' v-model="email" required />
                                        <label htmlFor="floatingInput">User@email.com</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="password" class="form-control" id="floatingPassword"
                                            placeholder="Password" name='password' v-model="password" required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button class="btn btn-success w-50" type="submit">Login</button>
                                    <hr class="my-3" />
                                    <RouterLink to='/signUp' class='btn btn-success w-100'>Register Now</RouterLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
// import the library
import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css'
// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

export default {
    name: 'Login',
    setup() {
        const toast2 = () => {
            createToast('invalid password',
                {
                    type: 'danger',
                    transition: 'zoom',
                })
        }
        return { toast2 }

    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        toast() {
            createToast('Login Successfully',
                {
                    type: 'success',
                    transition: 'zoom',
                })
        },
        toast2() {
            createToast('invalid password',
                {
                    type: 'danger',
                    transition: 'zoom',
                })
        },
        loginForm() {

            if (this.password.length >= 2) {
                console.log('1111111111111111111111111111111')
            }
            this.$refs.LoginForm.reset();
            this.toast2()
            console.log(this.email, this.password)


        },
        // showToatWarning() {
        //     toast.warning('Wow warning!', {
        //         autoClose: 1000,
        //     });
        // },
        // showToatSuccess() {
        //     toast.success('Wow success!', {
        //         autoClose: 1000,
        //     });
        // },
        // showToatInfo() {
        //     toast.info('Wow info!', {
        //         autoClose: 1000,
        //     });
        // }
    },
    mounted() {

        // console.log(category_name)

        // console.log(category_name)
        // console.log(this.$route.params.id)

    }

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
</style>