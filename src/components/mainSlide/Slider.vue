<template>
    <div>
        <div class="card text-dark">
            <img src="../../assets/slider/s1.webp" class="card-img imge-card d-block w-100" alt="...">
            <div class="card-img-overlay ">
                <div class="sliderTop">
                    <div class="d-flex justify-content-center align-items-center my-md-1">
                        <h1 class="card-title text-white">Find Every Home Here</h1>
                    </div>
                    <MainDropdown />
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import MainDropdown from '../mainDropdown/MainDropdown.vue'
export default {
    name: 'Slider',
    components: {
        MainDropdown
    }
}
</script>
<style>
.sliderTop {
    margin-top: 100px;
}

@media only screen and (max-width: 1380px) {
    .imge-card{
        height: 400px !important;
    }
}

@media only screen and (max-width: 1024px) {
    .sliderTop {
        margin-top: 5px !important;
    }
    .imge-card{
        height: 300px !important;
    }
}
@media only screen and (max-width: 720px) {
    .imge-card{
        height: 300px !important;
    }
}
</style>