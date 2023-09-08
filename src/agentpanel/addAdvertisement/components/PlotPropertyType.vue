<script>
export default {
    name: 'PlotPropertyType',
    props: {
        isCHecked: Boolean,
    },
    data() {
        return {
            plotPropertyVal: 'plot',
            plotProperty: {
                isResidential: true,
                isCommercial: false,
                isIndustrial: false,
                isAgricultural: false,
                isPlotFarm: false,
                isPlotFile: false
            },
        }
    },
    methods: {
        handlePlotProperty(e) {
            Object.entries(this.plotProperty).forEach(([key, val]) => {
                this.plotProperty[key] = false
            })
            if (e == 'residential_plot') {
                this.plotProperty.isResidential = true;
                this.plotPropertyVal = 'residential_plot'
            }
            if (e == 'commercial_plot') {
                this.plotProperty.isCommercial = true;
                this.plotPropertyVal = 'commercial_plot'
            }
            if (e == 'industrial_land') {
                this.plotProperty.isIndustrial = true;
                this.plotPropertyVal = 'industrial_land'
            }
            if (e == 'agricultural_land') {
                this.plotProperty.isAgricultural = true;
                this.plotPropertyVal = 'agricultural_land'
            }
            if (e == 'plot_file') {
                this.plotProperty.isPlotFile = true;
                this.plotPropertyVal = 'plot_file'
            }
            if (e == 'plot_form') {
                this.plotProperty.isPlotFarm = true;
                this.plotPropertyVal = 'plot_form'
            }
            this.$emit("childDataPlotPropertyTypeVal", this.plotPropertyVal)
            console.log('p-type',this.plotPropertyVal)

        },
    },
    mounted() {


    }
}
</script>

<style></style>

<template>
    <div>
        <button
            :class="plotProperty.isResidential ? 'selectedButtonColor ButtonColor ms-2' : 'unSelectedButtonColor ButtonColor ms-2'"
            v-on:click="handlePlotProperty('residential_plot')">Residential Plot</button>
        <button
            :class="plotProperty.isCommercial ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handlePlotProperty('commercial_plot')">Commercial Plot</button>
        <button :class="plotProperty.isIndustrial ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handlePlotProperty('industrial_land')">Industiral Land</button>
        <button
            :class="plotProperty.isAgricultural ? 'selectedButtonColor ButtonColor mt-2 mx-2' : 'unSelectedButtonColor ButtonColor mt-2 ms-2'"
            v-on:click="handlePlotProperty('agricultural_land')">Agricultural
            Land</button>
        <div class="" v-if="this.isCHecked == false">
            <button
                :class="plotProperty.isPlotFile ? 'selectedButtonColor ButtonColor mt-2 mx-2' : 'unSelectedButtonColor ButtonColor mt-2 mx-2'"
                v-on:click="handlePlotProperty('plot_file')">Plot File</button>
            <button
                :class="plotProperty.isPlotFarm ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
                v-on:click="handlePlotProperty('plot_form')">Plot Farm</button>
        </div>
    </div>
</template>
