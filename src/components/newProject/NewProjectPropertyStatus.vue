<script>
export default{
    name: 'NewProjectPropertyStatus',
    data(){
        return{
            selectedType:'',
            selectedPropertyType: '',
        }
    },
    props:{

    },
    methods:{
        handlePropertyTypes(val){
            this.selectedType = val
            this.selectedPropertyType = val
            console.log('prop-type',this.selectedPropertyType)
            this.$emit("childToParentPropertyStatus", this.selectedPropertyType);
        },
        ValueFunction() {
            if (this.selectedPropertyType) {
                return this.selectedPropertyType
            }
            return 'Property Status'
        },
    }
}
</script>

<style>
.dropdown-item.active {
    background-color: orangered !important;
}
</style>

<template>
     <div class="">
            <button type="button" class="mainDropBtn dropdown-toggle w-100" data-bs-toggle="dropdown"
                aria-expanded="false">{{ ValueFunction() }}</button>
            <ul class="dropdown-menu propertyTypeDp">
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'upcoming' }" v-on:click="handlePropertyTypes('upcoming')">upcoming</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'underconstruction' }" v-on:click="handlePropertyTypes('underconstruction')">underConstruction</li>
                <li class="dropdown-item" v-bind:class="{ 'active': selectedType === 'completed' }" v-on:click="handlePropertyTypes('completed')">completed</li>
            </ul>
        </div>
</template>