<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue'
export default {
    name: 'AddAdvertisement',
    components: {
        AgentDashboardHeader,
        AgentDashboardFooter,

    },
    data() {
        return {
            sellChecked: true,
            rentChecked: false,
            propertyType: 'home',
            homePropertyVal: 'flat',
            homeProperty: {
                isFlat: true,
                isHouse: false,
                isVilla: false,
                isRoom: false,
                isUpper: false,
                isLower: false,
                isFarm: false,
                isPenthouse: false,
                isApartment: false
            },
            // houseChecked: false,
            // flatChecked: false,
            // upperChecked: false,
            // lowerChecked: false,
            // farmHouseChecked: false,
            // roomChecked: false,
            // penthouseChecked: false,
            // villaChecked: false,
            // apartmentChecked: false,
            residentialChecked: false,
            commercialChecked: false,
            industrialChecked: false,
            agriculturalChecked: false,
            plotFileChecked: false,
            plotFormChecked: false,
            officeChecked: false,
            shopChecked: false,
            wherehouseChecked: false,
            factoryChecked: false,
            buildingChecked: false,
            buyCHecked: true,
            loanCHecked: false,

        };
    },
    methods: {
        logCheckboxValues() {
            // console.log('sell Checked:', this.sellChecked);
            // console.log('rent Checked:', this.rentChecked);
            // console.log('---------------------------')
            // console.log('houseChecked', this.houseChecked);
            // console.log('flatChecked', this.flatChecked);
            // console.log('upperChecked', this.upperChecked);
            // console.log('lowerChecked', this.lowerChecked);
            // console.log('farmHouseChecked', this.farmHouseChecked);
            // console.log('roomChecked', this.roomChecked);
            // console.log('penthouseChecked', this.penthouseChecked);
            // console.log('Villa Checked:', this.villaChecked);
            // console.log('Apartment Checked:', this.apartmentChecked);
            // console.log('---------------------------')
            // console.log('residentialChecked', this.residentialChecked);
            // console.log('commercialChecked', this.commercialChecked);
            // console.log('industrialChecked', this.industrialChecked);
            // console.log('agriculturalChecked', this.agriculturalChecked);
            // console.log('plotFileChecked', this.plotFileChecked);
            // console.log('plotFormChecked', this.plotFormChecked);
            // console.log('---------------------------')
            // console.log('office Checked:', this.officeChecked);
            // console.log('shop Checked:', this.shopChecked);
            // console.log('wherehouse Checked:', this.wherehouseChecked);
            // console.log('factory Checked:', this.factoryChecked);
            // console.log('building Checked', this.buildingChecked)
            // console.log('---------------------------')


            console.log('ProperyVal', this.homePropertyVal)

        },
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
        },
        handleRentView() {
            this.rentChecked = true;
            this.sellChecked = false;
        },
        handleHomeProperty(e) {
            Object.entries(this.homeProperty).forEach(([key, val]) => {
                this.homeProperty[key] = false
            });

            if (e == 'flat') {
                this.homeProperty.isFlat = true;
                this.homePropertyVal = 'flat'
            }

            if (e == 'house') {
                this.homeProperty.isHouse = true;
                this.homePropertyVal = 'house'
            }

            if (e == 'villa') {
                this.homeProperty.isVilla = true;
                this.homePropertyVal = 'villa'
            }

            if (e == 'room') {
                this.homeProperty.isRoom = true;
                this.homePropertyVal = 'room'
            }

            if (e == 'upper') {
                this.homeProperty.isUpper = true;
                this.homePropertyVal = 'upper'
            }

            if (e == 'lower') {
                this.homeProperty.isLower = true;
                this.homePropertyVal = 'lower'
            }

            if (e == 'farm') {
                this.homeProperty.isFarm = true;
                this.homePropertyVal = 'farm'
            }
            if (e == 'penthouse') {
                this.homeProperty.isPenthouse = true;
                this.homePropertyVal = 'penthouse'
            }

        }
    },
}
</script>

<style>
.mainBtnColor {
    color: rgb(255, 69, 0);
    border: 1px solid rgb(255, 69, 0);
    border-radius: 13px;
    padding: 8px 20px 8px 20px;
}
.mainBtnColor:hover {
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    color: darkgray;
}

.ButtonColor {
    border-radius: 15px;
    padding: 8px 20px 8px 20px;
}
.ButtonColor:hover {
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    /* color: darkgray; */
}

.selectedButtonColor {
    background-color: rgb(243, 236, 231);
    border: 1px solid rgb(255, 69, 0);
    color: rgb(255, 69, 0);
}

.unSelectedButtonColor {
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    color: darkgray;
}
</style>

<template>
    <AgentDashboardHeader />
    <div class="container-fluid AgentDashboardHeight">
        <div class="my-2">
            <img src="https://profolio.zameen.com/images/header-add-property.png" class="img-thumbnail" alt="...">
        </div>
        <div class="container my-5">
            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-house-circle-check fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Select Purpose And Location</h5>
                        </div>
                        <div class="col-6">
                            <button
                                :class="sellChecked ? 'selectedButtonColor ButtonColor me-2' : 'unSelectedButtonColor ButtonColor me-2'"
                                v-on:click="handleSellView">
                                <i class="fa-solid fa-house-circle-check"></i> Sell</button>
                            <button
                                :class="rentChecked ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                                v-on:click="handleRentView">
                                <i class="fa-solid fa-house-lock"></i> Rent</button>

                            <div class="my-3">
                                <h4>Select Property Type</h4>
                                <div>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane" type="button" role="tab"
                                                aria-controls="home-tab-pane" aria-selected="true">
                                                Home
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                                aria-controls="profile-tab-pane" aria-selected="false">
                                                Plot</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                                aria-controls="contact-tab-pane" aria-selected="false">

                                                Commercial
                                            </button>
                                        </li>

                                    </ul>
                                    <div class="tab-content mt-4" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                            aria-labelledby="home-tab" tabIndex="0">

                                            <button
                                                :class="homeProperty.isFlat ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                                                v-on:click="handleHomeProperty('flat')">
                                                <i class="fa-solid fa-house-lock"></i> Flat</button>
                                            <button
                                                :class="homeProperty.isHouse ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
                                                v-on:click="handleHomeProperty('house')">
                                                <i class="fa-solid fa-house-lock"></i> House</button>
                                            <button
                                                :class="homeProperty.isVilla ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                                                v-on:click="handleHomeProperty('villa')">
                                                <i class="fa-solid fa-house-lock"></i> Villa</button>
                                            <button
                                                :class="homeProperty.isRoom ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
                                                v-on:click="handleHomeProperty('room')">
                                                <i class="fa-solid fa-house-lock"></i> Room</button>
                                            <button
                                                :class="homeProperty.isUpper ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
                                                v-on:click="handleHomeProperty('upper')">
                                                <i class="fa-solid fa-house-lock"></i> Upper Portion</button>
                                            <button
                                                :class="homeProperty.isLower ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
                                                v-on:click="handleHomeProperty('lower')">
                                                <i class="fa-solid fa-house-lock"></i> Lower Portion</button>
                                            <button
                                                :class="homeProperty.isFarm ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
                                                v-on:click="handleHomeProperty('farm')">
                                                <i class="fa-solid fa-house-lock"></i> Farm House</button>
                                            <button
                                                :class="homeProperty.isPenthouse ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
                                                v-on:click="handleHomeProperty('penthouse')">
                                                <i class="fa-solid fa-house-lock"></i> Penthouse</button>

                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabIndex="0">
                                            <div>
                                                <button class="mainBtnColor">Residential Plot</button>
                                                <button class="mainBtnColor mx-2">Commercial Plot</button>
                                                <button class="mainBtnColor">Industiral Land</button>
                                                <button class="mainBtnColor mt-2">Agricultural Land</button>
                                                <button class="mainBtnColor mx-2">Plot File</button>
                                                <button class="mainBtnColor">Plot Form</button>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                            aria-labelledby="contact-tab" tabIndex="0">
                                            <div>
                                                <button class="mainBtnColor"><i class="fa-solid fa-house"></i> Office</button>
                                                <button class="mainBtnColor mx-2"><i class="fa-solid fa-house"></i> Shop</button>
                                                <button class="mainBtnColor"><i class="fa-solid fa-house"></i> Wherehouse</button>
                                                <button class="mainBtnColor mx-2"><i class="fa-solid fa-house"></i> Factory</button>
                                                <button class="mainBtnColor mt-2"><i class="fa-solid fa-building"></i> Building</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value="1">Karachi</option>
                                        <option value="2">Quetta</option>
                                        <option value="3">Islamabad</option>
                                        <option value="3">Lahore</option>
                                        <option value="3">Faisalabad</option>
                                        <option value="3">Peshawar</option>
                                        <option value="3">Multan</option>
                                    </select>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="abcdef">
                                    <label for="floatingInput">Location</label>
                                </div>
                                <div class="mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951033925!2d74.16958104254596!3d31.482834783890713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690373876865!5m2!1sen!2s"
                                                width="570" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="plot">
                                    <label for="floatingInput">Enter Plot number eg 122 A</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-hand-holding-dollar fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Price & Area</h5>
                        </div>
                        <div class="col-6">
                            <div class="row mb-3">
                                <div class="col-8">
                                    <div class="form-floating">
                                        <input type="number" class="form-control" id="floatingAreaUnit"
                                            placeholder="Enter Area Unit">
                                        <label for="floatingAreaUnit">Enter Area Unit</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="1" selected>Marla</option>
                                        <option value="2">Square Ft</option>
                                        <option value="3">Kanal</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingInput" placeholder="price">
                                <label for="floatingInput">Enter Price</label>
                            </div>
                            <h4>installment available</h4>
                            <div class="mb-3">
                                <label for="exampleAdvanceAmountControlInput1" class="form-label">Advance Amount</label>
                                <input type="number" class="form-control" id="exampleAdvanceAmountControlInput1"
                                    placeholder="22222">
                            </div>
                            <div class="mb-3">
                                <label for="exampleNoInstallmentControlInput1" class="form-label">No of Installments</label>
                                <input type="number" class="form-control" id="exampleNoInstallmentControlInput1"
                                    placeholder="0333">
                            </div>
                            <div class="mb-3">
                                <label for="exampleMonthlyInstallmentControlInput1" class="form-label">Monthly
                                    Installments</label>
                                <input type="number" class="form-control" id="exampleMonthlyInstallmentControlInput1"
                                    placeholder="035">
                            </div>
                            <div class="mb-3">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Ready for
                                        Possession</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-house-circle-exclamation fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Feature & Amenities</h5>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h5>Bedrooms</h5>
                                <div class="mb-2">
                                    <label for="inputBedroom" class="form-label">Enter Bedroom</label>
                                    <input type="number" class="form-control" id="inputBedroom">
                                </div>
                            </div>
                            <div class="mb-3">
                                <h5>Bathrooms</h5>
                                <div class="mb-2">
                                    <label for="inputBathroom" class="form-label">Enter Bathroom</label>
                                    <input type="number" class="form-control" id="inputBathroom">
                                </div>
                            </div>
                            <div class="">
                                <h5>Feature and Amenities</h5>
                                <p class="text-muted">Add additional features e.g. parking spaces, waste disposal, internet
                                    etc.</p>
                                <button class="btn btn-success">Add Amenities</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-clipboard-list fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Property Information</h5>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="inputTitle" class="form-label">Title</label>
                                <input type="text" class="form-control" id="inputTitle">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-images fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Property Images Upload</h5>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Upload image here</label>
                                <input class="form-control" type="file" id="formFile">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-center">
                            <i class="fa-solid fa-address-card fa-2xl" style="color: #2c4e1d;"></i>
                            <h5 class="mt-2">Contact Information</h5>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="exampleMobileControlInput1" class="form-label">Mobile Number</label>
                                <input type="number" class="form-control" id="exampleMobileControlInput1"
                                    placeholder="03332222222">
                            </div>
                            <div class="mb-3">
                                <label for="exampleLandlineControlInput1" class="form-label">Landline Number</label>
                                <input type="number" class="form-control" id="exampleLandlineControlInput1"
                                    placeholder="0812444444">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-1">
                <button class="btn btn-secondary" v-on:click="logCheckboxValues">Add Submit Advertisement</button>
            </div>
        </div>

    </div>
    <AgentDashboardFooter />
</template>
