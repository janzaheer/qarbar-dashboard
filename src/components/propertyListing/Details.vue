<template>
    <div>
        <div class="card text-bg-light mb-3 shadow-sm">
            <div class="card-header">Details</div>
            <div class="card-body">
                <div class="row g-1">
                    <div class="col-6">
                        <div class="card-body">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col"> {{ handlePropertyType(productDetail.property_type?.home_types, productDetail.property_type?.plot_types, productDetail.property_type?.commercial_types) }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">price</th>
                                        <td>{{ productDetail?.total_price }} PKR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bath's</th>
                                        <td>{{ productDetail?.amenties?.bathrooms }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>{{ productDetail?.property_location?.city_area }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Area</th>
                                        <th scope="col">{{ productDetail?.property_type?.size }} {{
                                            productDetail?.property_type?.unit_types }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Bed's</th>
                                        <td>{{ productDetail?.amenties?.bedrooms }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Listed</th>
                                        <!-- <td>{{ moment(productDetail?.updated_at).startOf(productDetail?.updated_at).fromNow()}}</td> -->
                                        <td>{{ moment(productDetail?.created_at).startOf('hour').fromNow()
                                        }} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Purpose</th>
                                        <td>For {{ productDetail.rent_sale_type }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h5>Description</h5>
                <p>{{ productDetail?.description }}</p>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
import moment from 'moment';
export default {
    name: 'Details',
    props: {
        productDetail: Object
    },
    created: function () {
        this.moment = moment;
    },
    methods:{
        handlePropertyType(home_types, plot_types, commercial_types) {
            if (home_types == 'flat') {
                return 'Flat'
            }
            if (home_types == 'house') {
                return 'House'
            }
            if (home_types == 'villa') {
                return 'Villa'
            }
            if (home_types == 'room') {
                return 'Room'
            }
            if (home_types == 'upper_portion') {
                return 'Upper-Portion'
            }
            if (home_types == 'lower_portion') {
                return 'Lower-Portion'
            }
            if (home_types == 'farm_house') {
                return 'Farm-House'
            }
            if (home_types == 'pent_house') {
                return 'PentHouse'
            }
            if (commercial_types == 'office') {
                return 'Office'
            }
            if (commercial_types == 'shop') {
                return 'Shop'
            }
            if (commercial_types == 'warehouse') {
                return 'Wardrobe'
            }
            if (commercial_types == 'building') {
                return 'Building'
            }
            if (commercial_types == 'factory') {
                return 'Factory'
            }
            if (plot_types == 'residetial_plot') {
                return 'Residential-Plot'
            }
            if (plot_types == 'commercial_plot') {
                return 'Commercial-Plot'
            }
            if (plot_types == 'industrial_land') {
                return 'Industrial-Land'
            }
            if (plot_types == 'agricultural_land') {
                return 'Agricultural-Land'
            }
            if (plot_types == 'plot_file') {
                return 'Plot-File'
            }
            if (plot_types == 'plot_form') {
                return 'Plot-Form'
            }
            return 'Unknown';
        }
    }
}
</script>