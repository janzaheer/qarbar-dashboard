<script>
import Listing from './Listing.vue'
export default{
    name: 'BuyPage',
    components:{
        Listing
    },
    data(){
        return {
            typea:''
        }
    },
    methods:{
        async getData(){
             const queryParams = new URLSearchParams(window.location.search);
            // let category_name = queryParams.get("rent_sale_type");
            let category_name = queryParams.get("params");
            // this.typea = category_name
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