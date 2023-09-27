<script>
export default {
    name: 'DeveloperName',
    props: {
        newProjectDetails: Object
    }
}
</script>

<style></style>

<template>
    <div class="row text-center">
        <div class="col-md-6">
            <div class="card shadow-sm bg-light">
                <div class="card-body">
                    <div class="my-3"><i class="fa-solid fa-cannabis fa-2xl"></i></div>
                    <h6 class="my-2">Developer</h6>
                    <h4>{{ newProjectDetails?.developer_name }}</h4>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card shadow-sm bg-light">
                <div class="card-body">
                    <div class="my-3"><i class="fa-regular fa-calendar-check fa-2xl"></i></div>
                    <h6 class="my-2">Delivery Date</h6>
                    <h4>{{ newProjectDetails?.delivery_date }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>
