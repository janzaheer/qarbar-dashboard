<script>
import axios from 'axios';
import { BASE_URL, API_VERSION, PROPERTY_END_POINT, PROPERTY_DETAIL_END_POINT } from '../../utils/api';
export default {
    name: 'UpdateAdvertisement',
    components: {

    },
    data() {
        return {
            agent_id: '',
            user_id: '',
            updateForm: {
                title: ''
            }

        };
    },
    methods: {
        async getProperty() {
            try {
                let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + this.$route.params.id + `${PROPERTY_DETAIL_END_POINT()}`
                let res = await axios.get(finalUrl)
                console.log('update', res.data)
                this.updateForm = res.data
            } catch (error) {
                console.log(error)
            }

        },
        async update() {
            console.log('update-data', this.title.title)
        },
    },
    mounted() {
        console.log(this.$route.params.id)
        console.log(this.$route.params.id)
        this.agent_id = localStorage.getItem('agent_id');
        this.user_id = localStorage.getItem('user_id')
        this.getProperty();
    }
}
</script>

<style></style>

<template>
    <div>
        <h1>Update {{ this.$route.params.id }}</h1>
        <h4>agent_id {{ this.agent_id }}</h4>
        <h4>user {{ this.user_id }}</h4>
        <input type="text" class="form-control" name="title" v-model="updateForm.title" id="">
        <button v-on:click="update">update</button>
    </div>
</template>