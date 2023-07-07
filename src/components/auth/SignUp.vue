<template>
    <div class="container signUp">
        <h4>Sign Up</h4>
        <section className=" login">
            <div className="card shadow-2-strong shadow">
                <div className="card-body p-5 text-center">
                    <div className="mb-5">
                        <img className="mb-1" src='' alt='' width='' />
                        <h3>Welcome to Qaarbar! Please Register Now.</h3>
                    </div>
                    <form className="row g-3 " onSubmit={handleRegister}>
                        <div className="col-md-6 form-floating">
                            <input type="text" className="form-control" id="floatingInputFirstName validationServer01"
                                name='first_name' placeholder='Enter FirstName' required />
                            <label htmlFor="floatingInputFirstName" className='ms-3'>FirstName</label>
                        </div>
                        <div className="col-md-6 form-floating">
                            <input type="text" className="form-control" id="floatingInputLastName validationServer02"
                                name='last_name' placeholder='Enter LastName' required />
                            <label htmlFor="floatingInputLastName" className='ms-3'>Last Name</label>
                        </div>
                        <div className="col-md-4 form-floating">
                            <input type="text" className="form-control" id="floatingInputUserName validationServer03"
                                placeholder='Enter UserName' required />
                            <label htmlFor="floatingInputUserName" className='ms-3'>User Name</label>
                        </div>
                        <div className="col-md-4 form-floating">
                            <input type="email" className="form-control" id="floatingInputUserEmail validationServer07"
                                placeholder='Enter email' name='email' required />
                            <label htmlFor="floatingInputUserEmail" className='ms-3'>User Email</label>
                        </div>
                        <div className="col-md-4 form-floating">
                            <input type="number" className="form-control" id="floatingInputPhoneNumber validationServer04"
                                placeholder='PhoneNumber' required />
                            <label htmlFor="floatingInputPhoneNumber" className='ms-3'>Phone Number</label>
                        </div>
                        <div className="col-md-6 form-floating">
                            <input type="password" className="form-control" id="floatingInputPassword validationServer05"
                                placeholder='Enter Password' name='password' required />
                            <label htmlFor="floatingInputPassword" className='ms-3'>Password</label>
                        </div>
                        <div className="col-md-6 form-floating">
                            <input type="password" className="form-control"
                                id="floatingInputConfirmPassword validationServer06" placeholder='Enter ConfirmPassword'
                                name='confirm_password' required />
                            <label htmlFor="floatingInputConfirmPassword" className='ms-3'>Confirm Password</label>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success mt-2" type="submit">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

</script>

<style>
.signUp {
    min-height: 100vh;
}
</style>