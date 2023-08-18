<script>
import AgentDashboardHeader from '../agentDashboardHeader/AgentDashboardHeader.vue';
import AgentDashboardFooter from '../agentDashboardFooter/AgentDashboardFooter.vue';
import HomePropertyType from './components/HomePropertyType.vue';
import PlotPropertyType from './components/PlotPropertyType.vue';
import CommercialPropertyType from './components/CommercialPropertyType.vue';
import PropertyInfo from './components/PropertyInfo.vue';
import ContactInfo from './components/ContactInfo.vue';
import PriceAndArea from './components/PriceAndArea.vue';
export default {
    name: 'AddAdvertisement',
    components: {
        AgentDashboardHeader,
        AgentDashboardFooter,
        HomePropertyType,
        PlotPropertyType,
        CommercialPropertyType,
        PropertyInfo,
        ContactInfo,
        PriceAndArea

    },
    data() {
        return {
            receivedHomePropertyVal: '',
            receivedPlotPropertyVal: '',
            receivedCommercialPropertyVal: '',
            //....................
            sellChecked: true,
            rentChecked: false,
            //....................
            propertyType: 'home',
            //....................
            buyCHecked: true,
            loanCHecked: false,
            //....................
            city: '',
            location: '',
            area: '',
            // Price and Area
            AreaUnit: '',
            UnitTypes: '',
            totalPrice: '',
            // Installment section
            AdvanceAmount: '',
            NofInstallments: '',
            MonthlyInstallments: '',
            ReadyPossession: false,
            // Feature & Amenities
            BedRooms: '',
            BathRooms: '',
            // Property Information
            title: '',
            description: '',
            // Property Images Upload
            image: '',
            // Contact Information
            emailAddress: '',
            mobileNumber: '',
            landlineNumber: '',
            secondaryNumber: '',

        };
    },
    methods: {
        handleHomePropertyVal(data) {
            this.receivedHomePropertyVal = data
        },
        handlePropertyVal(data) {
            this.receivedPlotPropertyVal = data
        },
        handleCommercialPropertyVal(data) {
            this.receivedCommercialPropertyVal = data
        },
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

            console.log('homeType', this.receivedHomePropertyVal)
            // console.log('commercialPropertyVal', this.commercialPropertyVal)

        },
        handleSellView() {
            this.sellChecked = true;
            this.rentChecked = false;
        },
        handleRentView() {
            this.rentChecked = true;
            this.sellChecked = false;
        },
    },
}
</script>

<style>
@import './Advertisement.css';
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
                    <div class="row d-flex justify-content-around">
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
                                            <HomePropertyType @childDataHomePropertyTypeVal="handleHomePropertyVal" />
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                            aria-labelledby="profile-tab" tabIndex="0">
                                            <div>
                                                <PlotPropertyType @childDataPlotPropertyTypeVal="handlePropertyVal" />
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                            aria-labelledby="contact-tab" tabIndex="0">
                                            <div>
                                                <CommercialPropertyType @childDataCommercialPropertyTypeVal="handleCommercialPropertyVal" />
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
                <PriceAndArea />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-around">
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
                <PropertyInfo />
            </div>

            <div class="card shadow-sm p-3 mb-3 bg-body rounded">
                <div class="card-body ">
                    <div class="row d-flex justify-content-around">
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
                <ContactInfo />
            </div>
            <div class="my-1">
                <button class="adversBtn" v-on:click="logCheckboxValues">Add Submit Advertisement</button>
            </div>
        </div>

    </div>
    <AgentDashboardFooter />
</template>
