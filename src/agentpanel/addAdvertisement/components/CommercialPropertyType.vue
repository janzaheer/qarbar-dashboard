<script>
export default {
    name: 'CommercialPropertyType',
    data() {
        return {
            commercialPropertyVal: 'commercial',
            commercialProperty: {
                isOffice: true,
                isSHop: false,
                isWherehouse: false,
                isFactory: false,
                isBuilding: false
            },
        }
    },
    methods: {
        handleCommercialProperty(e) {
            Object.entries(this.commercialProperty).forEach(([key, val]) => {
                this.commercialProperty[key] = false
            })
            if (e == 'office') {
                this.commercialProperty.isOffice = true;
                this.commercialPropertyVal = 'office'
            }
            if (e == 'shop') {
                this.commercialProperty.isSHop = true;
                this.commercialPropertyVal = 'shop'
            }
            if (e == 'wherehouse') {
                this.commercialProperty.isWherehouse = true;
                this.commercialPropertyVal = 'wherehouse'
            }
            if (e == 'factory') {
                this.commercialProperty.isFactory = true;
                this.commercialPropertyVal = 'factory'
            }
            if (e == 'building') {
                this.commercialProperty.isBuilding = true;
                this.commercialPropertyVal = 'building'
            }
            this.$emit("childDataCommercialPropertyTypeVal", this.commercialPropertyVal)
        },
    },
}
</script>

<style></style>

<template>
    <div>
        <button
            :class="commercialProperty.isOffice ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handleCommercialProperty('office')"><i class="fa-solid fa-house"></i>
            Office</button>
        <button
            :class="commercialProperty.isSHop ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handleCommercialProperty('shop')"><i class="fa-solid fa-house"></i>
            Shop</button>
        <button
            :class="commercialProperty.isWherehouse ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handleCommercialProperty('wherehouse')"><i class="fa-solid fa-house"></i>
            Wherehouse</button>
        <button
            :class="commercialProperty.isFactory ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handleCommercialProperty('factory')"><i class="fa-solid fa-house"></i>
            Factory</button>
        <button
            :class="commercialProperty.isBuilding ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
            v-on:click="handleCommercialProperty('building')"><i class="fa-solid fa-building"></i>
            Building</button>
    </div>
</template>