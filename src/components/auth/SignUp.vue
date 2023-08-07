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
                                <div className="mb-5">
                                    <h3>Welcome to Qaarbar! Please Register Now.</h3>
                                </div>
                                <form className="row g-2 " onSubmit={handleRegister}>
                                    <div className="col-md-6 form-floating">
                                        <input type="text" className="form-control"
                                            id="floatingInputFirstName validationServer01" name='first_name'
                                            placeholder='Enter FirstName' required />
                                        <label htmlFor="floatingInputFirstName" className='ms-3'>FirstName</label>
                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="text" className="form-control"
                                            id="floatingInputLastName validationServer02" name='last_name'
                                            placeholder='Enter LastName' required />
                                        <label htmlFor="floatingInputLastName" className='ms-3'>Last Name</label>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="text" className="form-control"
                                            id="floatingInputUserName validationServer03" placeholder='Enter UserName'
                                            required />
                                        <label htmlFor="floatingInputUserName" className='ms-3'>User Name</label>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="email" className="form-control"
                                            id="floatingInputUserEmail validationServer07" placeholder='Enter email'
                                            name='email' required />
                                        <label htmlFor="floatingInputUserEmail" className='ms-3'>User Email</label>
                                    </div>
                                    <div className="col-md-4 form-floating">
                                        <input type="number" className="form-control"
                                            id="floatingInputPhoneNumber validationServer04" placeholder='PhoneNumber'
                                            required />
                                        <label htmlFor="floatingInputPhoneNumber" className='ms-3'>Phone Number</label>
                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="password" className="form-control"
                                            id="floatingInputPassword validationServer05" placeholder='Enter Password'
                                            name='password' required />
                                        <label htmlFor="floatingInputPassword" className='ms-3'>Password</label>
                                    </div>
                                    <div className="col-md-6 form-floating">
                                        <input type="password" className="form-control"
                                            id="floatingInputConfirmPassword validationServer06"
                                            placeholder='Enter ConfirmPassword' name='confirm_password' required />
                                        <label htmlFor="floatingInputConfirmPassword" className='ms-3'>Confirm
                                            Password</label>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-warning mt-2" type="submit">Register Now</button>
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
}</style>