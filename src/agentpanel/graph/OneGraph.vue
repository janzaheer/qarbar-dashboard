<script>
import GraphLine from 'vue-graph/src/components/line';
import axios from 'axios';
export default {
    name: 'OneGraph',
    components: {
        GraphLine,
    },
    data() {
        return {
            // names: ['MS', 'Apple', 'Google'],
            // values: [
            //     [10, 5, 5, 5],
            //     [40, 10, 10, 10],
            //     [30, 30, 30, 30]
            // ],
            names: [],   // Will be populated with month names
            values: [],  // Will be populated with data for each property type (total, rent, sale)
            token: '',
            tooltipNames: ['Total', 'Rent', 'Sale'],
        }
    },
    methods: {
        // async getAgentGraphNumber() {
        //     this.token = localStorage.getItem('token');
        //     let finalURL = `https://apidev.qarbar.com/api/v1/properties/agent-graph/`
        //    await axios.get(finalURL, {
        //         headers: {
        //             'Content-Type': "application/json",
        //             Authorization: `Token ${this.token}`
        //         }
        //     }).then((res) => {

        //         console.log('graph',res.data)
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // }
        async getAgentGraphNumber() {
            this.token = localStorage.getItem('token');
            let finalURL = `https://apidev.qarbar.com/api/v1/properties/agent-graph/`;

            try {
                const response = await axios.get(finalURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${this.token}`
                    }
                });

                // Extract data from the API response
                const apiData = response.data.month_counts;

                // Extract month names and data for each property type
                const monthNames = Object.keys(apiData);
                const totalData = monthNames.map(month => apiData[month].total_properties_sold);
                const rentData = monthNames.map(month => apiData[month].rent_properties_sold);
                const saleData = monthNames.map(month => apiData[month].sale_properties_sold);

                // Update the component's data
                this.names = monthNames;
                this.values = [totalData, rentData, saleData];

                console.log('graph', response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getAgentGraphNumber();
    }
}
</script>

<style></style>

<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-body pb-0 d-flex justify-content-between">
                        <div>
                            <h4 class="mb-1">Properties Reports</h4>
                        </div>
                        <div>
                            <ul>
                                <li class="d-inline-block"><a class="text-dark" href="#">Monthly Reports</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="">
                        <graph-line width="100%" :height="400" :shape="'normal'" :axis-min="0" :axis-max="50"
                            :axis-full-mode="true" :labels="names" :names="['Total', 'Rent', 'Sale']" :values="values"
                            :active-event="'click'">
                            <note :text="'Line Chart'"></note>
                            <tooltip :names="tooltipNames"></tooltip>
                            <legends :names="['Total', 'Rent', 'Sale']"></legends>
                            <guideline :tooltip-y="true"></guideline>
                        </graph-line>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>