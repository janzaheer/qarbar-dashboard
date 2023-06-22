<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container headerCLass">
                <div class="d-flex justify-content-end">
                    <RouterLink class="navbar-brand" to="/agentpanel">
                        <img src="../../../assets//logo.svg" class="" alt="" style="height: 30px;">
                    </RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="#">Advertise</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="#">Tools</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="#">Agent Guide</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="#">Resources</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="#">Awards</RouterLink>
                            </li>

                            <li class="nav-item">
                                <RouterLink class="btn btn-outline-warning btn-sm mt-1" to="/login" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Get Started</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Submit your details and we’ll get in touch</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputCompany" class="form-label">Company Name *</label>
                                <input type="text" class="form-control" id="inputCompany" placeholder="enter your Company Name">
                            </div>
                            <div class="col-md-6">
                                <label for="inputFirstName" class="form-label">First Name *</label>
                                <input type="text" class="form-control" id="inputFirstName">
                            </div>
                            <div class="col-md-6">
                                <label for="inputLastName" class="form-label">Last Name *</label>
                                <input type="text" class="form-control" id="inputLastName">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email *</label>
                                <input type="email" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-md-6">
                                <label for="inputNumber4" class="form-label">Phone *</label>
                                <input type="number" class="form-control" id="inputNumber4">
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City *</label>
                                <select id="inputCity" class="form-select">
                                    <option selected></option>
                                    <option>Quetta</option>
                                    <option>Noshki</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Karachi</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputJob" class="form-label">Job Title *</label>
                                <select id="inputJob" class="form-select">
                                    <option selected></option>
                                    <option>CEO</option>
                                    <option>Manager</option>
                                    <option>Co-Manager</option>
                                    <option>Sales-Manager</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        I hereby accept the Terms & Conditions and consent to my information being collected, processed and stored for purposes of receiving marketing communication from Qaarbar. More details about how we process and store your information are included in our Privacy Policy. You can customize your settings at any time in your Communication Preferences Center.
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-danger p-3" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <p>To advertise on Qaarbar you should be a real estate broker or developer and have a registered office.</p>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
/* .header {
    margin-bottom: 80px;
} */
.headerCLass {
    display: flex !important;
    flex-wrap: inherit !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>