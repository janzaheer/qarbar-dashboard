<script>

</script>

<style></style>

<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-body pb-0 d-flex justify-content-between">
                        <div>
                            <h4 class="mb-1">Product Sales</h4>
                            <p>Total Earnings of the Month</p>
                            <h3 class="m-0">$ 12,555</h3>
                        </div>
                        <div>
                            <ul>
                                <li class="d-inline-block mr-3"><a class="text-dark" href="#">Day</a></li>
                                <li class="d-inline-block mr-3"><a class="text-dark" href="#">Week</a></li>
                                <li class="d-inline-block"><a class="text-dark" href="#">Month</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="chart-wrapper">
                        <div class="chartjs-size-monitor"
                            style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                            <div class="chartjs-size-monitor-expand"
                                style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                </div>
                            </div>
                            <div class="chartjs-size-monitor-shrink"
                                style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                            </div>
                        </div>
                        <canvas id="chart_widget_2" height="280" style="display: block; width: 1088px; height: 280px;"
                            width="1088" class="chartjs-render-monitor"></canvas>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="w-100 mr-2">
                                <h6>Pixel 2</h6>
                                <div class="progress" style="height: 6px">
                                    <div class="progress-bar bg-danger" style="width: 40%"></div>
                                </div>
                            </div>
                            <div class="ml-2 w-100">
                                <h6>iPhone X</h6>
                                <div class="progress" style="height: 6px">
                                    <div class="progress-bar bg-primary" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>