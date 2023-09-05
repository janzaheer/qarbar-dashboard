<script>
import Listing from './Listing.vue'
export default{
    name: 'RentPage',
    components:{
        Listing
    },
    methods:{
        async getData(){
             const queryParams = new URLSearchParams(window.location.search);
            let category_name = queryParams.get("params");
            console.log('click-type',category_name)
        }
    }
}
</script>

<style>

</style>

<template>
    <div>
        <Listing />
    </div>
</template>