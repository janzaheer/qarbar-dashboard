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
            if (e == 'residential') {
                this.plotProperty.isResidential = true;
                this.plotPropertyVal = 'residential'
            }
            if (e == 'commercial') {
                this.plotProperty.isCommercial = true;
                this.plotPropertyVal = 'commercial'
            }
            if (e == 'industiral') {
                this.plotProperty.isIndustrial = true;
                this.plotPropertyVal = 'industiral'
            }
            if (e == 'agricultural') {
                this.plotProperty.isAgricultural = true;
                this.plotPropertyVal = 'agricultural'
            }
            if (e == 'plotFile') {
                this.plotProperty.isPlotFile = true;
                this.plotPropertyVal = 'plotFile'
            }
            if (e == 'plotFarm') {
                this.plotProperty.isPlotFarm = true;
                this.plotPropertyVal = 'plotFarm'
            }
            this.$emit("childDataPlotPropertyTypeVal", this.plotPropertyVal)
            console.log(this.isCHecked)

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
            :class="plotProperty.isResidential ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handlePlotProperty('residential')">Residential Plot</button>
        <button
            :class="plotProperty.isCommercial ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handlePlotProperty('commercial')">Commercial Plot</button>
        <button :class="plotProperty.isIndustrial ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handlePlotProperty('industiral')">Industiral Land</button>
        <button
            :class="plotProperty.isAgricultural ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
            v-on:click="handlePlotProperty('agricultural')">Agricultural
            Land</button>
        <div class="" v-if="this.isCHecked == false">
            <button
                :class="plotProperty.isPlotFile ? 'selectedButtonColor ButtonColor mt-2 mx-2' : 'unSelectedButtonColor ButtonColor mt-2 mx-2'"
                v-on:click="handlePlotProperty('plotFile')">Plot File</button>
            <button
                :class="plotProperty.isPlotFarm ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
                v-on:click="handlePlotProperty('plotFarm')">Plot Farm</button>
        </div>
    </div>
</template>
