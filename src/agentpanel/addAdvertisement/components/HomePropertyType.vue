<script>
export default {
    name: 'HomePropertyType',
    props: {

    },
    data() {
        return {
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
        }
    },
    methods: {
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

            if (e == 'upper_portion') {
                this.homeProperty.isUpper = true;
                this.homePropertyVal = 'upper_portion'
            }

            if (e == 'lower_portion') {
                this.homeProperty.isLower = true;
                this.homePropertyVal = 'lower_portion'
            }

            if (e == 'farm_house') {
                this.homeProperty.isFarm = true;
                this.homePropertyVal = 'farm_house'
            }
            if (e == 'pent_house') {
                this.homeProperty.isPenthouse = true;
                this.homePropertyVal = 'pent_house'
            }
            this.$emit("childDataHomePropertyTypeVal", this.homePropertyVal)

        },

    },
}
</script>

<style></style>

<template>
    <div>
        <button :class="homeProperty.isFlat ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handleHomeProperty('flat')">
            <i class="fa-solid fa-house-lock"></i> Flat</button>
        <button
            :class="homeProperty.isHouse ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handleHomeProperty('house')">
            <i class="fa-solid fa-house-lock"></i> House</button>
        <button :class="homeProperty.isVilla ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handleHomeProperty('villa')">
            <i class="fa-solid fa-house-lock"></i> Villa</button>
        <button
            :class="homeProperty.isRoom ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handleHomeProperty('room')">
            <i class="fa-solid fa-house-lock"></i> Room</button>
        <button
            :class="homeProperty.isUpper ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
            v-on:click="handleHomeProperty('upper_portion')">
            <i class="fa-solid fa-house-lock"></i> Upper Portion</button>
        <button
            :class="homeProperty.isLower ? 'selectedButtonColor ButtonColor mx-2' : 'unSelectedButtonColor ButtonColor mx-2'"
            v-on:click="handleHomeProperty('lower_portion')">
            <i class="fa-solid fa-house-lock"></i> Lower Portion</button>
        <button :class="homeProperty.isFarm ? 'selectedButtonColor ButtonColor' : 'unSelectedButtonColor ButtonColor'"
            v-on:click="handleHomeProperty('farm_house')">
            <i class="fa-solid fa-house-lock"></i> Farm House</button>
        <button
            :class="homeProperty.isPenthouse ? 'selectedButtonColor ButtonColor mt-2' : 'unSelectedButtonColor ButtonColor mt-2'"
            v-on:click="handleHomeProperty('pent_house')">
            <i class="fa-solid fa-house-lock"></i> Penthouse</button>
    </div>
</template>