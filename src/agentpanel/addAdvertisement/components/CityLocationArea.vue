<script>
export default {
    name: 'CityLocationArea',
    props: {

    },
    data() {
        return {
            selectCity: '',
            selectLocation: '',
            selectArea:''
        }
    },
    methods: {
        handleSelectCity() {
            //  this.selectCity = val;
            // this.selectCity.push(val)
            this.$emit("ChildToParentSelectedCity", this.selectCity)
        },
        handleLocation(){
            this.$emit("ChildToParentSelectLocation", this.selectLocation)
        },
        handleArea(){
            this.$emit("ChildToParentSelectArea", this.selectLocation)
        }
    },
}
</script>

<style></style>

<template>
    <div>
        <div class="my-4">
            <label for="form-select">Select City</label>
            <select class="form-select" aria-label="Default select example" v-model="selectCity" v-on:change="handleSelectCity">
                <!-- <option selected>Select City</option> -->
                <option value="Karachi">Karachi</option>
                <option value="Quetta">Quetta</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore" >Lahore</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Peshawar" >Peshawar</option>
                <option value="Multan">Multan</option>
            </select>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="abcdef" v-model="selectLocation" v-on:change="handleLocation">
            <label for="floatingInput">Location</label>
        </div>
        <div class="mb-3">
            <div class="card">
                <div class="card-body">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951033925!2d74.16958104254596!3d31.482834783890713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690373876865!5m2!1sen!2s"
                        width="570" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="plot" v-model="selectArea" v-on:change="handleArea">
            <label for="floatingInput">Enter Plot number eg 122 A</label>
        </div>
    </div>
</template>