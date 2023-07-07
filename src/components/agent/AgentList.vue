<template>
    <Header />
    <div class="container agentPage">
        <div class="border-bottom border-top p-2 sticky-top">
            <div class="row g-1">
                <div class="col">
                    <input type="text" class="form-control" placeholder="search location or agent name ..."
                        aria-label="First name">
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Service needed</option>
                        <option value="1">Residential needed</option>
                        <option value="2">Residential for Sale</option>
                        <option value="3">Residential for Rent</option>
                        <option value="4">Commercial for Rent</option>
                        <option value="5">Commercial for Sale</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Languages</option>
                        <option value="1">Balochi</option>
                        <option value="2">Urdu</option>
                        <option value="3">English</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Nationality</option>
                        <option value="1">Pakistan</option>
                        <option value="2">Turkiye</option>
                        <option value="3">UAE</option>
                    </select>
                </div>
                <div class="col">
                    <button class="btn btn-danger">Find</button>
                </div>
            </div>
        </div>
        <div class="card mb-3 my-5" style="height: 250px;">
            <div class="row g-0">
                <div class="col-8 col-md-8 bg-dark text-white rounded-start" style="height: 256px;">
                    <div class="card-body ">
                        <h5 class="card-title text-wrap">Find your SuperAgent</h5>
                        <p class="card-text text-wrap">The most responsive agents with up-to-date and improved accuracy on
                            the properties you are searching for.</p>
                        <button class="btn btn-light text-info">Learn more</button>
                    </div>
                </div>
                <div class="col-4 col-md-4">
                   
                    <img src="https://www.propertyfinder.ae/dist/common/assets/new-everyday-images/ae/aa0b9a24b1.jvc.webp" class="img-fluid rounded-end w-100" style="height:16rem;"
                        alt="...">
                </div>
            </div>
        </div>
        <div class="row g-4 my-5">
            <div class="d-flex justify-content-between mb-3">
                <div>
                    <h3>{{ userListCount.total }} Matching Agents Found</h3>
                </div>
                <div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="1">SuperAgent</option>
                        <option value="2">Number of Listings</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3" v-for="user in userList" :key="user?.id">

                <RouterLink to="/agentprofile" class="text-decoration-none">
                    <div class="card agentListBox">
                        <img :src="user.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <div class="text-center">
                                <h5 class="card-title">{{ user.username }}</h5>
                                <p class="card-text">Owner Real Estate</p>
                                <span class="badge text-bg-primary card-title"><img
                                        src="../../assets/tropyBadgeIcon/pngegg.png" class="" style="height: 15px;" alt="">
                                    SUPERAGENT</span>
                            </div>
                            <div class="mt-1">
                                <p class="card-text text-muted">NATIONALITY : <span>Pakistan {{ user?.id }}</span></p>
                                <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between text-center">
                                <div class="">
                                    <p>{{ user.age }}</p>
                                    <small class="text-muted">For Rent</small>
                                </div>
                                <div>
                                    <p>{{ user.weight }}</p>
                                    <small class="text-muted">For Sale</small>
                                </div>
                                <div>
                                    <p>{{ user.height }}</p>
                                    <small class="text-muted">Commercial</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>

            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Atif Badini</h5>
                            <p class="card-text">Owner Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>202</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>210</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>150</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Ali Akbar</h5>
                            <p class="card-text">Co Owner Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Punjabi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>200</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>200</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>100</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Shehroz Jan</h5>
                            <p class="card-text">Manager Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>190</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>150</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>70</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Shaid Kha Kan</h5>
                            <p class="card-text">Employee Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>60</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>40</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>21</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Atif Badini</h5>
                            <p class="card-text">Owner Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>202</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>210</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>150</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Ali Akbar</h5>
                            <p class="card-text">Co Owner Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Punjabi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>200</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <!-- <div>
                                <p>200</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <div>
                                <p>100</p>
                                <small class="text-muted">Commercial</small>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Shehroz Jan</h5>
                            <p class="card-text">Manager Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>190</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <!-- <div>
                                <p>150</p>
                                <small class="text-muted">For Sale</small>
                            </div> -->
                            <div>
                                <p>70</p>
                                <small class="text-muted">Commercial</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card agentListBox">
                    <img src="https://github.com/mdo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">Shaid Kha Kan</h5>
                            <p class="card-text">Employee Real Estate</p>
                            <span class="badge text-bg-primary card-title"><img src="../../assets/tropyBadgeIcon/pngegg.png"
                                    class="" style="height: 15px;" alt=""> SUPERAGENT</span>
                        </div>
                        <div class="mt-1">
                            <p class="card-text text-muted">NATIONALITY : <span>Pakistan</span></p>
                            <p class="card-text text-muted">LANGUAGES : <span>English,Urdu,Balochi</span></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between text-center">
                            <div class="">
                                <p>60</p>
                                <small class="text-muted">For Rent</small>
                            </div>
                            <div>
                                <p>40</p>
                                <small class="text-muted">For Sale</small>
                            </div>
                            <!-- <div>
                                <p>21</p>
                                <small class="text-muted">Commercial</small>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-primary me-2">Previous</button>
                <button class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style>
.agentPage {
    min-height: 100vh;
}

.agentListBox {
    cursor: pointer;
}

.agentListBox:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import { RouterLink } from 'vue-router';
import Header from '../common/header/Header.vue';
import Footer from '../common/footer/Footer.vue';

import axios from 'axios';
export default {
    name: 'AgentList',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            userList: [],
            userListCount: []
        };
    },
    methods: {
        async getUsers() {
            let res = await axios.get('https://dummyjson.com/users')
            console.log(res.data)
            // this.list = res.data.products
            this.userList = res.data.users
            this.userListCount = res.data
        },
    },
    mounted() {
        this.getUsers()
    }

};
</script>