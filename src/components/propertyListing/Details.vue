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
                                        <th scope="col">property type</th>

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
                                        <td>{{ productDetail?.area?.area }}</td>
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
                                        <th scope="col">{{ productDetail?.property_type?.size_sqf }} {{
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
}
</script>